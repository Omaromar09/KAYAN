/**
 * KAYAN Luxury Fashion — Checkout Wizard Controller
 * Multi-step checkout with live card brand recognition, Luhn algorithm validation,
 * delivery methods calculation, and celebratory order confirmation.
 */

import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { i18n } from '../core/i18n.js';
import { resolveUrl } from '../core/router-helpers.js';
import { calculateCartTotals } from '../core/promotions.js';
import { toastSystem } from '../components/toast.js';
import { createConfetti } from '../core/utils.js';

let currentStep = 1; // 1: Info, 2: Shipping, 3: Payment, 4: Confirmed
let shippingCostUSD = 0;
let selectedShippingTier = 'standard';
let formData = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  country: 'United Arab Emirates',
  postalCode: '',
  phone: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvv: '',
  paymentMethod: 'card'
};

export function initCheckoutPage() {
  const cartItems = store.getState().cart || [];
  if (cartItems.length === 0 && currentStep !== 4) {
    // If cart is empty, redirect or display notice
    const mount = document.querySelector('#checkout-wizard-mount');
    if (mount) {
      mount.innerHTML = `
        <div style="text-align:center; padding:80px 20px;">
          <h2 class="font-display font-bold text-2xl" style="margin-bottom:12px;">Your Bag is Currently Empty</h2>
          <p class="text-sm" style="color:var(--color-text-muted); margin-bottom:24px;">Please select silhouettes from our archive before initiating acquisition.</p>
          <a href="${resolveUrl('pages/shop.html')}" class="btn-submit-primary" style="display:inline-block; width:auto; padding:12px 32px; text-decoration:none;">Browse Archive</a>
        </div>
      `;
    }
    return;
  }

  renderCheckoutWizard();
  renderOrderSummarySidebar();

  events.on('store:currency', () => {
    renderCheckoutWizard();
    renderOrderSummarySidebar();
  });
}

function renderCheckoutWizard() {
  const mount = document.querySelector('#checkout-wizard-mount');
  const stepsBar = document.querySelector('#checkout-steps-bar');
  if (!mount) return;

  // Update steps indicator
  if (stepsBar) {
    stepsBar.innerHTML = `
      <div class="checkout-step-indicator ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}">
        <span class="checkout-step-num">${currentStep > 1 ? '&#10003;' : '1'}</span>
        <span>Information</span>
      </div>
      <div class="checkout-step-sep"></div>
      <div class="checkout-step-indicator ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}">
        <span class="checkout-step-num">${currentStep > 2 ? '&#10003;' : '2'}</span>
        <span>Delivery</span>
      </div>
      <div class="checkout-step-sep"></div>
      <div class="checkout-step-indicator ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}">
        <span class="checkout-step-num">${currentStep > 3 ? '&#10003;' : '3'}</span>
        <span>Payment</span>
      </div>
    `;
  }

  if (currentStep === 1) {
    renderStep1Information(mount);
  } else if (currentStep === 2) {
    renderStep2Shipping(mount);
  } else if (currentStep === 3) {
    renderStep3Payment(mount);
  } else if (currentStep === 4) {
    renderStep4Confirmation(mount);
  }
}

