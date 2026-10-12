# KAYAN Atelier (كَيَان) — Architectural Luxury Fashion E-Commerce

> *"Form Meets Existence" &mdash; الجوهر يتجلّى في الهيئة*

A flagship, production-grade, multi-page luxury fashion e-commerce portfolio showpiece. Handcrafted with semantic HTML5, modern CSS3 custom properties, and vanilla JavaScript (ES modules) with **zero build step required**. Powered by buttery-smooth 60fps animations via GSAP and Lenis.

---

## 1. Brand Identity & Creative Direction

- **Brand Name:** **KAYAN (كَيَان)** &mdash; An ancient Arabic concept signifying *essence*, *presence*, *structure*, and *pure form*.
- **Tagline:** *Form Meets Existence* / *الجوهر يتجلّى في الهيئة*
- **Visual Direction:** Modern Editorial Luxe Street. Monolithic typography, tactile grain overlays, generous whitespace, architectural proportion, and fluid easing curves.
- **Color System (Tokens):**
  - **Raw Alabaster (`#FAF9F5`)**: Primary light background reflecting unbleached organic linen.
  - **Deep Obsidian (`#0F0F10`)**: Noble high-contrast ink reflecting tailored basalt wool.
  - **Terracotta Bronze (`#C98A4C`)**: Warm mineral accent drawn from ancient desert kilns.
  - **Warm Stone (`#E5E2DC`)**: Soft neutral tactile framing for surfaces and borders.
- **Typography:**
  - Display: `Playfair Display` & `Syne`
  - Body & Microcopy: `Plus Jakarta Sans`
  - Arabic Display & Reading: `Tajawal` & `Cairo` (full native bilingual typography)
- **Noble Material Commitments:**
  - 100% Giza 87 Extra-Long Staple Egyptian Cotton
  - Mongolian Traceable Cashmere
  - Biella Double-Faced Virgin Merino Wool
  - Undyed Mulberry Raw Silk

---

## 2. Technical Stack & Architecture

- **Zero Build Step:** Runs natively by opening `index.html` directly or serving via any static web server (e.g. `npx serve`, Live Server, Python `http.server`).
- **Modern Vanilla JavaScript (ES Modules):** Clean modular separation across `core/`, `components/`, `animations/`, `data/`, and `pages/`.
- **CSS Architecture:**
  - 3-Layer Design Token System (`assets/css/tokens.css`): Primitive &rarr; Semantic &rarr; Component tokens.
  - Fluid clamp typography (`clamp(1.5rem, 4vw, 3.2rem)`).
  - Modern layout: CSS Grid, Flexbox, logical properties (`padding-inline`, `margin-block`), `:has()`, `backdrop-filter`.
  - True bidirectional internationalization: instant English (LTR) &harr; Arabic (RTL) mirroring via `assets/css/rtl.css`.
  - Dark / Light Theme switching with View Transitions ripple where supported and persistent `localStorage` storage.
- **Motion & Physics Engine (CDN):**
  - **GSAP 3.12.5 & ScrollTrigger:** Scroll-driven reveals, hero textile animations, and page wipes.
  - **Lenis 1.0.45:** Kinetic smooth scrolling normalized across all operating systems.
  - Handwritten Custom Micro-interactions: Custom trailing cursor, 3D card tilt, magnetic buttons, and canvas particle confetti.

---

## 3. Comprehensive Page Directory

