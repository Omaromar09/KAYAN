/**
 * KAYAN Luxury Fashion — Flagship Stores Locator & Interactive Map
 */

import { stores } from '../data/stores.js';
import { toastSystem } from '../components/toast.js';

let filteredStores = [...stores];
let activeStoreId = stores[0].id;
let selectedRegion = 'all';
let searchQuery = '';

export function initStoresPage() {
  renderStoresList();
  renderInteractiveMap();
  bindFilterListeners();
}

function bindFilterListeners() {
  const searchInput = document.querySelector('#store-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }

  document.querySelectorAll('.stores-region-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.stores-region-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      selectedRegion = pill.dataset.region;
      applyFilters();
    });
  });
}

function applyFilters() {
  filteredStores = stores.filter((st) => {
    // Region
    if (selectedRegion === 'me' && !['United Arab Emirates', 'Saudi Arabia', 'Egypt', 'Qatar', 'Kuwait'].includes(st.country)) return false;
    if (selectedRegion === 'eu' && !['United Kingdom', 'France', 'Italy'].includes(st.country)) return false;
    if (selectedRegion === 'na' && st.country !== 'United States') return false;
    if (selectedRegion === 'asia' && st.country !== 'Japan') return false;

    // Search query
    if (searchQuery) {
      const match =
        st.name.toLowerCase().includes(searchQuery) ||
        st.city.toLowerCase().includes(searchQuery) ||
        st.address.toLowerCase().includes(searchQuery);
      if (!match) return false;
    }

    return true;
  });

  renderStoresList();
  renderInteractiveMap();
}

function isStoreOpen(st) {
  if (!st.hoursRaw) return true;
  const now = new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  return currentHour >= st.hoursRaw.open && currentHour <= st.hoursRaw.close;
}

function renderStoresList() {
  const mount = document.querySelector('#stores-list-mount');
  const countLabel = document.querySelector('#stores-count-label');
  if (!mount) return;

  if (countLabel) {
    countLabel.textContent = `Displaying ${filteredStores.length} Ateliers Worldwide`;
  }

  if (filteredStores.length === 0) {
    mount.innerHTML = `
      <div style="text-align:center; padding:40px 16px; background:var(--color-surface); border-radius:var(--radius-sm);">
        <p style="font-size:13px; color:var(--color-text-muted);">No flagship ateliers found for your query.</p>
      </div>
    `;
    return;
  }

  mount.innerHTML = filteredStores
    .map((st) => {
      const open = isStoreOpen(st);
      return `
      <div class="store-card ${st.id === activeStoreId ? 'active' : ''}" data-id="${st.id}">
        <img src="${st.image}" alt="${st.name}" class="store-card-img" loading="lazy" />
        <div class="store-card-body">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span style="font-size:11px; font-weight:700; color:var(--color-accent); text-transform:uppercase;">${st.city}, ${st.country}</span>
            <span class="store-status-badge ${open ? 'open' : 'closed'}">
              &bull; ${open ? 'Open Now' : 'Closed for Salon Setup'}
            </span>
          </div>

          <h3 class="font-display font-bold text-base" style="margin-bottom:6px;">${st.name}</h3>
          <p style="font-size:12px; color:var(--color-text-muted); line-height:1.5; margin-bottom:10px;">${st.address}</p>

          <div style="font-size:11px; color:var(--color-text-subtle); margin-bottom:12px; display:flex; flex-direction:column; gap:4px;">
            <div><strong>Hours:</strong> ${st.hours}</div>
            <div><strong>Concierge:</strong> <a href="tel:${st.phone}" style="color:var(--color-text);">${st.phone}</a></div>
          </div>

          <div style="display:flex; gap:8px;">
            <button class="btn-submit-primary btn-book-salon" data-id="${st.id}" data-name="${st.name}" style="flex:1; height:36px; font-size:11px; font-weight:700;">
              Book Private Salon
            </button>
            <a href="https://maps.google.com/?q=${encodeURIComponent(st.address)}" target="_blank" rel="noopener noreferrer" class="btn-filter-mobile" style="display:inline-flex; align-items:center; justify-content:center; padding:0 12px; height:36px; font-size:11px; text-decoration:none;">
              Directions
            </a>
          </div>
        </div>
      </div>
    `;
    })
    .join('');

  // Card select handlers
  mount.querySelectorAll('.store-card').forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('button') || e.target.closest('a')) return;
      activeStoreId = card.dataset.id;
      mount.querySelectorAll('.store-card').forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      renderInteractiveMap();
    });
  });

  // Booking handlers
  mount.querySelectorAll('.btn-book-salon').forEach((btn) => {
    btn.addEventListener('click', () => {
      openAppointmentModal(btn.dataset.id, btn.dataset.name);
    });
  });
}

