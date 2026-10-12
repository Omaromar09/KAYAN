/**
 * KAYAN Luxury Fashion — Wishlist / Saved Archive Controller
 */

import { store } from '../core/store.js';
import { products } from '../data/products.js';
import { i18n } from '../core/i18n.js';
import { events } from '../core/events.js';
import { resolveUrl } from '../core/router-helpers.js';
import { toastSystem } from '../components/toast.js';

export function initWishlistPage() {
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
