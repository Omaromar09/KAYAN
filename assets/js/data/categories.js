/**
 * KAYAN Luxury Fashion — Categories Architecture
 * Complete taxonomy for 5 departments: Women, Men, Kids, Beauty, Home
 */

export const categories = {
  women: {
    id: 'women',
    name: 'Women',
    nameAr: 'النساء',
    featuredImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80',
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
    featuredImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80',
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