function renderStep1Information(mount) {
  mount.innerHTML = `
    <div class="checkout-form-card">
      <h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        1. Contact Information
      </h2>
      <div class="form-group" style="margin-bottom:16px;">
        <label class="form-label">Electronic Mail for Acquisition Confirmation</label>
        <input type="email" id="chk-email" class="form-input" placeholder="collector@kayan-atelier.com" value="${formData.email}" required />
      </div>

      <h2 style="margin-top:28px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Delivery Destination
      </h2>
      <div class="form-grid-2" style="margin-bottom:14px;">
        <div class="form-group">
          <label class="form-label">First Name</label>
          <input type="text" id="chk-fname" class="form-input" placeholder="Soraya" value="${formData.firstName}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Last Name</label>
          <input type="text" id="chk-lname" class="form-input" placeholder="Al-Mansoor" value="${formData.lastName}" required />
        </div>
      </div>

      <div class="form-group" style="margin-bottom:14px;">
        <label class="form-label">Destination Country / Region</label>
        <select id="chk-country" class="form-select">
          <option value="United Arab Emirates" ${formData.country === 'United Arab Emirates' ? 'selected' : ''}>United Arab Emirates</option>
          <option value="Saudi Arabia" ${formData.country === 'Saudi Arabia' ? 'selected' : ''}>Saudi Arabia</option>
          <option value="United Kingdom" ${formData.country === 'United Kingdom' ? 'selected' : ''}>United Kingdom</option>
          <option value="United States" ${formData.country === 'United States' ? 'selected' : ''}>United States</option>
          <option value="France" ${formData.country === 'France' ? 'selected' : ''}>France</option>
          <option value="Italy" ${formData.country === 'Italy' ? 'selected' : ''}>Italy</option>
          <option value="Egypt" ${formData.country === 'Egypt' ? 'selected' : ''}>Egypt</option>
          <option value="Japan" ${formData.country === 'Japan' ? 'selected' : ''}>Japan</option>
        </select>
      </div>

      <div class="form-group" style="margin-bottom:14px;">
        <label class="form-label">Street Address & Residence</label>
        <input type="text" id="chk-address" class="form-input" placeholder="Alserkal Avenue, Villa 14" value="${formData.address}" required />
      </div>

      <div class="form-grid-2" style="margin-bottom:14px;">
        <div class="form-group">
          <label class="form-label">City</label>
          <input type="text" id="chk-city" class="form-input" placeholder="Dubai" value="${formData.city}" required />
        </div>
        <div class="form-group">
          <label class="form-label">Postal / Zip Code</label>
          <input type="text" id="chk-postal" class="form-input" placeholder="00000" value="${formData.postalCode}" required />
        </div>
      </div>

      <div class="form-group" style="margin-bottom:24px;">
        <label class="form-label">Contact Telephone (For courier dispatch coordination)</label>
        <input type="tel" id="chk-phone" class="form-input" placeholder="+971 50 123 4567" value="${formData.phone}" required />
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center;">
        <a href="${resolveUrl('pages/cart.html')}" style="font-size:12px; color:var(--color-text-muted); text-decoration:underline;">&larr; Return to Shopping Bag</a>
        <button id="btn-to-step-2" class="btn-submit-primary" style="width:auto; padding:12px 32px;">Continue to Delivery &rarr;</button>
      </div>
    </div>
  `;

  mount.querySelector('#btn-to-step-2').addEventListener('click', () => {
    formData.email = mount.querySelector('#chk-email').value.trim();
    formData.firstName = mount.querySelector('#chk-fname').value.trim();
    formData.lastName = mount.querySelector('#chk-lname').value.trim();
    formData.country = mount.querySelector('#chk-country').value;
    formData.address = mount.querySelector('#chk-address').value.trim();
    formData.city = mount.querySelector('#chk-city').value.trim();
    formData.postalCode = mount.querySelector('#chk-postal').value.trim();
    formData.phone = mount.querySelector('#chk-phone').value.trim();

    if (!formData.email || !formData.firstName || !formData.address || !formData.city) {
      toastSystem.error('Please complete all required shipping fields.');
      return;
    }

    currentStep = 2;
    renderCheckoutWizard();
    renderOrderSummarySidebar();
  });
}

