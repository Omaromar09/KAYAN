/**
 * KAYAN Luxury Fashion - Complete Products Catalog
 * 83 High-Fashion items across 5 departments with rich specifications
 */

export const products = [
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

export function getProductBySlug(slug) {
  return products.find(p => p.slug === slug) || null;
}

export function getProductById(id) {
  return products.find(p => p.id === id) || null;
}

export function getProductsByDepartment(dept) {
  if (!dept || dept === 'all') return products;
  return products.filter(p => p.department === dept);
}