| File | Page Purpose & Key Features |
| :--- | :--- |
| [`index.html`](file:///c:/Users/dell/Desktop/kayan/index.html) | **Flagship Homepage:** 18 curated editorial sections including Onboarding Panels, Undulating Silk Canvas Hero, Equinox Archive Promo, Department Grids, Quick Buy Carousels, Interactive Lookbook Hotspots, Kayan Circle VIP Banner, Customer Reviews, Press Quotations, and Instagram UGC Lightbox. |
| [`pages/shop.html`](file:///c:/Users/dell/Desktop/kayan/pages/shop.html) | **Product Listing Page (PLP):** Real-time filtering by 5 departments (Women, Men, Kids, Beauty, Home), price slider, size chips, sort selector, dynamic active filter tags, column density switches (2, 3, 4 cols), and "Recently Viewed" drawer. |
| [`pages/product.html`](file:///c:/Users/dell/Desktop/kayan/pages/product.html) | **Product Detail Page (PDP):** Dual-column layout with high-res zoom magnifier, multi-angle thumbnails, interactive color swatches, stock badges ("Only 2 Left"), Size Guide Calculator modal, quantity stepper, morphing "Add to Bag", delivery countdown timer, information accordions, customer reviews breakdown, and "Complete the Look" recommendations. |
| [`pages/cart.html`](file:///c:/Users/dell/Desktop/kayan/pages/cart.html) | **Curated Shopping Bag:** Free delivery progress bar ($150 threshold), Equinox Multi-Piece volume discount banner, full line-items table with quantity steppers and "Move to Saved Archive", gift wrapping checkbox, promo code input, and order breakdown. |
| [`pages/checkout.html`](file:///c:/Users/dell/Desktop/kayan/pages/checkout.html) | **Encrypted Checkout Wizard:** Multi-step wizard (1. Information &rarr; 2. Delivery Tiers &rarr; 3. Payment with live card brand detection and Luhn algorithm check &rarr; 4. Celebratory order confirmation receipt with celebratory canvas confetti). |
| [`pages/wishlist.html`](file:///c:/Users/dell/Desktop/kayan/pages/wishlist.html) | **Saved Archive:** Grid of wishlisted items with "Move to Shopping Bag" action, remove action, and "Share Private Archive" clipboard copier. |
| [`pages/account.html`](file:///c:/Users/dell/Desktop/kayan/pages/account.html) | **Collector Portal & Kayan Circle:** Member tier progress ring (Obsidian Tier / 1,840 pts), order history tracking with live fulfillment status, profile editor, fit preferences dossier, and Circle VIP privileges. |
| [`pages/stores.html`](file:///c:/Users/dell/Desktop/kayan/pages/stores.html) | **Global Flagship Locator:** 12 international ateliers (Dubai, Riyadh, London, Paris, Milan, NY, Tokyo, Cairo), real-time "Open Now" calculation, SVG world map with synced coordinate pins, and Private Salon Booking modal. |
| [`pages/lookbook.html`](file:///c:/Users/dell/Desktop/kayan/pages/lookbook.html) | **Editorial Visual Campaign:** Horizontal scrolling track, chapter filters, interactive shoppable hotspots with product tags, and ambient cello soundscape toggle. |
| [`pages/about.html`](file:///c:/Users/dell/Desktop/kayan/pages/about.html) | **Manifesto & Heritage:** Brand philosophy, noble fiber provenance metrics (100% traceable, 0% synthetics), and historical milestone timeline. |
| [`pages/contact.html`](file:///c:/Users/dell/Desktop/kayan/pages/contact.html) | **Client Concierge:** Validated inquiry form, direct WhatsApp/phone concierge desks, and flagship consultation details. |
| [`pages/faq.html`](file:///c:/Users/dell/Desktop/kayan/pages/faq.html) | **Client Services FAQ:** Real-time searchable FAQ with smooth accordion animations covering delivery thresholds, doorstep returns, sizing, and garment care. |
| [`pages/gift-cards.html`](file:///c:/Users/dell/Desktop/kayan/pages/gift-cards.html) | **Bespoke Gift Cards:** 3D tilt preview with Obsidian/Alabaster/Terracotta skins, denomination selectors ($100–$1,000), personalized message inputs, and direct bag addition. |
| [`pages/404.html`](file:///c:/Users/dell/Desktop/kayan/pages/404.html) | **Poetic 404 Recovery:** Architectural error state with clear recovery links to the ready-to-wear archive. |
| [`pages/tests.html`](file:///c:/Users/dell/Desktop/kayan/pages/tests.html) | **Automated In-Browser Test Suite:** Visual assertion runner executing 25+ automated checks on pricing calculations, volume discounts, promo codes, currency rates, and Levenshtein fuzzy search. |

---

## 4. Pure Mathematical & Logic Engines

All pricing, promo codes, and currency computations are isolated into pure, testable ES modules:

1. **Equinox Multi-Piece Volume Discounts:**
   - 2 items acquired &rarr; **20% automatic discount**
   - 3+ items acquired &rarr; **25% automatic discount**
2. **Promotional Privilege Codes:**
   - `KAYAN15`: 15% discount for maiden acquisition.
   - `CIRCLE20`: 20% discount on orders exceeding $100.
   - `FREESHIP`: Complimentary global courier regardless of subtotal.
   - `EQUINOX30`: 30% discount on orders exceeding $250.
3. **Delivery Logistics Threshold:**
   - Orders &ge; $150 &rarr; **Complimentary Express Courier ($0)**
   - Orders < $150 &rarr; **Standard Courier ($15)**
4. **Multi-Currency Converter:**
   - Supported currencies: `USD` ($), `AED` (AED), `EUR` (€), `SAR` (SAR), `EGP` (EGP).
   - Formatted via native `Intl.NumberFormat` with RTL numeral support.
5. **Search & Discovery Engine:**
   - Fuzzy Levenshtein token matching for typo tolerance (e.g. "cocon" &rarr; "cocoon").
   - Voice search integration via Web Speech API with fallback.

---

## 5. Verification & Test Suite

Open [`pages/tests.html`](file:///c:/Users/dell/Desktop/kayan/pages/tests.html) in your browser to inspect the automated visual assertion runner. It validates:
- 4/4 Volume discount tier calculations
- 5/5 Promo coupon evaluation rules & edge cases
- 3/3 Free shipping threshold progressions
- 3/3 Multi-currency mathematical conversions
- 4/4 Fuzzy search, typos, and department taxonomy consistency
- 1/1 Catalog integrity: All 83 items present with valid imagery and attributes

---

## 6. How to Run the Project

No compilation, Node.js packages, or build processes are necessary.

1. **Directly in Browser:**
   Double-click [`index.html`](file:///c:/Users/dell/Desktop/kayan/index.html) in Windows File Explorer or drag it into any modern web browser (Chrome, Edge, Safari, Firefox).
2. **Via Local Static Server (Recommended):**
   ```bash
   cd c:\Users\dell\Desktop\kayan
   npx serve -p 3000
   # or
   python -m http.server 3000
   ```
   Open `http://localhost:3000` to experience buttery 60fps page transitions and smooth scrolling.

---

*Designed and crafted with obsessive attention to motion, typography, and architectural proportion.*