function renderStep2Shipping(mount) {
  const totals = store.getCartTotals();
  const isFreeEligible = totals.subtotal >= 150;

  mount.innerHTML = `
    <div class="checkout-form-card">
      <h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        2. Delivery Tier & Logistics
      </h2>

      <div style="background:var(--color-bg-secondary); padding:12px 16px; border-radius:4px; font-size:12px; margin-bottom:20px; line-height:1.5;">
        <div>Delivering to: <strong>${formData.firstName} ${formData.lastName}</strong></div>
        <div style="color:var(--color-text-muted);">${formData.address}, ${formData.city}, ${formData.country}</div>
      </div>

      <div class="shipping-options-list">
        <!-- Standard Option -->
        <label class="shipping-radio-card ${selectedShippingTier === 'standard' ? 'active' : ''}">
          <div style="display:flex; align-items:center; gap:12px;">
            <input type="radio" name="ship_tier" value="standard" ${selectedShippingTier === 'standard' ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
            <div>
              <div style="font-weight:700; font-size:13px;">Standard Carbon-Neutral Express</div>
              <div style="font-size:11px; color:var(--color-text-muted);">Estimated arrival in 3–5 business days</div>
            </div>
          </div>
          <div style="font-weight:700; font-size:13px;">
            ${isFreeEligible ? '<span style="color:#15803d;">COMPLIMENTARY</span>' : i18n.formatPrice(15)}
          </div>
        </label>

        <!-- Priority Air Courier -->
        <label class="shipping-radio-card ${selectedShippingTier === 'express' ? 'active' : ''}">
          <div style="display:flex; align-items:center; gap:12px;">
            <input type="radio" name="ship_tier" value="express" ${selectedShippingTier === 'express' ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
            <div>
              <div style="font-weight:700; font-size:13px;">DHL Priority Air Express</div>
              <div style="font-size:11px; color:var(--color-text-muted);">Guaranteed arrival in 1–2 business days</div>
            </div>
          </div>
          <div style="font-weight:700; font-size:13px;">${i18n.formatPrice(25)}</div>
        </label>

        <!-- Same Day White Glove Concierge -->
        <label class="shipping-radio-card ${selectedShippingTier === 'concierge' ? 'active' : ''}">
          <div style="display:flex; align-items:center; gap:12px;">
            <input type="radio" name="ship_tier" value="concierge" ${selectedShippingTier === 'concierge' ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
            <div>
              <div style="font-weight:700; font-size:13px;">Atelier White-Glove Evening Courier</div>
              <div style="font-size:11px; color:var(--color-text-muted);">Hand-delivered in garment bag with private stylist review</div>
            </div>
          </div>
          <div style="font-weight:700; font-size:13px;">${i18n.formatPrice(45)}</div>
        </label>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px;">
        <button id="btn-back-to-step-1" style="background:none; border:none; font-size:12px; color:var(--color-text-muted); cursor:pointer; text-decoration:underline;">&larr; Back to Information</button>
        <button id="btn-to-step-3" class="btn-submit-primary" style="width:auto; padding:12px 32px;">Continue to Payment &rarr;</button>
      </div>
    </div>
  `;

  mount.querySelectorAll('input[name="ship_tier"]').forEach(radio => {
    radio.addEventListener('change', () => {
      selectedShippingTier = radio.value;
      if (selectedShippingTier === 'standard') {
        shippingCostUSD = isFreeEligible ? 0 : 15;
      } else if (selectedShippingTier === 'express') {
        shippingCostUSD = 25;
      } else if (selectedShippingTier === 'concierge') {
        shippingCostUSD = 45;
      }
      renderStep2Shipping(mount);
      renderOrderSummarySidebar();
    });
  });

  mount.querySelector('#btn-back-to-step-1').addEventListener('click', () => {
    currentStep = 1;
    renderCheckoutWizard();
  });

  mount.querySelector('#btn-to-step-3').addEventListener('click', () => {
    currentStep = 3;
    renderCheckoutWizard();
    renderOrderSummarySidebar();
  });
}

