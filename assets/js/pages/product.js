/**
 * KAYAN Luxury Fashion — Product Detail Page (PDP) Controller
 * Handles image zoom lens, thumbnail switching, size calculation modal,
 * stock status, reactive cart addition, delivery countdown, and related items.
 */

import { products } from '../data/products.js';
import { sampleReviews, ugcPosts } from '../data/reviews.js';
import { store } from '../core/store.js';
import { i18n } from '../core/i18n.js';
import { events } from '../core/events.js';
import { resolveUrl } from '../core/router-helpers.js';
import { createProductCardHtml, bindProductCardEvents, arabicNameMap } from '../components/product-card.js';
import { toastSystem } from '../components/toast.js';

let currentProduct = null;
let selectedColorIndex = 0;
let selectedSize = null;
let currentQuantity = 1;
let currentImageIndex = 0;

export function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');
  const id = urlParams.get('id');

  if (slug) {
    currentProduct = products.find(p => p.slug === slug);
  } else if (id) {
    currentProduct = products.find(p => p.id === id);
  }

  // Fallback to first product if invalid or missing
  if (!currentProduct) {
    currentProduct = products[0];
  }

  // Record into recently viewed
  store.addRecentlyViewed(currentProduct);

  // Set default size
  if (currentProduct.sizes && currentProduct.sizes.length > 0) {
    selectedSize = currentProduct.sizes[0].size;
  }

  // Update document title and meta description
  document.title = `${currentProduct.name} — KAYAN Atelier`;

  // Render components
  renderBreadcrumbs();
  renderGallery();
  renderProductDetails();
  renderAccordions();
  renderReviewsSection();
  renderRelatedProducts();
  initDeliveryCountdown();
  initStickyMobileBar();

  // Price refresh hook
  window.refreshPagePrices = () => {
    updatePricesUI();
    renderRelatedProducts();
  };

  // Immediate language switch hook (100% Arabic without refresh)
  events.on('i18n:changed', () => {
    renderBreadcrumbs();
    renderGallery();
    renderProductDetails();
    renderAccordions();
    renderReviewsSection();
    renderRelatedProducts();
    initStickyMobileBar();
  });
}

function renderBreadcrumbs() {
  const el = document.querySelector('#pdp-breadcrumbs-mount');
  if (!el) return;

  const isAr = store.getState().language === 'ar';
  const deptTranslations = {
    women: 'النساء',
    men: 'الرجال',
    kids: 'الأطفال',
    beauty: 'الجمال والعطور',
    home: 'المنزل والديكور'
  };
  const deptLabel = isAr ? (deptTranslations[currentProduct.department] || currentProduct.department) : currentProduct.department;
  const prodLabel = isAr ? (currentProduct.nameAr || arabicNameMap[currentProduct.name] || currentProduct.name) : currentProduct.name;

  el.innerHTML = `
    <a href="${resolveUrl('index.html')}">${isAr ? 'الأتيليه' : 'Atelier'}</a>
    <span>/</span>
    <a href="${resolveUrl(`pages/shop.html?dept=${currentProduct.department}`)}" style="text-transform:capitalize;">${deptLabel}</a>
    <span>/</span>
    <span style="color:var(--color-text);">${prodLabel}</span>
  `;
}

const pdpFallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="100%" height="100%" fill="%23141416"/><text x="50%" y="46%" font-family="sans-serif" font-size="28" font-weight="700" fill="%23D4AF37" text-anchor="middle" letter-spacing="4">KAYAN ATELIER</text><text x="50%" y="52%" font-family="sans-serif" font-size="14" fill="%238E8E93" text-anchor="middle" letter-spacing="1">HAUTE COUTURE</text></svg>`;

function renderGallery() {
  const mainImgWrap = document.querySelector('#pdp-main-image-wrap');
  const thumbWrap = document.querySelector('#pdp-thumbnails-mount');
  const badgeWrap = document.querySelector('#pdp-badges-mount');

  if (!mainImgWrap || !thumbWrap) return;

  const images = (currentProduct.images && currentProduct.images.length > 0)
    ? currentProduct.images
    : (currentProduct.image ? [currentProduct.image] : [pdpFallbackSvg]);

  const isAr = store.getState().language === 'ar';
  const displayName = isAr
    ? (currentProduct.nameAr || arabicNameMap[currentProduct.name] || currentProduct.name)
    : currentProduct.name;

  // Render Badges safely without throwing TypeError if badges is string
  const badgesList = Array.isArray(currentProduct.badges)
    ? currentProduct.badges
    : (typeof currentProduct.badges === 'string' && currentProduct.badges.trim() ? [currentProduct.badges] : []);

  if (badgeWrap) {
    badgeWrap.innerHTML = badgesList
      .map(b => {
        const str = String(b || '');
        let cls = 'badge-new';
        let label = str;
        const lower = str.toLowerCase();
        if (lower.includes('sale') || lower.includes('archive')) {
          cls = 'badge-sale';
          if (isAr) label = 'عرض أرشيفي';
        } else if (lower.includes('exclusive')) {
          cls = 'badge-exclusive';
          if (isAr) label = 'حصري إلكترونياً';
        } else if (lower.includes('eco')) {
          cls = 'badge-eco';
          if (isAr) label = 'صناعة واعية';
        } else if (lower.includes('new')) {
          if (isAr) label = 'وصل حديثاً';
        } else if (lower.includes('best') || lower.includes('seller')) {
          if (isAr) label = 'الأكثر طلباً';
        }
        return `<span class="product-badge ${cls}">${label}</span>`;
      })
      .join('');
  }

  // Render Thumbnails with fallback onerror
  thumbWrap.innerHTML = images
    .map(
      (img, i) => `
    <div class="pdp-thumb-item ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <img src="${img}" alt="${displayName} Angle ${i + 1}" loading="lazy" onerror="this.onerror=null; this.src='${pdpFallbackSvg}';"/>
    </div>
  `
    )
    .join('');

  // Initial main image with reliable assignment and fallback onerror
  const mainImg = mainImgWrap.querySelector('.pdp-main-img');
  if (mainImg) {
    mainImg.src = images[0] || pdpFallbackSvg;
    mainImg.alt = displayName;
    mainImg.onerror = function() {
      this.onerror = null;
      this.src = pdpFallbackSvg;
    };
  }

  // Thumbnail click handlers
  thumbWrap.querySelectorAll('.pdp-thumb-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.idx, 10);
      switchGalleryImage(idx);
    });
  });

  // Zoom / Magnifier Effect
  setupImageZoom(mainImgWrap, mainImg);
}

function switchGalleryImage(idx) {
  currentImageIndex = idx;
  const images = (currentProduct.images && currentProduct.images.length > 0)
    ? currentProduct.images
    : [pdpFallbackSvg];
  const mainImg = document.querySelector('#pdp-main-image-wrap .pdp-main-img');
  const thumbs = document.querySelectorAll('#pdp-thumbnails-mount .pdp-thumb-item');

  if (mainImg && images[idx]) {
    if (window.gsap) {
      window.gsap.to(mainImg, {
        opacity: 0.2,
        duration: 0.15,
        onComplete: () => {
          mainImg.src = images[idx];
          window.gsap.to(mainImg, { opacity: 1, duration: 0.25 });
        }
      });
    } else {
      mainImg.src = images[idx];
    }
  }

  thumbs.forEach(t => t.classList.remove('active'));
  if (thumbs[idx]) thumbs[idx].classList.add('active');
}

function setupImageZoom(wrap, img) {
  let isHovered = false;

  wrap.addEventListener('mouseenter', () => {
    isHovered = true;
    img.style.transform = 'scale(1.5)';
  });

  wrap.addEventListener('mouseleave', () => {
    isHovered = false;
    img.style.transform = 'scale(1)';
    img.style.transformOrigin = 'center center';
  });

  wrap.addEventListener('mousemove', (e) => {
    if (!isHovered) return;
    const rect = wrap.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
  });
}

function renderProductDetails() {
  const isAr = store.getState().language === 'ar';
  const displayName = isAr
    ? (currentProduct.nameAr || arabicNameMap[currentProduct.name] || currentProduct.name)
    : currentProduct.name;

  const titleEl = document.querySelector('#pdp-title');
  if (titleEl) titleEl.textContent = displayName;

  const brandTag = document.querySelector('.pdp-brand-tag');
  if (brandTag) {
    brandTag.textContent = isAr ? 'كَيَان أتيليه — المجموعة الحصرية' : 'KAYAN Atelier Haute Collection';
  }

  const fittingGuide = document.querySelector('#pdp-size-guide-btn');
  if (fittingGuide) {
    fittingGuide.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
      ${isAr ? 'دليل مقاسات الأتيليه ↗' : 'Atelier Fitting Guide'}
    `;
  }

  const acquireBtn = document.querySelector('#pdp-add-to-bag-btn');
  if (acquireBtn) {
    acquireBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <span>${isAr ? 'أضف إلى حقيبة التسوق' : 'Acquire Silhouette'}</span>
    `;
  }

  const deliveryBoxText = document.querySelector('.pdp-delivery-box > div');
  if (deliveryBoxText) {
    deliveryBoxText.innerHTML = isAr ? `
      <div>اطلب خلال <span id="pdp-dispatch-timer" class="pdp-delivery-timer">--:--:--</span> لضمان الشحن السريع غداً.</div>
      <div style="color:var(--color-text-subtle); margin-top:2px;">شحن مجاني محايد للكربون مع DHL Express عالمياً للطلبات فوق 150$.</div>
    ` : `
      <div>Order within <span id="pdp-dispatch-timer" class="pdp-delivery-timer">--:--:--</span> for guaranteed next-day dispatch.</div>
      <div style="color:var(--color-text-subtle); margin-top:2px;">Complimentary carbon-neutral DHL Express worldwide on orders over $150.</div>
    `;
  }

  const paletteHeader = document.querySelector('.pdp-colors-section > div:first-child');
  if (paletteHeader) {
    const curColorName = (currentProduct.colors && currentProduct.colors[selectedColorIndex]) ? currentProduct.colors[selectedColorIndex].name : '';
    paletteHeader.innerHTML = `${isAr ? 'اللون المختار' : 'Selected Palette'}: <span id="pdp-selected-color-name" style="color:var(--color-accent); font-weight:700;">${curColorName}</span>`;
  }

  const sizeHeader = document.querySelector('.pdp-sizes-header > span:first-child');
  if (sizeHeader) {
    sizeHeader.textContent = isAr ? 'اختر مقاس القطعة' : 'Select Garment Size';
  }

  updatePricesUI();

  // Rating and reviews count
  const ratingEl = document.querySelector('#pdp-rating-score');
  const countEl = document.querySelector('#pdp-reviews-count');
  if (ratingEl) ratingEl.textContent = currentProduct.rating ? currentProduct.rating.toFixed(1) : '4.9';
  if (countEl) {
    countEl.textContent = isAr
      ? `(${currentProduct.reviewCount || 24} تقييماً موثقاً)`
      : `(${currentProduct.reviewCount || 24} Verified Collectors)`;
  }

  // Render Color Swatches
  const swatchesMount = document.querySelector('#pdp-swatches-mount');
  const colorNameEl = document.querySelector('#pdp-selected-color-name');
  if (swatchesMount && currentProduct.colors) {
    if (colorNameEl && currentProduct.colors[0]) {
      colorNameEl.textContent = currentProduct.colors[0].name;
    }

    swatchesMount.innerHTML = currentProduct.colors
      .map(
        (c, idx) => `
      <button class="pdp-swatch-btn ${idx === 0 ? 'active' : ''}" 
              data-idx="${idx}" 
              data-color-name="${c.name}"
              style="background-color: ${c.hex};" 
              title="${c.name}" 
              aria-label="Color ${c.name}">
      </button>
    `
      )
      .join('');

    swatchesMount.querySelectorAll('.pdp-swatch-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        swatchesMount.querySelectorAll('.pdp-swatch-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColorIndex = parseInt(btn.dataset.idx, 10);
        if (colorNameEl) colorNameEl.textContent = btn.dataset.colorName;
      });
    });
  }

  // Render Sizes & Live Stock Badges
  renderSizesSelector();

  // Stepper controls
  const decBtn = document.querySelector('#pdp-qty-dec');
  const incBtn = document.querySelector('#pdp-qty-inc');
  const qtyDisplay = document.querySelector('#pdp-qty-display');

  if (decBtn && incBtn && qtyDisplay) {
    decBtn.addEventListener('click', () => {
      if (currentQuantity > 1) {
        currentQuantity--;
        qtyDisplay.textContent = currentQuantity;
      }
    });

    incBtn.addEventListener('click', () => {
      const activeSizeObj = (currentProduct.sizes || []).find(s => s.size === selectedSize);
      const maxStock = activeSizeObj ? activeSizeObj.stock : 10;
      if (currentQuantity < maxStock) {
        currentQuantity++;
        qtyDisplay.textContent = currentQuantity;
      } else {
        toastSystem.warning(`Maximum available inventory (${maxStock}) selected.`);
      }
    });
  }

  // Add to Bag CTA
  const addToBagBtn = document.querySelector('#pdp-add-to-bag-btn');
  if (addToBagBtn) {
    addToBagBtn.addEventListener('click', handleAddToCart);
  }

  // Wishlist Button
  const wishlistBtn = document.querySelector('#pdp-wishlist-btn');
  if (wishlistBtn) {
    const isWished = store.isWishlisted(currentProduct.id);
    if (isWished) wishlistBtn.classList.add('active');

    wishlistBtn.addEventListener('click', () => {
      const active = store.toggleWishlist(currentProduct.id);
      wishlistBtn.classList.toggle('active', active);
      toastSystem.info(active ? 'Added to Saved Archive.' : 'Removed from Saved Archive.');
    });
  }

  // Size Guide Modal trigger
  const sizeGuideBtn = document.querySelector('#pdp-size-guide-btn');
  if (sizeGuideBtn) {
    sizeGuideBtn.addEventListener('click', openSizeGuideModal);
  }
}

function updatePricesUI() {
  const currentPriceEl = document.querySelector('#pdp-current-price');
  const originalPriceEl = document.querySelector('#pdp-original-price');
  const discountEl = document.querySelector('#pdp-discount-badge');

  if (!currentPriceEl) return;

  const effPrice = currentProduct.salePrice || currentProduct.price;
  currentPriceEl.textContent = i18n.formatPrice(effPrice);

  if (currentProduct.salePrice) {
    if (originalPriceEl) {
      originalPriceEl.textContent = i18n.formatPrice(currentProduct.price);
      originalPriceEl.style.display = 'inline';
    }
    if (discountEl) {
      discountEl.textContent = `-${currentProduct.discountPercent}%`;
      discountEl.style.display = 'inline-block';
    }
  } else {
    if (originalPriceEl) originalPriceEl.style.display = 'none';
    if (discountEl) discountEl.style.display = 'none';
  }
}

function renderSizesSelector() {
  const sizesMount = document.querySelector('#pdp-sizes-mount');
  const stockStatusText = document.querySelector('#pdp-stock-text');
  const stockDot = document.querySelector('#pdp-stock-dot');

  if (!sizesMount) return;

  const sizes = currentProduct.sizes || [{ size: 'Standard', stock: 12 }];

  sizesMount.innerHTML = sizes
    .map(s => {
      const isOut = s.stock <= 0;
      const isLow = s.stock > 0 && s.stock <= 5;
      const isSelected = s.size === selectedSize;
      return `
      <button class="pdp-size-btn ${isSelected ? 'active' : ''} ${isLow ? 'low-stock' : ''} ${isOut ? 'out-of-stock' : ''}"
              data-size="${s.size}"
              data-stock="${s.stock}"
              ${isOut ? 'disabled' : ''}>
        ${s.size}
      </button>
    `;
    })
    .join('');

  updateStockIndicator();

  sizesMount.querySelectorAll('.pdp-size-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      sizesMount.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
      currentQuantity = 1;
      const qtyDisplay = document.querySelector('#pdp-qty-display');
      if (qtyDisplay) qtyDisplay.textContent = '1';
      updateStockIndicator();
    });
  });
}

function updateStockIndicator() {
  const stockStatusText = document.querySelector('#pdp-stock-text');
  const stockDot = document.querySelector('#pdp-stock-dot');
  if (!stockStatusText) return;

  const isAr = store.getState().language === 'ar';
  const currentSizeObj = (currentProduct.sizes || []).find(s => s.size === selectedSize);
  const stock = currentSizeObj ? currentSizeObj.stock : 10;

  if (stock <= 0) {
    stockStatusText.textContent = isAr ? 'غير متوفر حالياً في المخزن' : 'Archived / Out of stock';
    if (stockDot) {
      stockDot.style.background = '#ef4444';
      stockDot.className = 'pdp-stock-dot';
    }
  } else if (stock <= 5) {
    stockStatusText.textContent = isAr
      ? `كمية محدودة: تبقى فقط ${stock} قطع في هذا المقاس`
      : `Scarcity: Only ${stock} pieces remain in this size`;
    if (stockDot) {
      stockDot.style.background = '#f59e0b';
      stockDot.className = 'pdp-stock-dot low';
    }
  } else {
    stockStatusText.textContent = isAr
      ? 'متوفر في مخزن الأتيليه — جاهز للشحن الفوري'
      : 'In Stock — Available for immediate dispatch';
    if (stockDot) {
      stockDot.style.background = '#22c55e';
      stockDot.className = 'pdp-stock-dot';
    }
  }
}

function handleAddToCart() {
  const isAr = store.getState().language === 'ar';
  if (!selectedSize) {
    toastSystem.warning(isAr ? 'يرجى اختيار المقاس المطلوب أولاً.' : 'Please select a garment size before acquiring.');
    return;
  }

  const selectedColor = (currentProduct.colors && currentProduct.colors[selectedColorIndex])
    ? currentProduct.colors[selectedColorIndex].name
    : 'Default';

  // Dispatch to state store
  store.addToCart(currentProduct, selectedSize, selectedColor, currentQuantity);

  // Button Morph State
  const btn = document.querySelector('#pdp-add-to-bag-btn');
  if (btn) {
    btn.classList.add('added');
    const originalText = btn.innerHTML;
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      ${isAr ? 'تمت الإضافة للحقيبة' : 'Secured in Bag'}
    `;
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = originalText;
    }, 1800);
  }

  // Open Cart Drawer
  events.emit('cart:open');
}

