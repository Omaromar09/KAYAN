/**
 * KAYAN Luxury Fashion — Customer Portal & Kayan Circle Controller
 */

import { store } from '../core/store.js';
import { i18n } from '../core/i18n.js';
import { events } from '../core/events.js';
import { resolveUrl } from '../core/router-helpers.js';
import { toastSystem } from '../components/toast.js';

export function initAccountPage() {
  renderAccountHero();
  renderOrdersPanel();
  renderProfilePanel();
  renderFitPanel();
  initTabSwitchers();

  events.on('store:currency', () => {
    renderOrdersPanel();
  });
}

function renderAccountHero() {
  const mount = document.querySelector('#account-hero-mount');
  if (!mount) return;

  const state = store.getState();
  const userName = state.user ? state.user.name : 'Soraya Al-Mansoor';
  const points = 1840;
  const targetPoints = 2500;
  const progressPercent = Math.round((points / targetPoints) * 100);

  mount.innerHTML = `
    <div class="account-hero-card">
      <div class="account-avatar-ring">S</div>
      <div>
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
          <h1 class="font-display font-bold text-2xl">${userName}</h1>
          <span class="tier-badge-pill">Obsidian Tier</span>
        </div>
        <div style="font-size:12px; color:var(--color-text-muted);">
          KAYAN Circle Collector ID: <strong>KYN-CIRC-9021</strong> &bull; Member since 2024
        </div>
        <div style="margin-top:12px; max-width:380px;">
          <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px;">
            <span>Tier Status: <strong>${points} pts</strong></span>
            <span>Target: <strong>${targetPoints} pts</strong> (Black Monolith)</span>
          </div>
          <div style="height:6px; background:var(--color-border); border-radius:var(--radius-full); overflow:hidden;">
            <div style="height:100%; width:${progressPercent}%; background:var(--color-accent); border-radius:var(--radius-full);"></div>
          </div>
        </div>
      </div>
      <div>
        <button id="btn-portal-logout" class="btn-filter-mobile" style="display:inline-flex; padding:8px 16px; font-size:11px; font-weight:700;">
          Log Out
        </button>
      </div>
    </div>
  `;

  mount.querySelector('#btn-portal-logout').addEventListener('click', () => {
    toastSystem.info('You have gracefully signed out of your atelier account.');
  });
}

function renderOrdersPanel() {
  const mount = document.querySelector('#panel-orders-mount');
  if (!mount) return;

  const userOrders = store.getState().orders || [];

  // Default orders if none made yet
  const displayOrders = userOrders.length > 0 ? userOrders : [
    {
      id: 'KYN-2026-77341',
      date: '2026-09-18T14:22:00Z',
      status: 'Delivered by Private Courier',
      shippingTier: 'concierge',
      total: 756,
      items: [
        {
          name: 'Sculpted Wool Cocoon Coat',
          size: 'M',
          color: 'Obsidian',
          quantity: 1,
          price: 336,
          image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=300&auto=format&fit=crop&q=80'
        },
        {
          name: 'Architectural Pleated Maxi Dress',
          size: 'S',
          color: 'Obsidian',
          quantity: 1,
          price: 360,
          image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&auto=format&fit=crop&q=80'
        }
      ]
    }
  ];

  mount.innerHTML = displayOrders
    .map(
      (ord) => `
    <div class="order-history-card">
      <div class="order-history-header">
        <div>
          <div>Order Dossier: <strong>${ord.id}</strong></div>
          <div style="color:var(--color-text-subtle); margin-top:2px;">Acquired on ${new Date(ord.date).toLocaleDateString()}</div>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span class="order-status-pill">${ord.status}</span>
          <strong style="font-size:14px;">${i18n.formatPrice(ord.total)}</strong>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:12px;">
        ${(ord.items || [])
          .map(
            (i) => `
          <div style="display:flex; align-items:center; gap:16px;">
            <img src="${i.image}" style="width:52px; height:68px; object-fit:cover; border-radius:3px; background:var(--color-bg-secondary);" />
            <div style="flex-grow:1; font-size:12px;">
              <div style="font-weight:700;">${i.name}</div>
              <div style="color:var(--color-text-subtle);">Size: ${i.size} &bull; Color: ${i.color} &bull; Qty: ${i.quantity}</div>
            </div>
            <div style="font-size:12px; font-weight:700;">${i18n.formatPrice(i.price * i.quantity)}</div>
          </div>
        `
          )
          .join('')}
      </div>

      <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:16px; padding-top:12px; border-top:1px solid var(--color-border-subtle);">
        <button class="btn-filter-mobile btn-track-dossier" style="display:inline-flex; padding:6px 14px; font-size:11px;">Track Shipment</button>
        <button class="btn-filter-mobile btn-invoice-dossier" style="display:inline-flex; padding:6px 14px; font-size:11px;">View Authenticity Certificate</button>
      </div>
    </div>
  `
    )
    .join('');

  mount.querySelectorAll('.btn-track-dossier').forEach((b) => {
    b.addEventListener('click', () => {
      toastSystem.info('Tracking dossier active. In transit via carbon-neutral express courier.');
    });
  });

  mount.querySelectorAll('.btn-invoice-dossier').forEach((b) => {
    b.addEventListener('click', () => {
      window.print();
    });
  });
}

