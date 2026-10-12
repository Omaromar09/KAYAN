// KAYAN Atelier Unified Standalone Bundle (CORS-free for file:/// & http://)
(function() {
  "use strict";
/**
 * KAYAN Luxury Fashion — Localization Dictionaries (EN & AR)
 * Complete bilingual copywriting for all UI states, empty states, announcements, and buttons
 */

const translations = {
  en: {
    // Navigation & Departments
    'nav.women': 'Women',
    'nav.men': 'Men',
    'nav.kids': 'Kids',
    'nav.beauty': 'Beauty',
    'nav.home': 'Home & Living',
    'nav.wear_it': 'Wear KAYAN',
    'nav.shop_all': 'Shop All',
    'nav.search': 'Search collections...',
    'nav.search_hint': 'Press / to search',
    'nav.wishlist': 'Wishlist',
    'nav.bag': 'Bag',
    'nav.account': 'Account',

    // Announcements
    'announcement.free_shipping': 'Complimentary Global Express Delivery on orders over $150',
    'announcement.code': 'Enjoy 15% off your maiden acquisition with code KAYAN15',
    'announcement.equinox': 'The Equinox Archive Event: Buy 2 get 20%, Buy 3+ get 25%',
    'announcement.ends_in': 'Concludes in',

    // Hero & Homepage
    'hero.badge': 'Atelier Series No. 07',
    'hero.title': 'FORM MEETS EXISTENCE',
    'hero.subtitle': 'Architectural drape, tactile permanence, and refined silhouettes engineered for quiet distinction.',
    'hero.cta_primary': 'Explore Autumn Capsule',
    'hero.cta_secondary': 'View Editorial Lookbook',

    // Trending & Categories
    'section.trending_now': 'Trending Now',
    'section.trending_heading': 'Curated Silhouettes in Focus',
    'section.trending_desc': 'Fast-moving archival commissions and seasonal statements commanding attention globally.',
    'section.featured_products': 'Featured Archive Silhouettes',
    'section.featured_heading': 'Iconic Masterpieces In Focus',
    'section.featured_desc': 'Direct from the design ateliers — curated noble fibers, sculptural tailoring, and permanent wardrobe anchors.',
    'section.departments': 'Shop by Department',
    'section.flash_sale': 'The Equinox Flash Archive',
    'section.claimed': 'Claimed',
    'section.deal_urgency': 'Limited archival allocation remaining',
    'section.new_arrivals': 'New Arrivals',
    'section.editorial_story': 'Curated Silhouettes',
    'section.buy_more_save_more': 'Volume Privileges',
    'section.buy_more_desc': 'Acquire 2 pieces for 20% off. Acquire 3 or more for 25% off automatically at checkout.',
    'section.beauty_title': 'Botanical Alchimie & Fragrance',
    'section.home_title': 'Tactile Living & Brutalist Objects',
    'section.ugc_title': '#WearKayan Community Gallery',
    'section.ugc_desc': 'Real silhouettes captured across Dubai, Paris, Tokyo, and London. Tag @kayanstudio to feature.',
    'section.loyalty_title': 'The Kayan Circle',
    'section.loyalty_desc': 'An invitation to bespoke styling, private salon access, and unlisted archive drops.',
    'section.loyalty_join': 'Request Circle Access',
    'section.brand_story_tag': 'The Kayan Ethos',
    'section.services_shipping': 'Global Express Delivery',
    'section.services_returns': '30-Day Atelier Returns',
    'section.services_secure': 'End-to-End Encrypted Checkout',
    'section.services_concierge': '24/7 Private Stylist Concierge',

    // Bento Departments
    'bento.five_ateliers': 'The Five Ateliers',
    'bento.view_all': 'View All Silhouettes',
    'bento.women_title': "Women's Sculptural Form",
    'bento.women_desc': 'Dresses, virgin wool outerwear, and fine cashmere tailoring.',
    'bento.women_shop': 'Shop Women',
    'bento.men_title': 'Homme Tailoring',
    'bento.men_shop': 'Shop Men',
    'bento.beauty_title': 'Botanical Alchimie',
    'bento.beauty_explore': 'Explore Beauty',
    'bento.home_title': 'Maison & Objects',
    'bento.home_explore': 'Explore Living',
    'bento.kids_title': 'Enfant Wardrobe',
    'bento.kids_explore': 'Explore Kids',

    // Department Tabs
    'dept.all': 'All Ateliers',
    'dept.women': 'Women',
    'dept.men': 'Men',
    'dept.kids': 'Kids',
    'dept.beauty': 'Beauty',
    'dept.home': 'Home & Living',

    // Product Card & Actions
    'product.quick_add': 'Quick Add',
    'product.quick_view': 'Quick View',
    'product.size': 'Size',
    'product.color': 'Color',
    'product.add_to_bag': 'Add to Bag',
    'product.select_size': 'Select Size',
    'product.badge_new': 'New Arrival',
    'product.badge_sale': 'Archive Special',
    'product.badge_exclusive': 'Online Exclusive',
    'product.badge_eco': 'Conscious Craft',

    // Cart Drawer
    'cart.title': 'Your Shopping Bag',
    'cart.free_shipping_unlocked': 'Complimentary Express Delivery Unlocked',
    'cart.free_shipping_needed': 'Add {amount} more for Complimentary Express Delivery',
    'cart.subtotal': 'Subtotal',
    'cart.volume_discount': 'Volume Discount',
    'cart.promo_discount': 'Promotional Privilege',
    'cart.shipping': 'Shipping',
    'cart.free': 'Free',
    'cart.total': 'Estimated Total',
    'cart.checkout': 'Proceed to Checkout',
    'cart.empty_title': 'Your Bag is Empty',
    'cart.empty_desc': 'Your personal archive awaits discovery.',
    'cart.discover': 'Explore New Arrivals',
    'cart.promo_placeholder': 'PROMO CODE',
    'cart.apply': 'Apply',

    // PLP Filter & Sort
    'shop.archive_title': 'Ready-to-Wear Archive',
    'shop.archive_desc': 'Sculptural forms crafted from organic Egyptian cotton, Mongolian cashmere, raw mulberry silk, and architectural linen.',
    'shop.all_products': 'All Silhouettes',
    'shop.filters': 'Filters',
    'shop.sort_by': 'Sort By',
    'shop.sort_recommended': 'Curated Recommendation',
    'shop.sort_newest': 'Newest Arrivals',
    'shop.sort_price_asc': 'Price: Low to High',
    'shop.sort_price_desc': 'Price: High to Low',
    'shop.sort_rating': 'Highest Rated',
    'shop.clear_filters': 'Clear All',
    'shop.active_filters': 'Active Filters',
    'shop.no_results': 'No silhouettes match your chosen criteria.',

    // Footer
    'footer.newsletter_title': 'The Kayan Dispatch',
    'footer.newsletter_desc': 'Quarterly meditations on form, craft, and private preview invitations.',
    'footer.newsletter_placeholder': 'Enter your email address',
    'footer.newsletter_subscribe': 'Subscribe',
    'footer.download_app': 'Download Mobile App',
    'footer.rights': 'All rights reserved. Designed with architectural rigor.'
  },

  ar: {
    // Navigation & Departments
    'nav.women': 'النساء',
    'nav.men': 'الرجال',
    'nav.kids': 'الأطفال',
    'nav.beauty': 'الجمال والعطور',
    'nav.home': 'المنزل والديكور',
    'nav.wear_it': 'إطلالات كَيَان',
    'nav.shop_all': 'تسوق الكل',
    'nav.search': 'ابحث في التشكيلات...',
    'nav.search_hint': 'اضغط / للبحث السريع',
    'nav.wishlist': 'المفضلة',
    'nav.bag': 'الحقيبة',
    'nav.account': 'الحساب',

    // Announcements
    'announcement.free_shipping': 'شحن دولي سريع مجاني للطلبات التي تتجاوز 150 دولار',
    'announcement.code': 'استمتع بخصم 15% على طلبك الأول عبر الرمز KAYAN15',
    'announcement.equinox': 'مهرجان الاعتدال: قطعتان بخصم 20%، و3 قطع بخصم 25%',
    'announcement.ends_in': 'ينتهي خلال',

    // Hero & Homepage
    'hero.badge': 'سلسلة الأتيليه رقم 07',
    'hero.title': 'الجوهر يتجلّى في الهيئة',
    'hero.subtitle': 'قصّات معمارية، وخامات مستدامة، وأناقة راقية صُممت لحضور هادئ واستثنائي.',
    'hero.cta_primary': 'استكشف تشكيلة الخريف',
    'hero.cta_secondary': 'شاهد كتالوج الإطلالات',

    // Trending & Categories
    'section.trending_now': 'الأكثر طلباً الآن',
    'section.trending_heading': 'تصاميم مختارة تخطف الأنظار',
    'section.trending_desc': 'قصات أرشيفية مميزة تفرض حضورها في كبرى عواصم الموضة العالمية.',
    'section.featured_products': 'مختارات الأرشيف المميزة',
    'section.featured_heading': 'روائع التصاميم الأيقونية',
    'section.featured_desc': 'مباشرة من استوديوهات التصميم — خامات نباتية فاخرة، وقصّات معمارية متقنة تمنحك حضوراً واثقاً ودائماً.',
    'section.departments': 'تسوق حسب القسم',
    'section.flash_sale': 'عروض الأرشيف الحصرية',
    'section.claimed': 'تم حجزها',
    'section.deal_urgency': 'كميات أرشيفية محدودة جداً متبقية',
    'section.new_arrivals': 'أحدث التصاميم',
    'section.editorial_story': 'قصّات منتقاة',
    'section.buy_more_save_more': 'امتيازات الشراء المتعدد',
    'section.buy_more_desc': 'احصل على قطعتين بخصم 20%، أو 3 قطع فأكثر بخصم 25% تلقائياً عند الدفع.',
    'section.beauty_title': 'كيمياء النباتات والعطور النقية',
    'section.home_title': 'قطع منزلية فنية وأوانٍ معمارية',
    'section.ugc_title': 'معرض مجتمع #WearKayan',
    'section.ugc_desc': 'إطلالات واقعية من دبي، وباريس، وطوكيو، ولندن. أشر إلينا بـ @kayanstudio لتظهر هنا.',
    'section.loyalty_title': 'دائرة كَيَان للولاء',
    'section.loyalty_desc': 'دعوة خاصة للاستشارات الشخصية وقطع الأرشيف السرية الحصرية.',
    'section.loyalty_join': 'طلب الانضمام للدائرة',
    'section.brand_story_tag': 'فلسفة كَيَان',
    'section.services_shipping': 'توصيل دولي سريع',
    'section.services_returns': 'إرجاع سهل خلال 30 يوماً',
    'section.services_secure': 'دفع إلكتروني آمن ومشفر',
    'section.services_concierge': 'منسق أزياء خاص على مدار الساعة',

    // Bento Departments
    'bento.five_ateliers': 'الأتيليهات الخمسة',
    'bento.view_all': 'عرض جميع التصاميم',
    'bento.women_title': 'التصاميم النسائية المنحوتة',
    'bento.women_desc': 'فساتين، معاطف صوف بكر، وبدلات كشمير فاخرة.',
    'bento.women_shop': 'تسوق النساء',
    'bento.men_title': 'أناقة الرجل المعمارية',
    'bento.men_shop': 'تسوق الرجال',
    'bento.beauty_title': 'كيمياء العطور والجمال',
    'bento.beauty_explore': 'استكشف الجمال',
    'bento.home_title': 'المنزل والتحف الفنية',
    'bento.home_explore': 'استكشف الديكور',
    'bento.kids_title': 'أناقة الأطفال والناشئة',
    'bento.kids_explore': 'تشكيلة الأطفال',

    // Department Tabs
    'dept.all': 'جميع الأقسام',
    'dept.women': 'النساء',
    'dept.men': 'الرجال',
    'dept.kids': 'الأطفال',
    'dept.beauty': 'الجمال والعطور',
    'dept.home': 'المنزل والديكور',

    // Product Card & Actions
    'product.quick_add': 'إضافة سريعة',
    'product.quick_view': 'نظرة سريعة',
    'product.size': 'المقاس',
    'product.color': 'اللون',
    'product.add_to_bag': 'أضف إلى الحقيبة',
    'product.select_size': 'اختر المقاس',
    'product.badge_new': 'وصل حديثاً',
    'product.badge_sale': 'عرض أرشيفي',
    'product.badge_exclusive': 'حصري إلكترونياً',
    'product.badge_eco': 'صناعة واعية',

    // Cart Drawer
    'cart.title': 'حقيبة التسوق الخاصة بك',
    'cart.free_shipping_unlocked': 'تم تفعيل التوصيل السريع المجاني',
    'cart.free_shipping_needed': 'أضف {amount} إضافية للحصول على توصيل سريع مجاني',
    'cart.subtotal': 'المجموع الفرعي',
    'cart.volume_discount': 'خصم الكمية',
    'cart.promo_discount': 'امتياز الرمز الترويجي',
    'cart.shipping': 'الشحن والتوصيل',
    'cart.free': 'مجاني',
    'cart.total': 'المجموع الإجمالي',
    'cart.checkout': 'متابعة الدفع',
    'cart.empty_title': 'حقيبتك فارغة حالياً',
    'cart.empty_desc': 'أرشيفك الخاص بانتظار استكشافك.',
    'cart.discover': 'اكتشف أحدث التصاميم',
    'cart.promo_placeholder': 'رمز الخصم',
    'cart.apply': 'تطبيق',

    // PLP Filter & Sort
    'shop.archive_title': 'أرشيف الأزياء الجاهزة',
    'shop.archive_desc': 'قصّات معمارية منتقاة بعناية من القطن المصري العضوي، وكشمير منغوليا، والحرير التوتي الخام، والكتان الطبيعي.',
    'shop.all_products': 'جميع التصاميم',
    'shop.filters': 'تصفية النتائج',
    'shop.sort_by': 'ترتيب حسب',
    'shop.sort_recommended': 'توصيات منتقاة',
    'shop.sort_newest': 'الأحدث وصولاً',
    'shop.sort_price_asc': 'السعر: من الأقل للأعلى',
    'shop.sort_price_desc': 'السعر: من الأعلى للأقل',
    'shop.sort_rating': 'الأعلى تقييماً',
    'shop.clear_filters': 'إعادة ضبط الكل',
    'shop.active_filters': 'الفلاتر النشطة',
    'shop.no_results': 'لا توجد تصاميم مطابقة للمعايير المحددة.',

    // Footer
    'footer.newsletter_title': 'نشرة كَيَان الإخبارية',
    'footer.newsletter_desc': 'تأملات فصلية في الجمال والتصميم، مع دعوات حصرية للعروض التمهيدية.',
    'footer.newsletter_placeholder': 'أدخل عنوان بريدك الإلكتروني',
    'footer.newsletter_subscribe': 'اشتراك',
    'footer.download_app': 'حمل تطبيق الهاتف',
    'footer.rights': 'جميع الحقوق محفوظة. صُمم بهندسة معمارية وأناقة مستدامة.'
  }
};
/**
 * KAYAN Luxury Fashion — Categories Architecture
 * Complete taxonomy for 5 departments: Women, Men, Kids, Beauty, Home
 */

const categories = {
  women: {
    id: 'women',
    name: 'Women',
    nameAr: 'النساء',
    featuredImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop&q=80',
    sections: [
      {
        id: 'trending',
        title: 'Trending Now',
        titleAr: 'الأكثر طلباً',
        items: [
          { name: 'New In', nameAr: 'وصل حديثاً', slug: 'women-new-in', thumb: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&auto=format&fit=crop&q=80' },
          { name: 'Coords & Tailoring', nameAr: 'أطقم وبدلات', slug: 'women-coords', thumb: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=100&auto=format&fit=crop&q=80' },
          { name: 'Modest Silhouettes', nameAr: 'أزياء محتشمة', slug: 'women-modest', thumb: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=100&auto=format&fit=crop&q=80' },
          { name: 'Atelier Workwear', nameAr: 'ملابس العمل', slug: 'women-workwear', thumb: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=100&auto=format&fit=crop&q=80' },
          { name: 'Raw Essentials', nameAr: 'أساسيات نقية', slug: 'women-essentials', thumb: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=100&auto=format&fit=crop&q=80' },
          { name: 'Sculpted Denim', nameAr: 'جينز منحوت', slug: 'women-denim', thumb: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=100&auto=format&fit=crop&q=80' },
          { name: 'Luxury Neutrals', nameAr: 'ألوان حيادية', slug: 'women-neutrals', thumb: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=100&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'clothing',
        title: 'Clothing',
        titleAr: 'الملابس',
        items: [
          { name: 'Coats & Trenches', nameAr: 'معاطف وترنش', slug: 'women-coats', thumb: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=100&auto=format&fit=crop&q=80' },
          { name: 'Dresses & Maxis', nameAr: 'فساتين وماكسي', slug: 'women-dresses', thumb: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=100&auto=format&fit=crop&q=80' },
          { name: 'Blazers & Jackets', nameAr: 'بليزر وجواكيت', slug: 'women-blazers', thumb: 'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?w=100&auto=format&fit=crop&q=80' },
          { name: 'Pants & Trousers', nameAr: 'بناطيل كلاسيكية', slug: 'women-pants', thumb: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=100&auto=format&fit=crop&q=80' },
          { name: 'Cashmere & Sweaters', nameAr: 'كنزات كشمير', slug: 'women-sweaters', thumb: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&auto=format&fit=crop&q=80' },
          { name: 'Silk Tops & Shirts', nameAr: 'قمصان حرير', slug: 'women-tops', thumb: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=100&auto=format&fit=crop&q=80' },
          { name: 'Pleated Skirts', nameAr: 'تنانير بليسيه', slug: 'women-skirts', thumb: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=100&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'accessories',
        title: 'Shoes & Accessories',
        titleAr: 'الأحذية والإكسسوارات',
        items: [
          { name: 'Sculptural Heels', nameAr: 'أحذية كعب عالي', slug: 'women-heels', thumb: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=100&auto=format&fit=crop&q=80' },
          { name: 'Atelier Leather Bags', nameAr: 'حقائب جلدية', slug: 'women-bags', thumb: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&auto=format&fit=crop&q=80' },
          { name: 'Brutalist Jewelry', nameAr: 'مجوهرات فنية', slug: 'women-jewelry', thumb: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&auto=format&fit=crop&q=80' },
          { name: 'Silk Scarves', nameAr: 'أوشحة حرير', slug: 'women-scarves', thumb: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&auto=format&fit=crop&q=80' },
          { name: 'Architectural Eyewear', nameAr: 'نظارات شمسية', slug: 'women-eyewear', thumb: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=100&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'curations',
        title: 'Atelier Curations',
        titleAr: 'مجموعات خاصة',
        items: [
          { name: 'Online Exclusives', nameAr: 'حصريات الموقع', slug: 'women-exclusives', thumb: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=100&auto=format&fit=crop&q=80' },
          { name: 'The Equinox Archive', nameAr: 'أرشيف الاعتدال', slug: 'women-archive', thumb: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=100&auto=format&fit=crop&q=80' },
          { name: 'Maternity Atelier', nameAr: 'أزياء أمومة راقية', slug: 'women-maternity', thumb: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=100&auto=format&fit=crop&q=80' },
          { name: 'Curve & Plus Form', nameAr: 'مقاسات مريحة', slug: 'women-plus', thumb: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=100&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },
  men: {
    id: 'men',
    name: 'Men',
    nameAr: 'الرجال',
    featuredImage: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&auto=format&fit=crop&q=80',
    sections: [
      {
        id: 'trending_men',
        title: 'Trending Men',
        titleAr: 'الأكثر طلباً للرجال',
        items: [
          { name: 'Boxy Overshirts', nameAr: 'قمصان فضفاضة', slug: 'men-overshirts', thumb: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&auto=format&fit=crop&q=80' },
          { name: 'Tailored Overcoats', nameAr: 'معاطف رسمية', slug: 'men-overcoats', thumb: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&auto=format&fit=crop&q=80' },
          { name: 'Heavyweight Knits', nameAr: 'كنزات شتوية ثقيلة', slug: 'men-knits', thumb: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=100&auto=format&fit=crop&q=80' },
          { name: 'Wide-Leg Trousers', nameAr: 'بناطيل واسعة', slug: 'men-trousers', thumb: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=100&auto=format&fit=crop&q=80' },
          { name: 'Japanese Selvedge Denim', nameAr: 'جينز ياباني', slug: 'men-denim', thumb: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'clothing_men',
        title: 'Apparel',
        titleAr: 'الملابس',
        items: [
          { name: 'Double-Breasted Blazers', nameAr: 'بليزر كلاسيكي', slug: 'men-blazers', thumb: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&auto=format&fit=crop&q=80' },
          { name: 'Pima Cotton Tees', nameAr: 'تيشيرتات قطن فاخر', slug: 'men-tees', thumb: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&auto=format&fit=crop&q=80' },
          { name: 'Loopback Hoodies', nameAr: 'هوديز مريحة', slug: 'men-hoodies', thumb: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=100&auto=format&fit=crop&q=80' },
          { name: 'Technical Trenches', nameAr: 'معاطف مطر تقنية', slug: 'men-trenches', thumb: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=100&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'shoes_men',
        title: 'Footwear & Objects',
        titleAr: 'الأحذية والإكسسوارات',
        items: [
          { name: 'Derby & Oxford Shoes', nameAr: 'أحذية دربي وأوكسفورد', slug: 'men-derbies', thumb: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=100&auto=format&fit=crop&q=80' },
          { name: 'Minimalist Chelsea Boots', nameAr: 'أحذية تشيلسي', slug: 'men-boots', thumb: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=100&auto=format&fit=crop&q=80' },
          { name: 'Grain Leather Briefcases', nameAr: 'حقائب جلدية', slug: 'men-bags', thumb: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },
  kids: {
    id: 'kids',
    name: 'Kids',
    nameAr: 'الأطفال',
    featuredImage: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=800&auto=format&fit=crop&q=80',
    sections: [
      {
        id: 'kids_ages',
        title: 'Age Divisions',
        titleAr: 'الفئات العمرية',
        items: [
          { name: 'Baby (0–2 Years)', nameAr: 'الرضع (0-2 سنة)', slug: 'kids-baby', thumb: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=100&auto=format&fit=crop&q=80' },
          { name: 'Girls (2–8 Years)', nameAr: 'البنات (2-8 سنوات)', slug: 'kids-girls-2-8', thumb: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=100&auto=format&fit=crop&q=80' },
          { name: 'Boys (2–8 Years)', nameAr: 'الأولاد (2-8 سنوات)', slug: 'kids-boys-2-8', thumb: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&auto=format&fit=crop&q=80' },
          { name: 'Girls (8–16 Years)', nameAr: 'الفتيات (8-16 سنة)', slug: 'kids-girls-8-16', thumb: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=100&auto=format&fit=crop&q=80' },
          { name: 'Boys (8–16 Years)', nameAr: 'الفتيان (8-16 سنة)', slug: 'kids-boys-8-16', thumb: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=100&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'kids_categories',
        title: 'Kids Wardrobe',
        titleAr: 'ملابس وأحذية',
        items: [
          { name: 'Organic Knitwear', nameAr: 'ملابس صوف عضوية', slug: 'kids-knits', thumb: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&auto=format&fit=crop&q=80' },
          { name: 'Miniature Footwear', nameAr: 'أحذية أطفال', slug: 'kids-shoes', thumb: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=100&auto=format&fit=crop&q=80' },
          { name: 'Occasion & Ceremony', nameAr: 'ملابس مناسبات', slug: 'kids-occasion', thumb: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=100&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },
  beauty: {
    id: 'beauty',
    name: 'Beauty',
    nameAr: 'الجمال والعطور',
    featuredImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80',
    sections: [
      {
        id: 'beauty_categories',
        title: 'Botanical Formulations',
        titleAr: 'العناية ومستحضرات التجميل',
        items: [
          { name: 'Extrait de Parfum', nameAr: 'عطور مركزة', slug: 'beauty-perfumes', thumb: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&auto=format&fit=crop&q=80' },
          { name: 'Cellular Skincare', nameAr: 'عناية بالبشرة', slug: 'beauty-skincare', thumb: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=100&auto=format&fit=crop&q=80' },
          { name: 'Atelier Lip Color', nameAr: 'أحمر شفاه مخملي', slug: 'beauty-lips', thumb: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=100&auto=format&fit=crop&q=80' },
          { name: 'Sculpting Oils', nameAr: 'زيوت نحت الوجه', slug: 'beauty-oils', thumb: 'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=100&auto=format&fit=crop&q=80' }
        ]
      },
      {
        id: 'beauty_brands',
        title: 'Fictional Niche Houses',
        titleAr: 'دور العطور الحصرية',
        items: [
          { name: 'KAYAN Alchimie', nameAr: 'كَيَان ألكيمي', slug: 'brand-kayan-alchimie', thumb: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=100&auto=format&fit=crop&q=80' },
          { name: 'Nour Labs Paris', nameAr: 'نور لابس باريس', slug: 'brand-nour-labs', thumb: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=100&auto=format&fit=crop&q=80' },
          { name: 'Santal & Silt', nameAr: 'صندل وسيلت', slug: 'brand-santal-silt', thumb: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=100&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  },
  home: {
    id: 'home',
    name: 'Home & Living',
    nameAr: 'المنزل والديكور',
    featuredImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80',
    sections: [
      {
        id: 'home_curation',
        title: 'Living Spaces',
        titleAr: 'مساحات المعيشة',
        items: [
          { name: 'Travertine Vessels', nameAr: 'أواني الترافرتين', slug: 'home-vessels', thumb: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=100&auto=format&fit=crop&q=80' },
          { name: 'Belgian Linen Bedding', nameAr: 'مفارش كتان بلجيكي', slug: 'home-bedding', thumb: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=100&auto=format&fit=crop&q=80' },
          { name: 'Brutalist Candles', nameAr: 'شموع معمارية', slug: 'home-candles', thumb: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=100&auto=format&fit=crop&q=80' },
          { name: 'Smoked Glass Carafes', nameAr: 'زجاج مدخن وأكواب', slug: 'home-dining', thumb: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=100&auto=format&fit=crop&q=80' }
        ]
      }
    ]
  }
};
/**
 * KAYAN Luxury Fashion — Global Flagship Stores Data
 * 12+ physical ateliers with coordinates, hours, contact, and live status
 */

const stores = [
  {
    id: 'store-dubai',
    name: 'KAYAN Dubai Mall Atelier',
    city: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Fashion Avenue, Level 2, The Dubai Mall, Downtown Dubai',
    phone: '+971 4 382 7100',
    hours: '10:00 AM – 11:00 PM',
    hoursRaw: { open: 10, close: 23 },
    lat: 25.1972,
    lng: 55.2744,
    features: ['Private Styling Salon', 'VIP Archive Vault', 'Tailoring Workshop'],
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-riyadh',
    name: 'KAYAN Riyadh Centria',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    address: 'Centria Mall, Olaya St & Tahliya Intersection',
    phone: '+966 11 462 8900',
    hours: '10:00 AM – 10:30 PM',
    hoursRaw: { open: 10, close: 22.5 },
    lat: 24.6989,
    lng: 46.6853,
    features: ['Perfumery Bar', 'Personal Shopping Suite', 'Complimentary Valet'],
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-london',
    name: 'KAYAN London Bond Street',
    city: 'London',
    country: 'United Kingdom',
    address: '42 New Bond Street, Mayfair, London W1S 2RY',
    phone: '+44 20 7493 8800',
    hours: '10:00 AM – 7:00 PM',
    hoursRaw: { open: 10, close: 19 },
    lat: 51.5126,
    lng: -0.1444,
    features: ['Made-to-Measure', 'Artisan Cobbler Concierge', 'Tea Salon'],
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-paris',
    name: 'KAYAN Paris Saint-Honoré',
    city: 'Paris',
    country: 'France',
    address: '228 Rue Saint-Honoré, 75001 Paris',
    phone: '+33 1 42 61 70 00',
    hours: '10:30 AM – 7:30 PM',
    hoursRaw: { open: 10.5, close: 19.5 },
    lat: 48.8661,
    lng: 2.3298,
    features: ['Haute Archive Display', 'Champagne Bar', 'Multilingual Stylists'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-milan',
    name: 'KAYAN Milano Montenapoleone',
    city: 'Milan',
    country: 'Italy',
    address: 'Via Montenapoleone 18, 20121 Milano',
    phone: '+39 02 7600 4500',
    hours: '10:00 AM – 7:30 PM',
    hoursRaw: { open: 10, close: 19.5 },
    lat: 45.4695,
    lng: 9.1952,
    features: ['Leather Craftsmanship Studio', 'Espresso Lounge'],
    image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-newyork',
    name: 'KAYAN New York Madison',
    city: 'New York',
    country: 'United States',
    address: '740 Madison Avenue, New York, NY 10065',
    phone: '+1 212 555 0192',
    hours: '10:00 AM – 6:30 PM',
    hoursRaw: { open: 10, close: 18.5 },
    lat: 40.7663,
    lng: -73.9686,
    features: ['Same-Day Manhattan Courier', 'VIP Penthouse Salon'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-tokyo',
    name: 'KAYAN Tokyo Ginza',
    city: 'Tokyo',
    country: 'Japan',
    address: 'Ginza Six 4F, 6-10-1 Ginza, Chuo-ku, Tokyo',
    phone: '+81 3 3572 6100',
    hours: '10:30 AM – 8:30 PM',
    hoursRaw: { open: 10.5, close: 20.5 },
    lat: 35.6696,
    lng: 139.764,
    features: ['Japanese Selvedge Custom Studio', 'Zen Consultation Garden'],
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-cairo',
    name: 'KAYAN Cairo Arkan',
    city: 'Cairo',
    country: 'Egypt',
    address: 'Arkan Plaza, Building 4, El Sheikh Zayed, Giza',
    phone: '+20 2 3851 4000',
    hours: '10:00 AM – 11:00 PM',
    hoursRaw: { open: 10, close: 23 },
    lat: 30.0131,
    lng: 30.9859,
    features: ['Home & Living Gallery', 'Custom Embroidery Service'],
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-doha',
    name: 'KAYAN Doha Place Vendôme',
    city: 'Doha',
    country: 'Qatar',
    address: 'Place Vendôme Mall, Luxury Boulevard, Lusail',
    phone: '+974 4496 5500',
    hours: '10:00 AM – 11:00 PM',
    hoursRaw: { open: 10, close: 23 },
    lat: 25.4192,
    lng: 51.5273,
    features: ['Royal Suite', 'Jewelry & Rare Timepiece Vault'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-kuwait',
    name: 'KAYAN Kuwait Prestige',
    city: 'Kuwait City',
    country: 'Kuwait',
    address: 'The Avenues Mall, Prestige District, Al Rai',
    phone: '+965 2259 7000',
    hours: '10:00 AM – 10:00 PM',
    hoursRaw: { open: 10, close: 22 },
    lat: 29.3039,
    lng: 47.9378,
    features: ['Private Salon Appointments', 'Perfumery Consultations'],
    image: 'https://images.unsplash.com/photo-1519643381401-22c77e60520e?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-abudhabi',
    name: 'KAYAN Abu Dhabi Galleria',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    address: 'The Galleria, Level 2, Al Maryah Island',
    phone: '+971 2 493 7400',
    hours: '10:00 AM – 10:00 PM',
    hoursRaw: { open: 10, close: 22 },
    lat: 24.4988,
    lng: 54.3887,
    features: ['Waterfront Terrace Consultations', 'Stylist Suites'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'store-jeddah',
    name: 'KAYAN Jeddah Red Sea',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    address: 'Red Sea Mall, Gate 4, King Abdulaziz Road',
    phone: '+966 12 215 0500',
    hours: '10:00 AM – 11:00 PM',
    hoursRaw: { open: 10, close: 23 },
    lat: 21.6268,
    lng: 39.1107,
    features: ['Atelier Services', 'VIP Parking'],
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&auto=format&fit=crop&q=80'
  }
];

function isStoreOpen(store) {
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  return currentHour >= store.hoursRaw.open && currentHour < store.hoursRaw.close;
}
/**
 * KAYAN Luxury Fashion — Customer Reviews & UGC Community Gallery
 */

const ugcPosts = [
  {
    id: 'ugc-1',
    handle: '@soraya.atelier',
    location: 'Dubai Marina',
    likes: 1420,
    caption: 'Quiet mornings draped in the Wool Cocoon Coat. Architectural perfection.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&auto=format&fit=crop&q=80',
    taggedProductId: 'kayan-w-01'
  },
  {
    id: 'ugc-2',
    handle: '@malek_khalil',
    location: 'Mayfair, London',
    likes: 980,
    caption: 'The boxy wool overshirt has become my daily uniform.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    taggedProductId: 'kayan-m-01'
  },
  {
    id: 'ugc-3',
    handle: '@amina.alzaid',
    location: 'Riyadh Art District',
    likes: 2150,
    caption: 'Pleated kimono in deep obsidian. Fluid movement, effortless presence.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80',
    taggedProductId: 'kayan-w-05'
  },
  {
    id: 'ugc-4',
    handle: '@julien_mercier',
    location: 'Le Marais, Paris',
    likes: 1640,
    caption: 'Tactile linen duvet and stone vessels. Home as sanctuary.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop&q=80',
    taggedProductId: 'kayan-h-01'
  },
  {
    id: 'ugc-5',
    handle: '@leila.noir',
    location: 'Ginza, Tokyo',
    likes: 1890,
    caption: 'Damascus Rose elixir paired with raw silk tailoring.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80',
    taggedProductId: 'kayan-b-01'
  },
  {
    id: 'ugc-6',
    handle: '@tariq_design',
    location: 'Sheikh Zayed, Cairo',
    likes: 1120,
    caption: 'Subtle luxury in every seam. Selvedge denim and Chelsea boots.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80',
    taggedProductId: 'kayan-m-03'
  }
];

const sampleReviews = [
  {
    id: 'rev-1',
    author: 'Elena R.',
    city: 'Milan',
    rating: 5,
    title: 'Exquisite drape and weight',
    comment: 'The wool has a dense yet fluid hand-feel reminiscent of old-world European tailoring. The cut across the shoulders is immaculate.',
    date: '2 weeks ago',
    fit: 'True to Size',
    verified: true,
    helpful: 34
  },
  {
    id: 'rev-2',
    author: 'Fahad Al-Hassan',
    city: 'Riyadh',
    rating: 5,
    title: 'Modern silhouette with remarkable presence',
    comment: 'Wore this to an evening exhibition opening. Received dozens of compliments. The stitching and internal lining show true artisanal pedigree.',
    date: '1 month ago',
    fit: 'Relaxed Elegance',
    verified: true,
    helpful: 28
  },
  {
    id: 'rev-3',
    author: 'Camille D.',
    city: 'Paris',
    rating: 5,
    title: 'The benchmark of quiet luxury',
    comment: 'Packaging arrived with an engraved cedar garment hanger and scented paper. Felt like receiving a bespoke salon commission.',
    date: '3 weeks ago',
    fit: 'True to Size',
    verified: true,
    helpful: 19
  }
];
/**
 * KAYAN Luxury Fashion - Complete Products Catalog
 * 83 High-Fashion items across 5 departments with rich specifications
 */

const products = [
  {
    id: 'kayan-w-01',
    slug: 'sculpted-wool-cocoon-coat',
    name: 'Sculpted Wool Cocoon Coat',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-coats',
    price: 420,
    salePrice: 336,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 8 },
      { size: 'S', stock: 23 },
      { size: 'M', stock: 8 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 17 }
    ],
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 34,
    badges: ["New","Best Seller"],
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: '100% Virgin Merino Wool',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Generous oversized silhouette with dropped shoulders',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-02',
    slug: 'architectural-pleated-maxi-dress',
    name: 'Architectural Pleated Maxi Dress',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-dresses',
    price: 360,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 17 },
      { size: 'S', stock: 20 },
      { size: 'M', stock: 22 },
      { size: 'L', stock: 10 },
      { size: 'XL', stock: 22 }
    ],
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 119,
    badges: "Online Exclusive",
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: 'Japanese Micro-Pleated Chiffon',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Fluid column silhouette with natural stretch',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-03',
    slug: 'raw-cashmere-turtleneck-sweater',
    name: 'Raw Cashmere Turtleneck',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-sweaters',
    price: 280,
    salePrice: 224,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 22 },
      { size: 'S', stock: 4 },
      { size: 'M', stock: 5 },
      { size: 'L', stock: 4 },
      { size: 'XL', stock: 7 }
    ],
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 109,
    badges: "Eco",
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: '100% Grade-A Mongolian Cashmere',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Relaxed body with elongated ribbed cuffs',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-04',
    slug: 'double-faced-tailored-blazer',
    name: 'Double-Faced Tailored Blazer',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-blazers',
    price: 390,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 8 },
      { size: 'S', stock: 15 },
      { size: 'M', stock: 27 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 16 }
    ],
    images: [
      'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 33,
    badges: "New",
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: '80% Wool, 20% Silk',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Structured hourglass tailoring',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-05',
    slug: 'obsidian-silk-modest-kimono',
    name: 'Obsidian Silk Modest Kimono',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'trending',
    subcategory: 'women-modest',
    price: 450,
    salePrice: 360,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 9 },
      { size: 'S', stock: 17 },
      { size: 'M', stock: 10 },
      { size: 'L', stock: 20 },
      { size: 'XL', stock: 12 }
    ],
    images: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 26,
    badges: ["Limited","Online Exclusive"],
    tags: ['Atelier', 'women', 'trending', 'Luxury'],
    material: '100% Mulberry Sandwashed Silk',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Full length flowing drape',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-06',
    slug: 'wide-leg-pleated-trousers',
    name: 'Wide-Leg Pleated Trousers',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-pants',
    price: 240,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 18 },
      { size: 'S', stock: 6 },
      { size: 'M', stock: 8 },
      { size: 'L', stock: 7 },
      { size: 'XL', stock: 22 }
    ],
    images: [
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 102,
    badges: "Best Seller",
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: 'High-twist wool gabardine',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'High waist with sharp pressed front pleats',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-07',
    slug: 'atelier-leather-tote-bag',
    name: 'Atelier Sculptural Leather Tote',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'accessories',
    subcategory: 'women-bags',
    price: 520,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 15 },
      { size: 'S', stock: 14 },
      { size: 'M', stock: 4 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 10 }
    ],
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 28,
    badges: "New",
    tags: ['Atelier', 'women', 'accessories', 'Luxury'],
    material: 'Full-grain Italian calfskin',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Structured geometric architecture',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-08',
    slug: 'sculpted-heel-leather-mules',
    name: 'Sculpted Heel Leather Mules',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'accessories',
    subcategory: 'women-heels',
    price: 310,
    salePrice: 248,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 5 },
      { size: 'S', stock: 24 },
      { size: 'M', stock: 26 },
      { size: 'L', stock: 21 },
      { size: 'XL', stock: 9 }
    ],
    images: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 79,
    badges: "Archive Special",
    tags: ['Atelier', 'women', 'accessories', 'Luxury'],
    material: 'Supple nappa leather',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Ergonomic 65mm geometric block heel',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-09',
    slug: 'oversized-poplin-shirt-dress',
    name: 'Oversized Poplin Shirt Dress',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-dresses',
    price: 220,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 10 },
      { size: 'S', stock: 5 },
      { size: 'M', stock: 23 },
      { size: 'L', stock: 7 },
      { size: 'XL', stock: 6 }
    ],
    images: [
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 23,
    badges: "Eco",
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: '100% GOTS Organic Crisp Cotton',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Airy cocoon silhouette',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-10',
    slug: 'raw-hem-selvedge-denim',
    name: 'Raw Hem Selvedge Denim',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'trending',
    subcategory: 'women-denim',
    price: 210,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 25 },
      { size: 'S', stock: 17 },
      { size: 'M', stock: 17 },
      { size: 'L', stock: 23 },
      { size: 'XL', stock: 21 }
    ],
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 108,
    badges: "New",
    tags: ['Atelier', 'women', 'trending', 'Luxury'],
    material: '13oz Japanese Raw Selvedge Cotton',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Straight leg mid-rise',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-11',
    slug: 'silk-chiffon-evening-slip',
    name: 'Silk Chiffon Evening Slip',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-dresses',
    price: 340,
    salePrice: 272,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 27 },
      { size: 'S', stock: 8 },
      { size: 'M', stock: 6 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 14 }
    ],
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 81,
    badges: "Online Exclusive",
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: 'Heavyweight bias-cut silk',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Fluid draping contour',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-12',
    slug: 'brutalist-brass-cuff',
    name: 'Brutalist Sculpted Brass Cuff',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'accessories',
    subcategory: 'women-jewelry',
    price: 180,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 26 },
      { size: 'S', stock: 19 },
      { size: 'M', stock: 19 },
      { size: 'L', stock: 24 },
      { size: 'XL', stock: 14 }
    ],
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 136,
    badges: "New",
    tags: ['Atelier', 'women', 'accessories', 'Luxury'],
    material: 'Hand-forged recycled brass with 18k gold dip',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Open adjustable cuff',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-13',
    slug: 'merino-knit-coord-top',
    name: 'Merino Ribbed Knit Coord Top',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'trending',
    subcategory: 'women-coords',
    price: 190,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 26 },
      { size: 'S', stock: 23 },
      { size: 'M', stock: 27 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 11 }
    ],
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 138,
    badges: "Best Seller",
    tags: ['Atelier', 'women', 'trending', 'Luxury'],
    material: '100% Extra-fine Merino',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Second-skin fine ribbed texture',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-14',
    slug: 'merino-knit-coord-skirt',
    name: 'Merino Ribbed Coord Maxi Skirt',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'trending',
    subcategory: 'women-coords',
    price: 210,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 20 },
      { size: 'S', stock: 8 },
      { size: 'M', stock: 25 },
      { size: 'L', stock: 13 },
      { size: 'XL', stock: 16 }
    ],
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 45,
    badges: "Best Seller",
    tags: ['Atelier', 'women', 'trending', 'Luxury'],
    material: '100% Extra-fine Merino',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Flattering column midi length',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-15',
    slug: 'belted-technical-trench',
    name: 'Belted Technical Storm Trench',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'clothing',
    subcategory: 'women-coats',
    price: 460,
    salePrice: 368,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 4 },
      { size: 'S', stock: 25 },
      { size: 'M', stock: 25 },
      { size: 'L', stock: 18 },
      { size: 'XL', stock: 7 }
    ],
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1548624149-f9b1859aa9d0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 31,
    badges: "Limited",
    tags: ['Atelier', 'women', 'clothing', 'Luxury'],
    material: 'Water-repellent bonded cotton-nylon',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Relaxed double-breasted cut with storms flaps',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-16',
    slug: 'maternity-pleated-wrap-gown',
    name: 'Maternity Pleated Wrap Gown',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'curations',
    subcategory: 'women-maternity',
    price: 320,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 18 },
      { size: 'S', stock: 14 },
      { size: 'M', stock: 7 },
      { size: 'L', stock: 15 },
      { size: 'XL', stock: 20 }
    ],
    images: [
      'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 34,
    badges: "Eco",
    tags: ['Atelier', 'women', 'curations', 'Luxury'],
    material: 'Breathable Tencel Lyocell',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Adaptable wrap waist designed for all trimesters',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-17',
    slug: 'monochrome-silk-foulard',
    name: 'Monochrome Geometry Silk Foulard',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'accessories',
    subcategory: 'women-scarves',
    price: 140,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 10 },
      { size: 'S', stock: 10 },
      { size: 'M', stock: 18 },
      { size: 'L', stock: 27 },
      { size: 'XL', stock: 18 }
    ],
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 64,
    badges: "New",
    tags: ['Atelier', 'women', 'accessories', 'Luxury'],
    material: '100% Twill Silk 90x90cm',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Square foulard',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-18',
    slug: 'plus-form-sculpted-tunic',
    name: 'Plus Form Sculpted Tunic',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'curations',
    subcategory: 'women-plus',
    price: 250,
    salePrice: 200,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 25 },
      { size: 'S', stock: 15 },
      { size: 'M', stock: 27 },
      { size: 'L', stock: 22 },
      { size: 'XL', stock: 19 }
    ],
    images: [
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 58,
    badges: "Online Exclusive",
    tags: ['Atelier', 'women', 'curations', 'Luxury'],
    material: 'Dense matte crepe',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Engineered drape for extended sizing (1X-4X)',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-19',
    slug: 'titanium-frame-sunglasses',
    name: 'Titanium Geometric Sunglasses',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'accessories',
    subcategory: 'women-eyewear',
    price: 290,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 22 },
      { size: 'S', stock: 18 },
      { size: 'M', stock: 16 },
      { size: 'L', stock: 24 },
      { size: 'XL', stock: 9 }
    ],
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 32,
    badges: "New",
    tags: ['Atelier', 'women', 'accessories', 'Luxury'],
    material: 'Japanese aerospace titanium with Zeiss lenses',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Universal comfort fit',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-w-20',
    slug: 'equinox-archive-cashmere-wrap',
    name: 'Equinox Archive Cashmere Wrap',
    brand: 'KAYAN Atelier',
    department: 'women',
    category: 'curations',
    subcategory: 'women-archive',
    price: 380,
    salePrice: 266,
    discountPercent: 30,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'XS', stock: 25 },
      { size: 'S', stock: 4 },
      { size: 'M', stock: 11 },
      { size: 'L', stock: 26 },
      { size: 'XL', stock: 13 }
    ],
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 136,
    badges: ["Archive Special","Limited"],
    tags: ['Atelier', 'women', 'curations', 'Luxury'],
    material: '100% Brushed Mongolian Cashmere',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Oversized generous blanket wrap',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-01',
    slug: 'boxy-boiled-wool-overshirt',
    name: 'Boxy Boiled Wool Overshirt',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'trending_men',
    subcategory: 'men-overshirts',
    price: 340,
    salePrice: 272,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 14 },
      { size: 'M', stock: 5 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 25 },
      { size: 'XXL', stock: 17 }
    ],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 132,
    badges: ["New","Best Seller"],
    tags: ['Atelier', 'men', 'trending_men', 'Luxury'],
    material: '100% Heavy Boiled Wool',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Boxy drop-shoulder tailored cut',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-02',
    slug: 'double-breasted-camel-overcoat',
    name: 'Double-Breasted Camel Overcoat',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'trending_men',
    subcategory: 'men-overcoats',
    price: 540,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 13 },
      { size: 'M', stock: 12 },
      { size: 'L', stock: 7 },
      { size: 'XL', stock: 10 },
      { size: 'XXL', stock: 15 }
    ],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 80,
    badges: "New",
    tags: ['Atelier', 'men', 'trending_men', 'Luxury'],
    material: '90% Camel Hair, 10% Cashmere',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Regal elongated silhouette',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-03',
    slug: 'japanese-selvedge-relaxed-denim',
    name: 'Japanese Selvedge Relaxed Denim',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'trending_men',
    subcategory: 'men-denim',
    price: 260,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 22 },
      { size: 'M', stock: 7 },
      { size: 'L', stock: 25 },
      { size: 'XL', stock: 18 },
      { size: 'XXL', stock: 26 }
    ],
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 62,
    badges: "Eco",
    tags: ['Atelier', 'men', 'trending_men', 'Luxury'],
    material: '14.5oz Okayama Selvedge Denim',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Relaxed taper with chainstitched hem',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-04',
    slug: 'heavyweight-loopback-hoodie',
    name: 'Heavyweight 500GSM Loopback Hoodie',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'clothing_men',
    subcategory: 'men-hoodies',
    price: 180,
    salePrice: 144,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 15 },
      { size: 'M', stock: 26 },
      { size: 'L', stock: 25 },
      { size: 'XL', stock: 16 },
      { size: 'XXL', stock: 18 }
    ],
    images: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 52,
    badges: "Best Seller",
    tags: ['Atelier', 'men', 'clothing_men', 'Luxury'],
    material: '100% Organic Combed French Terry',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Structured boxy skate-luxury cut',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-05',
    slug: 'chunky-rib-cardigan',
    name: 'Chunky Rib Wool Cardigan',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'trending_men',
    subcategory: 'men-knits',
    price: 290,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 20 },
      { size: 'M', stock: 5 },
      { size: 'L', stock: 21 },
      { size: 'XL', stock: 20 },
      { size: 'XXL', stock: 25 }
    ],
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 69,
    badges: "New",
    tags: ['Atelier', 'men', 'trending_men', 'Luxury'],
    material: '100% British Wool',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Relaxed fit with horn buttons',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-06',
    slug: 'pleated-wide-leg-wool-trousers',
    name: 'Pleated Wide-Leg Wool Trousers',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'trending_men',
    subcategory: 'men-trousers',
    price: 280,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 14 },
      { size: 'M', stock: 21 },
      { size: 'L', stock: 7 },
      { size: 'XL', stock: 17 },
      { size: 'XXL', stock: 25 }
    ],
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 22,
    badges: "Online Exclusive",
    tags: ['Atelier', 'men', 'trending_men', 'Luxury'],
    material: 'Italian Tropical Wool',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Deep double pleats with wide drape',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-07',
    slug: 'minimalist-leather-chelsea-boots',
    name: 'Minimalist Leather Chelsea Boots',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'shoes_men',
    subcategory: 'men-boots',
    price: 380,
    salePrice: 304,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 7 },
      { size: 'M', stock: 22 },
      { size: 'L', stock: 13 },
      { size: 'XL', stock: 26 },
      { size: 'XXL', stock: 6 }
    ],
    images: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 67,
    badges: "New",
    tags: ['Atelier', 'men', 'shoes_men', 'Luxury'],
    material: 'Vegetable-tanned calf leather',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Streamlined almond toe, Vibram sole',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-08',
    slug: 'sculpted-derby-shoes',
    name: 'Commando Sole Derby Shoes',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'shoes_men',
    subcategory: 'men-derbies',
    price: 360,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 14 },
      { size: 'M', stock: 26 },
      { size: 'L', stock: 25 },
      { size: 'XL', stock: 24 },
      { size: 'XXL', stock: 23 }
    ],
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 20,
    badges: "Best Seller",
    tags: ['Atelier', 'men', 'shoes_men', 'Luxury'],
    material: 'Polished full-grain boxcalf',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Goodyear welted with rugged commando outsole',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-09',
    slug: 'pebble-grain-leather-briefcase',
    name: 'Pebble Grain Document Case',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'shoes_men',
    subcategory: 'men-bags',
    price: 490,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 18 },
      { size: 'M', stock: 13 },
      { size: 'L', stock: 10 },
      { size: 'XL', stock: 16 },
      { size: 'XXL', stock: 17 }
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 24,
    badges: "Online Exclusive",
    tags: ['Atelier', 'men', 'shoes_men', 'Luxury'],
    material: 'Durable Italian pebble grain leather',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Slim laptop profile with suede lining',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-10',
    slug: 'pima-cotton-heavy-tee',
    name: 'Mercerized Pima Cotton Tee',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'clothing_men',
    subcategory: 'men-tees',
    price: 95,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 18 },
      { size: 'M', stock: 11 },
      { size: 'L', stock: 15 },
      { size: 'XL', stock: 9 },
      { size: 'XXL', stock: 21 }
    ],
    images: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 116,
    badges: "Eco",
    tags: ['Atelier', 'men', 'clothing_men', 'Luxury'],
    material: '100% Peruvian Long-Staple Pima',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Structured tailored chest with drop hem',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-11',
    slug: 'technical-minimalist-mac-coat',
    name: 'Technical Minimalist Mac Coat',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'clothing_men',
    subcategory: 'men-trenches',
    price: 440,
    salePrice: 352,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 8 },
      { size: 'M', stock: 12 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 14 },
      { size: 'XXL', stock: 10 }
    ],
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 65,
    badges: "New",
    tags: ['Atelier', 'men', 'clothing_men', 'Luxury'],
    material: '3-Layer waterproof membrane cotton',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Clean concealed-placket silhouette',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-12',
    slug: 'unstructured-linen-blazer',
    name: 'Unstructured Washed Linen Blazer',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'clothing_men',
    subcategory: 'men-blazers',
    price: 320,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 5 },
      { size: 'M', stock: 10 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 26 },
      { size: 'XXL', stock: 27 }
    ],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 131,
    badges: "New",
    tags: ['Atelier', 'men', 'clothing_men', 'Luxury'],
    material: '100% Normandy Linen',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Unlined natural shoulder draping',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-13',
    slug: 'merino-mockneck-sweater',
    name: 'Fine Merino Mockneck Knit',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'trending_men',
    subcategory: 'men-knits',
    price: 210,
    salePrice: 168,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 11 },
      { size: 'M', stock: 9 },
      { size: 'L', stock: 17 },
      { size: 'XL', stock: 12 },
      { size: 'XXL', stock: 22 }
    ],
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 49,
    badges: "Best Seller",
    tags: ['Atelier', 'men', 'trending_men', 'Luxury'],
    material: '100% Zegna Baruffa Merino',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Slim under-jacket profile',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-14',
    slug: 'tailored-drawstring-trousers',
    name: 'Tailored Wool Drawstring Trousers',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'trending_men',
    subcategory: 'men-trousers',
    price: 240,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 8 },
      { size: 'M', stock: 18 },
      { size: 'L', stock: 9 },
      { size: 'XL', stock: 18 },
      { size: 'XXL', stock: 12 }
    ],
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 77,
    badges: "Online Exclusive",
    tags: ['Atelier', 'men', 'trending_men', 'Luxury'],
    material: 'Stretch wool-cashmere blend',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Elasticated internal drawstring with tailored hem',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-15',
    slug: 'leather-aviator-jacket',
    name: 'Raw Leather Aviator Jacket',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'clothing_men',
    subcategory: 'men-overcoats',
    price: 780,
    salePrice: 624,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 25 },
      { size: 'M', stock: 16 },
      { size: 'L', stock: 26 },
      { size: 'XL', stock: 5 },
      { size: 'XXL', stock: 18 }
    ],
    images: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 26,
    badges: "Limited",
    tags: ['Atelier', 'men', 'clothing_men', 'Luxury'],
    material: 'Full-grain lambskin with shearling collar',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Classic flight jacket proportion',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-16',
    slug: 'oxford-cloth-button-down',
    name: 'Heavyweight Oxford Shirt',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'clothing_men',
    subcategory: 'men-overshirts',
    price: 160,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 16 },
      { size: 'M', stock: 23 },
      { size: 'L', stock: 23 },
      { size: 'XL', stock: 21 },
      { size: 'XXL', stock: 9 }
    ],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 26,
    badges: "Eco",
    tags: ['Atelier', 'men', 'clothing_men', 'Luxury'],
    material: '100% Supima Cotton Oxford',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Relaxed Ivy League collar roll',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-17',
    slug: 'equinox-archive-wool-cape',
    name: 'Equinox Archive Hooded Wool Cape',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'clothing_men',
    subcategory: 'men-overcoats',
    price: 490,
    salePrice: 343,
    discountPercent: 30,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 18 },
      { size: 'M', stock: 16 },
      { size: 'L', stock: 17 },
      { size: 'XL', stock: 15 },
      { size: 'XXL', stock: 17 }
    ],
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 70,
    badges: "Archive Special",
    tags: ['Atelier', 'men', 'clothing_men', 'Luxury'],
    material: 'Double-face felted wool',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Dramatic sculptural volume',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-m-18',
    slug: 'italian-leather-belt',
    name: 'Architectural Buckle Leather Belt',
    brand: 'KAYAN Homme',
    department: 'men',
    category: 'shoes_men',
    subcategory: 'men-bags',
    price: 120,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'S', stock: 14 },
      { size: 'M', stock: 4 },
      { size: 'L', stock: 25 },
      { size: 'XL', stock: 7 },
      { size: 'XXL', stock: 19 }
    ],
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 51,
    badges: "New",
    tags: ['Atelier', 'men', 'shoes_men', 'Luxury'],
    material: 'English bridle leather, matte brass',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Width 35mm',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-01',
    slug: 'organic-cotton-baby-romper',
    name: 'Organic Cotton Ribbed Romper',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_ages',
    subcategory: 'kids-baby',
    price: 65,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 13 },
      { size: '4Y', stock: 17 },
      { size: '6Y', stock: 14 },
      { size: '8Y', stock: 16 },
      { size: '10Y', stock: 25 }
    ],
    images: [
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 143,
    badges: ["Eco","New"],
    tags: ['Atelier', 'kids', 'kids_ages', 'Luxury'],
    material: '100% GOTS Certified Organic Cotton',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Easy snap closure, gentle on sensitive skin',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-02',
    slug: 'merino-knit-cardigan-girls',
    name: 'Miniature Merino Cardigan',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-knits',
    price: 110,
    salePrice: 88,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 26 },
      { size: '4Y', stock: 25 },
      { size: '6Y', stock: 11 },
      { size: '8Y', stock: 14 },
      { size: '10Y', stock: 26 }
    ],
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 47,
    badges: "Best Seller",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: '100% Non-itch Merino Wool',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Chunky knit with horn buttons',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-03',
    slug: 'corduroy-dungarees-toddler',
    name: 'Washed Corduroy Dungarees',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_ages',
    subcategory: 'kids-boys-2-8',
    price: 95,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 19 },
      { size: '4Y', stock: 22 },
      { size: '6Y', stock: 4 },
      { size: '8Y', stock: 4 },
      { size: '10Y', stock: 19 }
    ],
    images: [
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 22,
    badges: "New",
    tags: ['Atelier', 'kids', 'kids_ages', 'Luxury'],
    material: 'Soft cotton corduroy',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Adjustable straps with brass buckles',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-04',
    slug: 'quilted-down-hooded-puffer',
    name: 'Quilted Down Lightweight Puffer',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-knits',
    price: 160,
    salePrice: 128,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 19 },
      { size: '4Y', stock: 26 },
      { size: '6Y', stock: 16 },
      { size: '8Y', stock: 4 },
      { size: '10Y', stock: 24 }
    ],
    images: [
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 138,
    badges: "New",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: 'Recycled ripstop nylon, ethical down fill',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Water-repellent warm layer',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-05',
    slug: 'pleated-ceremony-dress',
    name: 'Tiered Linen Ceremony Dress',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-occasion',
    price: 130,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 5 },
      { size: '4Y', stock: 23 },
      { size: '6Y', stock: 18 },
      { size: '8Y', stock: 6 },
      { size: '10Y', stock: 16 }
    ],
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 118,
    badges: "Online Exclusive",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: '100% French Washed Linen',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Graceful silhouette with delicate flutter sleeves',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-06',
    slug: 'boys-tailored-linen-suit',
    name: 'Junior Tailored Linen Suit',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-occasion',
    price: 180,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 17 },
      { size: '4Y', stock: 12 },
      { size: '6Y', stock: 9 },
      { size: '8Y', stock: 6 },
      { size: '10Y', stock: 15 }
    ],
    images: [
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 68,
    badges: "New",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: 'Pure breathable linen blend',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '2-piece lightweight celebration suit',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-07',
    slug: 'classic-leather-pre-walkers',
    name: 'Soft Sole Leather Pre-Walkers',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-shoes',
    price: 75,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 25 },
      { size: '4Y', stock: 15 },
      { size: '6Y', stock: 9 },
      { size: '8Y', stock: 18 },
      { size: '10Y', stock: 18 }
    ],
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 29,
    badges: "Eco",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: 'Chrome-free vegetable leather',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Flexible ergonomic podiatrist-approved sole',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-08',
    slug: 'junior-chelsea-boots',
    name: 'Junior Suede Chelsea Boots',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-shoes',
    price: 110,
    salePrice: 88,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 22 },
      { size: '4Y', stock: 22 },
      { size: '6Y', stock: 9 },
      { size: '8Y', stock: 23 },
      { size: '10Y', stock: 12 }
    ],
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 133,
    badges: "Best Seller",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: 'Waterproof split suede with rubber grip',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Easy pull-on elastic tabs',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-09',
    slug: 'teen-oversized-heavy-hoodie',
    name: 'Teen Architectural Loopback Hoodie',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_ages',
    subcategory: 'kids-boys-8-16',
    price: 115,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 4 },
      { size: '4Y', stock: 13 },
      { size: '6Y', stock: 20 },
      { size: '8Y', stock: 12 },
      { size: '10Y', stock: 26 }
    ],
    images: [
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 72,
    badges: "New",
    tags: ['Atelier', 'kids', 'kids_ages', 'Luxury'],
    material: '450GSM organic brushed cotton',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Modern streetwear boxy cut',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-10',
    slug: 'teen-pleated-trousers',
    name: 'Teen Fluid Tailored Trousers',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_ages',
    subcategory: 'kids-girls-8-16',
    price: 120,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 20 },
      { size: '4Y', stock: 27 },
      { size: '6Y', stock: 21 },
      { size: '8Y', stock: 11 },
      { size: '10Y', stock: 8 }
    ],
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 140,
    badges: "New",
    tags: ['Atelier', 'kids', 'kids_ages', 'Luxury'],
    material: 'Stretch wool blend',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'High waist pleated straight leg',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-11',
    slug: 'baby-cashmere-knit-blanket',
    name: 'Heritage Baby Cashmere Blanket',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_ages',
    subcategory: 'kids-baby',
    price: 140,
    salePrice: 112,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 4 },
      { size: '4Y', stock: 18 },
      { size: '6Y', stock: 6 },
      { size: '8Y', stock: 7 },
      { size: '10Y', stock: 20 }
    ],
    images: [
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 115,
    badges: "Online Exclusive",
    tags: ['Atelier', 'kids', 'kids_ages', 'Luxury'],
    material: '100% Grade-A Mongolian Cashmere',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Generous 90x90cm stroller blanket',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-12',
    slug: 'summer-linen-smock-set',
    name: 'Summer Linen Smock & Shorts Set',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_ages',
    subcategory: 'kids-girls-2-8',
    price: 85,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 6 },
      { size: '4Y', stock: 12 },
      { size: '6Y', stock: 10 },
      { size: '8Y', stock: 22 },
      { size: '10Y', stock: 26 }
    ],
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 95,
    badges: "Eco",
    tags: ['Atelier', 'kids', 'kids_ages', 'Luxury'],
    material: '100% Washed Linen',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Relaxed fit for sunny days',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-13',
    slug: 'waterproof-school-anorak',
    name: 'Reflective School Anorak',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_ages',
    subcategory: 'kids-boys-8-16',
    price: 135,
    salePrice: 108,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 20 },
      { size: '4Y', stock: 7 },
      { size: '6Y', stock: 17 },
      { size: '8Y', stock: 11 },
      { size: '10Y', stock: 11 }
    ],
    images: [
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 133,
    badges: "Best Seller",
    tags: ['Atelier', 'kids', 'kids_ages', 'Luxury'],
    material: 'Waterproof shell with breathable mesh lining',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Packable hood and safety accents',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-14',
    slug: 'kids-canvas-sneakers',
    name: 'Low-Top Organic Canvas Sneakers',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-shoes',
    price: 70,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 10 },
      { size: '4Y', stock: 24 },
      { size: '6Y', stock: 26 },
      { size: '8Y', stock: 9 },
      { size: '10Y', stock: 13 }
    ],
    images: [
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 58,
    badges: "New",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: 'Organic canvas, natural vulcanized rubber',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Reinforced toe cap for playtime',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-k-15',
    slug: 'equinox-kids-merino-beanie',
    name: 'Equinox Ribbed Merino Beanie',
    brand: 'KAYAN Enfant',
    department: 'kids',
    category: 'kids_categories',
    subcategory: 'kids-knits',
    price: 45,
    salePrice: 31,
    discountPercent: 30,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: '2Y', stock: 5 },
      { size: '4Y', stock: 22 },
      { size: '6Y', stock: 6 },
      { size: '8Y', stock: 15 },
      { size: '10Y', stock: 21 }
    ],
    images: [
      'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 18,
    badges: "Archive Special",
    tags: ['Atelier', 'kids', 'kids_categories', 'Luxury'],
    material: '100% Merino Wool',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Stretchy ribbed fold-over cuff',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-01',
    slug: 'damascus-rose-cellular-mist',
    name: 'Damascus Rose Cellular Mist',
    brand: 'KAYAN Alchimie',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-skincare',
    price: 85,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 6 },
      { size: 'Full Size', stock: 11 }
    ],
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 33,
    badges: ["Best Seller","Eco"],
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Organic rose hydrosol, hyaluronic acid, ectoin',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '50ml frosted glass bottle with micro-mister',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-02',
    slug: 'obsidian-oud-extrait-de-parfum',
    name: 'Obsidian Oud Extrait de Parfum',
    brand: 'KAYAN Alchimie',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-perfumes',
    price: 240,
    salePrice: 192,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 14 },
      { size: 'Full Size', stock: 21 }
    ],
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 126,
    badges: ["New","Online Exclusive"],
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Aged Cambodian oud, smoked birch, black amber',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '100ml heavy smoked crystal flask (30% concentration)',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-03',
    slug: 'velvet-matte-lip-elixir',
    name: 'Velvet Matte Lip Elixir - Terracotta',
    brand: 'Nour Labs Paris',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-lips',
    price: 48,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 18 },
      { size: 'Full Size', stock: 23 }
    ],
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 77,
    badges: "New",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Camellia oil, pomegranate sterols, mineral pigments',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Magnetic architectural brass casing',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-04',
    slug: 'facial-sculpting-obsidian-guasha',
    name: 'Bian Stone Sculpting Gua Sha',
    brand: 'KAYAN Alchimie',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-oils',
    price: 55,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 26 },
      { size: 'Full Size', stock: 20 }
    ],
    images: [
      'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 44,
    badges: "Best Seller",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: '100% Natural Thermal Bian Stone',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Ergonomic contours for lymph drainage and jawline sculpting',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-05',
    slug: 'botanical-squalane-recovery-oil',
    name: 'Botanical Squalane Recovery Oil',
    brand: 'Nour Labs Paris',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-oils',
    price: 92,
    salePrice: 73,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 21 },
      { size: 'Full Size', stock: 10 }
    ],
    images: [
      'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 101,
    badges: "Eco",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: '100% Olive-derived squalane, bakuchiol, blue tansy',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '30ml dropper bottle',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-06',
    slug: 'santal-silt-parfum',
    name: 'Santal & Silt Extrait de Parfum',
    brand: 'Santal & Silt',
    department: 'beauty',
    category: 'beauty_brands',
    subcategory: 'brand-santal-silt',
    price: 210,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 16 },
      { size: 'Full Size', stock: 16 }
    ],
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 69,
    badges: "Online Exclusive",
    tags: ['Atelier', 'beauty', 'beauty_brands', 'Luxury'],
    material: 'Australian sandalwood, sea salt, dry cedar, cardamom',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '100ml flacon',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-07',
    slug: 'peptide-contour-eye-balm',
    name: 'Peptide Contour Eye Balm',
    brand: 'Nour Labs Paris',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-skincare',
    price: 78,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 26 },
      { size: 'Full Size', stock: 4 }
    ],
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 143,
    badges: "New",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Tri-peptide complex, green tea caffeine, shea',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '15ml ceramic cooling applicator tip',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-08',
    slug: 'nour-lip-oil-glaze',
    name: 'Honey Infused Lip Plumping Glaze',
    brand: 'Nour Labs Paris',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-lips',
    price: 42,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 21 },
      { size: 'Full Size', stock: 6 }
    ],
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 52,
    badges: "Best Seller",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Wild mountain honey, jojoba seed, vitamin E',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Plump cushion doe-foot applicator',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-09',
    slug: 'mineral-veil-sun-shield-spf50',
    name: 'Mineral Veil Invisible Sun Shield SPF 50',
    brand: 'KAYAN Alchimie',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-skincare',
    price: 65,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 27 },
      { size: 'Full Size', stock: 17 }
    ],
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 38,
    badges: "Eco",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Non-nano zinc oxide, niacinamide, ectoin',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '50ml velvet matte finish without white cast',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-10',
    slug: 'amber-resins-incense-cones',
    name: 'Hand-Pressed Amber Resin Cones',
    brand: 'Santal & Silt',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-perfumes',
    price: 48,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 18 },
      { size: 'Full Size', stock: 26 }
    ],
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 42,
    badges: "New",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Yemeni frankincense, labdanum, cedar sawdust',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Box of 30 slow-burning meditation cones',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-11',
    slug: 'silk-peptide-body-creme',
    name: 'Silk Peptide Rich Body Creme',
    brand: 'KAYAN Alchimie',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-skincare',
    price: 80,
    salePrice: 64,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 26 },
      { size: 'Full Size', stock: 15 }
    ],
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 106,
    badges: "New",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Hydrolyzed silk, cupuacu butter, sweet almond',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '200ml matte glass tub',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-12',
    slug: 'cashmere-hand-salve',
    name: 'Cashmere & Cedarwood Hand Salve',
    brand: 'KAYAN Alchimie',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-skincare',
    price: 36,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 5 },
      { size: 'Full Size', stock: 7 }
    ],
    images: [
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1608248597359-bb58356770f9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 81,
    badges: "Best Seller",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Castor wax, lanolin alternative, cedar essential oil',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '75ml recyclable aluminium squeeze tube',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-13',
    slug: 'noir-curling-mineral-mascara',
    name: 'Noir Curling Clean Mineral Mascara',
    brand: 'Nour Labs Paris',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-lips',
    price: 40,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 20 },
      { size: 'Full Size', stock: 20 }
    ],
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 136,
    badges: "Eco",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Carnauba wax, charcoal pigment, argan oil',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Custom curved lift wand',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-14',
    slug: 'vetiver-solstice-cologne',
    name: 'Vetiver Solstice Botanical Cologne',
    brand: 'Santal & Silt',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-perfumes',
    price: 165,
    salePrice: 132,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 23 },
      { size: 'Full Size', stock: 14 }
    ],
    images: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 96,
    badges: "Online Exclusive",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Haitian vetiver, green bergamot, damp moss',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '100ml spray',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-b-15',
    slug: 'equinox-archive-travel-vials',
    name: 'Archive Discovery Fragrance Set (5x10ml)',
    brand: 'KAYAN Alchimie',
    department: 'beauty',
    category: 'beauty_categories',
    subcategory: 'beauty-perfumes',
    price: 120,
    salePrice: 84,
    discountPercent: 30,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 14 },
      { size: 'Full Size', stock: 11 }
    ],
    images: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 135,
    badges: "Archive Special",
    tags: ['Atelier', 'beauty', 'beauty_categories', 'Luxury'],
    material: 'Set of 5 signature extraits in metal travel cases',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '5x 10ml atomizers',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-01',
    slug: 'fluted-travertine-stone-vessel',
    name: 'Fluted Travertine Sculptural Vessel',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-vessels',
    price: 280,
    salePrice: 224,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 6 },
      { size: 'Large', stock: 25 },
      { size: 'Atelier', stock: 14 }
    ],
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 32,
    badges: ["New","Online Exclusive"],
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Solid Italian honed travertine marble',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Height 32cm, weight 4.2kg. Water-tight interior',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-02',
    slug: 'belgian-washed-linen-duvet-set',
    name: 'Belgian Washed Linen Duvet Set',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-bedding',
    price: 340,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 15 },
      { size: 'Large', stock: 12 },
      { size: 'Atelier', stock: 10 }
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 70,
    badges: ["Best Seller","Eco"],
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: '100% Certified Flax Linen from Flanders',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Queen / King set: Duvet cover + 2 Oxford shams',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-03',
    slug: 'brutalist-architectural-wax-candle',
    name: 'Brutalist Architectural Pillar Candle',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-candles',
    price: 75,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 11 },
      { size: 'Large', stock: 13 },
      { size: 'Atelier', stock: 16 }
    ],
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 21,
    badges: "New",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Natural rapeseed & coconut wax, cotton wick',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Geometric totem shape, 90 hours burn time',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-04',
    slug: 'smoked-glass-carafe-and-tumblers',
    name: 'Mouth-Blown Smoked Glass Carafe Set',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-dining',
    price: 140,
    salePrice: 112,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 16 },
      { size: 'Large', stock: 5 },
      { size: 'Atelier', stock: 19 }
    ],
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 68,
    badges: "Best Seller",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Borosilicate thermal smoked glass',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '1.2L Carafe with 2 stackable glasses',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-05',
    slug: 'handwoven-boucle-wool-throw',
    name: 'Handwoven Boucle Wool Blanket',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-bedding',
    price: 260,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 5 },
      { size: 'Large', stock: 21 },
      { size: 'Atelier', stock: 23 }
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 46,
    badges: "New",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: '85% Highland Wool, 15% Alpaca',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '140x200cm oversized drape with raw fringe',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-06',
    slug: 'raw-cast-bronze-bookends',
    name: 'Cast Bronze Monolith Bookends (Pair)',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-vessels',
    price: 310,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 13 },
      { size: 'Large', stock: 7 },
      { size: 'Atelier', stock: 12 }
    ],
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.7,
    reviewCount: 112,
    badges: "Limited",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Solid sand-cast bronze with living patina',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Pair weighs 6.8kg, brutalist angular form',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-07',
    slug: 'stoneware-ribbed-pitcher',
    name: 'Hand-Thrown Stoneware Ribbed Pitcher',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-dining',
    price: 110,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 6 },
      { size: 'Large', stock: 7 },
      { size: 'Atelier', stock: 27 }
    ],
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 94,
    badges: "Eco",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'High-fire stoneware with matte chalk glaze',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Holds 1.8L, dishwasher safe',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-08',
    slug: 'sculpted-alabaster-tea-light-holder',
    name: 'Sculpted Alabaster Luminary',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-candles',
    price: 95,
    salePrice: 76,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 10 },
      { size: 'Large', stock: 8 },
      { size: 'Atelier', stock: 23 }
    ],
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 5,
    reviewCount: 78,
    badges: "New",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Translucent Spanish white alabaster',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Each piece has unique organic veining',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-09',
    slug: 'wabi-sabi-linen-tablecloth',
    name: 'Wabi-Sabi Washed Linen Table Runner',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-dining',
    price: 125,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 13 },
      { size: 'Large', stock: 12 },
      { size: 'Atelier', stock: 17 }
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 25,
    badges: "Eco",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Heavyweight raw flax linen with mitred corners',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '50x260cm fits 6-10 seat dining tables',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-10',
    slug: 'walnut-sculptural-tray',
    name: 'Honed Walnut Sculptural Valet Tray',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-vessels',
    price: 130,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 16 },
      { size: 'Large', stock: 24 },
      { size: 'Atelier', stock: 23 }
    ],
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 40,
    badges: "Best Seller",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'FSC-certified solid American Black Walnut',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '38x24cm carved concave surface',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-11',
    slug: 'ceramic-diffuser-incense-dish',
    name: 'Matte Black Basalt Incense Dish',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-candles',
    price: 68,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 5 },
      { size: 'Large', stock: 22 },
      { size: 'Atelier', stock: 8 }
    ],
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 144,
    badges: "New",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Unglazed volcanic basalt clay',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Diameter 14cm with brass stick holder',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-12',
    slug: 'plush-waffle-bath-sheet',
    name: 'Organic Turkish Cotton Waffle Bath Sheet',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-bedding',
    price: 85,
    salePrice: 68,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 4 },
      { size: 'Large', stock: 21 },
      { size: 'Atelier', stock: 21 }
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 35,
    badges: "Eco",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: '650GSM Long-staple Aegean organic cotton',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '100x160cm ultra-absorbent honeycomb weave',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-13',
    slug: 'brutalist-concrete-planter',
    name: 'Brutalist Fluted Concrete Planter',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-vessels',
    price: 175,
    salePrice: null,
    discountPercent: 0,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 25 },
      { size: 'Large', stock: 12 },
      { size: 'Atelier', stock: 22 }
    ],
    images: [
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 33,
    badges: "New",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Reinforced architectural concrete',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Diameter 28cm x Height 30cm with drainage plug',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-14',
    slug: 'blown-glass-oil-lamp',
    name: 'Hand-Blown Minimalist Oil Lamp',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-candles',
    price: 90,
    salePrice: 72,
    discountPercent: 20,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 24 },
      { size: 'Large', stock: 20 },
      { size: 'Atelier', stock: 4 }
    ],
    images: [
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.9,
    reviewCount: 76,
    badges: "Best Seller",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Thermal borosilicate glass, fiberglass everlasting wick',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: 'Includes brass filling funnel',
    createdAt: '2026-08-15'
  },
  {
    id: 'kayan-h-15',
    slug: 'equinox-archive-cashmere-cushion',
    name: 'Archive Cashmere & Suede Cushion',
    brand: 'KAYAN Maison',
    department: 'home',
    category: 'home_curation',
    subcategory: 'home-bedding',
    price: 180,
    salePrice: 126,
    discountPercent: 30,
    currency: 'USD',
    colors: [
      { name: 'Obsidian', hex: '#111113' },
      { name: 'Warm Alabaster', hex: '#F0EEE8' },
      { name: 'Terracotta', hex: '#C98A4C' }
    ],
    sizes: [
      { size: 'Standard', stock: 16 },
      { size: 'Large', stock: 25 },
      { size: 'Atelier', stock: 13 }
    ],
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&auto=format&fit=crop&q=80'
    ],
    rating: 4.8,
    reviewCount: 141,
    badges: "Archive Special",
    tags: ['Atelier', 'home', 'home_curation', 'Luxury'],
    material: 'Double-sided cashmere face with French calf suede back',
    care: 'Dry clean only or gentle hand sponge. Store in breathable garment cover.',
    description: 'Masterfully conceived for the modern collector. Designed with architectural proportion and organic ease.',
    fit: '50x50cm with hypoallergenic down feather insert',
    createdAt: '2026-08-15'
  },
];