function initDeliveryCountdown() {
  const timerEl = document.querySelector('#pdp-dispatch-timer');
  if (!timerEl) return;

  function update() {
    const now = new Date();
    // Cut-off at 18:00
    const target = new Date();
    target.setHours(18, 0, 0, 0);

    let diff = target - now;
    if (diff <= 0) {
      // Tomorrow 18:00
      target.setDate(target.getDate() + 1);
      diff = target - now;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    timerEl.textContent = `${hours}h ${mins}m ${secs}s`;
  }

  update();
  setInterval(update, 1000);
}

function renderAccordions() {
  const wrap = document.querySelector('#pdp-accordions-mount');
  if (!wrap) return;

  const isAr = store.getState().language === 'ar';

  const notesTitle = isAr ? 'ملاحظات التصميم والقصّة المعمارية' : 'Silhouette & Design Notes';
  const notesDesc = isAr 
    ? (currentProduct.descriptionAr || 'صُممت هذه القطعة بدقة معمارية فائقة لتجمع بين الفخامة والراحة الانسيابية للأناقة العصرية اليومية.')
    : (currentProduct.description || 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.');
  const fitText = isAr ? 'قصة معمارية فاخرة مطابقة للمقاس المعتاد تماماً.' : (currentProduct.fit || 'True to size architectural drape.');
  const modelText = isAr ? 'طول العارضة 180 سم وترتدي المقاس S.' : 'Model stands 180cm / 5\'11" wearing Size S.';

  const matTitle = isAr ? 'الأنسجة النبيلة ومصدر الأقمشة' : 'Noble Materials & Provenance';
  const matComp = isAr ? (currentProduct.materialAr || '100% أنسجة نبيلة مختارة ومطابقة لأعلى معايير الجودة العالمية.') : (currentProduct.material || '100% Certified Noble Fibers.');
  const matCare = isAr ? 'تنظيف جاف متخصص فقط. يُحفظ في حقيبة الأتيليه القطنية المرفقة لحماية القماش.' : (currentProduct.care || 'Specialist dry clean only. Store in complimentary cedar garment bag provided.');
  const matProv = isAr ? 'حِيكت وشُطبت يدوياً في مشاغلنا بشمال إيطاليا وفق معايير الاستدامة والحرفية اليدوية العالية.' : 'Spun and hand-finished in our northern Italian atelier under zero-discharge circular water compliance.';

  const shipTitle = isAr ? 'التوصيل المجاني وسياسة الاسترجاع' : 'Complimentary Delivery & White-Glove Returns';
  const shipText1 = isAr ? 'شحن سريع ومجاني محايد للكربون مع DHL Express عالمياً لجميع الطلبات المؤهلة فوق 150$. مدة التوصيل 2-4 أيام عمل.' : 'Complimentary carbon-neutral DHL Express delivery on all orders over $150. Estimated arrival in 2–4 business days worldwide.';
  const shipText2 = isAr ? 'استرجاع مجاني من باب المنزل خلال 30 يوماً مع خدمة الاستلام المباشر.' : 'Complimentary doorstep pickup returns within 30 days of acquisition. Custom archive pieces include dedicated concierge return seal.';

  wrap.innerHTML = `
    <!-- Silhouette & Cut -->
    <div class="pdp-accordion-item open">
      <button class="pdp-accordion-trigger">
        <span>${notesTitle}</span>
        <span class="pdp-accordion-icon">&darr;</span>
      </button>
      <div class="pdp-accordion-content">
        <p>${notesDesc}</p>
        <p style="margin-top:8px;"><strong>${isAr ? 'القصّة والانسيابية:' : 'Fit Silhouette:'}</strong> ${fitText}</p>
        <p style="margin-top:4px;"><strong>${isAr ? 'مقاييس العارضة:' : 'Model Proportions:'}</strong> ${modelText}</p>
      </div>
    </div>

    <!-- Noble Fibers & Care -->
    <div class="pdp-accordion-item">
      <button class="pdp-accordion-trigger">
        <span>${matTitle}</span>
        <span class="pdp-accordion-icon">&darr;</span>
      </button>
      <div class="pdp-accordion-content">
        <p><strong>${isAr ? 'التركيب الأساسي:' : 'Primary Composition:'}</strong> ${matComp}</p>
        <p style="margin-top:8px;"><strong>${isAr ? 'إرشادات العناية:' : 'Curatorial Care:'}</strong> ${matCare}</p>
        <p style="margin-top:8px;"><strong>${isAr ? 'المنشأ والحرفية:' : 'Provenance:'}</strong> ${matProv}</p>
      </div>
    </div>

    <!-- Complimentary Delivery & White-Glove Returns -->
    <div class="pdp-accordion-item">
      <button class="pdp-accordion-trigger">
        <span>${shipTitle}</span>
        <span class="pdp-accordion-icon">&darr;</span>
      </button>
      <div class="pdp-accordion-content">
        <p>${shipText1}</p>
        <p style="margin-top:8px;">${shipText2}</p>
      </div>
    </div>
  `;

  wrap.querySelectorAll('.pdp-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.pdp-accordion-item');
      item.classList.toggle('open');
    });
  });
}