function renderProfilePanel() {
  const mount = document.querySelector('#panel-profile-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="checkout-form-card" style="max-width:720px;">
      <h2>Curator Details & Delivery Coordinates</h2>
      <div class="form-grid-2" style="margin-bottom:16px;">
        <div class="form-group">
          <label class="form-label">First Name</label>
          <input type="text" id="prof-fname" class="form-input" value="Soraya" />
        </div>
        <div class="form-group">
          <label class="form-label">Last Name</label>
          <input type="text" id="prof-lname" class="form-input" value="Al-Mansoor" />
        </div>
      </div>
      <div class="form-group" style="margin-bottom:16px;">
        <label class="form-label">Primary Electronic Mail</label>
        <input type="email" id="prof-email" class="form-input" value="soraya.atelier@gmail.com" />
      </div>
      <div class="form-group" style="margin-bottom:16px;">
        <label class="form-label">Telephone</label>
        <input type="tel" id="prof-phone" class="form-input" value="+971 50 882 1944" />
      </div>
      <div class="form-group" style="margin-bottom:24px;">
        <label class="form-label">Default Delivery Destination</label>
        <input type="text" id="prof-addr" class="form-input" value="Fashion Avenue, Downtown Dubai, UAE" />
      </div>

      <button id="btn-save-profile" class="btn-submit-primary" style="width:auto; padding:12px 32px;">
        Save Atelier Credentials
      </button>
    </div>
  `;

  mount.querySelector('#btn-save-profile').addEventListener('click', () => {
    toastSystem.success('Profile credentials successfully updated.');
  });
}

function renderFitPanel() {
  const mount = document.querySelector('#panel-fit-mount');
  if (!mount) return;

  mount.innerHTML = `
    <div class="checkout-form-card" style="max-width:720px;">
      <h2>Tailored Silhouette Preferences</h2>
      <p class="text-xs" style="color:var(--color-text-muted); margin-bottom:20px;">
        We reference these proportions when you browse the archive to highlight your ideal cut and size availability.
      </p>

      <div class="form-grid-2" style="margin-bottom:16px;">
        <div class="form-group">
          <label class="form-label">Outerwear & Coats</label>
          <select class="form-select">
            <option>Size S (Oversized Drape)</option>
            <option selected>Size M (Architectural)</option>
            <option>Size L (Generous Boxy)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Trousers & Skirts</label>
          <select class="form-select">
            <option selected>Size S (High-Rise 26)</option>
            <option>Size M (Mid-Rise 28)</option>
          </select>
        </div>
      </div>

      <div class="form-group" style="margin-bottom:24px;">
        <label class="form-label">Footwear & Boots</label>
        <select class="form-select">
          <option>EU 37 / UK 4</option>
          <option selected>EU 38 / UK 5</option>
          <option>EU 39 / UK 6</option>
        </select>
      </div>

      <button id="btn-save-fit" class="btn-submit-primary" style="width:auto; padding:12px 32px;">
        Save Fit Dossier
      </button>
    </div>
  `;

  mount.querySelector('#btn-save-fit').addEventListener('click', () => {
    toastSystem.success('Fit preferences updated.');
  });
}

function initTabSwitchers() {
  const tabs = document.querySelectorAll('.account-tab-btn');
  const panels = document.querySelectorAll('.account-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.dataset.target;
      const targetPanel = document.querySelector(`#${targetId}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

// Auto init on account page
if (document.querySelector('#account-hero-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initAccountPage());
  } else {
    initAccountPage();
  }
}