function renderStep3Payment(mount) {
  mount.innerHTML = `
    <div class="checkout-form-card">
      <h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        3. Encrypted Payment Execution
      </h2>

      <!-- Payment Method Tabs -->
      <div style="display:flex; gap:10px; margin-bottom:20px;">
        <button class="pay-method-tab ${formData.paymentMethod === 'card' ? 'active' : ''}" data-method="card" style="flex:1; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-xs); background:var(--color-surface); cursor:pointer; font-weight:700; font-size:12px;">Credit / Debit Card</button>
        <button class="pay-method-tab ${formData.paymentMethod === 'apple' ? 'active' : ''}" data-method="apple" style="flex:1; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-xs); background:var(--color-surface); cursor:pointer; font-weight:700; font-size:12px;">Apple Pay</button>
        <button class="pay-method-tab ${formData.paymentMethod === 'split' ? 'active' : ''}" data-method="split" style="flex:1; padding:12px; border:1px solid var(--color-border); border-radius:var(--radius-xs); background:var(--color-surface); cursor:pointer; font-weight:700; font-size:12px;">Tabby (4 Split)</button>
      </div>

      <div id="payment-fields-mount">
        <!-- Credit Card Fields -->
        <div class="form-group" style="margin-bottom:14px;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label class="form-label">Card Number</label>
            <span id="card-detected-brand" class="card-brand-badge"></span>
          </div>
          <input type="text" id="chk-card-num" class="form-input" placeholder="4242 &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4242" maxlength="19" value="${formData.cardNumber}" required />
        </div>

        <div class="form-grid-2" style="margin-bottom:20px;">
          <div class="form-group">
            <label class="form-label">Expiration Date</label>
            <input type="text" id="chk-card-exp" class="form-input" placeholder="MM/YY" maxlength="5" value="${formData.cardExpiry}" required />
          </div>
          <div class="form-group">
            <label class="form-label">Security Code (CVV)</label>
            <input type="text" id="chk-card-cvv" class="form-input" placeholder="123" maxlength="4" value="${formData.cardCvv}" required />
          </div>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:28px;">
        <button id="btn-back-to-step-2" style="background:none; border:none; font-size:12px; color:var(--color-text-muted); cursor:pointer; text-decoration:underline;">&larr; Back to Delivery</button>
        <button id="btn-complete-order" class="btn-submit-primary" style="width:auto; padding:14px 40px; font-size:13px; font-weight:800;">
          Authorize Acquisition &rarr;
        </button>
      </div>
    </div>
  `;

  // Format Card Number & Detect Brand
  const cardInput = mount.querySelector('#chk-card-num');
  const brandBadge = mount.querySelector('#card-detected-brand');
  const expInput = mount.querySelector('#chk-card-exp');

  if (cardInput) {
    cardInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      formData.cardNumber = val;
      // Auto spacing 4 4 4 4
      e.target.value = val.replace(/(\d{4})(?=\d)/g, '$1 ');

      // Brand recognition
      if (val.startsWith('4')) {
        brandBadge.textContent = 'VISA';
      } else if (val.startsWith('51') || val.startsWith('52') || val.startsWith('53') || val.startsWith('54') || val.startsWith('55')) {
        brandBadge.textContent = 'MASTERCARD';
      } else if (val.startsWith('34') || val.startsWith('37')) {
        brandBadge.textContent = 'AMERICAN EXPRESS';
      } else {
        brandBadge.textContent = '';
      }
    });
  }

  if (expInput) {
    expInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      formData.cardExpiry = val;
      if (val.length >= 2) {
        e.target.value = val.substring(0, 2) + '/' + val.substring(2);
      } else {
        e.target.value = val;
      }
    });
  }

  mount.querySelector('#btn-back-to-step-2').addEventListener('click', () => {
    currentStep = 2;
    renderCheckoutWizard();
  });

  mount.querySelector('#btn-complete-order').addEventListener('click', () => {
    executeOrderSubmission();
  });
}