function renderInteractiveMap() {
  const mount = document.querySelector('#stores-map-mount');
  const detailsMount = document.querySelector('#selected-store-preview');
  if (!mount) return;

  const activeStore = stores.find((s) => s.id === activeStoreId) || stores[0];

  // Map representation with pins mapped by lat/lng
  // Mercator projection approximation for coordinates:
  // x% = ((lng + 180) / 360) * 100
  // y% = ((90 - lat) / 180) * 100
  mount.innerHTML = `
    <div class="world-map-svg-wrap">
      <svg viewBox="0 0 1000 500" style="width:100%; height:auto; opacity:0.25;" fill="currentColor">
        <!-- Stylized Minimal World Map SVG Outlines -->
        <path d="M150,120 Q180,80 220,90 Q280,110 300,160 Q270,220 220,240 Q160,220 140,160 Z" />
        <path d="M220,260 Q260,280 270,350 Q250,420 220,440 Q180,380 200,300 Z" />
        <path d="M460,110 Q520,90 560,120 Q540,180 480,180 Z" />
        <path d="M470,200 Q560,200 580,290 Q540,380 480,380 Q450,280 470,200 Z" />
        <path d="M600,100 Q750,90 850,150 Q800,260 700,260 Q620,180 600,100 Z" />
        <path d="M780,320 Q860,320 860,400 Q780,420 760,360 Z" />
      </svg>

      ${filteredStores
        .map((st) => {
          // Normalize coordinates to map percentage
          const leftPercent = Math.max(5, Math.min(95, ((st.lng + 140) / 280) * 100));
          const topPercent = Math.max(10, Math.min(90, ((65 - st.lat) / 95) * 100));
          const isActive = st.id === activeStoreId;

          return `
          <div class="map-pin ${isActive ? 'active' : ''}" 
               data-id="${st.id}" 
               style="left:${leftPercent}%; top:${topPercent}%;"
               title="${st.name}">
            <div class="map-pin-pulse" style="${isActive ? 'transform:scale(1.4); background:var(--color-primary);' : ''}"></div>
          </div>
        `;
        })
        .join('')}
    </div>
  `;

  // Pin clicks
  mount.querySelectorAll('.map-pin').forEach((pin) => {
    pin.addEventListener('click', () => {
      activeStoreId = pin.dataset.id;
      renderStoresList();
      renderInteractiveMap();

      // Scroll list to card
      const targetCard = document.querySelector(`.store-card[data-id="${activeStoreId}"]`);
      if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  if (detailsMount) {
    detailsMount.innerHTML = `
      <div style="border-top:1px solid var(--color-border); padding-top:16px; margin-top:16px;">
        <span style="font-size:11px; text-transform:uppercase; color:var(--color-accent); font-weight:700;">Selected Salon</span>
        <h4 class="font-display font-bold text-lg" style="margin-top:2px;">${activeStore.name}</h4>
        <p style="font-size:12px; color:var(--color-text-muted); margin-top:4px;">${activeStore.address}</p>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:10px;">
          ${activeStore.features.map((f) => `<span style="font-size:10px; background:var(--color-bg-secondary); padding:3px 8px; border-radius:3px;">${f}</span>`).join('')}
        </div>
      </div>
    `;
  }
}

function openAppointmentModal(storeId, storeName) {
  let modal = document.querySelector('.salon-booking-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay salon-booking-modal-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-dialog" style="max-width:520px; padding:var(--space-xl);">
      <button class="modal-close-btn">&times;</button>
      <span class="pdp-brand-tag">Private Salon Appointment</span>
      <h3 class="font-display font-bold text-xl" style="margin-block:4px 12px;">Reserve Personal Stylist</h3>
      <p class="text-xs" style="color:var(--color-text-muted); margin-bottom:18px;">
        Enjoy private dressing quarters, dedicated champagne tasting, and tailored archive curation at <strong>${storeName}</strong>.
      </p>

      <form id="salon-booking-form">
        <div class="form-grid-2" style="margin-bottom:12px;">
          <div class="form-group">
            <label class="form-label">Preferred Date</label>
            <input type="date" class="form-input" required value="${new Date().toISOString().split('T')[0]}" />
          </div>
          <div class="form-group">
            <label class="form-label">Preferred Time</label>
            <select class="form-select">
              <option>11:00 AM – Morning Salon</option>
              <option selected>02:30 PM – Afternoon Salon</option>
              <option>05:00 PM – Sunset Fitting</option>
              <option>07:30 PM – Evening Reception</option>
            </select>
          </div>
        </div>

        <div class="form-group" style="margin-bottom:12px;">
          <label class="form-label">Party Proportions</label>
          <select class="form-select">
            <option>Solo Consultation (1 Guest)</option>
            <option>Private Duo (2 Guests)</option>
            <option>Salon Entourage (3–4 Guests)</option>
          </select>
        </div>

        <div class="form-group" style="margin-bottom:20px;">
          <label class="form-label">Stylist Notes or Preferred Runway Collections</label>
          <input type="text" class="form-input" placeholder="e.g. Sculpted wool overcoats, evening silhouettes..." />
        </div>

        <button type="submit" class="btn-submit-primary" style="height:48px; font-size:12px; font-weight:700;">
          Confirm Private Salon Reservation
        </button>
      </form>
    </div>
  `;

  modal.classList.add('active');

  const close = modal.querySelector('.modal-close-btn');
  close.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  const form = modal.querySelector('#salon-booking-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    toastSystem.success(`Private Salon at ${storeName} confirmed! An invitation has been dispatched.`);
  });
}

// Auto init on stores page
if (document.querySelector('#stores-list-mount')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initStoresPage());
  } else {
    initStoresPage();
  }
}
