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
import { createProductCardHtml, bindProductCardEvents } from '../components/product-card.js';
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
}

function renderBreadcrumbs() {
  const el = document.querySelector('#pdp-breadcrumbs-mount');
  if (!el) return;

  el.innerHTML = `
    <a href="${resolveUrl('index.html')}">Atelier</a>
    <span>/</span>
    <a href="${resolveUrl(`pages/shop.html?dept=${currentProduct.department}`)}" style="text-transform:capitalize;">${currentProduct.department}</a>
    <span>/</span>
    <span style="color:var(--color-text);">${currentProduct.name}</span>
  `;
}

function renderGallery() {
  const mainImgWrap = document.querySelector('#pdp-main-image-wrap');
  const thumbWrap = document.querySelector('#pdp-thumbnails-mount');
  const badgeWrap = document.querySelector('#pdp-badges-mount');

  if (!mainImgWrap || !thumbWrap) return;

  const images = currentProduct.images || [currentProduct.image];

  // Render Badges
  if (badgeWrap && currentProduct.badges) {
    badgeWrap.innerHTML = currentProduct.badges
      .map(b => `<span class="product-badge badge-${b.toLowerCase().replace(/\s+/g, '-')}">${b}</span>`)
      .join('');
  }

  // Render Thumbnails
  thumbWrap.innerHTML = images
    .map(
      (img, i) => `
    <div class="pdp-thumb-item ${i === 0 ? 'active' : ''}" data-idx="${i}">
      <img src="${img}" alt="${currentProduct.name} Angle ${i + 1}" loading="lazy"/>
    </div>
  `
    )
    .join('');

  // Initial main image
  const mainImg = mainImgWrap.querySelector('.pdp-main-img');
  if (mainImg) {
    mainImg.src = images[0];
    mainImg.alt = currentProduct.name;
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
  const images = currentProduct.images || [currentProduct.image];
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
  const titleEl = document.querySelector('#pdp-title');
  if (titleEl) titleEl.textContent = currentProduct.name;

  updatePricesUI();

  // Rating and reviews count
  const ratingEl = document.querySelector('#pdp-rating-score');
  const countEl = document.querySelector('#pdp-reviews-count');
  if (ratingEl) ratingEl.textContent = currentProduct.rating ? currentProduct.rating.toFixed(1) : '4.9';
  if (countEl) countEl.textContent = `(${currentProduct.reviewCount || 24} Verified Collectors)`;

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

  const currentSizeObj = (currentProduct.sizes || []).find(s => s.size === selectedSize);
  const stock = currentSizeObj ? currentSizeObj.stock : 10;

  if (stock <= 0) {
    stockStatusText.textContent = 'Archived / Out of stock';
    if (stockDot) {
      stockDot.style.background = '#ef4444';
      stockDot.className = 'pdp-stock-dot';
    }
  } else if (stock <= 5) {
    stockStatusText.textContent = `Scarcity: Only ${stock} pieces remain in this size`;
    if (stockDot) {
      stockDot.style.background = '#f59e0b';
      stockDot.className = 'pdp-stock-dot low';
    }
  } else {
    stockStatusText.textContent = 'In Stock — Available for immediate dispatch';
    if (stockDot) {
      stockDot.style.background = '#22c55e';
      stockDot.className = 'pdp-stock-dot';
    }
  }
}

function handleAddToCart() {
  if (!selectedSize) {
    toastSystem.warning('Please select a garment size before acquiring.');
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
      Secured in Bag
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

  wrap.innerHTML = `
    <!-- Silhouette & Cut -->
    <div class="pdp-accordion-item open">
      <button class="pdp-accordion-trigger">
        <span>Silhouette & Design Notes</span>
        <span class="pdp-accordion-icon">&darr;</span>
      </button>
      <div class="pdp-accordion-content">
        <p>${currentProduct.description || 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.'}</p>
        <p style="margin-top:8px;"><strong>Fit Silhouette:</strong> ${currentProduct.fit || 'True to size architectural drape.'}</p>
        <p style="margin-top:4px;"><strong>Model Proportions:</strong> Model stands 180cm / 5\'11" wearing Size S.</p>
      </div>
    </div>

    <!-- Noble Fibers & Care -->
    <div class="pdp-accordion-item">
      <button class="pdp-accordion-trigger">
        <span>Noble Materials & Provenance</span>
        <span class="pdp-accordion-icon">&darr;</span>
      </button>
      <div class="pdp-accordion-content">
        <p><strong>Primary Composition:</strong> ${currentProduct.material || '100% Certified Noble Fibers.'}</p>
        <p style="margin-top:8px;"><strong>Curatorial Care:</strong> ${currentProduct.care || 'Specialist dry clean only. Store in complimentary cedar garment bag provided.'}</p>
        <p style="margin-top:8px;"><strong>Provenance:</strong> Spun and hand-finished in our northern Italian atelier under zero-discharge circular water compliance.</p>
      </div>
    </div>

    <!-- Complimentary Delivery & White-Glove Returns -->
    <div class="pdp-accordion-item">
      <button class="pdp-accordion-trigger">
        <span>Complimentary Delivery & White-Glove Returns</span>
        <span class="pdp-accordion-icon">&darr;</span>
      </button>
      <div class="pdp-accordion-content">
        <p>Complimentary carbon-neutral DHL Express delivery on all orders over $150. Estimated arrival in 2–4 business days worldwide.</p>
        <p style="margin-top:8px;">Complimentary doorstep pickup returns within 30 days of acquisition. Custom archive pieces include dedicated concierge return seal.</p>
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

  mount.innerHTML = sampleReviews
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
        <span>Fit assessment: <strong>${r.fit}</strong></span>
        <span>&bull;</span>
        <span style="color:#15803d; font-weight:600;">&#10003; Verified Acquisition</span>
        <span>&bull;</span>
        <span>${r.helpful} collectors found this insightful</span>
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

  if (barBtn) {
    barBtn.addEventListener('click', handleAddToCart);
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