function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null;
}

function getProductById(id) {
  return products.find(p => p.id === id) || null;
}

function getProductsByDepartment(dept) {
  if (!dept || dept === 'all') return products;
  return products.filter(p => p.department === dept);
}
/**
 * KAYAN Luxury Fashion — Storage Utility
 * Safe localStorage wrapper with memory fallback & versioning
 */

const STORAGE_PREFIX = 'kayan_';
const memoryStore = new Map();

const storage = {
  get(key, defaultValue = null) {
    try {
      const fullKey = STORAGE_PREFIX + key;
      const raw = localStorage.getItem(fullKey);
      if (raw === null) return defaultValue;
      return JSON.parse(raw);
    } catch (e) {
      return memoryStore.has(key) ? memoryStore.get(key) : defaultValue;
    }
  },

  set(key, value) {
    try {
      const fullKey = STORAGE_PREFIX + key;
      localStorage.setItem(fullKey, JSON.stringify(value));
    } catch (e) {
      memoryStore.set(key, value);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (e) {
      memoryStore.delete(key);
    }
  },

  clear() {
    try {
      Object.keys(localStorage).forEach((k) => {
        if (k.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(k);
        }
      });
    } catch (e) {
      memoryStore.clear();
    }
  }
};
/**
 * KAYAN Luxury Fashion — Central Event Bus
 * Facilitates loosely coupled communication between UI components
 */

class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event).add(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (this.events.has(event)) {
      this.events.get(event).delete(callback);
    }
  }

  emit(event, payload = null) {
    if (this.events.has(event)) {
      this.events.get(event).forEach((cb) => {
        try {
          cb(payload);
        } catch (err) {
          console.error(`[EventBus] Error in handler for event "${event}":`, err);
        }
      });
    }
  }

  once(event, callback) {
    const unsub = this.on(event, (payload) => {
      unsub();
      callback(payload);
    });
    return unsub;
  }
}

