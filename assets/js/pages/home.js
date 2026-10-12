/**
 * KAYAN Luxury Fashion — Flagship Homepage Script
 * Coordinates hero slides, WebGL silk canvas, carousels, editorial story, and UGC lightbox
 */

import { products } from '../data/products.js';
import { ugcPosts } from '../data/reviews.js';
import { createProductCardHtml, bindProductCardEvents } from '../components/product-card.js';
import { CustomCarousel } from '../components/carousel.js';
import { initCountdown } from '../components/countdown.js';
import { initHeroCanvas } from '../animations/hero.js';
import { animateSplitText } from '../animations/text-split.js';
import { init3DTilt } from '../animations/tilt.js';
import { initMarquees } from '../animations/marquee.js';
import { events } from '../core/events.js';
import { resolveUrl } from '../core/router-helpers.js';
import { store } from '../core/store.js';

export function initHomePage() {
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
