/**
 * KAYAN Luxury Fashion — Reusable Product Card Component
 * Renders consistent product cards with bilingual names, secondary image hover,
 * swatches, quick-add, and quick-view.
 */

import { i18n } from '../core/i18n.js';
import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { resolveUrl } from '../core/router-helpers.js';
import { triggerFlyToCart } from './cart-drawer.js';
import { products, getProductById } from '../data/products.js';

const arabicNameMap = {
  'Sculpted Wool Cocoon Coat': 'معطف صوف شرنقة منحوت',
  'Architectural Pleated Maxi Dress': 'فستان ماكسي بكسرات معمارية',
  'Structured Double-Breasted Blazer': 'بليزر كلاسيكي مزدوج الأزرار',
  'Raw Silk Drape Column Gown': 'ثوب عمودي من الحرير الخام الانسيابي',
  'Oversized Cashmere Turtleneck': 'كنزة كشمير أوفرسايز بياقة عالية',
  'Pleated High-Waist Wide Trousers': 'بنطال عريض بخصر مرتفع وكسرات',
  'Belted Technical Storm Trench': 'معطف ترنش تقني مقاوم للعواصف بحزام',
  'Brutalist Tailored Jumpsuit': 'جمبسوت معماري مفصل',
  'Asymmetric Draped Silk Blouse': 'بلوزة حرير انسيابية بقصة غير متماثلة',
  'Minimalist Leather Trench Coat': 'معطف ترنش جلدي بأسلوب تبسيطي',
  'Fine Merino Wool Wrap Cardigan': 'كارديجان ملفوف من صوف الميرينو الناعم',
  'Voluminous Poplin Shirt Dress': 'فستان قميص بوبلين فضفاض',
  'Heavyweight Wool Overcoat': 'معطف صوف شتوي ثقيل',
  'Boxy Raw Denim Overshirt': 'قميص جينز خام بقصة مربعة',
  'Pleated Tailored Wool Trousers': 'بنطال صوف مفصل بكسرات كلاسيكية',
  'Minimalist Lambskin Leather Jacket': 'جاكيت جلد حمل طبيعي فاخر',
  'Structured Wool Safari Jacket': 'جاكيت سفاري صوف بتصميم متماسك',
  'Oversized Waffle Knit Crewneck': 'كنزة وافل محبوكة بقصة فضفاضة',
  'Double-Breasted Wool Peacoat': 'معطف صوف بحري مزدوج الأزرار',
  'Architectural Stand Collar Shirt': 'قميص بياقة قائمة معمارية',
  'Heavy Selvedge Indigo Denim': 'بنطال جينز سيلفدج نيلي ثقيل',
  'Brutalist Wool Harrington Jacket': 'جاكيت هارينغتون صوف معماري',
  'Relaxed Cashmere Blend Hoodie': 'هودي ناعم من مزيج الكشمير المريح',
  'Italian Wool Smoking Tuxedo Suit': 'بدلة توكسيدو سموكينغ من الصوف الإيطالي',
  'Kids Virgin Wool Toggle Coat': 'معطف أطفال بأزرار خشبية من الصوف البكر',
  'Kids Merino Knit Cardigan': 'كارديجان أطفال محبوك من صوف الميرينو',
  'Kids Organic Cotton Chore Jacket': 'جاكيت أطفال يومي من القطن العضوي',
  'Kids Pleated Linen Party Dress': 'فستان أطفال كتان بكسرات أنيقة',
  'Kids Ribbed Cashmere Sweater': 'كنزة أطفال مضلعة من الكشمير الفاخر',
  'Kids Selvedge Denim Dungarees': 'أوفرول أطفال جينز سيلفدج متين',
  'Kids Flannel Check Overshirt': 'قميص أطفال فلانيل بنقشة المربعات',
  'Kids Quilted Down Puffer Jacket': 'جاكيت أطفال مبطن بالريش الطبيعي',
  'Kids Organic Jersey Lounge Set': 'طقم بيجاما أطفال مريح من الجيرسيه العضوي',
  'Kids Hooded Parka Coat': 'باركا أطفال شتوية بغطاء رأس واقٍ',
  'Kayan Oud Sublime Extrait': 'عطر كَيَان عود سوبليم - إكستري دو بارفان',
  'Damask Rose & Ambergris Elixir': 'إكسير الورد الدمشقي والعنبر النادر',
  'Cellular Sculpting Face Nectar': 'رحيق نحت وتجديد خلايا الوجه المركز',
  'Smoked Vetiver & Atlas Cedar Extract': 'مستخلص نجيل الهند المدخن وأرز الأطلس',
  'Botanical Night Recovery Balm': 'بلسم التعافي الليلي النباتي الفائق',
  'Pure Frankincense & Myrrh Incense': 'بخور اللبان الحوجري النقي والمر العماني',
  'Ceramic Volcanic Stone Diffuser': 'فواحة أحجار بركانية سيراميكية فاخرة',
  'Silk Infused Nourishing Body Oil': 'زيت جسم مغذٍ ببروتينات الحرير النقي',
  'Hand-Carved Travertine Sculptural Vase': 'مزهرية نحتية من حجر الترافرتين المنحوت يدوياً',
  'Brutalist Black Basalt Bowl': 'وعاء بازلت أسود بتصميم معماري',
  'Mongolian Raw Cashmere Throw': 'غطاء كشمير منغولي خام منسوج يدوياً',
  'Minimalist Cast Bronze Candelabra': 'شمعدان برونزي مصبوب بأسلوب تبسيطي',
  'Heavy Belgian Linen Bedcover': 'مفرش سرير من الكتان البلجيكي الفاخر',
  'Sculptural Marble Bookends': 'مساند كتب نحتية من الرخام الطبيعي',
  'Hand-Poured Soy Amber Glass Candle': 'شمعة صويا معطرة بوعاء زجاجي عنبري',
  'Smoked Oak Geometric Tray': 'صينية هندسية من خشب البلوط المدخن'
};