const events = new EventBus();
/**
 * KAYAN Luxury Fashion — Core Utilities
 * Debounce, throttle, fuzzy search, DOM shortcuts, and custom canvas confetti
 */

const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

function debounce(func, wait = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function throttle(func, limit = 100) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Levenshtein distance for fuzzy typo-tolerant matching
 */
function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1).toLowerCase() === a.charAt(j - 1).toLowerCase()) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

/**
 * Fuzzy search score: Returns true or score if query matches target
 */
function fuzzyMatch(query, text) {
  if (!query) return { match: true, score: 1 };
  const q = query.toLowerCase().trim();
  const t = text.toLowerCase().trim();

  if (t.includes(q)) return { match: true, score: 1 - q.length / (t.length + 1) };

  // Check words
  const words = t.split(/\s+/);
  for (const word of words) {
    if (word.startsWith(q)) return { match: true, score: 0.8 };
    if (q.length > 2) {
      const dist = levenshteinDistance(q, word);
      if (dist <= Math.floor(q.length / 3)) {
        return { match: true, score: 0.6 };
      }
    }
  }

  return { match: false, score: 0 };
}

/**
 * Custom Canvas Confetti (celebratory burst for newsletter/checkout)
 */
function triggerConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#C98A4C', '#D4A373', '#111113', '#10B981', '#E5E2DC', '#DC2626'];
  const particles = Array.from({ length: 90 }).map(() => ({
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: (Math.random() - 0.5) * 16,
    vy: (Math.random() - 0.7) * 18,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 12,
    opacity: 1
  }));

  let animationFrame;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = 0;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.012;

      if (p.opacity > 0) {
        active++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      }
    });

    if (active > 0) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrame);
      canvas.remove();
    }
  }

  animate();
}
/**
 * KAYAN Luxury Fashion — Promotions & Pricing Engine
 * Pure mathematical functions for multi-buy, promo codes, shipping thresholds & currency conversions
 */

const CURRENCY_RATES = {
  USD: 1.0,
  AED: 3.67,
  EUR: 0.92,
  SAR: 3.75,
  EGP: 48.50
};

const CURRENCY_SYMBOLS = {
  USD: '$',
  AED: 'AED',
  EUR: '€',
  SAR: 'SAR',
  EGP: 'EGP'
};

const FREE_SHIPPING_THRESHOLD_USD = 150;
const STANDARD_SHIPPING_FEE_USD = 15;

const PROMO_CODES = {
  KAYAN15: { type: 'percent', value: 0.15, minOrderUSD: 0, label: '15% First Order Privilege' },
  CIRCLE20: { type: 'percent', value: 0.20, minOrderUSD: 100, label: 'Kayan Circle VIP 20%' },
  FREESHIP: { type: 'shipping', value: 1.0, minOrderUSD: 0, label: 'Complimentary Express Delivery' },
  EQUINOX30: { type: 'percent', value: 0.30, minOrderUSD: 250, label: 'Equinox Archive 30% Off' }
};

/**
 * Converts a base USD amount to a target currency
 */
function convertCurrency(amountUSD, targetCurrency = 'USD') {
  const rate = CURRENCY_RATES[targetCurrency] || 1.0;
  return Math.round(amountUSD * rate * 100) / 100;
}

/**
 * Calculates volume discount (Buy 2 Get 20%, Buy 3+ Get 25%)
 */
function calculateVolumeDiscount(items) {
  const totalItemCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const eligibleSubtotalUSD = items.reduce((sum, item) => {
    const price = item.salePrice || item.price;
    return sum + (price * (item.quantity || 1));
  }, 0);

  if (totalItemCount >= 3) {
    return {
      rate: 0.25,
      amountUSD: Math.round(eligibleSubtotalUSD * 0.25 * 100) / 100,
      label: 'Equinox Bundle (3+ items: 25% Off)'
    };
  } else if (totalItemCount === 2) {
    return {
      rate: 0.20,
      amountUSD: Math.round(eligibleSubtotalUSD * 0.20 * 100) / 100,
      label: 'Equinox Pair (2 items: 20% Off)'
    };
  }

  return { rate: 0, amountUSD: 0, label: null };
}

/**
 * Validates and evaluates a promo coupon code
 */
function evaluatePromoCode(code, subtotalUSD) {
  if (!code) return { valid: false, discountUSD: 0, freeShipping: false, message: '' };

  const cleanCode = code.trim().toUpperCase();
  const promo = PROMO_CODES[cleanCode];

  if (!promo) {
    return { valid: false, discountUSD: 0, freeShipping: false, message: 'Invalid promotional code' };
  }

  if (subtotalUSD < promo.minOrderUSD) {
    return {
      valid: false,
      discountUSD: 0,
      freeShipping: false,
      message: `Minimum order of $${promo.minOrderUSD} required for code ${cleanCode}`
    };
  }

  if (promo.type === 'percent') {
    const discountUSD = Math.round(subtotalUSD * promo.value * 100) / 100;
    return { valid: true, discountUSD, freeShipping: false, message: promo.label, code: cleanCode };
  }

  if (promo.type === 'shipping') {
    return { valid: true, discountUSD: 0, freeShipping: true, message: promo.label, code: cleanCode };
  }

  return { valid: false, discountUSD: 0, freeShipping: false, message: '' };
}

/**
 * Pure function: Calculates full cart breakdown and financials
 */
function calculateCartTotals(items, promoCode = null, currency = 'USD') {
  const rawSubtotalUSD = items.reduce((sum, item) => {
    return sum + (item.price * (item.quantity || 1));
  }, 0);

  const saleSubtotalUSD = items.reduce((sum, item) => {
    const effectivePrice = item.salePrice || item.price;
    return sum + (effectivePrice * (item.quantity || 1));
  }, 0);

  // Markdown savings from sales
  const markdownSavingsUSD = Math.max(0, rawSubtotalUSD - saleSubtotalUSD);

  // Volume discount
  const volumeDiscount = calculateVolumeDiscount(items);

  // Promo code evaluation
  const postVolumeSubtotal = Math.max(0, saleSubtotalUSD - volumeDiscount.amountUSD);
  const promoResult = evaluatePromoCode(promoCode, postVolumeSubtotal);

  // Shipping
  const hasFreeShipping =
    postVolumeSubtotal >= FREE_SHIPPING_THRESHOLD_USD || promoResult.freeShipping;
  const shippingFeeUSD = hasFreeShipping ? 0 : STANDARD_SHIPPING_FEE_USD;

  // Free shipping threshold progress
  const freeShippingProgress = Math.min(
    100,
    Math.round((postVolumeSubtotal / FREE_SHIPPING_THRESHOLD_USD) * 100)
  );
  const freeShippingRemainingUSD = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD_USD - postVolumeSubtotal
  );

  // Total discounts
  const totalDiscountsUSD = markdownSavingsUSD + volumeDiscount.amountUSD + promoResult.discountUSD;

  // Final Total
  const finalTotalUSD = Math.max(0, postVolumeSubtotal - promoResult.discountUSD + shippingFeeUSD);

  // Convert all to target currency
  return {
    itemCount: items.reduce((acc, i) => acc + (i.quantity || 1), 0),
    rawSubtotal: convertCurrency(rawSubtotalUSD, currency),
    subtotal: convertCurrency(saleSubtotalUSD, currency),
    markdownSavings: convertCurrency(markdownSavingsUSD, currency),
    volumeDiscount: {
      rate: volumeDiscount.rate,
      amount: convertCurrency(volumeDiscount.amountUSD, currency),
      label: volumeDiscount.label
    },
    promoDiscount: {
      valid: promoResult.valid,
      code: promoResult.code || null,
      amount: convertCurrency(promoResult.discountUSD, currency),
      message: promoResult.message
    },
    totalSavings: convertCurrency(totalDiscountsUSD, currency),
    shippingFee: convertCurrency(shippingFeeUSD, currency),
    hasFreeShipping,
    freeShippingThreshold: convertCurrency(FREE_SHIPPING_THRESHOLD_USD, currency),
    freeShippingRemaining: convertCurrency(freeShippingRemainingUSD, currency),
    freeShippingProgress,
    finalTotal: convertCurrency(finalTotalUSD, currency),
    currency
  };
}
/**
 * KAYAN Luxury Fashion — Central Reactive State Store
 * Manages cart, wishlist, auth, currency, department, language & theme with localStorage persistence
 */


class Store {
  constructor() {
    this.state = {
      cart: storage.get('cart', { items: [], appliedCoupon: null }),
      wishlist: storage.get('wishlist', []),
      department: storage.get('department', 'women'),
      currency: storage.get('currency', 'USD'),
      language: storage.get('language', 'en'),
      theme: storage.get('theme', 'light'),
      user: storage.get('user', {
        loggedIn: false,
        name: 'Guest Collector',
        email: '',
        tier: 'Solstice Tier',
        points: 1850,
        orders: [
          {
            id: 'KYN-8921',
            date: '2026-09-28',
            total: 380,
            status: 'Delivered',
            items: [{ name: 'Sculpted Wool Cocoon Coat', size: 'M', price: 380 }]
          }
        ]
      }),
      recentlyViewed: storage.get('recentlyViewed', [])
    };

    this.subscribers = new Set();
    this.initCrossTabSync();
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.subscribers.add(listener);
    return () => this.subscribers.delete(listener);
  }

  notify(changedKey) {
    this.subscribers.forEach((fn) => {
      try {
        fn(this.state, changedKey);
      } catch (e) {
        console.error('[Store] Subscriber error:', e);
      }
    });
    events.emit(`store:${changedKey}`, this.state[changedKey]);
    events.emit('store:changed', { key: changedKey, state: this.state });
  }

  initCrossTabSync() {
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith('kayan_')) {
        const rawKey = e.key.replace('kayan_', '');
        if (this.state.hasOwnProperty(rawKey)) {
          this.state[rawKey] = storage.get(rawKey, this.state[rawKey]);
          this.notify(rawKey);
        }
      }
    });
  }

  // --- Cart Actions ---
  getCartTotals() {
    return calculateCartTotals(
      this.state.cart.items,
      this.state.cart.appliedCoupon,
      this.state.currency
    );
  }

  addToCart(product, size = 'M', color = null, quantity = 1) {
    const items = [...this.state.cart.items];
    const selectedColor = color || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const existingIndex = items.findIndex(
      (item) => item.id === product.id && item.size === size && item.color === selectedColor
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        slug: product.slug,
        name: product.name,
        brand: product.brand || 'KAYAN Atelier',
        price: product.price,
        salePrice: product.salePrice || null,
        size,
        color: selectedColor,
        colorHex: product.colors && product.colors[0] ? product.colors[0].hex : '#111',
        image: (product.images && product.images[0]) || '',
        quantity
      });
    }

    this.state.cart = { ...this.state.cart, items };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
    events.emit('toast:show', {
      type: 'success',
      message: `Added "${product.name}" (${size}) to your bag`
    });
  }

  removeFromCart(productId, size, color) {
    const removedItem = this.state.cart.items.find(
      (i) => i.id === productId && i.size === size && i.color === color
    );
    const items = this.state.cart.items.filter(
      (item) => !(item.id === productId && item.size === size && item.color === color)
    );

    this.state.cart = { ...this.state.cart, items };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());

    if (removedItem) {
      events.emit('toast:show', {
        type: 'info',
        message: `Removed ${removedItem.name}`,
        actionText: 'Undo',
        onAction: () => {
          this.addToCart(removedItem, removedItem.size, removedItem.color, removedItem.quantity);
        }
      });
    }
  }

  updateCartQuantity(productId, size, color, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId, size, color);
      return;
    }

    const items = this.state.cart.items.map((item) => {
      if (item.id === productId && item.size === size && item.color === color) {
        return { ...item, quantity };
      }
      return item;
    });

    this.state.cart = { ...this.state.cart, items };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
  }

  applyCoupon(code) {
    const totals = calculateCartTotals(this.state.cart.items, code, this.state.currency);
    if (!totals.promoDiscount.valid) {
      events.emit('toast:show', {
        type: 'error',
        message: totals.promoDiscount.message || 'Invalid promotion code'
      });
      return false;
    }

    this.state.cart = { ...this.state.cart, appliedCoupon: code.toUpperCase() };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
    events.emit('toast:show', {
      type: 'success',
      message: `Applied ${totals.promoDiscount.message}`
    });
    return true;
  }

  removeCoupon() {
    this.state.cart = { ...this.state.cart, appliedCoupon: null };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
  }

  clearCart() {
    this.state.cart = { items: [], appliedCoupon: null };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
  }

  // --- Wishlist Actions ---
  toggleWishlist(productId) {
    const list = [...this.state.wishlist];
    const index = list.indexOf(productId);
    let added = false;

    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(productId);
      added = true;
    }

    this.state.wishlist = list;
    storage.set('wishlist', list);
    this.notify('wishlist');
    events.emit('wishlist:toggled', { productId, added, count: list.length });

    events.emit('toast:show', {
      type: added ? 'success' : 'info',
      message: added ? 'Added to Wishlist' : 'Removed from Wishlist'
    });
  }

  isInWishlist(productId) {
    return this.state.wishlist.includes(productId);
  }

  // --- Preferences ---
  setDepartment(dept) {
    this.state.department = dept;
    storage.set('department', dept);
    this.notify('department');
  }

  setCurrency(curr) {
    this.state.currency = curr;
    storage.set('currency', curr);
    this.notify('currency');
  }

  setLanguage(lang) {
    this.state.language = lang;
    storage.set('language', lang);
    this.notify('language');
  }

  setTheme(theme) {
    this.state.theme = theme;
    storage.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.notify('theme');
  }

  toggleTheme() {
    const next = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  // --- User / Auth ---
  loginUser(email, name = 'Kayan Member') {
    this.state.user = {
      ...this.state.user,
      loggedIn: true,
      email,
      name
    };
    storage.set('user', this.state.user);
    this.notify('user');
    events.emit('toast:show', {
      type: 'success',
      message: `Welcome back, ${name}`
    });
  }

  logoutUser() {
    this.state.user = {
      ...this.state.user,
      loggedIn: false,
      email: ''
    };
    storage.set('user', this.state.user);
    this.notify('user');
    events.emit('toast:show', {
      type: 'info',
      message: 'Signed out successfully'
    });
  }

  // --- Recently Viewed ---
  addRecentlyViewed(product) {
    let recent = [...this.state.recentlyViewed];
    recent = recent.filter((p) => p.id !== product.id);
    recent.unshift({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images && product.images[0] ? product.images[0] : ''
    });
    if (recent.length > 8) recent.pop();

    this.state.recentlyViewed = recent;
    storage.set('recentlyViewed', recent);
    this.notify('recentlyViewed');
  }
}

const store = new Store();
/**
 * KAYAN Luxury Fashion — i18n Localization Engine
 * Handles EN <-> AR translations, instant RTL layout flipping, and Intl price formatting
 */


class I18nEngine {
  constructor() {
    this.currentLang = store.getState().language || 'en';
    this.translations = translations;
  }

  t(key, params = {}) {
    const dict = this.translations[this.currentLang] || this.translations.en;
    let text = dict[key] || this.translations.en[key] || key;

    // Parameter substitution: {amount}, {name}, etc.
    Object.keys(params).forEach((param) => {
      text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
    });

    return text;
  }

  formatPrice(amountUSD, targetCurrency = null, lang = null) {
    const state = store.getState();
    const currency = targetCurrency || state.currency || 'USD';
    const activeLang = lang || this.currentLang || 'en';

    // Get converted amount
    const rate = {
      USD: 1.0,
      AED: 3.67,
      EUR: 0.92,
      SAR: 3.75,
      EGP: 48.50
    }[currency] || 1.0;

    const converted = amountUSD * rate;

    try {
      const formatter = new Intl.NumberFormat(activeLang === 'ar' ? 'ar-AE' : 'en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return formatter.format(converted);
    } catch (e) {
      const symbol = { USD: '$', AED: 'AED', EUR: '€', SAR: 'SAR', EGP: 'EGP' }[currency] || '$';
      return `${symbol} ${Math.round(converted)}`;
    }
  }

  setLanguage(lang) {
    if (!['en', 'ar'].includes(lang)) return;
    this.currentLang = lang;
    store.setLanguage(lang);

    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    this.updateDOM();
    events.emit('i18n:changed', { lang, isRtl });
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.setLanguage(nextLang);
  }

  updateDOM(root = document) {
    // Text contents
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) el.textContent = text;
    });

    // Placeholders
    root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) el.setAttribute('placeholder', text);
    });

    // Titles
    root.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key);
      if (text) el.setAttribute('title', text);
    });
  }

  init() {
    const initialLang = store.getState().language || 'en';
    this.setLanguage(initialLang);
  }
}

