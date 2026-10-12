/**
 * KAYAN Luxury Fashion — Shop / Listing Page (PLP) Script
 * Instant animated filtering, URL History sync, dual-range price slider, view toggles & recently viewed
 */

import { products } from '../data/products.js';
import { createProductCardHtml, bindProductCardEvents } from '../components/product-card.js';
import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { i18n } from '../core/i18n.js';
import { resolveUrl } from '../core/router-helpers.js';
import { init3DTilt } from '../animations/tilt.js';

let filteredProducts = [...products];
let currentDept = 'all';
let currentSub = 'all';
let selectedSizes = new Set();
let selectedBadges = new Set();
let maxPrice = 800;
let currentSort = 'recommended';
let currentCols = 3;
let visibleCount = 12;

export function initShopPage() {
  parseUrlParams();
  renderFilterSidebar();
  applyFiltersAndSort();
  initViewToggles();
  renderRecentlyViewed();

  events.on('i18n:changed', () => {
    renderFilterSidebar();
    applyFiltersAndSort();
    renderRecentlyViewed();
    i18n.updateDOM(document);
  });

  window.refreshPagePrices = () => {
    applyFiltersAndSort();
    renderRecentlyViewed();
  };
}

function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('dept')) currentDept = params.get('dept');
  if (params.has('sub')) currentSub = params.get('sub');
  if (params.has('sort')) currentSort = params.get('sort');
}

function updateUrlParams() {
  const params = new URLSearchParams();
  if (currentDept !== 'all') params.set('dept', currentDept);
  if (currentSub !== 'all') params.set('sub', currentSub);
  if (currentSort !== 'recommended') params.set('sort', currentSort);
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function renderFilterSidebar() {
  const sidebar = document.querySelector('#shop-sidebar-mount');
  if (!sidebar) return;

  const isAr = store.getState().language === 'ar';
  const txt = {
    dept: isAr ? 'الأقسام' : 'Department',
    allDept: isAr ? 'جميع الأقسام' : 'All Departments',
    women: isAr ? 'النساء' : 'Women',
    men: isAr ? 'الرجال' : 'Men',
    kids: isAr ? 'الأطفال' : 'Kids',
    beauty: isAr ? 'الجمال والعطور' : 'Beauty',
    home: isAr ? 'المنزل والديكور' : 'Home & Living',
    maxPrice: isAr ? 'الحد الأقصى للسعر' : 'Maximum Price',
    size: isAr ? 'المقاس' : 'Size',
    curations: isAr ? 'مجموعات الأتيليه' : 'Curations',
    newArr: isAr ? 'وصل حديثاً' : 'New Arrivals',
    exclusive: isAr ? 'حصري إلكترونياً' : 'Online Exclusive',
    bestseller: isAr ? 'الأكثر طلباً' : 'Best Sellers',
    eco: isAr ? 'صناعة واعية' : 'Conscious Craft (Eco)'
  };

  sidebar.innerHTML = `
    <!-- Department Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.dept}</div>
      <div class="filter-options-list">
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="all" ${currentDept === 'all' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.allDept} (${products.length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="women" ${currentDept === 'women' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.women} (${products.filter((p) => p.department === 'women').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="men" ${currentDept === 'men' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.men} (${products.filter((p) => p.department === 'men').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="kids" ${currentDept === 'kids' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.kids} (${products.filter((p) => p.department === 'kids').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="beauty" ${currentDept === 'beauty' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.beauty} (${products.filter((p) => p.department === 'beauty').length})</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="radio" name="dept_filter" value="home" ${currentDept === 'home' ? 'checked' : ''} style="display:none;"/>
          <span class="filter-checkbox-custom">&bull;</span>
          <span>${txt.home} (${products.filter((p) => p.department === 'home').length})</span>
        </label>
      </div>
    </div>

    <!-- Price Range Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.maxPrice}</div>
      <div class="price-slider-wrap">
        <input type="range" id="price-range-slider" min="50" max="800" step="25" value="${maxPrice}" style="width:100%; cursor:pointer; accent-color:var(--color-primary);"/>
        <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700;">
          <span>$50</span>
          <span id="price-range-label" style="color:var(--color-accent);">${i18n.formatPrice(maxPrice)}</span>
          <span>$800+</span>
        </div>
      </div>
    </div>

    <!-- Sizes Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.size}</div>
      <div style="display:flex; flex-wrap:wrap; gap:6px;">
        ${['XS', 'S', 'M', 'L', 'XL', 'Standard']
          .map(
            (sz) => `
          <button class="size-chip filter-size-btn ${selectedSizes.has(sz) ? 'active' : ''}" data-size="${sz}">${sz}</button>
        `
          )
          .join('')}
      </div>
    </div>

    <!-- Curations & Badges Filter -->
    <div class="filter-group">
      <div class="filter-group-title">${txt.curations}</div>
      <div class="filter-options-list">
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="New" ${selectedBadges.has('New') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.newArr}</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="Online Exclusive" ${selectedBadges.has('Online Exclusive') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.exclusive}</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="Best Seller" ${selectedBadges.has('Best Seller') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.bestseller}</span>
        </label>
        <label class="filter-checkbox-label">
          <input type="checkbox" class="badge-filter-check" value="Eco" ${selectedBadges.has('Eco') ? 'checked' : ''} style="accent-color:var(--color-primary);"/>
          <span>${txt.eco}</span>
        </label>
      </div>
    </div>
  `;

  bindSidebarListeners(sidebar);
}

function bindSidebarListeners(sidebar) {
  // Department Radios
  sidebar.querySelectorAll('input[name="dept_filter"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      currentDept = radio.value;
      currentSub = 'all';
      visibleCount = 12;
      updateUrlParams();
      applyFiltersAndSort();
    });
  });

  // Price Slider
  const slider = sidebar.querySelector('#price-range-slider');
  const priceLabel = sidebar.querySelector('#price-range-label');
  slider.addEventListener('input', (e) => {
    maxPrice = parseInt(e.target.value, 10);
    priceLabel.textContent = i18n.formatPrice(maxPrice);
    visibleCount = 12;
    applyFiltersAndSort();
  });

  // Size buttons
  sidebar.querySelectorAll('.filter-size-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sz = btn.dataset.size;
      if (selectedSizes.has(sz)) {
        selectedSizes.delete(sz);
        btn.classList.remove('active');
      } else {
        selectedSizes.add(sz);
        btn.classList.add('active');
      }
      visibleCount = 12;
      applyFiltersAndSort();
    });
  });

  // Badges checkboxes
  sidebar.querySelectorAll('.badge-filter-check').forEach((chk) => {
    chk.addEventListener('change', () => {
      const b = chk.value;
      if (chk.checked) selectedBadges.add(b);
      else selectedBadges.delete(b);
      visibleCount = 12;
      applyFiltersAndSort();
    });
  });
}