function renderReviewsSection() {
  const mount = document.querySelector('#pdp-reviews-list-mount');
  if (!mount) return;

  const isAr = store.getState().language === 'ar';

  const reviewsHeading = document.querySelector('.pdp-reviews-section h2');
  if (reviewsHeading) reviewsHeading.textContent = isAr ? 'آراء وتقييمات المقتنين' : 'Collector Impressions & Reviews';

  const verifiedSub = document.querySelector('.reviews-summary-grid > div:first-child > div:nth-child(3)');
  if (verifiedSub) verifiedSub.textContent = isAr ? 'بناءً على عمليات شراء موثقة' : 'Based on verified acquisitions';

  const relatedHeading = document.querySelector('section[style*="margin-block:64px"] h2');
  const relatedDesc = document.querySelector('section[style*="margin-block:64px"] p');
  const relatedLink = document.querySelector('.editorial-view-all');
  if (relatedHeading) relatedHeading.textContent = isAr ? 'أكمل إطلالتك المعمارية' : 'Complete The Silhouette';
  if (relatedDesc) relatedDesc.textContent = isAr ? 'قطع مكملة اختارها صالون التصميم خصيصاً لتناسب إطلالتك.' : 'Complementary architectural pieces selected by our design salon.';
  if (relatedLink) relatedLink.innerHTML = isAr ? 'عرض الكل &larr;' : 'View All &rarr;';

  const arReviews = [
    { author: 'سارة المنصوري', city: 'دبي', rating: 5, date: 'منذ أسبوعين', title: 'خامة استثنائية وانسيابية ساحرة', comment: 'القطعة تحفة فنية حقيقية، القماش فخم جداً ومريح وناعم. المقاس مضبوط بالملي.', fit: 'مطابق للمقاس تماماً', helpful: 18 },
    { author: 'فيصل العتيبي', city: 'الرياض', rating: 5, date: 'منذ 3 أسابيع', title: 'جودة عالمية لا تقل عن كبرى دور الأزياء', comment: 'الخياطة والتفاصيل المعمارية راقية جداً. وصل التغليف بحالة ممتازة ومع كيس حفظ قماشي فاخر.', fit: 'مثالي', helpful: 24 },
    { author: 'نورا الهاشمي', city: 'أبوظبي', rating: 5, date: 'منذ شهر', title: 'أفضل قطعة أضفتها لدولابي هذا الموسم', comment: 'اللون والتطريز في الطبيعة أجمل بكثير من الصور. شحن سريع ومميز.', fit: 'مطابق للمقاس', helpful: 15 }
  ];

  const activeReviews = isAr ? arReviews : sampleReviews;

  mount.innerHTML = activeReviews
    .map(
      r => `
    <div style="padding-block:20px; border-bottom:1px solid var(--color-border-subtle);">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-weight:700; font-size:14px;">${r.author} <span style="font-weight:400; color:var(--color-text-subtle);">(${r.city})</span></div>
          <div style="display:flex; gap:3px; color:#e5a93b; font-size:12px; margin-top:2px;">
            ${'&#9733;'.repeat(r.rating)}
          </div>
        </div>
        <div style="font-size:12px; color:var(--color-text-subtle);">${r.date}</div>
      </div>
      <h4 style="font-size:14px; font-weight:700; margin-top:10px;">${r.title}</h4>
      <p style="font-size:13px; color:var(--color-text-muted); line-height:1.6; margin-top:4px;">${r.comment}</p>
      <div style="display:flex; gap:16px; margin-top:10px; font-size:11px; color:var(--color-text-subtle);">
        <span>${isAr ? 'تقييم المقاس:' : 'Fit assessment:'} <strong>${r.fit}</strong></span>
        <span>&bull;</span>
        <span style="color:#15803d; font-weight:600;">&#10003; ${isAr ? 'شراء موثق' : 'Verified Acquisition'}</span>
        <span>&bull;</span>
        <span>${r.helpful} ${isAr ? 'مقتنٍ وجدوا هذا التقييم مفيداً' : 'collectors found this insightful'}</span>
      </div>
    </div>
  `
    )
    .join('');
}