const i18n = new I18nEngine();
/**
 * KAYAN Luxury Fashion — Theme Controller
 * Handles dark / light mode with circular expanding reveal transition & persistence
 */


class ThemeController {
  constructor() {
    this.currentTheme = store.getState().theme || 'light';
  }

  init() {
    // If not set, check system preference
    if (!localStorage.getItem('kayan_theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
      store.setTheme(this.currentTheme);
    } else {
      this.applyTheme(this.currentTheme);
    }

    // Listen to store updates
    events.on('store:theme', (theme) => {
      this.currentTheme = theme;
      this.applyTheme(theme);
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(event = null) {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';

    // If browser supports View Transitions API and motion is not reduced
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !prefersReducedMotion && event) {
      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        this.currentTheme = nextTheme;
        store.setTheme(nextTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: nextTheme === 'dark' ? clipPath : [...clipPath].reverse()
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            pseudoElement: nextTheme === 'dark' ? '::view-transition-new(root)' : '::view-transition-old(root)'
          }
        );
      });
    } else {
      this.currentTheme = nextTheme;
      store.setTheme(nextTheme);
    }
  }
}

const themeController = new ThemeController();
/**
 * KAYAN Luxury Fashion — Router & Path Helpers
 * Resolves static paths reliably across root & /pages/ directories and coordinates page transition wipes
 */

function isPagesSubfolder() {
  return window.location.pathname.includes('/pages/') || window.location.pathname.endsWith('/pages');
}

function getBasePath() {
  return isPagesSubfolder() ? '../' : './';
}

function resolveUrl(path) {
  // If absolute or external link
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }

  const inSubfolder = isPagesSubfolder();

  // If path is targetting root index.html
  if (path === 'index.html' || path === '/' || path === './index.html') {
    return inSubfolder ? '../index.html' : 'index.html';
  }

  // If path is targetting a page in pages/
  if (path.startsWith('pages/')) {
    const pageName = path.replace('pages/', '');
    return inSubfolder ? pageName : path;
  }

  // If path is targetting assets
  if (path.startsWith('assets/')) {
    return inSubfolder ? `../${path}` : path;
  }

  return path;
}

/**
 * Page Transition Wipe Interceptor
 */
function initPageTransitions() {
  const curtain = document.querySelector('.transition-curtain');
  if (!curtain) return;

  // Intercept local link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('http') ||
      link.target === '_blank' ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }

    e.preventDefault();
    triggerPageTransition(href);
  });
}

function triggerPageTransition(targetUrl) {
  const curtain = document.querySelector('.transition-curtain');
  if (!curtain) {
    window.location.href = targetUrl;
    return;
  }

  const logo = curtain.querySelector('.curtain-logo');

  if (window.gsap) {
    const tl = window.gsap.timeline({
      onComplete: () => {
        window.location.href = targetUrl;
      }
    });

    tl.set(curtain, { transformOrigin: 'bottom' })
      .to(curtain, {
        y: '0%',
        duration: 0.55,
        ease: 'expo.inOut'
      })
      .to(logo, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2');
  } else {
    curtain.style.transform = 'translateY(0)';
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 400);
  }
}
/**
 * KAYAN Luxury Fashion — Instant Native Scroll Engine
 * Provides 0ms instant scroll responsiveness with hardware acceleration,
 * smooth back-to-top interpolation, and progress tracking.
 */

let lenisInstance = null;

function initSmoothScroll() {
  // 1. Ensure instant, buttery smooth native scrolling without artificial wheel delays
  document.documentElement.style.scrollBehavior = 'smooth';

  // 2. Scroll Progress Bar & Back-to-Top Indicator
  const progressBar = document.querySelector('.scroll-progress-bar');
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  const progressCircle = document.querySelector('.back-to-top-progress-circle');

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (progressBar) progressBar.style.width = `${progress}%`;

        if (backToTopBtn) {
          if (scrollTop > 350) {
            backToTopBtn.classList.add('visible');
          } else {
            backToTopBtn.classList.remove('visible');
          }

          if (progressCircle) {
            const circumference = 2 * Math.PI * 18;
            const offset = circumference - (progress / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
          }
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Provide a lightweight mock for any external Lenis consumers
  lenisInstance = {
    scrollTo: (target, opts = {}) => {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    raf: () => {},
    on: () => {},
    destroy: () => {}
  };

  return lenisInstance;
}

function getLenis() {
  return lenisInstance;
}
/**
 * KAYAN Luxury Fashion — Hero WebGL / Canvas Silk Simulation
 * Creates an interactive undulating silk fabric ripple responding to cursor motion
 */

function initHeroCanvas(containerSelector = '#hero-webgl-container') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'hero-canvas-element';
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  canvas.style.opacity = '0.35';
  canvas.style.mixBlendMode = 'screen';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = container.clientWidth);
  let height = (canvas.height = container.clientHeight);

  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    if (e.clientY <= rect.bottom && e.clientY >= rect.top) {
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    width = canvas.width = container.clientWidth;
    height = canvas.height = container.clientHeight;
  });

  // Mesh wave lines simulating undulating silk fabric (Optimized count)
  const waveLines = Array.from({ length: 8 }).map((_, i) => ({
    yBase: (height / 10) * (i + 1),
    speed: 0.0012 + i * 0.0003,
    amplitude: 20 + i * 3,
    wavelength: 0.004 + (i % 3) * 0.001,
    color: i % 2 === 0 ? 'rgba(201, 138, 76, 0.35)' : 'rgba(240, 238, 232, 0.25)'
  }));

  let time = 0;
  let animId = null;
  let isVisible = true;

  // Pause canvas when out of viewport
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible && !animId) {
      animId = requestAnimationFrame(render);
    } else if (!isVisible && animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  }, { threshold: 0.05 });
  observer.observe(container);

  function render() {
    if (!isVisible) return;
    time += 1;

    // Smooth lerp mouse
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    ctx.clearRect(0, 0, width, height);

    waveLines.forEach((wave) => {
      ctx.beginPath();
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = 1.2;

      for (let x = 0; x <= width; x += 24) {
        const dx = x - mouseX;
        const dy = wave.yBase - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseEffect = Math.max(0, 1 - dist / 300) * 35;

        const y =
          wave.yBase +
          Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude +
          Math.cos(x * 0.002 - time * 0.001) * 12 +
          Math.sin(dist * 0.02 - time * 0.03) * mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    });

    animId = requestAnimationFrame(render);
  }

  animId = requestAnimationFrame(render);

  return () => {
    observer.disconnect();
    if (animId) cancelAnimationFrame(animId);
    canvas.remove();
  };
}
/**
 * KAYAN Luxury Fashion — Text Splitting & Masked Reveal Animation
 * Splits headers by word and character for editorial staggered reveal transitions
 */

function splitTextIntoWords(element) {
  if (!element || element.dataset.splitDone) return;
  const text = element.textContent.trim();
  const words = text.split(/\s+/);

  element.innerHTML = words
    .map(
      (word) =>
        `<span class="split-word-wrapper" style="display:inline-block; overflow:hidden; vertical-align:top; margin-inline-end:0.25em;">` +
        `<span class="split-word-inner" style="display:inline-block; transform:translateY(110%); will-change:transform;">${word}</span>` +
        `</span>`
    )
    .join('');

  element.dataset.splitDone = 'true';
}

function animateSplitText(element, delay = 0) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!element) return;

  if (prefersReducedMotion) {
    element.style.opacity = '1';
    return;
  }

  splitTextIntoWords(element);
  const inners = element.querySelectorAll('.split-word-inner');

  if (window.gsap) {
    window.gsap.to(inners, {
      y: '0%',
      duration: 0.9,
      stagger: 0.04,
      delay: delay,
      ease: 'expo.out'
    });
  } else {
    inners.forEach((inner, idx) => {
      setTimeout(() => {
        inner.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        inner.style.transform = 'translateY(0%)';
      }, (delay + idx * 0.04) * 1000);
    });
  }
}
/**
 * KAYAN Luxury Fashion — Magnetic Micro-Interaction
 * Draws buttons smoothly toward cursor on hover
 */

function initMagneticElements(selector = '[data-magnetic], .btn-magnetic') {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    let boundRect = null;
    let ticking = false;
    let targetX = 0;
    let targetY = 0;
    const strength = parseFloat(el.dataset.magneticStrength || '0.35');

    function onMouseEnter() {
      boundRect = el.getBoundingClientRect();
    }

    function onMouseMove(e) {
      if (!boundRect) boundRect = el.getBoundingClientRect();
      targetX = (e.clientX - boundRect.left - boundRect.width / 2) * strength;
      targetY = (e.clientY - boundRect.top - boundRect.height / 2) * strength;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.gsap) {
            window.gsap.to(el, {
              x: targetX,
              y: targetY,
              duration: 0.25,
              ease: 'power2.out',
              overwrite: 'auto'
            });
          } else {
            el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    function onMouseLeave() {
      boundRect = null;
      if (window.gsap) {
        window.gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
      }
    }

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('mouseleave', onMouseLeave);
  });
}
/**
 * KAYAN Luxury Fashion — 3D Tilt Card Interaction
 * Smooth parallax tilt with lighting sheen on desktop cursor hover
 */

function init3DTilt(selector = '[data-tilt], .tilt-card') {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    let rect = null;
    let ticking = false;

    function onMouseEnter() {
      rect = el.getBoundingClientRect();
      el.style.transformStyle = 'preserve-3d';
    }

    function onMouseMove(e) {
      if (!rect) rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (rect) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    function onMouseLeave() {
      rect = null;
      el.style.transition = 'transform 0.4s ease-out';
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      setTimeout(() => {
        el.style.transition = '';
      }, 400);
    }

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('mouseleave', onMouseLeave);
  });
}
/**
 * KAYAN Luxury Fashion — Parallax Engine
 * Smooth multi-plane parallax effects on background imagery and editorial typography
 */

function initParallax(selector = '[data-parallax]') {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const elements = document.querySelectorAll(selector);

  if (window.gsap && window.ScrollTrigger) {
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed || '0.2');
      const direction = el.dataset.parallaxDirection === 'down' ? 1 : -1;

      window.gsap.to(el, {
        y: () => direction * (window.innerHeight * speed),
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  } else {
    // Passive scroll listener fallback
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.15');
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    }, { passive: true });
  }
}
/**
 * KAYAN Luxury Fashion — Velocity-Reactive Marquee
 * Accelerates and shifts direction based on user scroll velocity
 */

function initMarquees() {
  const marquees = document.querySelectorAll('.marquee-track');
  if (!marquees.length) return;

  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    scrollVelocity = Math.abs(currentScrollY - lastScrollY);
    lastScrollY = currentScrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const factor = Math.min(3.5, 1 + scrollVelocity * 0.04);
        marquees.forEach((m) => {
          m.style.animationDuration = `${32 / factor}s`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Reset to default speed when scrolling ceases
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      marquees.forEach((m) => {
        m.style.animationDuration = '32s';
      });
    }, 150);
  }, { passive: true });
}
/**
 * KAYAN Luxury Fashion — Page Transition Engine
 * Coordinates curtain wipes and logo flashes across static navigation
 */


function setupPageTransitions() {
  initPageTransitions();
}

/**
 * KAYAN Luxury Fashion — Stacked Toast Notification System
 * Listens to event bus and renders luxury dismissible alert cards with timer bars
 */


class ToastSystem {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    this.container = document.querySelector('.toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }

    events.on('toast:show', (data) => {
      this.show(data);
    });
  }

  show({ type = 'info', message = '', duration = 4000, actionText = null, onAction = null }) {
    if (!this.container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconMap = {
      success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>`,
      error: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`,
      warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>`,
      info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`
    };

    let actionBtnHtml = '';
    if (actionText) {
      actionBtnHtml = `<button class="toast-action">${actionText}</button>`;
    }

    toast.innerHTML = `
      <div class="toast-icon ${type}">${iconMap[type] || iconMap.info}</div>
      <div class="toast-message">${message}</div>
      ${actionBtnHtml}
      <button class="toast-close" aria-label="Close notification">
        <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="toast-progress"></div>
    `;

    this.container.appendChild(toast);

    // Trigger entrance animation
    requestAnimationFrame(() => {
      toast.classList.add('active');
    });

    const progressEl = toast.querySelector('.toast-progress');
    if (progressEl) {
      progressEl.style.transition = `transform ${duration}ms linear`;
      requestAnimationFrame(() => {
        progressEl.style.transform = 'scaleX(0)';
      });
    }

    // Action button
    if (actionText && onAction) {
      const actBtn = toast.querySelector('.toast-action');
      actBtn.addEventListener('click', () => {
        onAction();
        this.dismiss(toast);
      });
    }

    // Close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => this.dismiss(toast));

    // Auto dismiss
    const timeout = setTimeout(() => {
      this.dismiss(toast);
    }, duration);

    toast.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      if (progressEl) progressEl.style.transition = 'none';
    });
  }

  dismiss(toast) {
    toast.classList.remove('active');
    toast.classList.add('closing');
    setTimeout(() => {
      toast.remove();
    }, 350);
  }
}

const toastSystem = new ToastSystem();
/**
 * KAYAN Luxury Fashion — Preloader & Cinematic Intro
 * Displays animated logo stroke reveal, 0-100 counter, and curtain wipe (skippable, 1x per session)
 */

function initPreloader(onComplete = null) {
  const hasSeenIntro = sessionStorage.getItem('kayan_intro_seen');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If already seen or user prefers reduced motion, skip intro
  if (hasSeenIntro || prefersReducedMotion) {
    const preloaderEl = document.querySelector('.site-preloader');
    if (preloaderEl) preloaderEl.remove();
    if (onComplete) onComplete();
    return;
  }

  // Create preloader markup if not already in DOM
  let preloader = document.querySelector('.site-preloader');
  if (!preloader) {
    preloader = document.createElement('div');
    preloader.className = 'site-preloader';
    preloader.innerHTML = `
      <div class="preloader-backdrop">
        <div class="preloader-content">
          <div class="preloader-logo-wrap">
            <svg viewBox="0 0 64 64" width="72" height="72" class="preloader-monogram">
              <rect width="64" height="64" rx="14" fill="#0F0F10"/>
              <path class="preloader-k-stroke" d="M18 14 V50 M46 14 L24 32 L46 50" fill="none" stroke="#F9F8F5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="35" cy="32" r="3" fill="#C98A4C"/>
            </svg>
            <div class="preloader-wordmark">K A Y A N</div>
            <div class="preloader-arabic">كَيَان</div>
          </div>
          <div class="preloader-progress-wrap">
            <div class="preloader-counter">0</div>
            <div class="preloader-bar"><div class="preloader-fill"></div></div>
          </div>
          <button class="preloader-skip-btn">Skip Intro &rarr;</button>
        </div>
      </div>
    `;
    document.body.prepend(preloader);
  }

  // Inject Preloader CSS if missing
  if (!document.getElementById('preloader-styles')) {
    const style = document.createElement('style');
    style.id = 'preloader-styles';
    style.textContent = `
      .site-preloader {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        z-index: var(--z-preloader);
        background: #0A0A0C;
        color: #FAF9F5;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .preloader-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
      }
      .preloader-wordmark {
        font-family: var(--font-display);
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: 0.35em;
        margin-top: 12px;
      }
      .preloader-arabic {
        font-family: var(--font-arabic);
        font-size: 1.1rem;
        color: var(--brand-terracotta-gold);
        margin-top: 4px;
      }
      .preloader-progress-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        width: 220px;
      }
      .preloader-counter {
        font-family: monospace;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--brand-terracotta-gold);
      }
      .preloader-bar {
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 999px;
        overflow: hidden;
      }
      .preloader-fill {
        height: 100%;
        width: 0%;
        background: var(--brand-terracotta-gold);
        transition: width 0.05s linear;
      }
      .preloader-skip-btn {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        cursor: pointer;
        padding: 6px 12px;
        margin-top: 12px;
        transition: color 0.2s;
      }
      .preloader-skip-btn:hover { color: #FFF; }
      .preloader-k-stroke {
        stroke-dasharray: 120;
        stroke-dashoffset: 120;
        animation: strokeDraw 1.6s ease-out forwards;
      }
      @keyframes strokeDraw {
        to { stroke-dashoffset: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  const counterEl = preloader.querySelector('.preloader-counter');
  const fillEl = preloader.querySelector('.preloader-fill');
  const skipBtn = preloader.querySelector('.preloader-skip-btn');

  let count = 0;
  const interval = setInterval(() => {
    count += 2;
    if (counterEl) counterEl.textContent = count;
    if (fillEl) fillEl.style.width = `${count}%`;

    if (count >= 100) {
      clearInterval(interval);
      dismissPreloader();
    }
  }, 35);

  function dismissPreloader() {
    clearInterval(interval);
    sessionStorage.setItem('kayan_intro_seen', 'true');

    if (window.gsap) {
      window.gsap.to(preloader, {
        y: '-100%',
        duration: 0.85,
        ease: 'expo.inOut',
        onComplete: () => {
          preloader.remove();
          if (onComplete) onComplete();
        }
      });
    } else {
      preloader.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      preloader.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        preloader.remove();
        if (onComplete) onComplete();
      }, 700);
    }
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', dismissPreloader);
  }
}
/**
 * KAYAN Luxury Fashion — Custom Interactive Cursor
 * Dual-element follower (inner dot + lagging smooth ring) with context-aware morphing
 */

function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let dot = document.querySelector('.custom-cursor-dot');
  let ring = document.querySelector('.custom-cursor-ring');

  if (!dot) {
    dot = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    document.body.appendChild(dot);
  }

  if (!ring) {
    ring = document.createElement('div');
    ring.className = 'custom-cursor-ring';
    document.body.appendChild(ring);
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    ringX += (mouseX - ringX) * 0.22;
    ringY += (mouseY - ringY) * 0.22;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Fast Event Delegation for cursor hover states (replaces 1000+ individual element listeners)
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.closest('.product-card')) {
      ring.classList.add('cursor-view');
      ring.textContent = 'VIEW';
    } else if (target.closest('a, button, input, select, .btn-magnetic')) {
      ring.classList.add('cursor-hover');
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.closest('.product-card')) {
      ring.classList.remove('cursor-view');
      ring.textContent = '';
    } else if (target.closest('a, button, input, select, .btn-magnetic')) {
      ring.classList.remove('cursor-hover');
    }
  }, { passive: true });
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.closest('.carousel-container, .trending-pills-strip, .lookbook-track')) {
      ring.classList.add('cursor-drag');
      ring.textContent = 'DRAG';
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.closest('.carousel-container, .trending-pills-strip, .lookbook-track')) {
      ring.classList.remove('cursor-drag');
      ring.textContent = '';
    }
  }, { passive: true });

  // Hide cursor when exiting viewport
  document.addEventListener('mouseleave', () => {
    dot.classList.add('cursor-hidden');
    ring.classList.add('cursor-hidden');
  });

  document.addEventListener('mouseenter', () => {
    dot.classList.remove('cursor-hidden');
    ring.classList.remove('cursor-hidden');
  });
}
/**
 * KAYAN Luxury Fashion — Cookie Consent Banner
 * Non-intrusive animated bottom drawer that persists user preference
 */


function initCookieBanner() {
  const hasConsented = storage.get('cookieConsent', null);
  if (hasConsented !== null) return;

  let banner = document.querySelector('.cookie-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-text">
        We utilize necessary and performance cookies to curate your atelier experience, preserve your shopping bag, and deliver tailored recommendations across our global collections.
      </div>
      <div class="cookie-banner-actions">
        <button class="cookie-btn cookie-btn-decline" id="cookie-decline">Essential Only</button>
        <button class="cookie-btn cookie-btn-accept" id="cookie-accept">Accept All</button>
      </div>
    `;
    document.body.appendChild(banner);
  }

  setTimeout(() => {
    banner.classList.add('active');
  }, 1600);

  const acceptBtn = banner.querySelector('#cookie-accept');
  const declineBtn = banner.querySelector('#cookie-decline');

  function dismiss(choice) {
    storage.set('cookieConsent', choice);
    banner.classList.remove('active');
    setTimeout(() => banner.remove(), 400);
  }

  if (acceptBtn) acceptBtn.addEventListener('click', () => dismiss(true));
  if (declineBtn) declineBtn.addEventListener('click', () => dismiss(false));
}
/**
 * KAYAN Luxury Fashion — Sale Countdown Timer Component
 * Live days/hours/minutes/seconds countdown with animated digit transitions
 */

function initCountdown(targetDateOrHours = 48, selector = '#sale-countdown') {
  const container = document.querySelector(selector);
  if (!container) return;

  const endTime = new Date(Date.now() + targetDateOrHours * 60 * 60 * 1000).getTime();

  function update() {
    const now = Date.now();
    const distance = Math.max(0, endTime - now);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    container.innerHTML = `
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(days)}</span>
        <span class="countdown-label">Days</span>
      </div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(hours)}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(minutes)}</span>
        <span class="countdown-label">Mins</span>
      </div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(seconds)}</span>
        <span class="countdown-label">Secs</span>
      </div>
    `;

    // Also update announcement bar timer if present
    const annTimer = document.querySelector('#announcement-live-timer');
    if (annTimer) {
      annTimer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
  }

  update();
  setInterval(update, 1000);
}
/**
 * KAYAN Luxury Fashion — Newsletter Subscription Component
 * Email regex validation, canvas confetti burst, and automatic promo discount unlock
 */


function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form, .footer-newsletter-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) return;

      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        events.emit('toast:show', {
          type: 'error',
          message: 'Please provide a valid email address.'
        });
        return;
      }

      // Save subscription state
      storage.set('newsletterSubscribed', true);
      input.value = '';

      // Trigger celebratory confetti burst
      triggerConfetti();

      events.emit('toast:show', {
        type: 'success',
        message: 'Welcome to The Kayan Dispatch. Your 15% code KAYAN15 is unlocked!'
      });
    });
  });
}
/**
 * KAYAN Luxury Fashion — Reusable Product Card Component
 * Renders consistent product cards with bilingual names, secondary image hover,
 * swatches, quick-add, and quick-view.
 */


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

function createProductCardHtml(product) {
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

function bindProductCardEvents(container = document) {
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
/**
 * KAYAN Luxury Fashion — Global Header & Announcement Bar Component
 * Injects cohesive navigation, sliding department indicator, and header scroll interactions
 */


function renderHeader() {
  const mount = document.querySelector('#site-header-mount');
  if (!mount) return;

  const state = store.getState();
  const cartTotals = store.getCartTotals();
  const wishlistCount = state.wishlist.length;

  mount.innerHTML = `
    <!-- Top Scroll Progress Bar -->
    <div class="scroll-progress-bar"></div>

    <!-- Announcement Bar -->
    <div class="announcement-bar">
      <div class="announcement-slider">
        <div class="announcement-item active">
          <span data-i18n="announcement.free_shipping">Complimentary Global Express Delivery on orders over $150</span>
        </div>
        <div class="announcement-item">
          <span data-i18n="announcement.code">Enjoy 15% off your maiden acquisition with code <strong>KAYAN15</strong></span>
        </div>
        <div class="announcement-item">
          <span data-i18n="announcement.equinox">The Equinox Archive Event: Buy 2 get 20%, Buy 3+ get 25%</span>
          <span class="announcement-timer" id="announcement-live-timer">14:28:12</span>
        </div>
      </div>
      <div class="announcement-tools">
        <button id="announcement-lang-toggle" class="announcement-lang-link" aria-label="Toggle language">
          ${state.language === 'ar' ? 'English' : 'العربية'}
        </button>
        <button class="announcement-close" aria-label="Dismiss Announcement">&times;</button>
      </div>
    </div>

    <!-- Main Sticky Site Header -->
    <header class="site-header" id="main-site-header">
      <div class="header-container">
        <!-- Left: Department Navigation -->
        <nav class="header-nav-left" aria-label="Primary Departments">
          <button class="header-mobile-toggle" id="mobile-menu-btn" aria-label="Toggle mobile menu">
            <span class="hamburger-icon">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </span>
          </button>

          <ul class="dept-nav-list" id="dept-nav-list">
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=women')}" class="dept-nav-link ${state.department === 'women' ? 'active' : ''}" data-dept="women" data-i18n="nav.women">Women</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=men')}" class="dept-nav-link ${state.department === 'men' ? 'active' : ''}" data-dept="men" data-i18n="nav.men">Men</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=kids')}" class="dept-nav-link ${state.department === 'kids' ? 'active' : ''}" data-dept="kids" data-i18n="nav.kids">Kids</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=beauty')}" class="dept-nav-link ${state.department === 'beauty' ? 'active' : ''}" data-dept="beauty" data-i18n="nav.beauty">Beauty</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=home')}" class="dept-nav-link ${state.department === 'home' ? 'active' : ''}" data-dept="home" data-i18n="nav.home">Home</a>
            </li>
            <div class="dept-sliding-pill" id="dept-sliding-pill"></div>
          </ul>
        </nav>

        <!-- Center: Animated Logo -->
        <div class="header-logo-container">
          <a href="${resolveUrl('index.html')}" class="header-logo-link" aria-label="KAYAN Home">
            <svg viewBox="0 0 240 48" width="180" height="38" class="kayan-logo-svg">
              <g class="kayan-monogram" transform="translate(4, 6)">
                <rect width="36" height="36" rx="8" fill="currentColor"/>
                <path class="logo-stroke" d="M12 9 V27 M28 9 L15 18 L28 27" fill="none" stroke="var(--color-surface)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="21" cy="18" r="1.8" fill="var(--color-accent)"/>
              </g>
              <text x="56" y="31" font-family="var(--font-display)" font-size="22" font-weight="700" letter-spacing="8" fill="currentColor" class="logo-wordmark">KAYAN</text>
              <text x="195" y="31" font-family="var(--font-arabic)" font-size="14" font-weight="600" fill="var(--color-accent)" class="logo-arabic">كَيَان</text>
            </svg>
          </a>
        </div>

        <!-- Right: Actions & Tools -->
        <div class="header-nav-right">
          <a href="${resolveUrl('pages/lookbook.html')}" class="header-ugc-link">
            <span class="pulsing-dot"></span>
            <span data-i18n="nav.wear_it">Wear KAYAN</span>
          </a>

          <!-- Search Button -->
          <button class="header-btn btn-magnetic" id="header-search-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>

          <!-- Language Toggle Pill (EN / AR) -->
          <button class="header-lang-btn btn-magnetic" id="header-lang-btn" aria-label="Toggle Arabic/English Language" title="تغيير اللغة إلى ${state.language === 'ar' ? 'الإنجليزية' : 'العربية'}">
            <span>${state.language === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          <!-- Country / Language / Currency Trigger -->
          <button class="header-btn btn-magnetic" id="header-locale-btn" aria-label="Language and currency preferences">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </button>

          <!-- Account Trigger -->
          <button class="header-btn btn-magnetic" id="header-account-btn" aria-label="My Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>

          <!-- Wishlist Trigger -->
          <a href="${resolveUrl('pages/wishlist.html')}" class="header-btn btn-magnetic" id="header-wishlist-btn" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="header-badge ${wishlistCount > 0 ? '' : 'empty'}" id="header-wishlist-badge">${wishlistCount}</span>
          </a>

          <!-- Cart Trigger -->
          <button class="header-btn btn-magnetic" id="header-cart-btn" aria-label="Shopping Bag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="header-badge ${cartTotals.itemCount > 0 ? '' : 'empty'}" id="header-cart-badge">${cartTotals.itemCount}</span>
          </button>
        </div>
      </div>
    </header>
  `;

  initHeaderInteractions();
  initMagneticElements();
  i18n.updateDOM(mount);
}

function initHeaderInteractions() {
  const header = document.querySelector('#main-site-header');
  const bar = document.querySelector('.announcement-bar');
  const pill = document.querySelector('#dept-sliding-pill');
  const deptLinks = document.querySelectorAll('.dept-nav-link');

  // Announcement Bar Rotation
  const annItems = document.querySelectorAll('.announcement-item');
  let currentAnn = 0;
  if (annItems.length > 1) {
    setInterval(() => {
      annItems[currentAnn].classList.remove('active');
      currentAnn = (currentAnn + 1) % annItems.length;
      annItems[currentAnn].classList.add('active');
    }, 4500);
  }

  // Dismiss Announcement
  const annClose = document.querySelector('.announcement-close');
  if (annClose && bar) {
    annClose.addEventListener('click', () => {
      bar.style.display = 'none';
    });
  }

  // Sliding pill under department tabs
  function positionPill(link) {
    if (!pill || !link) return;
    const parentRect = link.parentElement.parentElement.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    pill.style.width = `${linkRect.width}px`;
    pill.style.left = `${linkRect.left - parentRect.left}px`;
  }

  const activeLink = document.querySelector('.dept-nav-link.active');
  if (activeLink) positionPill(activeLink);

  deptLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => positionPill(link));
    link.addEventListener('click', (e) => {
      deptLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      positionPill(link);
      const dept = link.dataset.dept;
      store.setDepartment(dept);
    });
  });

  const navList = document.querySelector('#dept-nav-list');
  if (navList) {
    navList.addEventListener('mouseleave', () => {
      const currentActive = document.querySelector('.dept-nav-link.active') || deptLinks[0];
      positionPill(currentActive);
    });
  }

  // Header Scroll Down / Up Behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 160) {
      // Scrolling down -> hide header
      header.classList.add('header-hidden');
    } else {
      // Scrolling up -> show header
      header.classList.remove('header-hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Event Listeners for Buttons
  const searchBtn = document.querySelector('#header-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => events.emit('search:open'));
  }

  const cartBtn = document.querySelector('#header-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => events.emit('cart:open'));
  }

  const accountBtn = document.querySelector('#header-account-btn');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => events.emit('modal:auth:open'));
  }

  const localeBtn = document.querySelector('#header-locale-btn');
  if (localeBtn) {
    localeBtn.addEventListener('click', () => events.emit('modal:locale:open'));
  }

  const langBtn = document.querySelector('#header-lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      i18n.toggleLanguage();
      renderHeader();
    });
  }

  const annLangBtn = document.querySelector('#announcement-lang-toggle');
  if (annLangBtn) {
    annLangBtn.addEventListener('click', () => {
      i18n.toggleLanguage();
      renderHeader();
    });
  }

  // Badge Updates on Store changes
  if (!window._headerEventsBound) {
    window._headerEventsBound = true;
    events.on('cart:updated', (totals) => {
    const badge = document.querySelector('#header-cart-badge');
    if (badge) {
      badge.textContent = totals.itemCount;
      if (totals.itemCount > 0) {
        badge.classList.remove('empty');
        badge.classList.remove('badge-pop');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('badge-pop');
      } else {
        badge.classList.add('empty');
      }
    }
  });

  events.on('wishlist:toggled', ({ count }) => {
    const badge = document.querySelector('#header-wishlist-badge');
    if (badge) {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('empty');
        badge.classList.add('badge-pop');
      } else {
        badge.classList.add('empty');
      }
    }
  });
  }
}
/**
 * KAYAN Luxury Fashion — Mega Menu & Mobile Offcanvas Drawer
 * Staggered column entry, hover intent delay, category thumbnails, and mobile navigation
 */


