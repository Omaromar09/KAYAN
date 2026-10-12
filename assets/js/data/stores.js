/**
 * KAYAN Luxury Fashion — Global Flagship Stores Data
 * 12+ physical ateliers with coordinates, hours, contact, and live status
 */

export const stores = [
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

export function isStoreOpen(store) {
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  return currentHour >= store.hoursRaw.open && currentHour < store.hoursRaw.close;
}
