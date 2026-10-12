/**
 * KAYAN Luxury Fashion — Lookbook Interactive Controller
 */

import { products } from '../data/products.js';
import { i18n } from '../core/i18n.js';
import { resolveUrl } from '../core/router-helpers.js';
import { toastSystem } from '../components/toast.js';

export function initLookbookPage() {
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