function renderMegaMenu() {
  const header = document.querySelector('#main-site-header');
  if (!header) return;

  // 1. Create Desktop Mega Menu Panels Container
  let megaMenuContainer = document.querySelector('#megamenu-mount');
  if (!megaMenuContainer) {
    megaMenuContainer = document.createElement('div');
    megaMenuContainer.id = 'megamenu-mount';
    header.appendChild(megaMenuContainer);
  }

  // Generate Panels for all 5 departments
  let panelsHtml = '';
  Object.keys(categories).forEach((deptKey) => {
    const dept = categories[deptKey];
    panelsHtml += `
      <div class="megamenu-panel" id="megamenu-panel-${deptKey}" data-dept="${deptKey}">
        <div class="megamenu-inner">
          ${dept.sections
            .map(
              (sec) => `
            <div class="megamenu-col">
              <h4 class="megamenu-title">${sec.title}</h4>
              <ul class="megamenu-list">
                ${sec.items
                  .map(
                    (item) => `
                  <li>
                    <a href="${resolveUrl(`pages/shop.html?dept=${deptKey}&sub=${item.slug}`)}" class="megamenu-item-link">
                      <div class="megamenu-thumb">
                        <img src="${item.thumb}" alt="${item.name}" loading="lazy"/>
                      </div>
                      <span>${item.name}</span>
                      <span class="megamenu-arrow">&rarr;</span>
                    </a>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>
          `
            )
            .join('')}

          <!-- Right Column: Featured Editorial Tile -->
          <div class="megamenu-featured">
            <img src="${dept.featuredImage}" alt="${dept.name} Editorial" class="megamenu-featured-img" loading="lazy"/>
            <div class="megamenu-featured-overlay"></div>
            <div class="megamenu-featured-content">
              <span class="megamenu-featured-tag">Atelier Edition</span>
              <h3 class="megamenu-featured-title">${dept.name} Autumn Collection</h3>
              <a href="${resolveUrl(`pages/shop.html?dept=${deptKey}`)}" class="megamenu-featured-btn">Explore All &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  megaMenuContainer.innerHTML = panelsHtml;

  // 2. Mobile Nav Drawer
  let mobileDrawer = document.querySelector('.mobile-nav-drawer');
  if (!mobileDrawer) {
    mobileDrawer = document.createElement('div');
    mobileDrawer.className = 'mobile-nav-drawer';
    mobileDrawer.innerHTML = `
      <div class="mobile-nav-header">
        <div class="font-display font-bold">KAYAN</div>
        <button class="mobile-nav-close header-btn">&times;</button>
      </div>
      <div class="mobile-nav-body">
        <div class="mobile-dept-tabs">
          <button class="mobile-dept-btn active" data-dept="women">Women</button>
          <button class="mobile-dept-btn" data-dept="men">Men</button>
          <button class="mobile-dept-btn" data-dept="kids">Kids</button>
          <button class="mobile-dept-btn" data-dept="beauty">Beauty</button>
          <button class="mobile-dept-btn" data-dept="home">Home</button>
        </div>
        <div class="mobile-categories-list" id="mobile-categories-mount"></div>
      </div>
    `;
    document.body.appendChild(mobileDrawer);

    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);
  }

  initMegaMenuInteractions();
}

function initMegaMenuInteractions() {
  const deptLinks = document.querySelectorAll('.dept-nav-link');
  const panels = document.querySelectorAll('.megamenu-panel');
  let activePanel = null;
  let closeTimer = null;

  function openPanel(deptKey) {
    clearTimeout(closeTimer);
    panels.forEach((p) => p.classList.remove('open'));
    const target = document.querySelector(`#megamenu-panel-${deptKey}`);
    if (target) {
      target.classList.add('open');
      activePanel = target;
    }
  }

  function scheduleClose() {
    closeTimer = setTimeout(() => {
      if (activePanel) {
        activePanel.classList.remove('open');
        activePanel = null;
      }
    }, 220); // hover intent grace period
  }

  deptLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      const dept = link.dataset.dept;
      openPanel(dept);
    });
    link.addEventListener('mouseleave', scheduleClose);
  });

  panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panel.addEventListener('mouseleave', scheduleClose);
  });

  // Keyboard navigation & Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activePanel) {
      activePanel.classList.remove('open');
      activePanel = null;
    }
  });

  // Mobile Drawer Toggle
  const mobileToggle = document.querySelector('#mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');

  function toggleMobile(open) {
    if (open) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      mobileToggle.classList.add('active');
      renderMobileCategories('women');
    } else {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('active');
      toggleMobile(!isOpen);
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => toggleMobile(false));
  if (backdrop) backdrop.addEventListener('click', () => toggleMobile(false));

  // Mobile Department Tabs switch
  document.querySelectorAll('.mobile-dept-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mobile-dept-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderMobileCategories(btn.dataset.dept);
    });
  });
}

function renderMobileCategories(deptKey) {
  const mount = document.querySelector('#mobile-categories-mount');
  if (!mount) return;

  const dept = categories[deptKey] || categories.women;
  mount.innerHTML = dept.sections
    .map(
      (sec) => `
    <div class="mobile-nav-accordion-item">
      <button class="mobile-accordion-trigger">
        <span>${sec.title}</span>
        <span class="accordion-arrow">&darr;</span>
      </button>
      <div class="mobile-accordion-content">
        ${sec.items
          .map(
            (item) => `
          <a href="${resolveUrl(`pages/shop.html?dept=${deptKey}&sub=${item.slug}`)}" class="megamenu-item-link" style="padding: 6px 0;">
            <img src="${item.thumb}" style="width:24px; height:24px; border-radius:50%;" loading="lazy"/>
            <span>${item.name}</span>
          </a>
        `
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('');

  // Accordion toggle clicks
  mount.querySelectorAll('.mobile-accordion-trigger').forEach((trig) => {
    trig.addEventListener('click', () => {
      const item = trig.parentElement;
      item.classList.toggle('open');
    });
  });
}
/**
 * KAYAN Luxury Fashion — Fullscreen Fuzzy Search Component
 * Features instant typo-tolerant fuzzy matching, recent searches, voice search, and keyboard navigation
 */


function renderSearchModal() {
  let overlay = document.querySelector('.search-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'search-modal-overlay';
    overlay.innerHTML = `
      <div class="search-modal-container">
        <!-- Input Bar -->
        <div class="search-input-wrapper">
          <svg class="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input type="text" class="search-input-field" placeholder="Search silhouettes, materials, or archival pieces..." autocomplete="off"/>
          <div class="search-action-btns">
            <button class="search-voice-btn" title="Voice Search" aria-label="Voice Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
              </svg>
            </button>
            <button class="search-clear-btn" style="display:none;" aria-label="Clear Search">&times;</button>
            <span class="search-kbd-hint">ESC</span>
            <button class="search-close-btn" aria-label="Close search overlay">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Dynamic Results Body -->
        <div class="search-results-content">
          <!-- Recent & Trending Tags Default View -->
          <div class="search-tags-section" id="search-tags-section">
            <div id="recent-searches-box" style="display:none; margin-bottom: 24px;">
              <div class="search-section-label">Recent Inquiries</div>
              <div class="search-chips-row" id="recent-chips-mount"></div>
            </div>

            <div class="search-section-label">Trending Now</div>
            <div class="search-chips-row">
              <button class="search-chip" data-query="Merino Wool">Merino Wool</button>
              <button class="search-chip" data-query="Silk Kimono">Silk Kimono</button>
              <button class="search-chip" data-query="Trench Coat">Trench Coat</button>
              <button class="search-chip" data-query="Oud Extrait">Oud Extrait</button>
              <button class="search-chip" data-query="Travertine">Travertine</button>
              <button class="search-chip" data-query="Selvedge Denim">Selvedge Denim</button>
              <button class="search-chip" data-query="Linen Duvet">Linen Duvet</button>
            </div>
          </div>

          <!-- Product Results List -->
          <div id="search-products-section" style="display:none;">
            <div class="search-section-label" id="search-results-count" style="margin-bottom:12px;">Matched Silhouettes</div>
            <div class="search-products-grid" id="search-results-grid"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  initSearchLogic(overlay);
}

function initSearchLogic(overlay) {
  const input = overlay.querySelector('.search-input-field');
  const clearBtn = overlay.querySelector('.search-clear-btn');
  const closeBtn = overlay.querySelector('.search-close-btn');
  const voiceBtn = overlay.querySelector('.search-voice-btn');
  const tagsSection = overlay.querySelector('#search-tags-section');
  const productsSection = overlay.querySelector('#search-products-section');
  const resultsGrid = overlay.querySelector('#search-results-grid');
  const resultsCount = overlay.querySelector('#search-results-count');

  let selectedIndex = -1;

  function openSearch() {
    overlay.classList.add('active');
    renderRecentSearches();
    setTimeout(() => input.focus(), 150);
  }

  function closeSearch() {
    overlay.classList.remove('active');
    input.value = '';
    clearBtn.style.display = 'none';
    tagsSection.style.display = 'block';
    productsSection.style.display = 'none';
    selectedIndex = -1;
  }

  events.on('search:open', openSearch);
  closeBtn.addEventListener('click', closeSearch);

  // Close on Escape or click outside
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    // Open on '/' shortcut if not already inside an input
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // Recent Searches rendering
  function renderRecentSearches() {
    const recent = storage.get('recentSearches', []);
    const recentBox = overlay.querySelector('#recent-searches-box');
    const recentMount = overlay.querySelector('#recent-chips-mount');

    if (recent.length > 0) {
      recentBox.style.display = 'block';
      recentMount.innerHTML = recent
        .map(
          (q) => `
        <span class="search-chip" data-query="${q}">
          ${q}
          <span class="remove-recent" data-del="${q}" style="margin-left:6px; opacity:0.6;">&times;</span>
        </span>
      `
        )
        .join('');

      recentMount.querySelectorAll('.remove-recent').forEach((delBtn) => {
        delBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const toDel = delBtn.dataset.del;
          const updated = recent.filter((item) => item !== toDel);
          storage.set('recentSearches', updated);
          renderRecentSearches();
        });
      });
    } else {
      recentBox.style.display = 'none';
    }
  }

  function saveRecentSearch(query) {
    if (!query || query.length < 2) return;
    let recent = storage.get('recentSearches', []);
    recent = recent.filter((q) => q.toLowerCase() !== query.toLowerCase());
    recent.unshift(query);
    if (recent.length > 6) recent.pop();
    storage.set('recentSearches', recent);
  }

  // Live Query Execution with Debounce
  const handleSearch = debounce((query) => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      tagsSection.style.display = 'block';
      productsSection.style.display = 'none';
      clearBtn.style.display = 'none';
      return;
    }

    clearBtn.style.display = 'block';
    tagsSection.style.display = 'none';
    productsSection.style.display = 'block';

    const matches = products.filter((p) => {
      const matchName = fuzzyMatch(q, p.name).match;
      const matchCat = fuzzyMatch(q, p.category).match;
      const matchMat = fuzzyMatch(q, p.material).match;
      const matchBrand = fuzzyMatch(q, p.brand).match;
      return matchName || matchCat || matchMat || matchBrand;
    });

    resultsCount.textContent = `Found ${matches.length} matching pieces for "${query}"`;

    if (matches.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: rgba(255,255,255,0.6);">
          <p>No silhouettes match your query. Explore our seasonal collections:</p>
          <div style="margin-top: 16px;">
            <a href="${resolveUrl('pages/shop.html')}" class="search-chip" style="display:inline-block;">View All Collections &rarr;</a>
          </div>
        </div>
      `;
      return;
    }

    resultsGrid.innerHTML = matches
      .slice(0, 8)
      .map((p) => {
        // Highlight query in name
        const regex = new RegExp(`(${q})`, 'gi');
        const highlightedName = p.name.replace(regex, '<span class="search-highlight">$1</span>');

        return `
        <a href="${resolveUrl(`pages/product.html?slug=${p.slug}`)}" class="search-product-item" data-url="${resolveUrl(`pages/product.html?slug=${p.slug}`)}">
          <div class="search-product-thumb">
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy"/>
          </div>
          <div class="search-product-details">
            <span style="font-size:10px; text-transform:uppercase; color:rgba(255,255,255,0.5);">${p.brand}</span>
            <div class="search-product-name">${highlightedName}</div>
            <div class="search-product-price">${i18n.formatPrice(p.salePrice || p.price)}</div>
          </div>
        </a>
      `;
      })
      .join('');
  }, 200);

  input.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    handleSearch('');
    input.focus();
  });

  // Clicking trending chips
  overlay.addEventListener('click', (e) => {
    const chip = e.target.closest('.search-chip');
    if (chip && chip.dataset.query) {
      input.value = chip.dataset.query;
      handleSearch(chip.dataset.query);
      saveRecentSearch(chip.dataset.query);
    }
  });

  // Keyboard navigation through results
  input.addEventListener('keydown', (e) => {
    const items = overlay.querySelectorAll('.search-product-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateKeyFocus(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateKeyFocus(items);
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && items[selectedIndex]) {
        e.preventDefault();
        saveRecentSearch(input.value);
        items[selectedIndex].click();
      } else if (input.value) {
        saveRecentSearch(input.value);
      }
    }
  });

  function updateKeyFocus(items) {
    items.forEach((it, idx) => {
      it.classList.toggle('keyboard-selected', idx === selectedIndex);
    });
  }

  // Voice Search (Web Speech API)
  if (voiceBtn) {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        input.value = transcript;
        handleSearch(transcript);
        saveRecentSearch(transcript);
        voiceBtn.style.color = '';
      };

      recognition.onerror = () => {
        voiceBtn.style.color = '';
      };

      recognition.onend = () => {
        voiceBtn.style.color = '';
      };

      voiceBtn.addEventListener('click', () => {
        voiceBtn.style.color = 'var(--color-accent)';
        try {
          recognition.start();
        } catch (err) {
          // already listening
        }
      });
    } else {
      voiceBtn.style.display = 'none';
    }
  }
}
/**
 * KAYAN Luxury Fashion — Mini Cart Drawer Component
 * Slides in from side, manages quantities, promo codes, free shipping bar, and fly-to-cart animation
 */


function renderCartDrawer() {
  let drawer = document.querySelector('.cart-drawer');
  let overlay = document.querySelector('.cart-drawer-overlay');

  if (!drawer) {
    overlay = document.createElement('div');
    overlay.className = 'cart-drawer-overlay';
    document.body.appendChild(overlay);

    drawer = document.createElement('div');
    drawer.className = 'cart-drawer';
    document.body.appendChild(drawer);
  }

  updateCartDrawerUI();
  initCartDrawerEvents(drawer, overlay);
}

function updateCartDrawerUI() {
  const drawer = document.querySelector('.cart-drawer');
  if (!drawer) return;

  const state = store.getState();
  const totals = store.getCartTotals();
  const items = state.cart.items;

  // Free shipping text
  let shippingTextHtml = '';
  if (totals.hasFreeShipping) {
    shippingTextHtml = `<span data-i18n="cart.free_shipping_unlocked">Complimentary Express Delivery Unlocked</span>`;
  } else {
    shippingTextHtml = `Add <span class="highlight">${i18n.formatPrice(totals.freeShippingRemaining)}</span> more for Complimentary Express Delivery`;
  }

  // Items list or Empty state
  let bodyHtml = '';
  if (items.length === 0) {
    bodyHtml = `
      <div class="cart-empty-state">
        <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <h3 class="font-display font-bold text-lg" data-i18n="cart.empty_title">Your Bag is Empty</h3>
        <p class="text-sm" data-i18n="cart.empty_desc">Your personal archive awaits discovery.</p>
        <a href="${resolveUrl('pages/shop.html')}" class="btn-submit-primary" style="margin-top:16px; text-align:center;" data-i18n="cart.discover">Explore New Arrivals</a>
      </div>
    `;
  } else {
    bodyHtml = items
      .map(
        (item) => `
      <div class="cart-item" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.name}" loading="lazy"/>
        </div>
        <div class="cart-item-info">
          <div>
            <div class="cart-item-brand">${item.brand}</div>
            <a href="${resolveUrl(`pages/product.html?slug=${item.slug}`)}" class="cart-item-name">${item.name}</a>
            <div class="cart-item-variants">
              <span>Size: ${item.size}</span>
              <span>&bull;</span>
              <span>Color: ${item.color}</span>
            </div>
          </div>
          <div class="cart-item-controls">
            <div class="quantity-stepper">
              <button class="quantity-btn btn-qty-minus" aria-label="Decrease quantity">&minus;</button>
              <span class="quantity-val">${item.quantity}</span>
              <button class="quantity-btn btn-qty-plus" aria-label="Increase quantity">&plus;</button>
            </div>
          </div>
        </div>
        <div class="cart-item-price-col">
          <button class="cart-item-remove" aria-label="Remove item">&times;</button>
          <div class="cart-item-price">${i18n.formatPrice((item.salePrice || item.price) * item.quantity)}</div>
        </div>
      </div>
    `
      )
      .join('');
  }

  // Recommended Upsell product ("Complete the Look")
  const upsellProduct = products[4]; // Silk Kimono or Cashmere wrap

  drawer.innerHTML = `
    <!-- Header -->
    <div class="cart-drawer-header">
      <div class="cart-drawer-title">
        <span data-i18n="cart.title">Your Shopping Bag</span>
        <span class="cart-drawer-count">(${totals.itemCount})</span>
      </div>
      <button class="cart-drawer-close" aria-label="Close cart">&times;</button>
    </div>

    <!-- Free Shipping Progress -->
    <div class="cart-free-shipping">
      <div class="cart-shipping-text">${shippingTextHtml}</div>
      <div class="cart-shipping-bar">
        <div class="cart-shipping-fill" style="width: ${totals.freeShippingProgress}%"></div>
      </div>
    </div>

    <!-- Items List -->
    <div class="cart-drawer-items">
      ${bodyHtml}

      ${
        items.length > 0 && upsellProduct
          ? `
        <!-- Upsell Card -->
        <div style="background:var(--color-bg-secondary); padding:12px; border-radius:var(--radius-md); margin-top:16px;">
          <div style="font-size:10px; text-transform:uppercase; font-weight:700; color:var(--color-accent); margin-bottom:6px;">Complete The Look</div>
          <div style="display:flex; gap:12px; align-items:center;">
            <img src="${upsellProduct.images[0]}" style="width:50px; height:65px; border-radius:var(--radius-xs); object-fit:cover;" loading="lazy"/>
            <div style="flex:1;">
              <div style="font-size:12px; font-weight:600;">${upsellProduct.name}</div>
              <div style="font-size:12px; font-weight:700; color:var(--color-text);">${i18n.formatPrice(upsellProduct.price)}</div>
            </div>
            <button class="size-chip btn-quick-upsell" data-id="${upsellProduct.id}" style="background:var(--color-primary); color:var(--color-primary-contrast); padding:6px 10px;">+ Add</button>
          </div>
        </div>
      `
          : ''
      }
    </div>

    <!-- Footer Summary (if items > 0) -->
    ${
      items.length > 0
        ? `
      <div class="cart-drawer-footer">
        <!-- Promo Code Input -->
        <div class="cart-promo-box">
          <input type="text" class="cart-promo-input" placeholder="PROMO CODE (e.g. KAYAN15)" value="${state.cart.appliedCoupon || ''}" />
          <button class="cart-promo-btn">${state.cart.appliedCoupon ? 'Applied' : 'Apply'}</button>
        </div>

        <div class="cart-summary-row">
          <span data-i18n="cart.subtotal">Subtotal</span>
          <span>${i18n.formatPrice(totals.subtotal)}</span>
        </div>

        ${
          totals.volumeDiscount.amount > 0
            ? `
          <div class="cart-summary-row" style="color:var(--color-success);">
            <span>${totals.volumeDiscount.label}</span>
            <span>&minus;${i18n.formatPrice(totals.volumeDiscount.amount)}</span>
          </div>
        `
            : ''
        }

        ${
          totals.promoDiscount.amount > 0
            ? `
          <div class="cart-summary-row" style="color:var(--color-accent);">
            <span>${totals.promoDiscount.message}</span>
            <span>&minus;${i18n.formatPrice(totals.promoDiscount.amount)}</span>
          </div>
        `
            : ''
        }

        <div class="cart-summary-row">
          <span data-i18n="cart.shipping">Shipping</span>
          <span>${totals.hasFreeShipping ? 'FREE' : i18n.formatPrice(totals.shippingFee)}</span>
        </div>

        <div class="cart-summary-row total-row">
          <span data-i18n="cart.total">Estimated Total</span>
          <span class="animated-total-num">${i18n.formatPrice(totals.finalTotal)}</span>
        </div>

        <a href="${resolveUrl('pages/checkout.html')}" class="cart-checkout-btn">
          <span data-i18n="cart.checkout">Proceed to Checkout</span>
          <span>&rarr;</span>
        </a>
      </div>
    `
        : ''
    }
  `;

  bindDrawerItemEvents(drawer);
  i18n.updateDOM(drawer);
}

function initCartDrawerEvents(drawer, overlay) {
  function openCart() {
    updateCartDrawerUI();
    drawer.classList.add('active');
    overlay.classList.add('active');
  }

  function closeCart() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  }

  events.on('cart:open', openCart);
  overlay.addEventListener('click', closeCart);

  drawer.addEventListener('click', (e) => {
    if (e.target.closest('.cart-drawer-close')) {
      closeCart();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeCart();
    }
  });

  // Re-render when cart updates
  events.on('cart:updated', () => {
    if (drawer.classList.contains('active')) {
      updateCartDrawerUI();
    }
  });
}

function bindDrawerItemEvents(drawer) {
  // Quantity buttons
  drawer.querySelectorAll('.cart-item').forEach((row) => {
    const id = row.dataset.id;
    const size = row.dataset.size;
    const color = row.dataset.color;
    const item = store.getState().cart.items.find((i) => i.id === id && i.size === size && i.color === color);

    const minusBtn = row.querySelector('.btn-qty-minus');
    const plusBtn = row.querySelector('.btn-qty-plus');
    const removeBtn = row.querySelector('.cart-item-remove');

    if (minusBtn && item) {
      minusBtn.addEventListener('click', () => {
        store.updateCartQuantity(id, size, color, item.quantity - 1);
      });
    }

    if (plusBtn && item) {
      plusBtn.addEventListener('click', () => {
        store.updateCartQuantity(id, size, color, item.quantity + 1);
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        store.removeFromCart(id, size, color);
      });
    }
  });

  // Promo code apply
  const promoInput = drawer.querySelector('.cart-promo-input');
  const promoBtn = drawer.querySelector('.cart-promo-btn');

  if (promoBtn && promoInput) {
    promoBtn.addEventListener('click', () => {
      const val = promoInput.value.trim();
      if (val) {
        store.applyCoupon(val);
      }
    });
  }

  // Quick upsell click
  const upsellBtn = drawer.querySelector('.btn-quick-upsell');
  if (upsellBtn) {
    upsellBtn.addEventListener('click', () => {
      const prod = products.find((p) => p.id === upsellBtn.dataset.id);
      if (prod) {
        store.addToCart(prod, 'M', 'Obsidian', 1);
      }
    });
  }
}

/**
 * Fly-To-Cart Arc Animation
 */
function triggerFlyToCart(imgElement) {
  if (!imgElement) return;
  const cartBtn = document.querySelector('#header-cart-btn');
  if (!cartBtn) return;

  const startRect = imgElement.getBoundingClientRect();
  const endRect = cartBtn.getBoundingClientRect();

  const clone = document.createElement('img');
  clone.src = imgElement.src;
  clone.className = 'fly-to-cart-clone';
  clone.style.top = `${startRect.top}px`;
  clone.style.left = `${startRect.left}px`;
  clone.style.width = `${startRect.width}px`;
  clone.style.height = `${startRect.height}px`;
  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.top = `${endRect.top + endRect.height / 2 - 15}px`;
    clone.style.left = `${endRect.left + endRect.width / 2 - 15}px`;
    clone.style.width = '30px';
    clone.style.height = '30px';
    clone.style.opacity = '0.2';
  });

  setTimeout(() => {
    clone.remove();
    events.emit('cart:open');
  }, 750);
}
/**
 * KAYAN Luxury Fashion — Quick View Modal Component
 * Renders rich product preview modal with gallery, swatches, size selector, and direct Add to Bag
 */


function initQuickViewModal() {
  let overlay = document.querySelector('.quickview-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay quickview-modal-overlay';
    overlay.innerHTML = `
      <div class="modal-dialog quickview-dialog">
        <button class="modal-close-btn" aria-label="Close Quick View">&times;</button>
        <div class="quickview-grid" id="quickview-content-mount"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const closeBtn = overlay.querySelector('.modal-close-btn');
  function closeModal() {
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
  });

  events.on('quickview:open', (productId) => {
    const product = getProductById(productId);
    if (!product) return;

    renderQuickViewContent(product, overlay);
    overlay.classList.add('active');
  });
}

function renderQuickViewContent(product, overlay) {
  const mount = overlay.querySelector('#quickview-content-mount');
  if (!mount) return;

  let selectedSize = product.sizes && product.sizes[0] ? product.sizes[0].size : 'M';
  let selectedColor = product.colors && product.colors[0] ? product.colors[0].name : 'Obsidian';
  let quantity = 1;

  mount.innerHTML = `
    <!-- Left: Gallery Media -->
    <div class="quickview-media">
      <img id="qv-main-image" src="${product.images[0]}" alt="${product.name}" loading="lazy"/>
    </div>

    <!-- Right: Product Details -->
    <div class="quickview-details">
      <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.12em; color:var(--color-text-subtle); font-weight:700;">
        ${product.brand}
      </div>
      <h2 style="font-family:var(--font-display); font-size:var(--text-xl); font-weight:700; margin-bottom:4px;">
        ${product.name}
      </h2>

      <!-- Price & Rating -->
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
        <span style="font-size:var(--text-md); font-weight:700; color:var(--color-text);">
          ${i18n.formatPrice(product.salePrice || product.price)}
        </span>
        ${
          product.salePrice
            ? `
          <span style="font-size:var(--text-sm); color:var(--color-text-subtle); text-decoration:line-through;">
            ${i18n.formatPrice(product.price)}
          </span>
          <span style="font-size:10px; font-weight:700; color:var(--color-sale); background:var(--color-sale-subtle); padding:2px 6px; border-radius:3px;">
            -${product.discountPercent}%
          </span>
        `
            : ''
        }
        <div style="margin-left:auto; font-size:12px; color:var(--color-text-muted);">
          ★ ${product.rating} (${product.reviewCount})
        </div>
      </div>

      <p style="font-size:var(--text-xs); line-height:1.5; color:var(--color-text-muted); margin-bottom:12px;">
        ${product.description}
      </p>

      <!-- Color Swatches -->
      <div style="margin-bottom:12px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; margin-bottom:6px;">Color: <span id="qv-color-label">${selectedColor}</span></div>
        <div style="display:flex; gap:8px;">
          ${(product.colors || [])
            .map(
              (c, i) => `
            <button class="color-swatch-dot ${i === 0 ? 'active' : ''}" data-color="${c.name}" style="background-color:${c.hex}; width:20px; height:20px;" title="${c.name}"></button>
          `
            )
            .join('')}
        </div>
      </div>

      <!-- Size Chips -->
      <div style="margin-bottom:16px;">
        <div style="font-size:11px; font-weight:700; text-transform:uppercase; margin-bottom:6px;">Select Size</div>
        <div style="display:flex; flex-wrap:wrap; gap:6px;" id="qv-sizes-row">
          ${(product.sizes || [])
            .map(
              (s, i) => `
            <button class="size-chip ${i === 0 ? 'active' : ''}" data-size="${s.size}" style="padding:6px 14px; font-size:12px;">${s.size}</button>
          `
            )
            .join('')}
        </div>
      </div>

      <!-- Actions -->
      <div style="display:flex; gap:12px; align-items:center;">
        <div class="quantity-stepper">
          <button class="quantity-btn" id="qv-qty-minus">&minus;</button>
          <span class="quantity-val" id="qv-qty-val">1</span>
          <button class="quantity-btn" id="qv-qty-plus">&plus;</button>
        </div>

        <button class="btn-submit-primary" id="qv-add-btn" style="flex:1;">
          Add to Bag &bull; ${i18n.formatPrice(product.salePrice || product.price)}
        </button>
      </div>
    </div>
  `;

  // Swatch selection
  mount.querySelectorAll('.color-swatch-dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      mount.querySelectorAll('.color-swatch-dot').forEach((d) => d.classList.remove('active'));
      dot.classList.add('active');
      selectedColor = dot.dataset.color;
      const colorLabel = mount.querySelector('#qv-color-label');
      if (colorLabel) colorLabel.textContent = selectedColor;
    });
  });

  // Size selection
  mount.querySelectorAll('.size-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      mount.querySelectorAll('.size-chip').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      selectedSize = chip.dataset.size;
    });
  });

  // Quantity stepper
  const qtyMinus = mount.querySelector('#qv-qty-minus');
  const qtyPlus = mount.querySelector('#qv-qty-plus');
  const qtyVal = mount.querySelector('#qv-qty-val');

  qtyMinus.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      qtyVal.textContent = quantity;
    }
  });

  qtyPlus.addEventListener('click', () => {
    quantity++;
    qtyVal.textContent = quantity;
  });

  // Add to Bag action
  const addBtn = mount.querySelector('#qv-add-btn');
  addBtn.addEventListener('click', () => {
    store.addToCart(product, selectedSize, selectedColor, quantity);
    const mainImg = mount.querySelector('#qv-main-image');
    triggerFlyToCart(mainImg);
    overlay.classList.remove('active');
  });
}
/**
 * KAYAN Luxury Fashion — Auth & Locale Modals Component
 * Tabbed login/register modal with password strength, and country/language/currency preferences
 */


function initGlobalModals() {
  initAuthModal();
  initLocaleModal();
}

