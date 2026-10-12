/**
 * KAYAN Luxury Fashion — Mega Menu & Mobile Offcanvas Drawer
 * Staggered column entry, hover intent delay, category thumbnails, and mobile navigation
 */

import { categories } from '../data/categories.js';
import { resolveUrl } from '../core/router-helpers.js';
import { store } from '../core/store.js';

export function renderMegaMenu() {
  const header = document.querySelector('#main-site-header');
  if (!header) return;

  // 1. Create Desktop Mega Menu Panels Container
  let megaMenuContainer = document.querySelector('#megamenu-mount');
  if (!megaMenuContainer) {
    megaMenuContainer = document.createElement('div');
    megaMenuContainer.id = 'megamenu-mount';
    header.appendChild(megaMenuContainer);
  }

  // Generate Panels for all 5 departments
  let panelsHtml = '';
  Object.keys(categories).forEach((deptKey) => {
    const dept = categories[deptKey];
    panelsHtml += `
      <div class="megamenu-panel" id="megamenu-panel-${deptKey}" data-dept="${deptKey}">
        <div class="megamenu-inner">
          ${dept.sections
            .map(
              (sec) => `
            <div class="megamenu-col">
              <h4 class="megamenu-title">${sec.title}</h4>
              <ul class="megamenu-list">
                ${sec.items
                  .map(
                    (item) => `
                  <li>
                    <a href="${resolveUrl(`pages/shop.html?dept=${deptKey}&sub=${item.slug}`)}" class="megamenu-item-link">
                      <div class="megamenu-thumb">
                        <img src="${item.thumb}" alt="${item.name}" loading="lazy"/>
                      </div>
                      <span>${item.name}</span>
                      <span class="megamenu-arrow">&rarr;</span>
                    </a>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>
          `
            )
            .join('')}

          <!-- Right Column: Featured Editorial Tile -->
          <div class="megamenu-featured">
            <img src="${dept.featuredImage}" alt="${dept.name} Editorial" class="megamenu-featured-img" loading="lazy"/>
            <div class="megamenu-featured-overlay"></div>
            <div class="megamenu-featured-content">
              <span class="megamenu-featured-tag">Atelier Edition</span>
              <h3 class="megamenu-featured-title">${dept.name} Autumn Collection</h3>
              <a href="${resolveUrl(`pages/shop.html?dept=${deptKey}`)}" class="megamenu-featured-btn">Explore All &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  megaMenuContainer.innerHTML = panelsHtml;

  // 2. Mobile Nav Drawer
  let mobileDrawer = document.querySelector('.mobile-nav-drawer');
  if (!mobileDrawer) {
    mobileDrawer = document.createElement('div');
    mobileDrawer.className = 'mobile-nav-drawer';
    mobileDrawer.innerHTML = `
      <div class="mobile-nav-header">
        <div class="font-display font-bold">KAYAN</div>
        <button class="mobile-nav-close header-btn">&times;</button>
      </div>
      <div class="mobile-nav-body">
        <div class="mobile-dept-tabs">
          <button class="mobile-dept-btn active" data-dept="women">Women</button>
          <button class="mobile-dept-btn" data-dept="men">Men</button>
          <button class="mobile-dept-btn" data-dept="kids">Kids</button>
          <button class="mobile-dept-btn" data-dept="beauty">Beauty</button>
          <button class="mobile-dept-btn" data-dept="home">Home</button>
        </div>
        <div class="mobile-categories-list" id="mobile-categories-mount"></div>
      </div>
    `;
    document.body.appendChild(mobileDrawer);

    const backdrop = document.createElement('div');
    backdrop.className = 'mobile-nav-backdrop';
    document.body.appendChild(backdrop);
  }

  initMegaMenuInteractions();
}

function initMegaMenuInteractions() {
  const deptLinks = document.querySelectorAll('.dept-nav-link');
  const panels = document.querySelectorAll('.megamenu-panel');
  let activePanel = null;
  let closeTimer = null;

  function openPanel(deptKey) {
    clearTimeout(closeTimer);
    panels.forEach((p) => p.classList.remove('open'));
    const target = document.querySelector(`#megamenu-panel-${deptKey}`);
    if (target) {
      target.classList.add('open');
      activePanel = target;
    }
  }

  function scheduleClose() {
    closeTimer = setTimeout(() => {
      if (activePanel) {
        activePanel.classList.remove('open');
        activePanel = null;
      }
    }, 220); // hover intent grace period
  }

  deptLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      const dept = link.dataset.dept;
      openPanel(dept);
    });
    link.addEventListener('mouseleave', scheduleClose);
  });

  panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panel.addEventListener('mouseleave', scheduleClose);
  });

  // Keyboard navigation & Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activePanel) {
      activePanel.classList.remove('open');
      activePanel = null;
    }
  });

  // Mobile Drawer Toggle
  const mobileToggle = document.querySelector('#mobile-menu-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const closeBtn = document.querySelector('.mobile-nav-close');

  function toggleMobile(open) {
    if (open) {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      mobileToggle.classList.add('active');
      renderMobileCategories('women');
    } else {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      mobileToggle.classList.remove('active');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('active');
      toggleMobile(!isOpen);
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', () => toggleMobile(false));
  if (backdrop) backdrop.addEventListener('click', () => toggleMobile(false));

  // Mobile Department Tabs switch
  document.querySelectorAll('.mobile-dept-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mobile-dept-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderMobileCategories(btn.dataset.dept);
    });
  });
}

function renderMobileCategories(deptKey) {
  const mount = document.querySelector('#mobile-categories-mount');
  if (!mount) return;

  const dept = categories[deptKey] || categories.women;
  mount.innerHTML = dept.sections
    .map(
      (sec) => `
    <div class="mobile-nav-accordion-item">
      <button class="mobile-accordion-trigger">
        <span>${sec.title}</span>
        <span class="accordion-arrow">&darr;</span>
      </button>
      <div class="mobile-accordion-content">
        ${sec.items
          .map(
            (item) => `
          <a href="${resolveUrl(`pages/shop.html?dept=${deptKey}&sub=${item.slug}`)}" class="megamenu-item-link" style="padding: 6px 0;">
            <img src="${item.thumb}" style="width:24px; height:24px; border-radius:50%;" loading="lazy"/>
            <span>${item.name}</span>
          </a>
        `
          )
          .join('')}
      </div>
    </div>
  `
    )
    .join('');

  // Accordion toggle clicks
  mount.querySelectorAll('.mobile-accordion-trigger').forEach((trig) => {
    trig.addEventListener('click', () => {
      const item = trig.parentElement;
      item.classList.toggle('open');
    });
  });
}