export function createProductCardHtml(product) {
  const isWishlisted = store.isInWishlist(product.id);
  const primaryImg = product.images[0] || '';
  const secondaryImg = product.images[1] || primaryImg;
  const isAr = store.getState().language === 'ar';

  const displayName = isAr
    ? (product.nameAr || arabicNameMap[product.name] || product.name)
    : product.name;
  const displayBrand = isAr ? 'كَيَان أتيليه' : product.brand;
  const quickViewText = isAr ? 'نظرة سريعة' : 'Quick View';
  const selectSizeText = isAr ? 'اختر المقاس' : 'Quick Add Size';

  const badgesList = Array.isArray(product.badges)
    ? product.badges
    : (typeof product.badges === 'string' && product.badges.trim() ? [product.badges] : []);

  let badgesHtml = '';
  if (badgesList.length) {
    badgesHtml = `
      <div class="product-badge-stack">
        ${badgesList
          .map((b) => {
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
          .join('')}
      </div>
    `;
  }

  const swatchesHtml = (product.colors || [])
    .map(
      (c, i) => `
      <span class="color-swatch-dot ${i === 0 ? 'active' : ''}" data-color="${c.name}" style="background-color:${c.hex};" title="${c.name}"></span>
    `
    )
    .join('');

  const sizesHtml = (product.sizes || [])
    .map((s) => {
      const isOut = s.stock <= 0;
      return `<button class="size-chip ${isOut ? 'disabled' : ''}" data-size="${s.size}" ${isOut ? 'disabled' : ''}>${s.size}</button>`;
    })
    .join('');

  return `
    <div class="product-card tilt-card" data-id="${product.id}" data-tilt>
      <!-- Media Box -->
      <div class="product-card-media">
        ${badgesHtml}
        <button class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${product.id}" aria-label="Toggle Wishlist">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        <a href="${resolveUrl(`pages/product.html?slug=${product.slug}`)}">
          <img src="${primaryImg}" alt="${displayName}" class="product-card-img-primary" loading="lazy"/>
          <img src="${secondaryImg}" alt="${displayName} alternate view" class="product-card-img-secondary" loading="lazy"/>
        </a>

        <!-- Quick Actions Overlay -->
        <div class="product-quick-actions">
          <button class="product-quick-view-btn" data-id="${product.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            ${quickViewText}
          </button>
          <div class="product-quick-add-panel">
            <span class="quick-add-label">${selectSizeText}</span>
            <div class="quick-add-sizes">${sizesHtml}</div>
          </div>
        </div>
      </div>

      <!-- Body / Details -->
      <div class="product-card-body">
        <div class="product-swatches">${swatchesHtml}</div>
        <div class="product-brand">${displayBrand}</div>
        <h4 class="product-name">
          <a href="${resolveUrl(`pages/product.html?slug=${product.slug}`)}">${displayName}</a>
        </h4>

        <div class="product-rating">
          <span class="star-rating">★</span>
          <span>${product.rating}</span>
          <span>(${product.reviewCount})</span>
        </div>

        <div class="product-price-row">
          <span class="product-price">${i18n.formatPrice(product.salePrice || product.price)}</span>
          ${
            product.salePrice
              ? `
            <span class="product-price-original">${i18n.formatPrice(product.price)}</span>
            <span class="product-discount-tag">-${product.discountPercent}%</span>
          `
              : ''
          }
        </div>
      </div>
    </div>
  `;
}

export function bindProductCardEvents(container = document) {
  // Wishlist clicks
  container.querySelectorAll('.product-wishlist-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const id = btn.dataset.id;
      store.toggleWishlist(id);
      const isNowIn = store.isInWishlist(id);
      btn.classList.toggle('active', isNowIn);

      // Heart burst particle animation
      btn.classList.remove('heart-burst');
      void btn.offsetWidth;
      btn.classList.add('heart-burst');
    });
  });

  // Quick View clicks
  container.querySelectorAll('.product-quick-view-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      events.emit('quickview:open', btn.dataset.id);
    });
  });

  // Quick Add size chip clicks (synchronous, no dynamic import)
  container.querySelectorAll('.product-card .size-chip').forEach((chip) => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = chip.closest('.product-card');
      if (!card) return;
      const prodId = card.dataset.id;
      const size = chip.dataset.size;

      const prod = (typeof getProductById === 'function' ? getProductById(prodId) : null) ||
                   products.find((p) => p.id === prodId);
      if (prod) {
        store.addToCart(prod, size, 'Obsidian', 1);
        const img = card.querySelector('.product-card-img-primary');
        triggerFlyToCart(img);
      }
    });
  });

  // Swatch hover/clicks to swap image
  container.querySelectorAll('.color-swatch-dot').forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = dot.closest('.product-card');
      if (!card) return;
      card.querySelectorAll('.color-swatch-dot').forEach((d) => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });
}
