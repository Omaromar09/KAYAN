/**
 * KAYAN Luxury Fashion — Mini Cart Drawer Component
 * Slides in from side, manages quantities, promo codes, free shipping bar, and fly-to-cart animation
 */

import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { i18n } from '../core/i18n.js';
import { resolveUrl } from '../core/router-helpers.js';
import { products } from '../data/products.js';

export function renderCartDrawer() {
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

export function updateCartDrawerUI() {
  const drawer = document.querySelector('.cart-drawer');
  if (!drawer) return;

  const state = store.getState();
  const totals = store.getCartTotals();
  const items = state.cart.items;

  let shippingTextHtml = '';
  if (totals.hasFreeShipping) {
    shippingTextHtml = `<span data-i18n="cart.free_shipping_unlocked">${state.language === 'ar' ? 'تم تفعيل الشحن السريع المجاني' : 'Complimentary Express Delivery Unlocked'}</span>`;
  } else {
    shippingTextHtml = state.language === 'ar'
      ? `أضف مشتريات بقيمة <span class="highlight">${i18n.formatPrice(totals.freeShippingRemaining)}</span> للحصول على شحن مجاني`
      : `Add <span class="highlight">${i18n.formatPrice(totals.freeShippingRemaining)}</span> more for Complimentary Express Delivery`;
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
export function triggerFlyToCart(imgElement) {
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