function applyFiltersAndSort() {
  filteredProducts = products.filter((p) => {
    // Dept
    if (currentDept !== 'all' && p.department !== currentDept) return false;
    // Subcategory
    if (currentSub !== 'all' && p.subcategory !== currentSub) return false;
    // Price
    const effPrice = p.salePrice || p.price;
    if (effPrice > maxPrice) return false;
    // Sizes
    if (selectedSizes.size > 0) {
      const hasSize = (p.sizes || []).some((s) => selectedSizes.has(s.size));
      if (!hasSize) return false;
    }
    // Badges
    if (selectedBadges.size > 0) {
      const hasBadge = (p.badges || []).some((b) => selectedBadges.has(b));
      if (!hasBadge) return false;
    }
    return true;
  });

  // Sort
  if (currentSort === 'price-low') {
    filteredProducts.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
  } else if (currentSort === 'price-high') {
    filteredProducts.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
  } else if (currentSort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (currentSort === 'newest') {
    filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  renderProductsGrid();
  renderActiveChips();
}

function renderProductsGrid() {
  const grid = document.querySelector('#shop-products-grid');
  const countLabel = document.querySelector('#shop-result-count');
  const loadMoreBtn = document.querySelector('#shop-load-more');
  if (!grid) return;

  const isAr = store.getState().language === 'ar';
  if (countLabel) {
    countLabel.textContent = isAr
      ? `عرض ${Math.min(visibleCount, filteredProducts.length)} من ${filteredProducts.length} تصميماً`
      : `Displaying ${Math.min(visibleCount, filteredProducts.length)} of ${filteredProducts.length} silhouettes`;
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background:var(--color-surface); border-radius:var(--radius-lg); border:1px solid var(--color-border);">
        <h3 class="font-display font-bold text-xl" data-i18n="shop.no_results">No silhouettes match your chosen criteria.</h3>
        <p class="text-sm" style="margin-top:8px;">Try broadening your price limit or clearing active filters.</p>
        <button class="btn-submit-primary" id="btn-clear-empty" style="width:auto; padding:10px 24px; margin-top:16px;">Clear Filters</button>
      </div>
    `;
    const clearEmpty = grid.querySelector('#btn-clear-empty');
    if (clearEmpty) {
      clearEmpty.addEventListener('click', clearAllFilters);
    }
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  const visibleItems = filteredProducts.slice(0, visibleCount);
  grid.innerHTML = visibleItems.map((prod) => createProductCardHtml(prod)).join('');
  bindProductCardEvents(grid);
  init3DTilt();

  if (loadMoreBtn) {
    if (visibleCount < filteredProducts.length) {
      loadMoreBtn.style.display = 'inline-block';
      loadMoreBtn.onclick = () => {
        visibleCount += 12;
        renderProductsGrid();
      };
    } else {
      loadMoreBtn.style.display = 'none';
    }
  }
}

function renderActiveChips() {
  const mount = document.querySelector('#shop-chips-mount');
  if (!mount) return;

  const chips = [];
  if (currentDept !== 'all') chips.push({ label: `Dept: ${currentDept}`, clear: () => { currentDept = 'all'; } });
  if (currentSub !== 'all') chips.push({ label: `Category: ${currentSub}`, clear: () => { currentSub = 'all'; } });
  if (maxPrice < 800) chips.push({ label: `Under ${i18n.formatPrice(maxPrice)}`, clear: () => { maxPrice = 800; } });
  selectedSizes.forEach((sz) => chips.push({ label: `Size: ${sz}`, clear: () => { selectedSizes.delete(sz); } }));
  selectedBadges.forEach((b) => chips.push({ label: b, clear: () => { selectedBadges.delete(b); } }));

  if (chips.length === 0) {
    mount.innerHTML = '';
    return;
  }

  mount.innerHTML = `
    ${chips
      .map(
        (c, idx) => `
      <span class="active-filter-chip">
        ${c.label}
        <button data-chip-idx="${idx}">&times;</button>
      </span>
    `
      )
      .join('')}
    <button id="clear-all-chips" style="background:none; border:none; color:var(--color-accent); font-size:12px; font-weight:700; cursor:pointer; text-decoration:underline;">Clear All</button>
  `;

  mount.querySelectorAll('button[data-chip-idx]').forEach((b) => {
    b.addEventListener('click', () => {
      const idx = parseInt(b.dataset.chipIdx, 10);
      chips[idx].clear();
      renderFilterSidebar();
      updateUrlParams();
      applyFiltersAndSort();
    });
  });

  const clearAllBtn = mount.querySelector('#clear-all-chips');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAllFilters);
  }
}

function clearAllFilters() {
  currentDept = 'all';
  currentSub = 'all';
  selectedSizes.clear();
  selectedBadges.clear();
  maxPrice = 800;
  visibleCount = 12;
  renderFilterSidebar();
  updateUrlParams();
  applyFiltersAndSort();
}

function initViewToggles() {
  const grid = document.querySelector('#shop-products-grid');
  document.querySelectorAll('.view-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const cols = btn.dataset.cols;
      if (grid) {
        grid.className = `shop-grid cols-${cols}`;
      }
    });
  });

  // Sort dropdown
  const sortSelect = document.querySelector('#shop-sort-select');
  if (sortSelect) {
    sortSelect.value = currentSort;
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      updateUrlParams();
      applyFiltersAndSort();
    });
  }
}

function renderRecentlyViewed() {
  const mount = document.querySelector('#recently-viewed-mount');
  if (!mount) return;

  const recent = store.getState().recentlyViewed || [];
  if (recent.length === 0) {
    const parentSec = mount.closest('section');
    if (parentSec) parentSec.style.display = 'none';
    return;
  }

  mount.innerHTML = recent
    .slice(0, 4)
    .map(
      (p) => `
    <div style="background:var(--color-surface); border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--color-border);">
      <a href="${resolveUrl(`pages/product.html?slug=${p.slug}`)}">
        <img src="${p.image}" style="width:100%; aspect-ratio:3/4; object-fit:cover;" loading="lazy"/>
      </a>
      <div style="padding:12px;">
        <div style="font-size:12px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</div>
        <div style="font-size:12px; font-weight:700; color:var(--color-text); margin-top:4px;">${i18n.formatPrice(p.salePrice || p.price)}</div>
      </div>
    </div>
  `
    )
    .join('');
}

// Auto-run if on shop page
if (document.querySelector('#shop-products-grid')) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initShopPage());
  } else {
    initShopPage();
  }
}