function initAuthModal() {
  let overlay = document.querySelector('.auth-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay auth-modal-overlay';
    overlay.innerHTML = `
      <div class="modal-dialog auth-dialog">
        <button class="modal-close-btn">&times;</button>
        <div class="auth-tabs">
          <button class="auth-tab-btn active" data-tab="login">Sign In</button>
          <button class="auth-tab-btn" data-tab="register">Create Account</button>
        </div>

        <!-- Login Form -->
        <form class="auth-form" id="auth-login-form">
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="login-email" required placeholder="collector@kayan.com"/>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="login-password" required placeholder="••••••••"/>
          </div>
          <button type="submit" class="btn-submit-primary">Enter Atelier</button>
        </form>

        <!-- Register Form -->
        <form class="auth-form" id="auth-register-form" style="display:none;">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-input" id="register-name" required placeholder="Amina Al-Mansoor"/>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="register-email" required placeholder="collector@kayan.com"/>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="register-password" required placeholder="At least 8 characters"/>
            <div class="password-strength-bar">
              <div class="password-strength-fill" id="register-strength-fill"></div>
            </div>
          </div>
          <button type="submit" class="btn-submit-primary">Join Kayan Circle</button>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const closeBtn = overlay.querySelector('.modal-close-btn');
  function closeModal() {
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  events.on('modal:auth:open', () => overlay.classList.add('active'));

  // Tab switching
  const tabs = overlay.querySelectorAll('.auth-tab-btn');
  const loginForm = overlay.querySelector('#auth-login-form');
  const regForm = overlay.querySelector('#auth-register-form');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.dataset.tab === 'login') {
        loginForm.style.display = 'flex';
        regForm.style.display = 'none';
      } else {
        loginForm.style.display = 'none';
        regForm.style.display = 'flex';
      }
    });
  });

  // Password Strength evaluation
  const regPass = overlay.querySelector('#register-password');
  const strengthFill = overlay.querySelector('#register-strength-fill');

  if (regPass && strengthFill) {
    regPass.addEventListener('input', () => {
      const val = regPass.value;
      if (val.length < 5) {
        strengthFill.className = 'password-strength-fill strength-weak';
      } else if (val.length < 9) {
        strengthFill.className = 'password-strength-fill strength-medium';
      } else {
        strengthFill.className = 'password-strength-fill strength-strong';
      }
    });
  }

  // Handle Login Submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = overlay.querySelector('#login-email').value;
    store.loginUser(email, email.split('@')[0]);
    closeModal();
  });

  // Handle Register Submit
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = overlay.querySelector('#register-name').value;
    const email = overlay.querySelector('#register-email').value;
    store.loginUser(email, name);
    closeModal();
  });
}

function initLocaleModal() {
  let overlay = document.querySelector('.locale-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay locale-modal-overlay';
    overlay.innerHTML = `
      <div class="modal-dialog" style="max-width:500px; padding:var(--space-xl);">
        <button class="modal-close-btn">&times;</button>
        <h3 class="font-display font-bold text-lg" style="margin-bottom:16px;">Regional & Currency Settings</h3>

        <div style="display:flex; flex-direction:column; gap:16px;">
          <!-- Language -->
          <div>
            <label class="form-label">Language / اللغة</label>
            <div style="display:flex; gap:8px;" id="locale-lang-group">
              <button class="btn-submit-primary" style="flex:1;" data-lang="en">English (LTR)</button>
              <button class="btn-submit-primary" style="flex:1; background:var(--color-bg-secondary); color:var(--color-text);" data-lang="ar">العربية (RTL)</button>
            </div>
          </div>

          <!-- Currency -->
          <div>
            <label class="form-label">Currency</label>
            <select class="form-input" id="locale-currency-select" style="cursor:pointer;">
              <option value="USD">USD ($ - United States Dollar)</option>
              <option value="AED">AED (د.إ - UAE Dirham)</option>
              <option value="SAR">SAR (ر.س - Saudi Riyal)</option>
              <option value="EUR">EUR (€ - Euro)</option>
              <option value="EGP">EGP (ج.م - Egyptian Pound)</option>
            </select>
          </div>

          <!-- Theme -->
          <div>
            <label class="form-label">Appearance</label>
            <div style="display:flex; gap:8px;">
              <button class="btn-submit-primary" style="flex:1;" id="theme-light-btn">Light Atelier</button>
              <button class="btn-submit-primary" style="flex:1; background:var(--color-bg-secondary); color:var(--color-text);" id="theme-dark-btn">Dark Obsidian</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const closeBtn = overlay.querySelector('.modal-close-btn');
  function closeModal() {
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  events.on('modal:locale:open', () => {
    const curr = store.getState().currency;
    const select = overlay.querySelector('#locale-currency-select');
    if (select) select.value = curr;
    overlay.classList.add('active');
  });

  // Language buttons
  overlay.querySelectorAll('#locale-lang-group button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      i18n.setLanguage(lang);
      closeModal();
    });
  });

  // Currency select
  const currencySelect = overlay.querySelector('#locale-currency-select');
  if (currencySelect) {
    currencySelect.addEventListener('change', () => {
      store.setCurrency(currencySelect.value);
      closeModal();
    });
  }

  // Theme buttons
  const lightBtn = overlay.querySelector('#theme-light-btn');
  const darkBtn = overlay.querySelector('#theme-dark-btn');
  if (lightBtn) {
    lightBtn.addEventListener('click', (e) => {
      store.setTheme('light');
      closeModal();
    });
  }
  if (darkBtn) {
    darkBtn.addEventListener('click', (e) => {
      store.setTheme('dark');
      closeModal();
    });
  }
}
/**
 * KAYAN Luxury Fashion — Custom Touch & Inertia Carousel
 * Fully handwritten carousel with pointer drag, inertia, snap, arrows, and responsive views
 */

class CustomCarousel {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    if (!this.container) return;

    this.track = this.container.querySelector('.carousel-track');
    this.slides = Array.from(this.container.querySelectorAll('.carousel-slide'));
    this.prevBtn = this.container.querySelector('.carousel-prev');
    this.nextBtn = this.container.querySelector('.carousel-next');
    this.progressBar = this.container.querySelector('.carousel-progress-fill');

    this.options = {
      gap: options.gap || 24,
      autoPlay: options.autoPlay || false,
      autoPlayInterval: options.autoPlayInterval || 5000,
      ...options
    };

    this.currentIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.animationId = null;

    this.init();
  }

  init() {
    if (!this.track || !this.slides.length) return;

    // Pointer events (unifies mouse and touch)
    this.track.addEventListener('pointerdown', this.onPointerDown.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('pointerup', this.onPointerUp.bind(this));
    window.addEventListener('pointercancel', this.onPointerUp.bind(this));

    // Nav buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Keyboard support
    this.container.setAttribute('tabindex', '0');
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.next() : this.prev();
      } else if (e.key === 'ArrowRight') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.prev() : this.next();
      }
    });

    window.addEventListener('resize', () => this.updatePosition());
    this.updatePosition();
  }

  getSlideWidth() {
    if (!this.slides[0]) return 0;
    return this.slides[0].getBoundingClientRect().width + this.options.gap;
  }

  getMaxIndex() {
    const containerWidth = this.container.getBoundingClientRect().width;
    const totalWidth = this.slides.length * this.getSlideWidth();
    const visibleSlides = Math.max(1, Math.floor(containerWidth / this.getSlideWidth()));
    return Math.max(0, this.slides.length - visibleSlides);
  }

  onPointerDown(e) {
    if (e.target.closest('button, a, input')) return;
    this.isDragging = true;
    this.startX = e.clientX;
    this.track.style.cursor = 'grabbing';
    this.track.style.transition = 'none';
    cancelAnimationFrame(this.animationId);
  }

  onPointerMove(e) {
    if (!this.isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + diff;
    this.track.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
  }

  onPointerUp(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.track.style.cursor = '';

    const movedBy = this.currentTranslate - this.prevTranslate;
    const threshold = this.getSlideWidth() * 0.2;

    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const directionModifier = isRtl ? -1 : 1;

    if (movedBy * directionModifier < -threshold) {
      this.next();
    } else if (movedBy * directionModifier > threshold) {
      this.prev();
    } else {
      this.updatePosition();
    }
  }

  next() {
    if (this.currentIndex < this.getMaxIndex()) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // loop
    }
    this.updatePosition();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.getMaxIndex();
    }
    this.updatePosition();
  }

  updatePosition() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const slideW = this.getSlideWidth();
    const target = isRtl ? this.currentIndex * slideW : -this.currentIndex * slideW;

    this.currentTranslate = target;
    this.prevTranslate = target;

    this.track.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
    this.track.style.transform = `translate3d(${target}px, 0, 0)`;

    if (this.progressBar) {
      const max = this.getMaxIndex();
      const progress = max > 0 ? (this.currentIndex / max) * 100 : 100;
      this.progressBar.style.width = `${Math.min(100, Math.max(15, progress))}%`;
    }
  }
}
/**
 * KAYAN Luxury Fashion — Global Footer Component
 * Injects brand footer, newsletter form, link directory, and kinetic typography wordmark
 */


function renderFooter() {
  const mount = document.querySelector('#site-footer-mount');
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <!-- Top Grid: Newsletter + Links -->
        <div class="footer-top-grid">
          <!-- Newsletter Column -->
          <div class="footer-newsletter-col">
            <h3 class="footer-brand-title" data-i18n="footer.newsletter_title">The Kayan Dispatch</h3>
            <p class="footer-newsletter-desc" data-i18n="footer.newsletter_desc">
              Quarterly meditations on form, craft, and private preview invitations.
            </p>

            <form class="footer-newsletter-form">
              <input type="email" class="footer-newsletter-input" placeholder="Enter your email address" data-i18n-placeholder="footer.newsletter_placeholder" required />
              <button type="submit" class="footer-newsletter-btn" data-i18n="footer.newsletter_subscribe">Subscribe</button>
            </form>

            <div class="footer-app-badges">
              <a href="#" class="app-store-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.87-.9.04-2 .6-2.63 1.34-.56.64-1.05 1.71-.92 2.74 1.01.08 2.02-.48 2.63-1.21z"/>
                </svg>
                <span>App Store</span>
              </a>
              <a href="#" class="app-store-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 2.4l11.4 11.4-3.5 3.5L1.8 4.2c-.4-.6-.4-1.3 0-1.8.4-.5 1.1-.6 1.8 0zM17.5 11.2L5.8 4.4 15 13.6l2.5-2.4zm-2.5 4.8L5.8 22.8l11.7-6.8-2.5-2z"/>
                </svg>
                <span>Google Play</span>
              </a>
            </div>
          </div>

          <!-- Link Columns -->
          <div class="footer-links-grid">
            <div>
              <h4 class="footer-col-title" data-i18n="nav.women">Women</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-new-in')}">New Arrivals</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-coats')}">Coats & Trenches</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-dresses')}">Dresses & Maxis</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-blazers')}">Tailored Blazers</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-bags')}">Leather Bags</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title" data-i18n="nav.men">Men</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-overshirts')}">Boxy Overshirts</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-overcoats')}">Tailored Coats</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-denim')}">Selvedge Denim</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-boots')}">Chelsea Boots</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-hoodies')}">Heavyweight Knits</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Atelier & Living</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/shop.html?dept=beauty')}">Botanical Beauty</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=home')}">Home & Objects</a></li>
                <li><a href="${resolveUrl('pages/lookbook.html')}">Seasonal Lookbook</a></li>
                <li><a href="${resolveUrl('pages/stores.html')}">Global Ateliers</a></li>
                <li><a href="${resolveUrl('pages/gift-cards.html')}">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Concierge</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/about.html')}">Brand Philosophy</a></li>
                <li><a href="${resolveUrl('pages/contact.html')}">Private Styling</a></li>
                <li><a href="${resolveUrl('pages/faq.html')}">Delivery & Returns</a></li>
                <li><a href="${resolveUrl('pages/account.html')}">Kayan Circle</a></li>
                <li><a href="${resolveUrl('pages/tests.html')}">System Verification</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Oversized Kinetic Brand Wordmark -->
        <div class="footer-oversized-wordmark">
          <div class="footer-kinetic-text">K A Y A N</div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom-bar">
          <div>&copy; 2026 KAYAN ATELIER. <span data-i18n="footer.rights">All rights reserved. Designed with architectural rigor.</span></div>

          <div class="footer-payment-methods">
            <span class="payment-icon-pill">Apple Pay</span>
            <span class="payment-icon-pill">Visa</span>
            <span class="payment-icon-pill">Mastercard</span>
            <span class="payment-icon-pill">Amex</span>
            <span class="payment-icon-pill">Mada</span>
          </div>

          <button id="footer-locale-trigger" style="background:none; border:none; color:inherit; text-decoration:underline; font-size:inherit; cursor:pointer;">
            United States / USD / English
          </button>
        </div>

        <!-- Director by JOMAR Portfolio Attribution -->
        <div class="footer-director-badge" style="text-align:center; padding:18px 0; border-top:1px solid rgba(255,255,255,0.08); margin-top:28px; font-size:13px; letter-spacing:0.04em; color:var(--color-text-muted);">
          <span>Director by <strong style="color:var(--color-text); font-weight:700; letter-spacing:0.08em;">JOMAR</strong></span>
          <span style="margin:0 12px; opacity:0.35;">•</span>
          <a href="https://jomar-ojduo.me" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent); font-weight:700; text-decoration:none; border-bottom:1px solid var(--color-accent); padding-bottom:1px; transition:opacity 0.2s;">
            jomar-ojduo.me &nearr;
          </a>
        </div>
      </div>

      <!-- Floating Back-to-Top Button -->
      <button class="back-to-top-btn btn-magnetic" aria-label="Back to top">
        <svg class="back-to-top-progress-ring" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" class="back-to-top-progress-circle"/>
        </svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </footer>
  `;

  initNewsletterForms();
  initMagneticElements();

  const localeTrigger = mount.querySelector('#footer-locale-trigger');
  if (localeTrigger) {
    localeTrigger.addEventListener('click', () => events.emit('modal:locale:open'));
  }

  // Interactive mouse follow on oversized text
  const kineticText = mount.querySelector('.footer-kinetic-text');
  if (kineticText) {
    mount.querySelector('.footer-oversized-wordmark').addEventListener('mousemove', (e) => {
      const rect = kineticText.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.04;
      kineticText.style.transform = `translateX(${x}px) scale(1.02)`;
    });

    mount.querySelector('.footer-oversized-wordmark').addEventListener('mouseleave', () => {
      kineticText.style.transform = '';
    });
  }

  i18n.updateDOM(mount);
}
/**
 * KAYAN Luxury Fashion — Global Application Bootstrap (ES Modules)
 * Orchestrates all architectural layers, component lifecycles, and global listeners
 */


function bootstrapApp(onReady = null) {
  // 1. Core theme & i18n setup
  themeController.init();
  i18n.init();

  // 2. Preloader (shows once per session, skippable)
  initPreloader(() => {
    // 3. Smooth scrolling with Lenis & ScrollTrigger
    initSmoothScroll();

    if (onReady) onReady();
  });

  // 4. Render Global UI Shell
  renderHeader();
  renderMegaMenu();
  renderSearchModal();
  renderCartDrawer();
  initQuickViewModal();
  initGlobalModals();
  renderFooter();

  // 5. Global Micro-interactions & animations
  initCustomCursor();
  initCookieBanner();
  setupPageTransitions();
  initKeyboardShortcuts();

  // 6. Reactive UI re-formatting when currency or language changes
  events.on('store:currency', () => {
    // Re-render components that display prices
    events.emit('cart:updated', store.getCartTotals());
    if (window.refreshPagePrices) window.refreshPagePrices();
  });

  events.on('i18n:changed', () => {
    i18n.updateDOM(document);
  });

  console.log('[KAYAN Atelier] High-craft animation & e-commerce engine initialized.');
}

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      showKeyboardShortcutsModal();
    }
  });
}

function showKeyboardShortcutsModal() {
  let modal = document.querySelector('.shortcuts-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay shortcuts-modal-overlay';
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width:440px; padding:var(--space-xl);">
        <button class="modal-close-btn">&times;</button>
        <h3 class="font-display font-bold text-lg" style="margin-bottom:16px;">Keyboard Shortcuts</h3>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:var(--text-xs);">
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Instant Search</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">/</kbd>
          </div>
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Close Modal / Drawer</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">ESC</kbd>
          </div>
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Navigate Carousel</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">&larr; / &rarr;</kbd>
          </div>
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Toggle Theme</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">Shift + T</kbd>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span>Shortcuts Help</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">?</kbd>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  modal.classList.add('active');
}

// Quick theme shortcut
document.addEventListener('keydown', (e) => {
  if (e.shiftKey && (e.key === 'T' || e.key === 't')) {
    store.toggleTheme();
  }
});

// Auto-run bootstrap when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => bootstrapApp());
} else {
  bootstrapApp();
}
/**
 * KAYAN Luxury Fashion — Flagship Homepage Script
 * Coordinates hero slides, WebGL silk canvas, carousels, editorial story, and UGC lightbox
 */


function initHomePage() {
  // 1. Initialize Hero Silk Canvas
  initHeroCanvas('#hero-webgl-container');

  // 2. Animate Hero Typography
  const heroHeading = document.querySelector('.hero-title');
  if (heroHeading) {
    animateSplitText(heroHeading, 0.4);
  }

  // 3. Hero Slides Rotation
  initHeroSlider();

  // 4. Marquees
  initMarquees();

  // 5. Populate and Initialize Flash Sale Carousel
  populateFlashSaleCarousel();

  // 6. Populate and Initialize New Arrivals Carousel
  populateNewArrivalsCarousel();

  // 6.5. Populate and Initialize Direct Featured Products Grid (Immediate Products on Page)
  populateFeaturedProductsGrid();
  initFeaturedTabs();

  // 7. Editorial Scroll Story & Hotspots
  initEditorialStory();

  // 8. Populate UGC Gallery
  populateUgcGallery();

  // 9. Stat Counters Observer
  initStatCounters();

  // 10. 3D Tilt Cards
  init3DTilt();

  // 11. Flash Sale Countdown Timer (48 hours live)
  initCountdown(48, '#sale-countdown');

  // 12. Department Onboarding Split Panels Click -> Immediate navigation to department catalog!
  document.querySelectorAll('.onboarding-panel').forEach((panel) => {
    panel.addEventListener('click', (e) => {
      e.preventDefault();
      const dept = panel.dataset.dept;
      if (dept) {
        store.setDepartment(dept);
        window.location.href = resolveUrl(`pages/shop.html?dept=${dept}`);
      }
    });
  });

  // Re-render dynamically when language changes (100% Arabic instantly)
  events.on('i18n:changed', () => {
    populateFeaturedProductsGrid();
    populateFlashSaleCarousel();
    populateNewArrivalsCarousel();
  });

  // Price refresh listener
  window.refreshPagePrices = () => {
    populateFeaturedProductsGrid();
    populateFlashSaleCarousel();
    populateNewArrivalsCarousel();
  };
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let timer;

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove('active'));
    dots.forEach((d) => d.classList.remove('active'));

    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');

    // Trigger split text on newly active slide title
    const title = slides[current].querySelector('.hero-title');
    if (title && !title.dataset.splitDone) {
      animateSplitText(title, 0.2);
    }
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 6000);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startTimer();
    });
  });

  startTimer();
}

function populateFlashSaleCarousel() {
  const mount = document.querySelector('#flash-sale-track');
  if (!mount) return;

  // Filter 8 products that have salePrice
  const saleProducts = products.filter((p) => p.salePrice !== null).slice(0, 8);

  mount.innerHTML = saleProducts
    .map(
      (prod) => `
    <div class="carousel-slide" style="flex: 0 0 280px; width:280px;">
      ${createProductCardHtml(prod)}
      <div style="margin-top:8px; padding-inline:8px;">
        <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px; color:rgba(255,255,255,0.7);">
          <span>Claimed</span>
          <span style="font-weight:700; color:var(--brand-bronze-light);">76%</span>
        </div>
        <div style="width:100%; height:4px; background:rgba(255,255,255,0.15); border-radius:999px; overflow:hidden;">
          <div style="width:76%; height:100%; background:var(--color-accent); border-radius:999px;"></div>
        </div>
      </div>
    </div>
  `
    )
    .join('');

  bindProductCardEvents(mount);

  const container = document.querySelector('#flash-sale-carousel');
  if (container) {
    new CustomCarousel(container, { gap: 20 });
  }
}

function populateNewArrivalsCarousel() {
  const mount = document.querySelector('#new-arrivals-track');
  if (!mount) return;

  const currentDept = store.getState().department || 'women';
  const arrivals = products.filter((p) => p.department === currentDept).slice(0, 8);

  mount.innerHTML = arrivals
    .map(
      (prod) => `
    <div class="carousel-slide" style="flex: 0 0 300px; width:300px;">
      ${createProductCardHtml(prod)}
    </div>
  `
    )
    .join('');

  bindProductCardEvents(mount);

  const container = document.querySelector('#new-arrivals-carousel');
  if (container) {
    new CustomCarousel(container, { gap: 24 });
  }
}

let currentFeaturedFilter = 'all';

function populateFeaturedProductsGrid() {
  const grid = document.querySelector('#featured-products-grid');
  if (!grid) return;

  const items = currentFeaturedFilter === 'all'
    ? products.slice(0, 8)
    : products.filter((p) => p.department === currentFeaturedFilter).slice(0, 8);

  grid.innerHTML = items.map((prod) => createProductCardHtml(prod)).join('');
  bindProductCardEvents(grid);
  init3DTilt();
}

function initFeaturedTabs() {
  const tabs = document.querySelectorAll('#featured-dept-tabs .btn-tab-filter');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach((t) => {
        t.classList.remove('active');
        t.style.background = 'transparent';
        t.style.color = 'var(--color-text)';
      });
      tab.classList.add('active');
      tab.style.background = 'var(--color-primary)';
      tab.style.color = 'var(--color-bg)';
      currentFeaturedFilter = tab.dataset.filter || 'all';
      populateFeaturedProductsGrid();
    });
  });
}

function initEditorialStory() {
  const storyLooks = [
    {
      title: 'Look 01: The Architectural Trench',
      desc: 'Layered over pure cashmere knits and high-twist wool trousers. Designed for wind and metropolitan presence.',
      img: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1000&auto=format&fit=crop&q=80',
      productId: 'kayan-w-15',
      productName: 'Belted Technical Storm Trench',
      productPrice: '$460',
      hotspotX: '55%',
      hotspotY: '45%'
    },
    {
      title: 'Look 02: Sculpted Fluid Column',
      desc: 'Micro-pleated chiffon column maxi engineered with kinetic drape that breathes with motion.',
      img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1000&auto=format&fit=crop&q=80',
      productId: 'kayan-w-02',
      productName: 'Architectural Pleated Maxi Dress',
      productPrice: '$360',
      hotspotX: '48%',
      hotspotY: '52%'
    },
    {
      title: 'Look 03: Minimalist Tailored Cocoon',
      desc: 'Double-faced virgin merino wool sculpted with dropped kimono shoulders.',
      img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&auto=format&fit=crop&q=80',
      productId: 'kayan-w-01',
      productName: 'Sculpted Wool Cocoon Coat',
      productPrice: '$420',
      hotspotX: '50%',
      hotspotY: '38%'
    }
  ];

  const storyImg = document.querySelector('#editorial-story-img');
  const storyTitle = document.querySelector('#editorial-story-title');
  const storyDesc = document.querySelector('#editorial-story-desc');
  const hotspotMount = document.querySelector('#editorial-hotspot-mount');
  const tabs = document.querySelectorAll('.editorial-look-tab');

  function setLook(idx) {
    const look = storyLooks[idx];
    if (!look || !storyImg) return;

    tabs.forEach((t, i) => t.classList.toggle('active', i === idx));

    storyImg.style.opacity = '0';
    setTimeout(() => {
      storyImg.src = look.img;
      storyImg.style.opacity = '1';
      if (storyTitle) storyTitle.textContent = look.title;
      if (storyDesc) storyDesc.textContent = look.desc;

      if (hotspotMount) {
        hotspotMount.innerHTML = `
          <div class="hotspot-dot" style="top: ${look.hotspotY}; left: ${look.hotspotX};" data-id="${look.productId}">
            <div class="hotspot-card-popup">
              <div>${look.productName}</div>
              <div style="color:var(--color-accent); font-weight:700;">${look.productPrice}</div>
            </div>
          </div>
        `;

        hotspotMount.querySelector('.hotspot-dot').addEventListener('click', () => {
          events.emit('quickview:open', look.productId);
        });
      }
    }, 200);
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => setLook(idx));
  });

  setLook(0);
}

function populateUgcGallery() {
  const mount = document.querySelector('#ugc-grid-mount');
  if (!mount) return;

  mount.innerHTML = ugcPosts
    .map(
      (post) => `
    <div class="ugc-card" data-id="${post.id}">
      <img src="${post.image}" alt="${post.caption}" class="ugc-img" loading="lazy"/>
      <div class="ugc-overlay">
        <div class="ugc-handle">${post.handle}</div>
        <div class="ugc-likes">&hearts; ${post.likes} &bull; ${post.location}</div>
      </div>
    </div>
  `
    )
    .join('');

  mount.querySelectorAll('.ugc-card').forEach((card) => {
    card.addEventListener('click', () => {
      const postId = card.dataset.id;
      const post = ugcPosts.find((p) => p.id === postId);
      if (post) openUgcLightbox(post);
    });
  });
}

function openUgcLightbox(post) {
  let lightbox = document.querySelector('.ugc-lightbox-overlay');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.className = 'modal-overlay ugc-lightbox-overlay';
    document.body.appendChild(lightbox);
  }

  const taggedProd = products.find((p) => p.id === post.taggedProductId) || products[0];

  lightbox.innerHTML = `
    <div class="modal-dialog" style="max-width:850px; padding:0; overflow:hidden; background:var(--brand-obsidian-ink); color:#FFF;">
      <button class="modal-close-btn">&times;</button>
      <div style="display:grid; grid-template-columns:1fr; max-height:85vh;" class="ugc-dialog-grid">
        <div style="position:relative; aspect-ratio:1/1; background:#000;">
          <img src="${post.image}" alt="${post.caption}" style="width:100%; height:100%; object-fit:cover;"/>
        </div>
        <div style="padding:var(--space-xl); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
              <div style="width:36px; height:36px; border-radius:50%; background:var(--color-accent); display:flex; align-items:center; justify-content:center; font-weight:700;">K</div>
              <div>
                <div style="font-weight:700; font-size:14px;">${post.handle}</div>
                <div style="font-size:11px; opacity:0.6;">${post.location}</div>
              </div>
            </div>
            <p style="font-size:13px; line-height:1.5; opacity:0.85; margin-bottom:16px;">
              "${post.caption}"
            </p>
          </div>

          <!-- Tagged Product Chip -->
          <div style="background:rgba(255,255,255,0.08); padding:12px; border-radius:var(--radius-md); border:1px solid rgba(255,255,255,0.12);">
            <div style="font-size:10px; text-transform:uppercase; letter-spacing:0.12em; color:var(--brand-bronze-light); font-weight:700; margin-bottom:6px;">Featured In This Look</div>
            <div style="display:flex; align-items:center; gap:12px;">
              <img src="${taggedProd.images[0]}" style="width:48px; height:60px; border-radius:var(--radius-xs); object-fit:cover;"/>
              <div style="flex:1;">
                <div style="font-size:13px; font-weight:600;">${taggedProd.name}</div>
                <div style="font-size:12px; font-weight:700; color:var(--brand-bronze-light);">$${taggedProd.salePrice || taggedProd.price}</div>
              </div>
              <button class="btn-submit-primary btn-ugc-shop" data-id="${taggedProd.id}" style="width:auto; padding:8px 16px; font-size:11px;">Shop Piece</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  lightbox.classList.add('active');

  const closeBtn = lightbox.querySelector('.modal-close-btn');
  closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });

  const shopBtn = lightbox.querySelector('.btn-ugc-shop');
  if (shopBtn) {
    shopBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      events.emit('quickview:open', shopBtn.dataset.id);
    });
  }
}

function initStatCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.dataset.target, 10);
          let current = 0;
          const step = Math.ceil(targetNum / 45);

          const interval = setInterval(() => {
            current += step;
            if (current >= targetNum) {
              el.textContent = targetNum.toLocaleString();
              clearInterval(interval);
            } else {
              el.textContent = current.toLocaleString();
            }
          }, 30);

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  statNumbers.forEach((num) => observer.observe(num));
}

// Auto-run if on homepage
if (document.querySelector('.hero-section')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initHomePage());
  } else {
    initHomePage();
  }
}
/**
 * KAYAN Luxury Fashion — Shop / Listing Page (PLP) Script
 * Instant animated filtering, URL History sync, dual-range price slider, view toggles & recently viewed
 */


let filteredProducts = [...products];
let currentDept = 'all';
let currentSub = 'all';
let selectedSizes = new Set();
let selectedBadges = new Set();
let maxPrice = 800;
let currentSort = 'recommended';
let currentCols = 3;
let visibleCount = 12;

function initShopPage() {
  parseUrlParams();
  renderFilterSidebar();
  applyFiltersAndSort();
  initViewToggles();
  renderRecentlyViewed();

  events.on('i18n:changed', () => {
    renderFilterSidebar();
    applyFiltersAndSort();
    renderRecentlyViewed();
    i18n.updateDOM(document);
  });

  window.refreshPagePrices = () => {
    applyFiltersAndSort();
    renderRecentlyViewed();
  };
}

function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('dept')) currentDept = params.get('dept');
  if (params.has('sub')) currentSub = params.get('sub');
  if (params.has('sort')) currentSort = params.get('sort');
}

function updateUrlParams() {
  const params = new URLSearchParams();
  if (currentDept !== 'all') params.set('dept', currentDept);
  if (currentSub !== 'all') params.set('sub', currentSub);
  if (currentSort !== 'recommended') params.set('sort', currentSort);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function renderFilterSidebar() {
  const sidebar = document.querySelector('#shop-sidebar-mount');
  if (!sidebar) return;

  const isAr = store.getState().language === 'ar';
  const txt = {
    dept: isAr ? 'الأقسام' : 'Department',
    allDept: isAr ? 'جميع الأقسام' : 'All Departments',
    women: isAr ? 'النساء' : 'Women',
    men: isAr ? 'الرجال' : 'Men',
    kids: isAr ? 'الأطفال' : 'Kids',
    beauty: isAr ? 'الجمال والعطور' : 'Beauty',
    home: isAr ? 'المنزل والديكور' : 'Home & Living',
    maxPrice: isAr ? 'الحد الأقصى للسعر' : 'Maximum Price',
    size: isAr ? 'المقاس' : 'Size',
    curations: isAr ? 'مجموعات الأتيليه' : 'Curations',
    newArr: isAr ? 'وصل حديثاً' : 'New Arrivals',
    exclusive: isAr ? 'حصري إلكترونياً' : 'Online Exclusive',
    bestseller: isAr ? 'الأكثر طلباً' : 'Best Sellers',
    eco: isAr ? 'صناعة واعية' : 'Conscious Craft (Eco)'
  };

  sidebar.innerHTML = `
    <!-- Department Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.dept}</div>
      <div class="filter-options-list">
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="all" ${currentDept === 'all' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.allDept} (${products.length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="women" ${currentDept === 'women' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.women} (${products.filter((p) => p.department === 'women').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="men" ${currentDept === 'men' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.men} (${products.filter((p) => p.department === 'men').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="kids" ${currentDept === 'kids' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.kids} (${products.filter((p) => p.department === 'kids').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="beauty" ${currentDept === 'beauty' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.beauty} (${products.filter((p) => p.department === 'beauty').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="home" ${currentDept === 'home' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.home} (${products.filter((p) => p.department === 'home').length})</span>
        </label>
      </div>
    </div>

    <!-- Price Range Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.maxPrice}</div>
      <div class="price-slider-wrap">
        <input type="range" id="price-range-slider" min="50" max="800" step="25" value="${maxPrice}" style="width:100%; cursor:pointer; accent-color:var(--color-primary);"/>
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700;">
          <span>$50</span>
          <span id="price-range-label" style="color:var(--color-accent);">${i18n.formatPrice(maxPrice)}</span>
          <span>$800+</span>
        </div>
      </div>
    </div>

    <!-- Sizes Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.size}</div>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${['XS', 'S', 'M', 'L', 'XL', 'Standard']
          .map(
            (sz) => `
          <button class="size-chip filter-size-btn ${selectedSizes.has(sz) ? 'active' : ''}" data-size="${sz}">${sz}</button>
        `
          )
          .join('')}
      </div>
    </div>

    <!-- Curations & Badges Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.curations}</div>
      <div class="filter-options-list">
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="New" ${selectedBadges.has('New') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.newArr}</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="Online Exclusive" ${selectedBadges.has('Online Exclusive') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.exclusive}</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="Best Seller" ${selectedBadges.has('Best Seller') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.bestseller}</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="Eco" ${selectedBadges.has('Eco') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.eco}</span>
        </label>
      </div>
    </div>
  `;

  bindSidebarListeners(sidebar);
}

function bindSidebarListeners(sidebar) {
  // Department Radios
  sidebar.querySelectorAll('input[name="dept_filter"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      currentDept = radio.value;
      currentSub = 'all';
      visibleCount = 12;
      updateUrlParams();
      applyFiltersAndSort();
    });
  });

  // Price Slider
  const slider = sidebar.querySelector('#price-range-slider');
  const priceLabel = sidebar.querySelector('#price-range-label');
  slider.addEventListener('input', (e) => {
    maxPrice = parseInt(e.target.value, 10);
    priceLabel.textContent = i18n.formatPrice(maxPrice);
    visibleCount = 12;
    applyFiltersAndSort();
  });

  // Size buttons
  sidebar.querySelectorAll('.filter-size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sz = btn.dataset.size;
      if (selectedSizes.has(sz)) {
        selectedSizes.delete(sz);
        btn.classList.remove('active');
      } else {
        selectedSizes.add(sz);
        btn.classList.add('active');
      }
      visibleCount = 12;
      applyFiltersAndSort();
    });
  });

  // Badges checkboxes
  sidebar.querySelectorAll('.badge-filter-check').forEach((chk) => {
    chk.addEventListener('change', () => {
      const b = chk.value;
      if (chk.checked) selectedBadges.add(b);
      else selectedBadges.delete(b);
      visibleCount = 12;
      applyFiltersAndSort();
    });
  });
}