function renderRelatedProducts() {
  const mount = document.querySelector('#pdp-related-mount');
  if (!mount) return;

  // Filter similar items from same department
  const related = products
    .filter(p => p.id !== currentProduct.id && p.department === currentProduct.department)
    .slice(0, 4);

  mount.innerHTML = related.map(p => createProductCardHtml(p)).join('');
  bindProductCardEvents(mount);
}

function initStickyMobileBar() {
  const bar = document.querySelector('#pdp-sticky-bar');
  const mainCTA = document.querySelector('#pdp-add-to-bag-btn');
  if (!bar || !mainCTA) return;

  const barPrice = bar.querySelector('.pdp-sticky-bar-price');
  const barBtn = bar.querySelector('.pdp-sticky-bar-btn');

  if (barPrice) {
    barPrice.textContent = i18n.formatPrice(currentProduct.salePrice || currentProduct.price);
  }

  const isAr = store.getState().language === 'ar';
  const barTitle = bar.querySelector('div > div:first-child');
  if (barTitle) {
    barTitle.textContent = isAr ? 'طلب الحجز' : 'Acquisition Reserve';
  }
  if (barBtn) {
    barBtn.textContent = isAr ? 'أضف للحقيبة' : 'Add to Bag';
    barBtn.onclick = handleAddToCart;
  }

  window.addEventListener('scroll', () => {
    const rect = mainCTA.getBoundingClientRect();
    if (rect.bottom < 0) {
      bar.classList.add('visible');
    } else {
      bar.classList.remove('visible');
    }
  });
}