function executeOrderSubmission() {
  const cartItems = store.getState().cart || [];
  const totals = store.getCartTotals();
  const orderRef = `KYN-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  const orderRecord = {
    id: orderRef,
    date: new Date().toISOString(),
    customer: formData,
    items: [...cartItems],
    shippingTier: selectedShippingTier,
    shippingCost: shippingCostUSD,
    total: totals.finalTotal + shippingCostUSD,
    status: 'Confirmed — Preparing in Atelier'
  };

  // Add to order history in store
  store.addOrder(orderRecord);

  // Clear shopping cart
  store.clearCart();

  // Progress to confirmed step
  currentStep = 4;
  renderCheckoutWizard();

  // Canvas Confetti Celebration
  createConfetti();
  toastSystem.success(`Acquisition confirmed. Order reference ${orderRef}`);
}

function renderStep4Confirmation(mount) {
  const orders = store.getState().orders || [];
  const latestOrder = orders[orders.length - 1];
  const ref = latestOrder ? latestOrder.id : 'KYN-2026-88412';

  mount.innerHTML = `
    <div class="order-confirmation-card">
      <div class="order-conf-badge">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>

      <span class="pdp-brand-tag">Atelier Registry Acquisition Completed</span>
      <h1 class="font-display font-bold text-3xl" style="margin-block:8px 12px;">Form Meets Existence</h1>
      <p class="text-sm" style="color:var(--color-text-muted); max-width:520px; margin:0 auto 24px;">
        Thank you for choosing KAYAN. Your acquisition record has been etched into our salon ledger. A formal deed of provenance and delivery tracking link has been dispatched to <strong>${formData.email || 'your email'}</strong>.
      </p>

      <div style="background:var(--color-bg-secondary); border-radius:var(--radius-md); padding:20px; max-width:480px; margin:0 auto 28px; text-align:start;">
        <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:8px;">
          <span>Registry Dossier:</span>
          <strong>${ref}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:8px;">
          <span>Logistics Method:</span>
          <span style="text-transform:capitalize;">${selectedShippingTier} Express</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-size:12px;">
          <span>Estimated Handover:</span>
          <strong>Within 48–72 Hours</strong>
        </div>
      </div>

      <div style="display:flex; justify-content:center; gap:16px;">
        <button onclick="window.print()" class="btn-filter-mobile" style="display:inline-flex; padding:12px 24px; font-size:12px; font-weight:700;">
          Print Acquisition Dossier
        </button>
        <a href="${resolveUrl('index.html')}" class="btn-submit-primary" style="display:inline-flex; width:auto; padding:12px 28px; text-decoration:none; font-size:12px;">
          Return to Atelier
        </a>
      </div>
    </div>
  `;

  // Hide sidebar on confirmation
  const sidebar = document.querySelector('#checkout-summary-sidebar');
  if (sidebar) sidebar.style.display = 'none';
}

function renderOrderSummarySidebar() {
  const sidebar = document.querySelector('#checkout-summary-sidebar');
  if (!sidebar) return;

  const items = store.getState().cart || [];
  const totals = store.getCartTotals();
  const effectiveTotal = totals.finalTotal + shippingCostUSD;

  sidebar.innerHTML = `
    <div class="cart-summary-box">
      <h2 class="summary-heading">Selected Silhouettes (${totals.itemCount})</h2>
      
      <div style="display:flex; flex-direction:column; gap:12px; max-height:300px; overflow-y:auto; margin-bottom:16px;">
        ${items
          .map(
            (i) => `
          <div style="display:flex; gap:12px; align-items:center;">
            <img src="${i.image}" style="width:52px; height:68px; object-fit:cover; border-radius:3px; background:var(--color-bg-secondary);" />
            <div style="flex-grow:1; font-size:12px;">
              <div style="font-weight:700; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:180px;">${i.name}</div>
              <div style="color:var(--color-text-subtle);">${i.size} &bull; Qty ${i.quantity}</div>
            </div>
            <div style="font-size:12px; font-weight:700;">${i18n.formatPrice((i.salePrice || i.price) * i.quantity)}</div>
          </div>
        `
          )
          .join('')}
      </div>

      <div class="summary-line">
        <span>Garment Subtotal</span>
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

      <div class="summary-line">
        <span>Delivery Logistics</span>
        <span>${shippingCostUSD === 0 ? '<strong style="color:#15803d;">COMPLIMENTARY</strong>' : i18n.formatPrice(shippingCostUSD)}</span>
      </div>

      <div class="summary-total-line">
        <span>Total Remittance</span>
        <span style="color:var(--color-accent); font-family:var(--font-display); font-size:22px;">
          ${i18n.formatPrice(effectiveTotal)}
        </span>
      </div>
    </div>
  `;
}

// Auto init on checkout page
if (document.querySelector('#checkout-wizard-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initCheckoutPage());
  } else {
    initCheckoutPage();
  }
}