function applyFiltersAndSort() {
  filteredProducts = products.filter((p) => {
    // Dept
    if (currentDept !== 'all' && p.department !== currentDept) return false;
    // Subcategory
    if (currentSub !== 'all' && p.subcategory !== currentSub) return false;
    // Price
    const effPrice = p.salePrice || p.price;
    if (effPrice > maxPrice) return false;
    // Sizes
    if (selectedSizes.size > 0) {
      const hasSize = (p.sizes || []).some((s) => selectedSizes.has(s.size));
      if (!hasSize) return false;
    }
    // Badges
    if (selectedBadges.size > 0) {
      const hasBadge = (p.badges || []).some((b) => selectedBadges.has(b));
      if (!hasBadge) return false;
    }
    return true;
  });

  // Sort
  if (currentSort === 'price-low') {
    filteredProducts.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
  } else if (currentSort === 'price-high') {
    filteredProducts.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
  } else if (currentSort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === 'newest') {
    filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  renderProductsGrid();
  renderActiveChips();
}

function renderProductsGrid() {
  const grid = document.querySelector('#shop-products-grid');
  const countLabel = document.querySelector('#shop-result-count');
  const loadMoreBtn = document.querySelector('#shop-load-more');
  if (!grid) return;

  const isAr = store.getState().language === 'ar';
  if (countLabel) {
    countLabel.textContent = isAr
      ? `عرض ${Math.min(visibleCount, filteredProducts.length)} من ${filteredProducts.length} تصميماً`
      : `Displaying ${Math.min(visibleCount, filteredProducts.length)} of ${filteredProducts.length} silhouettes`;
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background:var(--color-surface); border-radius:var(--radius-lg); border:1px solid var(--color-border);">
        <h3 class="font-display font-bold text-xl" data-i18n="shop.no_results">No silhouettes match your chosen criteria.</h3>
        <p class="text-sm" style="margin-top:8px;">Try broadening your price limit or clearing active filters.</p>
        <button class="btn-submit-primary" id="btn-clear-empty" style="width:auto; padding:10px 24px; margin-top:16px;">Clear Filters</button>
      </div>
    `;
    const clearEmpty = grid.querySelector('#btn-clear-empty');
    if (clearEmpty) {
      clearEmpty.addEventListener('click', clearAllFilters);
    }
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  const visibleItems = filteredProducts.slice(0, visibleCount);
  grid.innerHTML = visibleItems.map((prod) => createProductCardHtml(prod)).join('');
  bindProductCardEvents(grid);
  init3DTilt();

  if (loadMoreBtn) {
    if (visibleCount < filteredProducts.length) {
      loadMoreBtn.style.display = 'inline-block';
      loadMoreBtn.onclick = () => {
        visibleCount += 12;
        renderProductsGrid();
      };
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }
}

function renderActiveChips() {
  const mount = document.querySelector('#shop-chips-mount');
  if (!mount) return;

  const chips = [];
  if (currentDept !== 'all') chips.push({ label: `Dept: ${currentDept}`, clear: () => { currentDept = 'all'; } });
  if (currentSub !== 'all') chips.push({ label: `Category: ${currentSub}`, clear: () => { currentSub = 'all'; } });
  if (maxPrice < 800) chips.push({ label: `Under ${i18n.formatPrice(maxPrice)}`, clear: () => { maxPrice = 800; } });
  selectedSizes.forEach((sz) => chips.push({ label: `Size: ${sz}`, clear: () => { selectedSizes.delete(sz); } }));
  selectedBadges.forEach((b) => chips.push({ label: b, clear: () => { selectedBadges.delete(b); } }));

  if (chips.length === 0) {
    mount.innerHTML = '';
    return;
  }

  mount.innerHTML = `
    ${chips
      .map(
        (c, idx) => `
      <span class="active-filter-chip">
        ${c.label}
        <button data-chip-idx="${idx}">&times;</button>
      </span>
    `
      )
      .join('')}
    <button id="clear-all-chips" style="background:none; border:none; color:var(--color-accent); font-size:12px; font-weight:700; cursor:pointer; text-decoration:underline;">Clear All</button>
  `;

  mount.querySelectorAll('button[data-chip-idx]').forEach((b) => {
    b.addEventListener('click', () => {
      const idx = parseInt(b.dataset.chipIdx, 10);
      chips[idx].clear();
      renderFilterSidebar();
      updateUrlParams();
      applyFiltersAndSort();
    });
  });

  const clearAllBtn = mount.querySelector('#clear-all-chips');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllFilters);
  }
}

function clearAllFilters() {
  currentDept = 'all';
  currentSub = 'all';
  selectedSizes.clear();
  selectedBadges.clear();
  maxPrice = 800;
  visibleCount = 12;
  renderFilterSidebar();
  updateUrlParams();
  applyFiltersAndSort();
}

function initViewToggles() {
  const grid = document.querySelector('#shop-products-grid');
  document.querySelectorAll('.view-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cols = btn.dataset.cols;
      if (grid) {
        grid.className = `shop-grid cols-${cols}`;
      }
    });
  });

  // Sort dropdown
  const sortSelect = document.querySelector('#shop-sort-select');
  if (sortSelect) {
    sortSelect.value = currentSort;
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      updateUrlParams();
      applyFiltersAndSort();
    });
  }
}

function renderRecentlyViewed() {
  const mount = document.querySelector('#recently-viewed-mount');
  if (!mount) return;

  const recent = store.getState().recentlyViewed || [];
  if (recent.length === 0) {
    const parentSec = mount.closest('section');
    if (parentSec) parentSec.style.display = 'none';
    return;
  }

  mount.innerHTML = recent
    .slice(0, 4)
    .map(
      (p) => `
    <div style="background:var(--color-surface); border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--color-border);">
      <a href="${resolveUrl(`pages/product.html?slug=${p.slug}`)}">
        <img src="${p.image}" style="width:100%; aspect-ratio:3/4; object-fit:cover;" loading="lazy"/>
      </a>
      <div style="padding:12px;">
        <div style="font-size:12px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
        <div style="font-size:12px; font-weight:700; color:var(--color-text); margin-top:4px;">${i18n.formatPrice(p.salePrice || p.price)}</div>
      </div>
    </div>
  `
    )
    .join('');
}

// Auto-run if on shop page
if (document.querySelector('#shop-products-grid')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initShopPage());
  } else {
    initShopPage();
  }
}
/**
 * KAYAN Luxury Fashion — Product Detail Page (PDP) Controller
 * Handles image zoom lens, thumbnail switching, size calculation modal,
 * stock status, reactive cart addition, delivery countdown, and related items.
 */


let currentProduct = null;
let selectedColorIndex = 0;
let selectedSize = null;
let currentQuantity = 1;
let currentImageIndex = 0;

function initProductPage() {
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
/**
 * KAYAN Luxury Fashion — Full Cart Page Controller
 * Synchronized with global reactive store, live volume discounts, promo codes,
 * and currency conversions.
 */


let appliedPromoCode = null;
let includeGiftWrap = false;

function initCartPage() {
  renderCartView();

  // Listen to store updates
  events.on('cart:updated', () => {
    renderCartView();
  });

  events.on('store:currency', () => {
    renderCartView();
  });
}

function renderCartView() {
  const container = document.querySelector('#cart-page-mount');
  if (!container) return;

  const state = store.getState();
  const items = state.cart || [];
  const currency = state.currency || 'USD';

  if (items.length === 0) {
    renderEmptyCart(container);
    return;
  }

  const totals = calculateCartTotals(items, appliedPromoCode, currency);

  container.innerHTML = `
    <!-- Top Highlights: Free shipping bar & Volume discount badge -->
    <div class="cart-progress-box">
      <div class="cart-progress-text">
        <span>
          ${
            totals.freeShippingRemaining <= 0
              ? '<strong>Complimentary Express Delivery Unlocked!</strong>'
              : `Add <strong>${i18n.formatPrice(totals.freeShippingRemaining)}</strong> more to receive Complimentary Global Express Delivery`
          }
        </span>
        <strong>${totals.freeShippingProgress}%</strong>
      </div>
      <div class="cart-progress-track">
        <div class="cart-progress-fill" style="width: ${totals.freeShippingProgress}%;"></div>
      </div>
    </div>

    <!-- Multi-Buy Volume Banner -->
    <div class="volume-discount-banner">
      <div>
        <strong>Equinox Multi-Piece Privilege:</strong>
        <span style="color:var(--color-text-muted);"> Buy 2 get 20%, Buy 3+ get 25% off automatically.</span>
      </div>
      <span style="background:var(--color-primary); color:var(--color-bg); padding:3px 8px; border-radius:3px; font-weight:700;">
        ${totals.itemCount >= 3 ? '25% APPLIED' : totals.itemCount === 2 ? '20% APPLIED' : `ADD ${2 - totals.itemCount} FOR 20%`}
      </span>
    </div>

    <!-- Main Two-Column Layout -->
    <div class="cart-layout-grid">
      
      <!-- Left Column: Items Table -->
      <div class="cart-items-table" id="cart-items-list">
        ${items
          .map(
            (item, index) => `
          <div class="cart-item-row" data-index="${index}">
            <a href="${resolveUrl(`pages/product.html?slug=${item.slug}`)}">
              <img src="${item.image}" alt="${item.name}" class="cart-item-img" loading="lazy" />
            </a>

            <div class="cart-item-details">
              <a href="${resolveUrl(`pages/product.html?slug=${item.slug}`)}" class="cart-item-title">${item.name}</a>
              <div class="cart-item-meta">
                <span>Size: <strong>${item.size || 'Standard'}</strong></span>
                <span>&bull;</span>
                <span>Color: <strong>${item.color || 'Obsidian'}</strong></span>
              </div>
              <div class="cart-item-actions">
                <button class="cart-action-btn btn-wishlist" data-id="${item.id}">Move to Saved Archive</button>
                <span>&bull;</span>
                <button class="cart-action-btn btn-remove" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}">Remove</button>
              </div>
            </div>

            <div class="cart-item-right">
              <div class="cart-item-price">${i18n.formatPrice((item.salePrice || item.price) * item.quantity)}</div>
              
              <!-- Quantity Stepper -->
              <div class="pdp-qty-stepper" style="height:36px;">
                <button class="pdp-qty-btn btn-qty-dec" style="width:32px;">&minus;</button>
                <span class="pdp-qty-val" style="width:28px; font-size:12px;">${item.quantity}</span>
                <button class="pdp-qty-btn btn-qty-inc" style="width:32px;">&plus;</button>
              </div>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

      <!-- Right Column: Order Summary -->
      <aside class="cart-summary-box">
        <h2 class="summary-heading">Acquisition Breakdown</h2>

        <div class="summary-line">
          <span>Subtotal (${totals.itemCount} items)</span>
          <span>${i18n.formatPrice(totals.subtotal)}</span>
        </div>

        ${
          totals.volumeDiscount && totals.volumeDiscount.amount > 0
            ? `
          <div class="summary-line highlight">
            <span>${totals.volumeDiscount.label}</span>
            <span>-${i18n.formatPrice(totals.volumeDiscount.amount)}</span>
          </div>
        `
            : ''
        }

        ${
          appliedPromoCode && totals.promoDiscount > 0
            ? `
          <div class="summary-line highlight">
            <span>Privilege Code (${appliedPromoCode})</span>
            <span>-${i18n.formatPrice(totals.promoDiscount)}</span>
          </div>
        `
            : ''
        }

        <div class="summary-line">
          <span>Global Delivery</span>
          <span>${totals.shippingFee === 0 ? '<strong style="color:#15803d;">COMPLIMENTARY</strong>' : i18n.formatPrice(totals.shippingFee)}</span>
        </div>

        <!-- Gift Packaging Option -->
        <label style="display:flex; align-items:flex-start; gap:8px; font-size:12px; margin-block:14px; cursor:pointer; padding:10px; background:var(--color-bg-secondary); border-radius:4px;">
          <input type="checkbox" id="gift-wrap-toggle" ${includeGiftWrap ? 'checked' : ''} style="margin-top:2px; accent-color:var(--color-primary);"/>
          <span>Include signature atelier black-box gift packaging & handwritten calligraphy card (+$10)</span>
        </label>

        <!-- Promo Code Input -->
        <div class="promo-code-wrap">
          <input type="text" id="cart-promo-input" class="promo-input" placeholder="Privilege Code (e.g. KAYAN15)" value="${appliedPromoCode || ''}" />
          <button id="cart-promo-apply-btn" class="promo-btn">Apply</button>
        </div>
        ${
          appliedPromoCode
            ? `<div style="display:flex; align-items:center; justify-content:space-between; font-size:11px; color:#15803d; margin-bottom:12px;">
                <span>Code <strong>${appliedPromoCode}</strong> is active</span>
                <button id="btn-remove-promo" style="background:none; border:none; color:var(--color-text-muted); cursor:pointer; text-decoration:underline;">Remove</button>
              </div>`
            : ''
        }

        <!-- Total -->
        <div class="summary-total-line">
          <span>Estimated Total</span>
          <span style="color:var(--color-accent); font-family:var(--font-display); font-size:22px;">
            ${i18n.formatPrice(totals.finalTotal + (includeGiftWrap ? 10 : 0))}
          </span>
        </div>

        <!-- Checkout Action Button -->
        <a href="${resolveUrl('pages/checkout.html')}" class="btn-submit-primary" style="display:flex; justify-content:center; align-items:center; height:50px; margin-top:20px; font-size:13px; text-decoration:none;">
          Proceed to Encrypted Checkout &rarr;
        </a>

        <!-- Reassurance Guarantees -->
        <div style="margin-top:24px; padding-top:18px; border-top:1px solid var(--color-border-subtle); display:flex; flex-direction:column; gap:10px; font-size:11px; color:var(--color-text-subtle);">
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            256-bit Bank-Grade Encryption
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Complimentary 30-Day White-Glove Returns
          </div>
        </div>
      </aside>

    </div>
  `;

  bindCartEventListeners(container, items);
}

function renderEmptyCart(container) {
  container.innerHTML = `
    <div class="cart-empty-view">
      <div style="width:72px; height:72px; margin:0 auto 20px; border-radius:50%; background:var(--color-bg-secondary); display:grid; place-items:center;">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      </div>
      <h2 class="font-display font-bold text-2xl" style="margin-bottom:8px;">Your Shopping Bag Is Empty</h2>
      <p class="text-sm" style="color:var(--color-text-muted); max-width:420px; margin:0 auto 24px;">
        Explore our curated autumn silhouettes or revisit your saved archive to acquire timeless garments.
      </p>
      <a href="${resolveUrl('pages/shop.html')}" class="btn-submit-primary" style="display:inline-block; width:auto; padding:12px 32px; text-decoration:none;">
        Explore The Archive
      </a>
    </div>
  `;
}

function bindCartEventListeners(container, items) {
  // Steppers
  container.querySelectorAll('.cart-item-row').forEach((row) => {
    const idx = parseInt(row.dataset.index, 10);
    const item = items[idx];
    if (!item) return;

    const dec = row.querySelector('.btn-qty-dec');
    const inc = row.querySelector('.btn-qty-inc');

    if (dec) {
      dec.addEventListener('click', () => {
        store.updateCartQuantity(item.id, item.size, item.color, item.quantity - 1);
      });
    }

    if (inc) {
      inc.addEventListener('click', () => {
        store.updateCartQuantity(item.id, item.size, item.color, item.quantity + 1);
      });
    }

    const removeBtn = row.querySelector('.btn-remove');
    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        store.removeFromCart(item.id, item.size, item.color);
        toastSystem.info('Item removed from shopping bag.');
      });
    }

    const wishBtn = row.querySelector('.btn-wishlist');
    if (wishBtn) {
      wishBtn.addEventListener('click', () => {
        store.toggleWishlist(item.id);
        store.removeFromCart(item.id, item.size, item.color);
        toastSystem.info('Moved item to your Saved Archive.');
      });
    }
  });

  // Gift wrap toggle
  const giftToggle = container.querySelector('#gift-wrap-toggle');
  if (giftToggle) {
    giftToggle.addEventListener('change', (e) => {
      includeGiftWrap = e.target.checked;
      renderCartView();
    });
  }

  // Promo code
  const promoInput = container.querySelector('#cart-promo-input');
  const promoApply = container.querySelector('#cart-promo-apply-btn');
  if (promoApply && promoInput) {
    promoApply.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (!code) return;
      const res = evaluatePromoCode(code, store.getCartTotals().subtotal);
      if (res.valid) {
        appliedPromoCode = code;
        toastSystem.success(`Privilege Code ${code} successfully activated!`);
        renderCartView();
      } else {
        toastSystem.error(res.message || 'Invalid promotional code.');
      }
    });
  }

  const removePromoBtn = container.querySelector('#btn-remove-promo');
  if (removePromoBtn) {
    removePromoBtn.addEventListener('click', () => {
      appliedPromoCode = null;
      toastSystem.info('Promotional code removed.');
      renderCartView();
    });
  }
}

// Auto init if cart mount exists
if (document.querySelector('#cart-page-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCartPage());
  } else {
    initCartPage();
  }
}
/**
 * KAYAN Luxury Fashion — Checkout Wizard Controller
 * Multi-step checkout with live card brand recognition, Luhn algorithm validation,
 * delivery methods calculation, and celebratory order confirmation.
 */


let currentStep = 1; // 1: Info, 2: Shipping, 3: Payment, 4: Confirmed
let shippingCostUSD = 0;
let selectedShippingTier = 'standard';
let formData = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: 'United Arab Emirates',
  postalCode: '',
  phone: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvv: '',
  paymentMethod: 'card'
};

function initCheckoutPage() {
  const cartItems = store.getState().cart || [];
  if (cartItems.length === 0 && currentStep !== 4) {
    // If cart is empty, redirect or display notice
    const mount = document.querySelector('#checkout-wizard-mount');
    if (mount) {
      mount.innerHTML = `
        <div style="text-align:center; padding:80px 20px;">
          <h2 class="font-display font-bold text-2xl" style="margin-bottom:12px;">Your Bag is Currently Empty</h2>
          <p class="text-sm" style="color:var(--color-text-muted); margin-bottom:24px;">Please select silhouettes from our archive before initiating acquisition.</p>
          <a href="${resolveUrl('pages/shop.html')}" class="btn-submit-primary" style="display:inline-block; width:auto; padding:12px 32px; text-decoration:none;">Browse Archive</a>
        </div>
      `;
    }
    return;
  }

  renderCheckoutWizard();
  renderOrderSummarySidebar();

  events.on('store:currency', () => {
    renderCheckoutWizard();
    renderOrderSummarySidebar();
  });
}

function renderCheckoutWizard() {
  const mount = document.querySelector('#checkout-wizard-mount');
  const stepsBar = document.querySelector('#checkout-steps-bar');
  if (!mount) return;

  // Update steps indicator
  if (stepsBar) {
    stepsBar.innerHTML = `
      <div class="checkout-step-indicator ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}">
        <span class="checkout-step-num">${currentStep > 1 ? '&#10003;' : '1'}</span>
        <span>Information</span>
      </div>
      <div class="checkout-step-sep"></div>
      <div class="checkout-step-indicator ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}">
        <span class="checkout-step-num">${currentStep > 2 ? '&#10003;' : '2'}</span>
        <span>Delivery</span>
      </div>
      <div class="checkout-step-sep"></div>
      <div class="checkout-step-indicator ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}">
        <span class="checkout-step-num">${currentStep > 3 ? '&#10003;' : '3'}</span>
        <span>Payment</span>
      </div>
    `;
  }

  if (currentStep === 1) {
    renderStep1Information(mount);
  } else if (currentStep === 2) {
    renderStep2Shipping(mount);
  } else if (currentStep === 3) {
    renderStep3Payment(mount);
  } else if (currentStep === 4) {
    renderStep4Confirmation(mount);
  }
}

function renderStep1Information(mount) {
  mount.innerHTML = `
    <div class="checkout-form-card">
      <h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        1. Contact Information
      </h2>
      <div class="form-group" style="margin-bottom:16px;">
        <label class="form-label">Electronic Mail for Acquisition Confirmation</label>
        <input type="email" id="chk-email" class="form-input" placeholder="collector@kayan-atelier.com" value="${formData.email}" required />
      </div>

      <h2 style="margin-top:28px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Delivery Destination
      </h2>
      <div class="form-grid-2" style="margin-bottom:14px;">
        <div class="form-group">
          <label class="form-label">First Name</label>
          <input type="text" id="chk-fname" class="form-input" placeholder="Soraya" value="${formData.firstName}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Last Name</label>
          <input type="text" id="chk-lname" class="form-input" placeholder="Al-Mansoor" value="${formData.lastName}" required />
        </div>
      </div>

      <div class="form-group" style="margin-bottom:14px;">
        <label class="form-label">Destination Country / Region</label>
        <select id="chk-country" class="form-select">
          <option value="United Arab Emirates" ${formData.country === 'United Arab Emirates' ? 'selected' : ''}>United Arab Emirates</option>
          <option value="Saudi Arabia" ${formData.country === 'Saudi Arabia' ? 'selected' : ''}>Saudi Arabia</option>
          <option value="United Kingdom" ${formData.country === 'United Kingdom' ? 'selected' : ''}>United Kingdom</option>
          <option value="United States" ${formData.country === 'United States' ? 'selected' : ''}>United States</option>
          <option value="France" ${formData.country === 'France' ? 'selected' : ''}>France</option>
          <option value="Italy" ${formData.country === 'Italy' ? 'selected' : ''}>Italy</option>
          <option value="Egypt" ${formData.country === 'Egypt' ? 'selected' : ''}>Egypt</option>
          <option value="Japan" ${formData.country === 'Japan' ? 'selected' : ''}>Japan</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:14px;">
        <label class="form-label">Street Address & Residence</label>
        <input type="text" id="chk-address" class="form-input" placeholder="Alserkal Avenue, Villa 14" value="${formData.address}" required />
      </div>

      <div class="form-grid-2" style="margin-bottom:14px;">
        <div class="form-group">
          <label class="form-label">City</label>
          <input type="text" id="chk-city" class="form-input" placeholder="Dubai" value="${formData.city}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Postal / Zip Code</label>
          <input type="text" id="chk-postal" class="form-input" placeholder="00000" value="${formData.postalCode}" required />
        </div>
      </div>

      <div class="form-group" style="margin-bottom:24px;">
        <label class="form-label">Contact Telephone (For courier dispatch coordination)</label>
        <input type="tel" id="chk-phone" class="form-input" placeholder="+971 50 123 4567" value="${formData.phone}" required />
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <a href="${resolveUrl('pages/cart.html')}" style="font-size:12px; color:var(--color-text-muted); text-decoration:underline;">&larr; Return to Shopping Bag</a>
        <button id="btn-to-step-2" class="btn-submit-primary" style="width:auto; padding:12px 32px;">Continue to Delivery &rarr;</button>
      </div>
    </div>
  `;

  mount.querySelector('#btn-to-step-2').addEventListener('click', () => {
    formData.email = mount.querySelector('#chk-email').value.trim();
    formData.firstName = mount.querySelector('#chk-fname').value.trim();
    formData.lastName = mount.querySelector('#chk-lname').value.trim();
    formData.country = mount.querySelector('#chk-country').value;
    formData.address = mount.querySelector('#chk-address').value.trim();
    formData.city = mount.querySelector('#chk-city').value.trim();
    formData.postalCode = mount.querySelector('#chk-postal').value.trim();
    formData.phone = mount.querySelector('#chk-phone').value.trim();

    if (!formData.email || !formData.firstName || !formData.address || !formData.city) {
      toastSystem.error('Please complete all required shipping fields.');
      return;
    }

    currentStep = 2;
    renderCheckoutWizard();
    renderOrderSummarySidebar();
  });
}

function renderStep2Shipping(mount) {
  const totals = store.getCartTotals();
  const isFreeEligible = totals.subtotal >= 150;

  mount.innerHTML = `
    <div class="checkout-form-card">
      <h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        2. Delivery Tier & Logistics
      </h2>

      <div style="background:var(--color-bg-secondary); padding:12px 16px; border-radius:4px; font-size:12px; margin-bottom:20px; line-height:1.5;">
        <div>Delivering to: <strong>${formData.firstName} ${formData.lastName}</strong></div>
        <div style="color:var(--color-text-muted);">${formData.address}, ${formData.city}, ${formData.country}</div>
      </div>

      <div class="shipping-options-list">
        <!-- Standard Option -->
        <label class="shipping-radio-card ${selectedShippingTier === 'standard' ? 'active' : ''}">
          <div style="display:flex; align-items:center; gap:12px;">
            <input type="radio" name="ship_tier" value="standard" ${selectedShippingTier === 'standard' ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
            <div>
              <div style="font-weight:700; font-size:13px;">Standard Carbon-Neutral Express</div>
              <div style="font-size:11px; color:var(--color-text-muted);">Estimated arrival in 3–5 business days</div>
            </div>
          </div>
          <div style="font-weight:700; font-size:13px;">
            ${isFreeEligible ? '<span style="color:#15803d;">COMPLIMENTARY</span>' : i18n.formatPrice(15)}
          </div>
        </label>

        <!-- Priority Air Courier -->
        <label class="shipping-radio-card ${selectedShippingTier === 'express' ? 'active' : ''}">
          <div style="display:flex; align-items:center; gap:12px;">
            <input type="radio" name="ship_tier" value="express" ${selectedShippingTier === 'express' ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
            <div>
              <div style="font-weight:700; font-size:13px;">DHL Priority Air Express</div>
              <div style="font-size:11px; color:var(--color-text-muted);">Guaranteed arrival in 1–2 business days</div>
            </div>
          </div>
          <div style="font-weight:700; font-size:13px;">${i18n.formatPrice(25)}</div>
        </label>

        <!-- Same Day White Glove Concierge -->
        <label class="shipping-radio-card ${selectedShippingTier === 'concierge' ? 'active' : ''}">
          <div style="display:flex; align-items:center; gap:12px;">
            <input type="radio" name="ship_tier" value="concierge" ${selectedShippingTier === 'concierge' ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
            <div>
              <div style="font-weight:700; font-size:13px;">Atelier White-Glove Evening Courier</div>
              <div style="font-size:11px; color:var(--color-text-muted);">Hand-delivered in garment bag with private stylist review</div>
            </div>
          </div>
          <div style="font-weight:700; font-size:13px;">${i18n.formatPrice(45)}</div>
        </label>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px;">
        <button id="btn-back-to-step-1" style="background:none; border:none; font-size:12px; color:var(--color-text-muted); cursor:pointer; text-decoration:underline;">&larr; Back to Information</button>
        <button id="btn-to-step-3" class="btn-submit-primary" style="width:auto; padding:12px 32px;">Continue to Payment &rarr;</button>
      </div>
    </div>
  `;

  mount.querySelectorAll('input[name="ship_tier"]').forEach(radio => {
    radio.addEventListener('change', () => {
      selectedShippingTier = radio.value;
      if (selectedShippingTier === 'standard') {
        shippingCostUSD = isFreeEligible ? 0 : 15;
      } else if (selectedShippingTier === 'express') {
        shippingCostUSD = 25;
      } else if (selectedShippingTier === 'concierge') {
        shippingCostUSD = 45;
      }
      renderStep2Shipping(mount);
      renderOrderSummarySidebar();
    });
  });

  mount.querySelector('#btn-back-to-step-1').addEventListener('click', () => {
    currentStep = 1;
    renderCheckoutWizard();
  });

  mount.querySelector('#btn-to-step-3').addEventListener('click', () => {
    currentStep = 3;
    renderCheckoutWizard();
    renderOrderSummarySidebar();
  });
}

function renderStep3Payment(mount) {
  mount.innerHTML = `
    <div class="checkout-form-card">
      <h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        3. Encrypted Payment Execution
      </h2>

      <!-- Payment Method Tabs -->
      <div style="display:flex; gap:10px; margin-bottom:20px;">
        <button class="pay-method-tab ${formData.paymentMethod === 'card' ? 'active' : ''}" data-method="card" style="flex:1; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-xs); background:var(--color-surface); cursor:pointer; font-weight:700; font-size:12px;">Credit / Debit Card</button>
        <button class="pay-method-tab ${formData.paymentMethod === 'apple' ? 'active' : ''}" data-method="apple" style="flex:1; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-xs); background:var(--color-surface); cursor:pointer; font-weight:700; font-size:12px;">Apple Pay</button>
        <button class="pay-method-tab ${formData.paymentMethod === 'split' ? 'active' : ''}" data-method="split" style="flex:1; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-xs); background:var(--color-surface); cursor:pointer; font-weight:700; font-size:12px;">Tabby (4 Split)</button>
      </div>

      <div id="payment-fields-mount">
        <!-- Credit Card Fields -->
        <div class="form-group" style="margin-bottom:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label class="form-label">Card Number</label>
            <span id="card-detected-brand" class="card-brand-badge"></span>
          </div>
          <input type="text" id="chk-card-num" class="form-input" placeholder="4242 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4242" maxlength="19" value="${formData.cardNumber}" required />
        </div>

        <div class="form-grid-2" style="margin-bottom:20px;">
          <div class="form-group">
            <label class="form-label">Expiration Date</label>
            <input type="text" id="chk-card-exp" class="form-input" placeholder="MM/YY" maxlength="5" value="${formData.cardExpiry}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Security Code (CVV)</label>
            <input type="text" id="chk-card-cvv" class="form-input" placeholder="123" maxlength="4" value="${formData.cardCvv}" required />
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px;">
        <button id="btn-back-to-step-2" style="background:none; border:none; font-size:12px; color:var(--color-text-muted); cursor:pointer; text-decoration:underline;">&larr; Back to Delivery</button>
        <button id="btn-complete-order" class="btn-submit-primary" style="width:auto; padding:14px 40px; font-size:13px; font-weight:800;">
          Authorize Acquisition &rarr;
        </button>
      </div>
    </div>
  `;

  // Format Card Number & Detect Brand
  const cardInput = mount.querySelector('#chk-card-num');
  const brandBadge = mount.querySelector('#card-detected-brand');
  const expInput = mount.querySelector('#chk-card-exp');

  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      formData.cardNumber = val;
      // Auto spacing 4 4 4 4
      e.target.value = val.replace(/(\d{4})(?=\d)/g, '$1 ');

      // Brand recognition
      if (val.startsWith('4')) {
        brandBadge.textContent = 'VISA';
      } else if (val.startsWith('51') || val.startsWith('52') || val.startsWith('53') || val.startsWith('54') || val.startsWith('55')) {
        brandBadge.textContent = 'MASTERCARD';
      } else if (val.startsWith('34') || val.startsWith('37')) {
        brandBadge.textContent = 'AMERICAN EXPRESS';
      } else {
        brandBadge.textContent = '';
      }
    });
  }

  if (expInput) {
    expInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      formData.cardExpiry = val;
      if (val.length >= 2) {
        e.target.value = val.substring(0, 2) + '/' + val.substring(2);
      } else {
        e.target.value = val;
      }
    });
  }

  mount.querySelector('#btn-back-to-step-2').addEventListener('click', () => {
    currentStep = 2;
    renderCheckoutWizard();
  });

  mount.querySelector('#btn-complete-order').addEventListener('click', () => {
    executeOrderSubmission();
  });
}