function openSizeGuideModal() {
  let modal = document.querySelector('.size-guide-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay size-guide-modal-overlay active';
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width:580px; padding:var(--space-xl);">
        <button class="modal-close-btn">&times;</button>
        <span class="pdp-brand-tag">Atelier Fitting System</span>
        <h3 class="font-display font-bold text-xl" style="margin-top:4px; margin-bottom:16px;">Precision Size Advisor</h3>
        
        <p class="text-xs" style="color:var(--color-text-muted); margin-bottom:16px; line-height:1.6;">
          Our garments are cut with intentional architectural ease. Enter your measurements or reference our conversion matrix below for tailored proportions.
        </p>

        <div style="background:var(--color-bg-secondary); border-radius:var(--radius-sm); padding:16px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
            <strong style="font-size:13px;">Unit Standard</strong>
            <div style="display:flex; gap:4px;">
              <button class="size-unit-btn active" data-unit="cm" style="padding:4px 10px; font-size:11px; font-weight:700; border:1px solid var(--color-border); background:var(--color-primary); color:var(--color-bg); border-radius:3px;">CM</button>
              <button class="size-unit-btn" data-unit="in" style="padding:4px 10px; font-size:11px; font-weight:700; border:1px solid var(--color-border); background:var(--color-surface); color:var(--color-text); border-radius:3px;">INCHES</button>
            </div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div>
              <label style="font-size:11px; font-weight:600; display:block; margin-bottom:4px;">Bust / Chest</label>
              <input type="number" id="calc-bust" value="92" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; background:var(--color-surface); color:var(--color-text); font-size:13px;"/>
            </div>
            <div>
              <label style="font-size:11px; font-weight:600; display:block; margin-bottom:4px;">Waist Contour</label>
              <input type="number" id="calc-waist" value="74" style="width:100%; padding:8px; border:1px solid var(--color-border); border-radius:4px; background:var(--color-surface); color:var(--color-text); font-size:13px;"/>
            </div>
          </div>
          <div style="margin-top:14px; text-align:center; padding:10px; background:var(--color-surface); border:1px dashed var(--color-accent); border-radius:4px;">
            <div style="font-size:11px; color:var(--color-text-muted);">Recommended Silhouette Size:</div>
            <div id="calc-rec-size" style="font-family:var(--font-display); font-size:18px; font-weight:800; color:var(--color-accent); margin-top:2px;">Size M (Comfortable Drape)</div>
          </div>
        </div>

        <div style="overflow-x:auto;">
          <table style="width:100%; font-size:11px; text-align:center; border-collapse:collapse;">
            <thead>
              <tr style="border-bottom:1.5px solid var(--color-border); font-weight:700;">
                <th style="padding:8px; text-align:start;">Size</th>
                <th style="padding:8px;">Bust (cm)</th>
                <th style="padding:8px;">Waist (cm)</th>
                <th style="padding:8px;">Hips (cm)</th>
                <th style="padding:8px;">EU / IT</th>
                <th style="padding:8px;">US / UK</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--color-border-subtle);"><td style="padding:8px; font-weight:700; text-align:start;">XS</td><td>80-84</td><td>62-66</td><td>88-92</td><td>34</td><td>0-2</td></tr>
              <tr style="border-bottom:1px solid var(--color-border-subtle);"><td style="padding:8px; font-weight:700; text-align:start;">S</td><td>85-89</td><td>67-71</td><td>93-97</td><td>36</td><td>4</td></tr>
              <tr style="border-bottom:1px solid var(--color-border-subtle);"><td style="padding:8px; font-weight:700; text-align:start;">M</td><td>90-95</td><td>72-77</td><td>98-103</td><td>38</td><td>6-8</td></tr>
              <tr style="border-bottom:1px solid var(--color-border-subtle);"><td style="padding:8px; font-weight:700; text-align:start;">L</td><td>96-102</td><td>78-84</td><td>104-110</td><td>40</td><td>10</td></tr>
              <tr><td style="padding:8px; font-weight:700; text-align:start;">XL</td><td>103-110</td><td>85-92</td><td>111-118</td><td>42</td><td>12-14</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const close = modal.querySelector('.modal-close-btn');
    close.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });

    // Calculator inputs listener
    const bustInput = modal.querySelector('#calc-bust');
    const waistInput = modal.querySelector('#calc-waist');
    const recDisplay = modal.querySelector('#calc-rec-size');

    function updateRec() {
      const b = parseFloat(bustInput.value) || 90;
      if (b < 85) recDisplay.textContent = 'Size XS (Streamlined Fit)';
      else if (b < 90) recDisplay.textContent = 'Size S (Architectural Fit)';
      else if (b < 96) recDisplay.textContent = 'Size M (Signature Fit)';
      else if (b < 103) recDisplay.textContent = 'Size L (Relaxed Drape)';
      else recDisplay.textContent = 'Size XL (Generous Oversized)';
    }

    bustInput.addEventListener('input', updateRec);
    waistInput.addEventListener('input', updateRec);
  } else {
    modal.classList.add('active');
  }
}

// Auto init on PDP page
if (document.querySelector('#pdp-main-image-wrap')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initProductPage());
  } else {
    initProductPage();
  }
}
