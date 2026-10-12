/**
 * KAYAN Luxury Fashion — Quick View Modal Component
 * Renders rich product preview modal with gallery, swatches, size selector, and direct Add to Bag
 */

import { getProductById } from '../data/products.js';
import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { i18n } from '../core/i18n.js';
import { triggerFlyToCart } from './cart-drawer.js';

export function initQuickViewModal() {
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