function executeOrderSubmission() {
  const cartItems = store.getState().cart || [];
  const totals = store.getCartTotals();
  const orderRef = `KYN-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  const orderRecord = {
    id: orderRef,
    date: new Date().toISOString(),
    customer: formData,
    items: [...cartItems],
    shippingTier: selectedShippingTier,
    shippingCost: shippingCostUSD,
    total: totals.finalTotal + shippingCostUSD,
    status: 'Confirmed — Preparing in Atelier'
  };

  // Add to order history in store
  store.addOrder(orderRecord);

  // Clear shopping cart
  store.clearCart();

  // Progress to confirmed step
  currentStep = 4;
  renderCheckoutWizard();

  // Canvas Confetti Celebration
  createConfetti();
  toastSystem.success(`Acquisition confirmed. Order reference ${orderRef}`);
}

function renderStep4Confirmation(mount) {
  const orders = store.getState().orders || [];
  const latestOrder = orders[orders.length - 1];
  const ref = latestOrder ? latestOrder.id : 'KYN-2026-88412';

  mount.innerHTML = `
    <div class="order-confirmation-card">
      <div class="order-conf-badge">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>

      <span class="pdp-brand-tag">Atelier Registry Acquisition Completed</span>
      <h1 class="font-display font-bold text-3xl" style="margin-block:8px 12px;">Form Meets Existence</h1>
      <p class="text-sm" style="color:var(--color-text-muted); max-width:520px; margin:0 auto 24px;">
        Thank you for choosing KAYAN. Your acquisition record has been etched into our salon ledger. A formal deed of provenance and delivery tracking link has been dispatched to <strong>${formData.email || 'your email'}</strong>.
      </p>

      <div style="background:var(--color-bg-secondary); border-radius:var(--radius-md); padding:20px; max-width:480px; margin:0 auto 28px; text-align:start;">
        <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:8px;">
          <span>Registry Dossier:</span>
          <strong>${ref}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:8px;">
          <span>Logistics Method:</span>
          <span style="text-transform:capitalize;">${selectedShippingTier} Express</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:12px;">
          <span>Estimated Handover:</span>
          <strong>Within 48–72 Hours</strong>
        </div>
      </div>

      <div style="display:flex; justify-content:center; gap:16px;">
        <button onclick="window.print()" class="btn-filter-mobile" style="display:inline-flex; padding:12px 24px; font-size:12px; font-weight:700;">
          Print Acquisition Dossier
        </button>
        <a href="${resolveUrl('index.html')}" class="btn-submit-primary" style="display:inline-flex; width:auto; padding:12px 28px; text-decoration:none; font-size:12px;">
          Return to Atelier
        </a>
      </div>
    </div>
  `;

  // Hide sidebar on confirmation
  const sidebar = document.querySelector('#checkout-summary-sidebar');
  if (sidebar) sidebar.style.display = 'none';
}

function renderOrderSummarySidebar() {
  const sidebar = document.querySelector('#checkout-summary-sidebar');
  if (!sidebar) return;

  const items = store.getState().cart || [];
  const totals = store.getCartTotals();
  const effectiveTotal = totals.finalTotal + shippingCostUSD;

  sidebar.innerHTML = `
    <div class="cart-summary-box">
      <h2 class="summary-heading">Selected Silhouettes (${totals.itemCount})</h2>
      
      <div style="display:flex; flex-direction:column; gap:12px; max-height:300px; overflow-y:auto; margin-bottom:16px;">
        ${items
          .map(
            (i) => `
          <div style="display:flex; gap:12px; align-items:center;">
            <img src="${i.image}" style="width:52px; height:68px; object-fit:cover; border-radius:3px; background:var(--color-bg-secondary);" />
            <div style="flex-grow:1; font-size:12px;">
              <div style="font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${i.name}</div>
              <div style="color:var(--color-text-subtle);">${i.size} &bull; Qty ${i.quantity}</div>
            </div>
            <div style="font-size:12px; font-weight:700;">${i18n.formatPrice((i.salePrice || i.price) * i.quantity)}</div>
          </div>
        `
          )
          .join('')}
      </div>

      <div class="summary-line">
        <span>Garment Subtotal</span>
        <span>${i18n.formatPrice(totals.subtotal)}</span>
      </div>

      ${
        totals.volumeDiscount && totals.volumeDiscount.amount > 0
          ? `
        <div class="summary-line highlight">
          <span>${totals.volumeDiscount.label}</span>
          <span>-${i18n.formatPrice(totals.volumeDiscount.amount)}</span>
        </div>
      `
          : ''
      }

      <div class="summary-line">
        <span>Delivery Logistics</span>
        <span>${shippingCostUSD === 0 ? '<strong style="color:#15803d;">COMPLIMENTARY</strong>' : i18n.formatPrice(shippingCostUSD)}</span>
      </div>

      <div class="summary-total-line">
        <span>Total Remittance</span>
        <span style="color:var(--color-accent); font-family:var(--font-display); font-size:22px;">
          ${i18n.formatPrice(effectiveTotal)}
        </span>
      </div>
    </div>
  `;
}

// Auto init on checkout page
if (document.querySelector('#checkout-wizard-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCheckoutPage());
  } else {
    initCheckoutPage();
  }
}
/**
 * KAYAN Luxury Fashion — Wishlist / Saved Archive Controller
 */


function initWishlistPage() {
  renderWishlistView();

  events.on('store:wishlist', () => {
    renderWishlistView();
  });

  events.on('store:currency', () => {
    renderWishlistView();
  });
}

function renderWishlistView() {
  const mount = document.querySelector('#wishlist-page-mount');
  const countEl = document.querySelector('#wishlist-total-count');
  if (!mount) return;

  const wishedIds = store.getState().wishlist || [];
  const wishedProducts = products.filter((p) => wishedIds.includes(p.id));

  if (countEl) {
    countEl.textContent = `(${wishedProducts.length} Silhouettes)`;
  }

  if (wishedProducts.length === 0) {
    mount.innerHTML = `
      <div style="text-align:center; padding:80px 20px; background:var(--color-surface); border-radius:var(--radius-md); border:1px solid var(--color-border);">
        <div style="width:72px; height:72px; margin:0 auto 20px; border-radius:50%; background:var(--color-bg-secondary); display:grid; place-items:center;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <h2 class="font-display font-bold text-2xl" style="margin-bottom:8px;">Your Saved Archive Is Empty</h2>
        <p class="text-sm" style="color:var(--color-text-muted); max-width:420px; margin:0 auto 24px;">
          Curate your bespoke wishlist by selecting the heart icon on any silhouette in the atelier collections.
        </p>
        <a href="${resolveUrl('pages/shop.html')}" class="btn-submit-primary" style="display:inline-block; width:auto; padding:12px 32px; text-decoration:none;">
          Explore Collections
        </a>
      </div>
    `;
    return;
  }

  mount.innerHTML = `
    <div class="wishlist-grid">
      ${wishedProducts
        .map(
          (p) => `
        <div class="wishlist-card" data-id="${p.id}">
          <div class="wishlist-card-img-wrap">
            <a href="${resolveUrl(`pages/product.html?slug=${p.slug}`)}">
              <img src="${p.image || (p.images && p.images[0])}" alt="${p.name}" class="wishlist-card-img" loading="lazy" />
            </a>
            <button class="wishlist-remove-btn btn-remove-wish" data-id="${p.id}" aria-label="Remove silhouette">&times;</button>
          </div>
          <div class="wishlist-card-body">
            <span style="font-size:11px; text-transform:uppercase; color:var(--color-accent); font-weight:700;">${p.department} &bull; ${p.brand}</span>
            <a href="${resolveUrl(`pages/product.html?slug=${p.slug}`)}" class="wishlist-card-title">${p.name}</a>
            <div class="wishlist-card-price">${i18n.formatPrice(p.salePrice || p.price)}</div>
            <button class="btn-submit-primary btn-move-to-bag" data-id="${p.id}" style="width:100%; height:40px; font-size:11px; font-weight:700; margin-top:6px;">
              Move to Shopping Bag
            </button>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `;

  bindWishlistEvents(mount, wishedProducts);
}

function bindWishlistEvents(mount, wishedProducts) {
  // Remove button
  mount.querySelectorAll('.btn-remove-wish').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      store.toggleWishlist(id);
      toastSystem.info('Silhouette removed from saved archive.');
    });
  });

  // Move to bag
  mount.querySelectorAll('.btn-move-to-bag').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const product = wishedProducts.find((p) => p.id === id);
      if (product) {
        const defaultSize = product.sizes && product.sizes[0] ? product.sizes[0].size : 'Standard';
        const defaultColor = product.colors && product.colors[0] ? product.colors[0].name : 'Default';
        store.addToCart(product, defaultSize, defaultColor, 1);
        store.toggleWishlist(id);
        toastSystem.success(`Moved ${product.name} to your shopping bag.`);
        events.emit('cart:open');
      }
    });
  });

  // Share button
  const shareBtn = document.querySelector('#btn-share-wishlist');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href);
      toastSystem.success('Private archive link copied to clipboard!');
    });
  }
}

// Auto init on wishlist page
if (document.querySelector('#wishlist-page-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initWishlistPage());
  } else {
    initWishlistPage();
  }
}
/**
 * KAYAN Luxury Fashion — Customer Portal & Kayan Circle Controller
 */


function initAccountPage() {
  renderAccountHero();
  renderOrdersPanel();
  renderProfilePanel();
  renderFitPanel();
  initTabSwitchers();

  events.on('store:currency', () => {
    renderOrdersPanel();
  });
}

function renderAccountHero() {
  const mount = document.querySelector('#account-hero-mount');
  if (!mount) return;

  const state = store.getState();
  const userName = state.user ? state.user.name : 'Soraya Al-Mansoor';
  const points = 1840;
  const targetPoints = 2500;
  const progressPercent = Math.round((points / targetPoints) * 100);

  mount.innerHTML = `
    <div class="account-hero-card">
      <div class="account-avatar-ring">S</div>
      <div>
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
          <h1 class="font-display font-bold text-2xl">${userName}</h1>
          <span class="tier-badge-pill">Obsidian Tier</span>
        </div>
        <div style="font-size:12px; color:var(--color-text-muted);">
          KAYAN Circle Collector ID: <strong>KYN-CIRC-9021</strong> &bull; Member since 2024
        </div>
        <div style="margin-top:12px; max-width:380px;">
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px;">
            <span>Tier Status: <strong>${points} pts</strong></span>
            <span>Target: <strong>${targetPoints} pts</strong> (Black Monolith)</span>
          </div>
          <div style="height:6px; background:var(--color-border); border-radius:var(--radius-full); overflow:hidden;">
            <div style="height:100%; width:${progressPercent}%; background:var(--color-accent); border-radius:var(--radius-full);"></div>
          </div>
        </div>
      </div>
      <div>
        <button id="btn-portal-logout" class="btn-filter-mobile" style="display:inline-flex; padding:8px 16px; font-size:11px; font-weight:700;">
          Log Out
        </button>
      </div>
    </div>
  `;

  mount.querySelector('#btn-portal-logout').addEventListener('click', () => {
    toastSystem.info('You have gracefully signed out of your atelier account.');
  });
}

function renderOrdersPanel() {
  const mount = document.querySelector('#panel-orders-mount');
  if (!mount) return;

  const userOrders = store.getState().orders || [];

  // Default orders if none made yet
  const displayOrders = userOrders.length > 0 ? userOrders : [
    {
      id: 'KYN-2026-77341',
      date: '2026-09-18T14:22:00Z',
      status: 'Delivered by Private Courier',
      shippingTier: 'concierge',
      total: 756,
      items: [
        {
          name: 'Sculpted Wool Cocoon Coat',
          size: 'M',
          color: 'Obsidian',
          quantity: 1,
          price: 336,
          image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&auto=format&fit=crop&q=80'
        },
        {
          name: 'Architectural Pleated Maxi Dress',
          size: 'S',
          color: 'Obsidian',
          quantity: 1,
          price: 360,
          image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&auto=format&fit=crop&q=80'
        }
      ]
    }
  ];

  mount.innerHTML = displayOrders
    .map(
      (ord) => `
    <div class="order-history-card">
      <div class="order-history-header">
        <div>
          <div>Order Dossier: <strong>${ord.id}</strong></div>
          <div style="color:var(--color-text-subtle); margin-top:2px;">Acquired on ${new Date(ord.date).toLocaleDateString()}</div>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span class="order-status-pill">${ord.status}</span>
          <strong style="font-size:14px;">${i18n.formatPrice(ord.total)}</strong>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:12px;">
        ${(ord.items || [])
          .map(
            (i) => `
          <div style="display:flex; align-items:center; gap:16px;">
            <img src="${i.image}" style="width:52px; height:68px; object-fit:cover; border-radius:3px; background:var(--color-bg-secondary);" />
            <div style="flex-grow:1; font-size:12px;">
              <div style="font-weight:700;">${i.name}</div>
              <div style="color:var(--color-text-subtle);">Size: ${i.size} &bull; Color: ${i.color} &bull; Qty: ${i.quantity}</div>
            </div>
            <div style="font-size:12px; font-weight:700;">${i18n.formatPrice(i.price * i.quantity)}</div>
          </div>
        `
          )
          .join('')}
      </div>

      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:16px; padding-top:12px; border-top:1px solid var(--color-border-subtle);">
        <button class="btn-filter-mobile btn-track-dossier" style="display:inline-flex; padding:6px 14px; font-size:11px;">Track Shipment</button>
        <button class="btn-filter-mobile btn-invoice-dossier" style="display:inline-flex; padding:6px 14px; font-size:11px;">View Authenticity Certificate</button>
      </div>
    </div>
  `
    )
    .join('');

  mount.querySelectorAll('.btn-track-dossier').forEach((b) => {
    b.addEventListener('click', () => {
      toastSystem.info('Tracking dossier active. In transit via carbon-neutral express courier.');
    });
  });

  mount.querySelectorAll('.btn-invoice-dossier').forEach((b) => {
    b.addEventListener('click', () => {
      window.print();
    });
  });
}

function renderProfilePanel() {
  const mount = document.querySelector('#panel-profile-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="checkout-form-card" style="max-width:720px;">
      <h2>Curator Details & Delivery Coordinates</h2>
      <div class="form-grid-2" style="margin-bottom:16px;">
        <div class="form-group">
          <label class="form-label">First Name</label>
          <input type="text" id="prof-fname" class="form-input" value="Soraya" />
        </div>
        <div class="form-group">
          <label class="form-label">Last Name</label>
          <input type="text" id="prof-lname" class="form-input" value="Al-Mansoor" />
        </div>
      </div>
      <div class="form-group" style="margin-bottom:16px;">
        <label class="form-label">Primary Electronic Mail</label>
        <input type="email" id="prof-email" class="form-input" value="soraya.atelier@gmail.com" />
      </div>
      <div class="form-group" style="margin-bottom:16px;">
        <label class="form-label">Telephone</label>
        <input type="tel" id="prof-phone" class="form-input" value="+971 50 882 1944" />
      </div>
      <div class="form-group" style="margin-bottom:24px;">
        <label class="form-label">Default Delivery Destination</label>
        <input type="text" id="prof-addr" class="form-input" value="Fashion Avenue, Downtown Dubai, UAE" />
      </div>

      <button id="btn-save-profile" class="btn-submit-primary" style="width:auto; padding:12px 32px;">
        Save Atelier Credentials
      </button>
    </div>
  `;

  mount.querySelector('#btn-save-profile').addEventListener('click', () => {
    toastSystem.success('Profile credentials successfully updated.');
  });
}

function renderFitPanel() {
  const mount = document.querySelector('#panel-fit-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="checkout-form-card" style="max-width:720px;">
      <h2>Tailored Silhouette Preferences</h2>
      <p class="text-xs" style="color:var(--color-text-muted); margin-bottom:20px;">
        We reference these proportions when you browse the archive to highlight your ideal cut and size availability.
      </p>

      <div class="form-grid-2" style="margin-bottom:16px;">
        <div class="form-group">
          <label class="form-label">Outerwear & Coats</label>
          <select class="form-select">
            <option>Size S (Oversized Drape)</option>
            <option selected>Size M (Architectural)</option>
            <option>Size L (Generous Boxy)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Trousers & Skirts</label>
          <select class="form-select">
            <option selected>Size S (High-Rise 26)</option>
            <option>Size M (Mid-Rise 28)</option>
          </select>
        </div>
      </div>

      <div class="form-group" style="margin-bottom:24px;">
        <label class="form-label">Footwear & Boots</label>
        <select class="form-select">
          <option>EU 37 / UK 4</option>
          <option selected>EU 38 / UK 5</option>
          <option>EU 39 / UK 6</option>
        </select>
      </div>

      <button id="btn-save-fit" class="btn-submit-primary" style="width:auto; padding:12px 32px;">
        Save Fit Dossier
      </button>
    </div>
  `;

  mount.querySelector('#btn-save-fit').addEventListener('click', () => {
    toastSystem.success('Fit preferences updated.');
  });
}

function initTabSwitchers() {
  const tabs = document.querySelectorAll('.account-tab-btn');
  const panels = document.querySelectorAll('.account-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.target;
      const targetPanel = document.querySelector(`#${targetId}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

// Auto init on account page
if (document.querySelector('#account-hero-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAccountPage());
  } else {
    initAccountPage();
  }
}
/**
 * KAYAN Luxury Fashion — Flagship Stores Locator & Interactive Map
 */


let filteredStores = [...stores];
let activeStoreId = stores[0].id;
let selectedRegion = 'all';
let searchQuery = '';

function initStoresPage() {
  renderStoresList();
  renderInteractiveMap();
  bindFilterListeners();
}

function bindFilterListeners() {
  const searchInput = document.querySelector('#store-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  document.querySelectorAll('.stores-region-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.stores-region-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      selectedRegion = pill.dataset.region;
      applyFilters();
    });
  });
}

function applyFilters() {
  filteredStores = stores.filter((st) => {
    // Region
    if (selectedRegion === 'me' && !['United Arab Emirates', 'Saudi Arabia', 'Egypt', 'Qatar', 'Kuwait'].includes(st.country)) return false;
    if (selectedRegion === 'eu' && !['United Kingdom', 'France', 'Italy'].includes(st.country)) return false;
    if (selectedRegion === 'na' && st.country !== 'United States') return false;
    if (selectedRegion === 'asia' && st.country !== 'Japan') return false;

    // Search query
    if (searchQuery) {
      const match =
        st.name.toLowerCase().includes(searchQuery) ||
        st.city.toLowerCase().includes(searchQuery) ||
        st.address.toLowerCase().includes(searchQuery);
      if (!match) return false;
    }

    return true;
  });

  renderStoresList();
  renderInteractiveMap();
}

function isStoreOpen(st) {
  if (!st.hoursRaw) return true;
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  return currentHour >= st.hoursRaw.open && currentHour <= st.hoursRaw.close;
}

function renderStoresList() {
  const mount = document.querySelector('#stores-list-mount');
  const countLabel = document.querySelector('#stores-count-label');
  if (!mount) return;

  if (countLabel) {
    countLabel.textContent = `Displaying ${filteredStores.length} Ateliers Worldwide`;
  }

  if (filteredStores.length === 0) {
    mount.innerHTML = `
      <div style="text-align:center; padding:40px 16px; background:var(--color-surface); border-radius:var(--radius-sm);">
        <p style="font-size:13px; color:var(--color-text-muted);">No flagship ateliers found for your query.</p>
      </div>
    `;
    return;
  }

  mount.innerHTML = filteredStores
    .map((st) => {
      const open = isStoreOpen(st);
      return `
      <div class="store-card ${st.id === activeStoreId ? 'active' : ''}" data-id="${st.id}">
        <img src="${st.image}" alt="${st.name}" class="store-card-img" loading="lazy" />
        <div class="store-card-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:11px; font-weight:700; color:var(--color-accent); text-transform:uppercase;">${st.city}, ${st.country}</span>
            <span class="store-status-badge ${open ? 'open' : 'closed'}">
              &bull; ${open ? 'Open Now' : 'Closed for Salon Setup'}
            </span>
          </div>

          <h3 class="font-display font-bold text-base" style="margin-bottom:6px;">${st.name}</h3>
          <p style="font-size:12px; color:var(--color-text-muted); line-height:1.5; margin-bottom:10px;">${st.address}</p>

          <div style="font-size:11px; color:var(--color-text-subtle); margin-bottom:12px; display:flex; flex-direction:column; gap:4px;">
            <div><strong>Hours:</strong> ${st.hours}</div>
            <div><strong>Concierge:</strong> <a href="tel:${st.phone}" style="color:var(--color-text);">${st.phone}</a></div>
          </div>

          <div style="display:flex; gap:8px;">
            <button class="btn-submit-primary btn-book-salon" data-id="${st.id}" data-name="${st.name}" style="flex:1; height:36px; font-size:11px; font-weight:700;">
              Book Private Salon
            </button>
            <a href="https://maps.google.com/?q=${encodeURIComponent(st.address)}" target="_blank" rel="noopener noreferrer" class="btn-filter-mobile" style="display:inline-flex; align-items:center; justify-content:center; padding:0 12px; height:36px; font-size:11px; text-decoration:none;">
              Directions
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  // Card select handlers
  mount.querySelectorAll('.store-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      activeStoreId = card.dataset.id;
      mount.querySelectorAll('.store-card').forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      renderInteractiveMap();
    });
  });

  // Booking handlers
  mount.querySelectorAll('.btn-book-salon').forEach((btn) => {
    btn.addEventListener('click', () => {
      openAppointmentModal(btn.dataset.id, btn.dataset.name);
    });
  });
}

function renderInteractiveMap() {
  const mount = document.querySelector('#stores-map-mount');
  const detailsMount = document.querySelector('#selected-store-preview');
  if (!mount) return;

  const activeStore = stores.find((s) => s.id === activeStoreId) || stores[0];

  // Map representation with pins mapped by lat/lng
  // Mercator projection approximation for coordinates:
  // x% = ((lng + 180) / 360) * 100
  // y% = ((90 - lat) / 180) * 100
  mount.innerHTML = `
    <div class="world-map-svg-wrap">
      <svg viewBox="0 0 1000 500" style="width:100%; height:auto; opacity:0.25;" fill="currentColor">
        <!-- Stylized Minimal World Map SVG Outlines -->
        <path d="M150,120 Q180,80 220,90 Q280,110 300,160 Q270,220 220,240 Q160,220 140,160 Z" />
        <path d="M220,260 Q260,280 270,350 Q250,420 220,440 Q180,380 200,300 Z" />
        <path d="M460,110 Q520,90 560,120 Q540,180 480,180 Z" />
        <path d="M470,200 Q560,200 580,290 Q540,380 480,380 Q450,280 470,200 Z" />
        <path d="M600,100 Q750,90 850,150 Q800,260 700,260 Q620,180 600,100 Z" />
        <path d="M780,320 Q860,320 860,400 Q780,420 760,360 Z" />
      </svg>

      ${filteredStores
        .map((st) => {
          // Normalize coordinates to map percentage
          const leftPercent = Math.max(5, Math.min(95, ((st.lng + 140) / 280) * 100));
          const topPercent = Math.max(10, Math.min(90, ((65 - st.lat) / 95) * 100));
          const isActive = st.id === activeStoreId;

          return `
          <div class="map-pin ${isActive ? 'active' : ''}" 
               data-id="${st.id}" 
               style="left:${leftPercent}%; top:${topPercent}%;"
               title="${st.name}">
            <div class="map-pin-pulse" style="${isActive ? 'transform:scale(1.4); background:var(--color-primary);' : ''}"></div>
          </div>
        `;
        })
        .join('')}
    </div>
  `;

  // Pin clicks
  mount.querySelectorAll('.map-pin').forEach((pin) => {
    pin.addEventListener('click', () => {
      activeStoreId = pin.dataset.id;
      renderStoresList();
      renderInteractiveMap();

      // Scroll list to card
      const targetCard = document.querySelector(`.store-card[data-id="${activeStoreId}"]`);
      if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  if (detailsMount) {
    detailsMount.innerHTML = `
      <div style="border-top:1px solid var(--color-border); padding-top:16px; margin-top:16px;">
        <span style="font-size:11px; text-transform:uppercase; color:var(--color-accent); font-weight:700;">Selected Salon</span>
        <h4 class="font-display font-bold text-lg" style="margin-top:2px;">${activeStore.name}</h4>
        <p style="font-size:12px; color:var(--color-text-muted); margin-top:4px;">${activeStore.address}</p>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">
          ${activeStore.features.map((f) => `<span style="font-size:10px; background:var(--color-bg-secondary); padding:3px 8px; border-radius:3px;">${f}</span>`).join('')}
        </div>
      </div>
    `;
  }
}

function openAppointmentModal(storeId, storeName) {
  let modal = document.querySelector('.salon-booking-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay salon-booking-modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-dialog" style="max-width:520px; padding:var(--space-xl);">
      <button class="modal-close-btn">&times;</button>
      <span class="pdp-brand-tag">Private Salon Appointment</span>
      <h3 class="font-display font-bold text-xl" style="margin-block:4px 12px;">Reserve Personal Stylist</h3>
      <p class="text-xs" style="color:var(--color-text-muted); margin-bottom:18px;">
        Enjoy private dressing quarters, dedicated champagne tasting, and tailored archive curation at <strong>${storeName}</strong>.
      </p>

      <form id="salon-booking-form">
        <div class="form-grid-2" style="margin-bottom:12px;">
          <div class="form-group">
            <label class="form-label">Preferred Date</label>
            <input type="date" class="form-input" required value="${new Date().toISOString().split('T')[0]}" />
          </div>
          <div class="form-group">
            <label class="form-label">Preferred Time</label>
            <select class="form-select">
              <option>11:00 AM – Morning Salon</option>
              <option selected>02:30 PM – Afternoon Salon</option>
              <option>05:00 PM – Sunset Fitting</option>
              <option>07:30 PM – Evening Reception</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-bottom:12px;">
          <label class="form-label">Party Proportions</label>
          <select class="form-select">
            <option>Solo Consultation (1 Guest)</option>
            <option>Private Duo (2 Guests)</option>
            <option>Salon Entourage (3–4 Guests)</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom:20px;">
          <label class="form-label">Stylist Notes or Preferred Runway Collections</label>
          <input type="text" class="form-input" placeholder="e.g. Sculpted wool overcoats, evening silhouettes..." />
        </div>

        <button type="submit" class="btn-submit-primary" style="height:48px; font-size:12px; font-weight:700;">
          Confirm Private Salon Reservation
        </button>
      </form>
    </div>
  `;

  modal.classList.add('active');

  const close = modal.querySelector('.modal-close-btn');
  close.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  const form = modal.querySelector('#salon-booking-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    toastSystem.success(`Private Salon at ${storeName} confirmed! An invitation has been dispatched.`);
  });
}

// Auto init on stores page
if (document.querySelector('#stores-list-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initStoresPage());
  } else {
    initStoresPage();
  }
}
/**
 * KAYAN Luxury Fashion — Lookbook Interactive Controller
 */


function initLookbookPage() {
  renderLookbookSlides();
  initChapterFilters();
  initAmbientAudioToggle();
}

const lookbookData = [
  {
    chapter: 'monolith',
    title: 'Look 01 — Structural Cocoon & Obsidian Wool',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&auto=format&fit=crop&q=80',
    hotspot: { x: 45, y: 35, productId: 'kayan-w-01' }
  },
  {
    chapter: 'monolith',
    title: 'Look 02 — Raw Hem Tailored Overshirt & Wide Trousers',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    hotspot: { x: 50, y: 40, productId: 'kayan-m-01' }
  },
  {
    chapter: 'fluidity',
    title: 'Look 03 — Pleated Maxi Kimono & Mulberry Silk Drape',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&auto=format&fit=crop&q=80',
    hotspot: { x: 52, y: 45, productId: 'kayan-w-02' }
  },
  {
    chapter: 'fluidity',
    title: 'Look 04 — Heavy Linen Relaxed Chore Coat in Alabaster',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=1200&auto=format&fit=crop&q=80',
    hotspot: { x: 48, y: 38, productId: 'kayan-m-02' }
  },
  {
    chapter: 'solitude',
    title: 'Look 05 — Raw Silk Loungewear & Botanical Essence',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&auto=format&fit=crop&q=80',
    hotspot: { x: 46, y: 55, productId: 'kayan-w-05' }
  },
  {
    chapter: 'solitude',
    title: 'Look 06 — Tactile Living Ensemble & Terracotta Vessels',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&auto=format&fit=crop&q=80',
    hotspot: { x: 55, y: 60, productId: 'kayan-h-01' }
  }
];

function renderLookbookSlides(filterChapter = 'all') {
  const track = document.querySelector('#lookbook-track-mount');
  if (!track) return;

  const filtered = filterChapter === 'all'
    ? lookbookData
    : lookbookData.filter((l) => l.chapter === filterChapter);

  track.innerHTML = filtered
    .map((look) => {
      const prod = products.find((p) => p.id === look.hotspot.productId) || products[0];
      return `
      <div class="lookbook-slide">
        <img src="${look.image}" alt="${look.title}" class="lookbook-img" loading="lazy" />

        <!-- Interactive Hotspot -->
        <div class="lookbook-hotspot" style="left: ${look.hotspot.x}%; top: ${look.hotspot.y}%;">
          <div class="lookbook-card-popover">
            <div style="font-size:10px; text-transform:uppercase; color:var(--color-accent); font-weight:700;">Featured Piece</div>
            <div style="font-weight:700; font-size:12px; margin-block:3px;">${prod.name}</div>
            <div style="font-size:12px; font-weight:800; color:var(--color-text); margin-bottom:8px;">${i18n.formatPrice(prod.salePrice || prod.price)}</div>
            <a href="${resolveUrl(`pages/product.html?slug=${prod.slug}`)}" class="btn-submit-primary" style="display:block; text-align:center; height:30px; line-height:30px; font-size:10px; font-weight:700; text-decoration:none;">
              Inspect Silhouette
            </a>
          </div>
        </div>

        <!-- Caption Overlay -->
        <div style="position:absolute; bottom:20px; inset-inline-start:20px; color:#fff; text-shadow:0 2px 10px rgba(0,0,0,0.6); pointer-events:none;">
          <div style="font-size:11px; text-transform:uppercase; letter-spacing:0.1em; opacity:0.8;">Equinox Archive</div>
          <h3 class="font-display font-bold text-lg" style="margin-top:2px;">${look.title}</h3>
        </div>
      </div>
    `;
    })
    .join('');
}

function initChapterFilters() {
  document.querySelectorAll('.lookbook-chapter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lookbook-chapter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderLookbookSlides(btn.dataset.chapter);
    });
  });
}

function initAmbientAudioToggle() {
  const btn = document.querySelector('#btn-lookbook-audio');
  if (!btn) return;

  let isPlaying = false;
  btn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    btn.innerHTML = isPlaying
      ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Ambient Soundscape: Playing`
      : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Play Salon Soundscape`;
    toastSystem.info(isPlaying ? 'Ambient minimalist cello soundscape activated.' : 'Soundscape muted.');
  });
}

// Auto init on lookbook page
if (document.querySelector('#lookbook-track-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initLookbookPage());
  } else {
    initLookbookPage();
  }
}

  // Global window exposure for inline scripts, console inspection, and test runner
  window.KAYAN = {
    store,
    events,
    i18n,
    themeController,
    toastSystem,
    products,
    categories,
    stores,
    calculateCartTotals,
    calculateVolumeDiscount,
    evaluatePromoCode,
    convertCurrency,
    FREE_SHIPPING_THRESHOLD_USD,
    fuzzyMatch,
    debounce,
    bootstrapApp,
    initHomePage,
    initShopPage,
    initProductPage,
    initCartPage,
    initCheckoutPage,
    initWishlistPage,
    initAccountPage,
    initStoresPage,
    initLookbookPage
  };
  window.store = store;
  window.events = events;
  window.i18n = i18n;
  window.themeController = themeController;
  window.toastSystem = toastSystem;
  window.products = products;
  window.categories = categories;
  window.stores = stores;

})();
