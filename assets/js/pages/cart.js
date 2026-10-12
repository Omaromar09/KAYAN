/**
 * KAYAN Luxury Fashion — Full Cart Page Controller
 * Synchronized with global reactive store, live volume discounts, promo codes,
 * and currency conversions.
 */

import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { i18n } from '../core/i18n.js';
import { resolveUrl } from '../core/router-helpers.js';
import { calculateCartTotals, evaluatePromoCode } from '../core/promotions.js';
import { toastSystem } from '../components/toast.js';
import { products } from '../data/products.js';
import { createProductCardHtml, bindProductCardEvents } from '../components/product-card.js';

let appliedPromoCode = null;
let includeGiftWrap = false;

export function initCartPage() {
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
