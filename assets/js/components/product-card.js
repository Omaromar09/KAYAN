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

export const arabicNameMap = {
  // WOMEN (20)
  'Sculpted Wool Cocoon Coat': 'معطف صوف شرنقة منحوت',
  'Architectural Pleated Maxi Dress': 'فستان ماكسي بكسرات معمارية',
  'Raw Cashmere Turtleneck': 'كنزة كشمير خام بياقة عالية',
  'Double-Faced Tailored Blazer': 'بليزر صوف مفصل مزدوج الوجه',
  'Obsidian Silk Modest Kimono': 'كيمونو حريري محتشم بلون الأوبسيديان',
  'Wide-Leg Pleated Trousers': 'بنطال عريض الساق بكسرات كلاسيكية',
  'Atelier Sculptural Leather Tote': 'حقيبة يد جلدية نحتية من الأتيليه',
  'Sculpted Heel Leather Mules': 'حذاء بكعب نحتي من الجلد الطبيعي',
  'Oversized Poplin Shirt Dress': 'فستان قميص بوبلين بقصة فضفاضة',
  'Raw Hem Selvedge Denim': 'جينز سيلفدج بحواف خام طبيعية',
  'Silk Chiffon Evening Slip': 'فستان سهرة انسيابي من شيفون الحرير',
  'Brutalist Sculpted Brass Cuff': 'سوار نحاسي نحتي بأسلوب بروتالي',
  'Merino Ribbed Knit Coord Top': 'كنزة ميرينو مضلعة طقم متناسق',
  'Merino Ribbed Coord Maxi Skirt': 'تنورة ماكسي مضلعة من صوف الميرينو',
  'Belted Technical Storm Trench': 'معطف ترنش تقني واقٍ بحزام',
  'Maternity Pleated Wrap Gown': 'ثوب حمل ملفوف بكسرات انسيابية',
  'Monochrome Geometry Silk Foulard': 'وشاح حريري بنقوش هندسية مونوكروم',
  'Plus Form Sculpted Tunic': 'تونيك نحتي للمقاسات المريحة',
  'Titanium Geometric Sunglasses': 'نظارة شمسية هندسية من التيتانيوم',
  'Equinox Archive Cashmere Wrap': 'شال كشمير من أرشيف إكوينوكس',

  // MEN (18)
  'Boxy Boiled Wool Overshirt': 'قميص صوف مغلي بقصة بوكسي عصرية',
  'Double-Breasted Camel Overcoat': 'معطف جملي فاخر مزدوج الأزرار',
  'Japanese Selvedge Relaxed Denim': 'جينز سيلفدج ياباني بقصة مريحة',
  'Heavyweight 500GSM Loopback Hoodie': 'هودي قطني ثقيل 500 غرام',
  'Chunky Rib Wool Cardigan': 'كارديجان صوف محبوك بأضلاع سميكة',
  'Pleated Wide-Leg Wool Trousers': 'بنطال صوف عريض بكسرات متقنة',
  'Minimalist Leather Chelsea Boots': 'بوت تشيلسي جلدي تبسيطي فاخر',
  'Commando Sole Derby Shoes': 'حذاء ديربي بنعل كوماندو متين',
  'Pebble Grain Document Case': 'حقيبة مستندات جلدية بنقشة الحبيبات',
  'Mercerized Pima Cotton Tee': 'تيشيرت قطن بيما حريري معالج',
  'Technical Minimalist Mac Coat': 'معطف ماك تقني بأسلوب تبسيطي',
  'Unstructured Washed Linen Blazer': 'بليزر كتان مغسول بتصميم ناعم',
  'Fine Merino Mockneck Knit': 'كنزة ميرينو بياقة متوسطة الارتفاع',
  'Tailored Wool Drawstring Trousers': 'بنطال صوف برباط خصر مفصل',
  'Raw Leather Aviator Jacket': 'جاكيت طيارين من الجلد الطبيعي الخام',
  'Heavyweight Oxford Shirt': 'قميص أكسفورد قطني فاخر ثقيل',
  'Equinox Archive Hooded Wool Cape': 'كاب صوف بغطاء رأس من الأرشيف',
  'Architectural Buckle Leather Belt': 'حزام جلدي بإبزيم هندسي معماري',

  // KIDS (15)
  'Organic Cotton Ribbed Romper': 'أفرول أطفال مضلع من القطن العضوي',
  'Miniature Merino Cardigan': 'كارديجان أطفال صغير من صوف الميرينو',
  'Washed Corduroy Dungarees': 'سلوبيت أطفال مخمل كوردوروي مغسول',
  'Quilted Down Lightweight Puffer': 'سترة أطفال مبطنة بالريش خفيفة',
  'Tiered Linen Ceremony Dress': 'فستان مناسبات كتان بطبقات أنيقة',
  'Junior Tailored Linen Suit': 'بدلة كتان مفصلة للأطفال',
  'Soft Sole Leather Pre-Walkers': 'حذاء مشي أول جلدي بنعل ناعم',
  'Junior Suede Chelsea Boots': 'بوت تشيلسي شامواه للأطفال',
  'Teen Architectural Loopback Hoodie': 'هودي شبابي بقصة معمارية مريحة',
  'Teen Fluid Tailored Trousers': 'بنطال شبابي مفصل بقماش انسيابي',
  'Heritage Baby Cashmere Blanket': 'بطانية أطفال فاخرة من كشمير هيريتدج',
  'Summer Linen Smock & Shorts Set': 'طقم صيفي سموك وشورت كتان',
  'Reflective School Anorak': 'سترة مدرسية واقية عاكسة للضوء',
  'Low-Top Organic Canvas Sneakers': 'سنيكرز قماشي من القطن العضوي',
  'Equinox Ribbed Merino Beanie': 'قبعة بيني مضلعة من صوف الميرينو',

  // BEAUTY (15)
  'Damascus Rose Cellular Mist': 'رذاذ الورد الدمشقي الخلوي المنعش',
  'Obsidian Oud Extrait de Parfum': 'عطر أوبسيديان عود - إكستري دو بارفان',
  'Velvet Matte Lip Elixir - Terracotta': 'إكسير شفاه مخملي مطفأ - تيراكوتا',
  'Bian Stone Sculpting Gua Sha': 'أداة غوا شا لنحت الوجه بحجر بيان',
  'Botanical Squalane Recovery Oil': 'زيت التعافي بالسكوالين النباتي النقي',
  'Santal & Silt Extrait de Parfum': 'عطر صندل وسيلت - إكستري دو بارفان',
  'Peptide Contour Eye Balm': 'بلسم الببتيدات لشد محيط العينين',
  'Honey Infused Lip Plumping Glaze': 'ملمع شفاه ممتلئ بخلاصة العسل النقي',
  'Mineral Veil Invisible Sun Shield SPF 50': 'واقي شمس معدني شفاف SPF 50',
  'Hand-Pressed Amber Resin Cones': 'مخاريط بخور صمغ العنبر المعصور يدوياً',
  'Silk Peptide Rich Body Creme': 'كريم جسم غني ببروتينات الحرير',
  'Cashmere & Cedarwood Hand Salve': 'مرهم اليدين بالكشمير وخشب الأرز',
  'Noir Curling Clean Mineral Mascara': 'ماسكارا معدنية نقية لرموش مموجة',
  'Vetiver Solstice Botanical Cologne': 'كولونيا نباتية بنجيل الهند والانقلاب الشمسي',
  'Archive Discovery Fragrance Set (5x10ml)': 'مجموعة استكشاف العطور الأرشيفية (5×10 مل)',

  // HOME (15)
  'Fluted Travertine Sculptural Vessel': 'مزهرية نحتية مضلعة من حجر الترافرتين',
  'Belgian Washed Linen Duvet Set': 'طقم غطاء لحاف من الكتان البلجيكي المغسول',
  'Brutalist Architectural Pillar Candle': 'شمعة عمودية بتصميم معماري بروتالي',
  'Mouth-Blown Smoked Glass Carafe Set': 'طقم دورق زجاجي مدخن منفوخ يدوياً',
  'Handwoven Boucle Wool Blanket': 'بطانية صوف بوكليه منسوجة يدوياً',
  'Cast Bronze Monolith Bookends (Pair)': 'زوج مساند كتب مونوليث من البرونز المسبوك',
  'Hand-Thrown Stoneware Ribbed Pitcher': 'إبريق فخار حجري مضلع مصنوع يدوياً',
  'Sculpted Alabaster Luminary': 'حامل شموع نحتي من حجر الألباستر',
  'Wabi-Sabi Washed Linen Table Runner': 'مفرش طاولة كتان بأسلوب وابي-سابي',
  'Honed Walnut Sculptural Valet Tray': 'صينية تنظيم نحتية من خشب الجوز المصقول',
  'Matte Black Basalt Incense Dish': 'صحن بخور من صخر البازلت الأسود المطفأ',
  'Organic Turkish Cotton Waffle Bath Sheet': 'منشفة حمام وافل كبيرة من القطن التركي',
  'Brutalist Fluted Concrete Planter': 'أصيص خرساني مضلع بأسلوب بروتالي',
  'Hand-Blown Minimalist Oil Lamp': 'مصباح زيت تبسيطي من الزجاج المنفوخ',
  'Archive Cashmere & Suede Cushion': 'وسادة فاخرة من الكشمير والجلد السويدي'
};

const fallbackSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="100%" height="100%" fill="%23141416"/><text x="50%" y="46%" font-family="sans-serif" font-size="26" font-weight="700" fill="%23D4AF37" text-anchor="middle" letter-spacing="4">KAYAN</text><text x="50%" y="52%" font-family="sans-serif" font-size="14" fill="%238E8E93" text-anchor="middle" letter-spacing="2">ATELIER COLLECTION</text></svg>`;

export function createProductCardHtml(product) {
  const isWishlisted = store.isInWishlist(product.id);
  const primaryImg = (product.images && product.images[0]) || '';
  const secondaryImg = (product.images && product.images[1]) || primaryImg;
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
          <img src="${primaryImg}" alt="${displayName}" class="product-card-img-primary" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSvg}';"/>
          <img src="${secondaryImg}" alt="${displayName} alternate view" class="product-card-img-secondary" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSvg}';"/>
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
