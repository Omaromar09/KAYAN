/**
 * KAYAN Luxury Fashion — Global Header & Announcement Bar Component
 * Injects cohesive navigation, sliding department indicator, and header scroll interactions
 */

import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { i18n } from '../core/i18n.js';
import { resolveUrl } from '../core/router-helpers.js';
import { initMagneticElements } from '../animations/magnetic.js';

export function renderHeader() {
  const mount = document.querySelector('#site-header-mount');
  if (!mount) return;

  const state = store.getState();
  const cartTotals = store.getCartTotals();
  const wishlistCount = state.wishlist.length;

  mount.innerHTML = `
    <!-- Top Scroll Progress Bar -->
    <div class="scroll-progress-bar"></div>

    <!-- Announcement Bar -->
    <div class="announcement-bar">
      <div class="announcement-slider">
        <div class="announcement-item active">
          <span data-i18n="announcement.free_shipping">Complimentary Global Express Delivery on orders over $150</span>
        </div>
        <div class="announcement-item">
          <span data-i18n="announcement.code">Enjoy 15% off your maiden acquisition with code <strong>KAYAN15</strong></span>
        </div>
        <div class="announcement-item">
          <span data-i18n="announcement.equinox">The Equinox Archive Event: Buy 2 get 20%, Buy 3+ get 25%</span>
          <span class="announcement-timer" id="announcement-live-timer">14:28:12</span>
        </div>
      </div>
      <div class="announcement-tools">
        <button id="announcement-lang-toggle" class="announcement-lang-link" aria-label="Toggle language">
          ${state.language === 'ar' ? 'English' : 'العربية'}
        </button>
        <button class="announcement-close" aria-label="Dismiss Announcement">&times;</button>
      </div>
    </div>

    <!-- Main Sticky Site Header -->
    <header class="site-header" id="main-site-header">
      <div class="header-container">
        <!-- Left: Department Navigation -->
        <nav class="header-nav-left" aria-label="Primary Departments">
          <button class="header-mobile-toggle" id="mobile-menu-btn" aria-label="Toggle mobile menu">
            <span class="hamburger-icon">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </span>
          </button>

          <ul class="dept-nav-list" id="dept-nav-list">
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=women')}" class="dept-nav-link ${state.department === 'women' ? 'active' : ''}" data-dept="women" data-i18n="nav.women">Women</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=men')}" class="dept-nav-link ${state.department === 'men' ? 'active' : ''}" data-dept="men" data-i18n="nav.men">Men</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=kids')}" class="dept-nav-link ${state.department === 'kids' ? 'active' : ''}" data-dept="kids" data-i18n="nav.kids">Kids</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=beauty')}" class="dept-nav-link ${state.department === 'beauty' ? 'active' : ''}" data-dept="beauty" data-i18n="nav.beauty">Beauty</a>
            </li>
            <li class="dept-nav-item">
              <a href="${resolveUrl('pages/shop.html?dept=home')}" class="dept-nav-link ${state.department === 'home' ? 'active' : ''}" data-dept="home" data-i18n="nav.home">Home</a>
            </li>
            <div class="dept-sliding-pill" id="dept-sliding-pill"></div>
          </ul>
        </nav>

        <!-- Center: Animated Logo -->
        <div class="header-logo-container">
          <a href="${resolveUrl('index.html')}" class="header-logo-link" aria-label="KAYAN Home">
            <svg viewBox="0 0 240 48" width="180" height="38" class="kayan-logo-svg">
              <g class="kayan-monogram" transform="translate(4, 6)">
                <rect width="36" height="36" rx="8" fill="currentColor"/>
                <path class="logo-stroke" d="M12 9 V27 M28 9 L15 18 L28 27" fill="none" stroke="var(--color-surface)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="21" cy="18" r="1.8" fill="var(--color-accent)"/>
              </g>
              <text x="56" y="31" font-family="var(--font-display)" font-size="22" font-weight="700" letter-spacing="8" fill="currentColor" class="logo-wordmark">KAYAN</text>
              <text x="195" y="31" font-family="var(--font-arabic)" font-size="14" font-weight="600" fill="var(--color-accent)" class="logo-arabic">كَيَان</text>
            </svg>
          </a>
        </div>

        <!-- Right: Actions & Tools -->
        <div class="header-nav-right">
          <a href="${resolveUrl('pages/lookbook.html')}" class="header-ugc-link">
            <span class="pulsing-dot"></span>
            <span data-i18n="nav.wear_it">Wear KAYAN</span>
          </a>

          <!-- Search Button -->
          <button class="header-btn btn-magnetic" id="header-search-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>

          <!-- Language Toggle Pill (EN / AR) -->
          <button class="header-lang-btn btn-magnetic" id="header-lang-btn" aria-label="Toggle Arabic/English Language" title="تغيير اللغة إلى ${state.language === 'ar' ? 'الإنجليزية' : 'العربية'}">
            <span>${state.language === 'ar' ? 'English' : 'عربي'}</span>
          </button>

          <!-- Country / Language / Currency Trigger -->
          <button class="header-btn btn-magnetic" id="header-locale-btn" aria-label="Language and currency preferences">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </button>

          <!-- Account Trigger -->
          <button class="header-btn btn-magnetic" id="header-account-btn" aria-label="My Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>

          <!-- Wishlist Trigger -->
          <a href="${resolveUrl('pages/wishlist.html')}" class="header-btn btn-magnetic" id="header-wishlist-btn" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="header-badge ${wishlistCount > 0 ? '' : 'empty'}" id="header-wishlist-badge">${wishlistCount}</span>
          </a>

          <!-- Cart Trigger -->
          <button class="header-btn btn-magnetic" id="header-cart-btn" aria-label="Shopping Bag">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="header-badge ${cartTotals.itemCount > 0 ? '' : 'empty'}" id="header-cart-badge">${cartTotals.itemCount}</span>
          </button>
        </div>
      </div>
    </header>
  `;

  initHeaderInteractions();
  initMagneticElements();
  i18n.updateDOM(mount);
}

function initHeaderInteractions() {
  const header = document.querySelector('#main-site-header');
  const bar = document.querySelector('.announcement-bar');
  const pill = document.querySelector('#dept-sliding-pill');
  const deptLinks = document.querySelectorAll('.dept-nav-link');

  // Announcement Bar Rotation
  const annItems = document.querySelectorAll('.announcement-item');
  let currentAnn = 0;
  if (annItems.length > 1) {
    setInterval(() => {
      annItems[currentAnn].classList.remove('active');
      currentAnn = (currentAnn + 1) % annItems.length;
      annItems[currentAnn].classList.add('active');
    }, 4500);
  }

  // Dismiss Announcement
  const annClose = document.querySelector('.announcement-close');
  if (annClose && bar) {
    annClose.addEventListener('click', () => {
      bar.style.display = 'none';
    });
  }

  // Sliding pill under department tabs
  function positionPill(link) {
    if (!pill || !link) return;
    const parentRect = link.parentElement.parentElement.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    pill.style.width = `${linkRect.width}px`;
    pill.style.left = `${linkRect.left - parentRect.left}px`;
  }

  const activeLink = document.querySelector('.dept-nav-link.active');
  if (activeLink) positionPill(activeLink);

  deptLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => positionPill(link));
    link.addEventListener('click', (e) => {
      deptLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      positionPill(link);
      const dept = link.dataset.dept;
      store.setDepartment(dept);
    });
  });

  const navList = document.querySelector('#dept-nav-list');
  if (navList) {
    navList.addEventListener('mouseleave', () => {
      const currentActive = document.querySelector('.dept-nav-link.active') || deptLinks[0];
      positionPill(currentActive);
    });
  }

  // Header Scroll Down / Up Behavior
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    if (currentScroll > lastScroll && currentScroll > 160) {
      // Scrolling down -> hide header
      header.classList.add('header-hidden');
    } else {
      // Scrolling up -> show header
      header.classList.remove('header-hidden');
    }

    lastScroll = currentScroll;
  }, { passive: true });

  // Event Listeners for Buttons
  const searchBtn = document.querySelector('#header-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => events.emit('search:open'));
  }

  const cartBtn = document.querySelector('#header-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => events.emit('cart:open'));
  }

  const accountBtn = document.querySelector('#header-account-btn');
  if (accountBtn) {
    accountBtn.addEventListener('click', () => events.emit('modal:auth:open'));
  }

  const localeBtn = document.querySelector('#header-locale-btn');
  if (localeBtn) {
    localeBtn.addEventListener('click', () => events.emit('modal:locale:open'));
  }

  const langBtn = document.querySelector('#header-lang-btn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      i18n.toggleLanguage();
      renderHeader();
    });
  }

  const annLangBtn = document.querySelector('#announcement-lang-toggle');
  if (annLangBtn) {
    annLangBtn.addEventListener('click', () => {
      i18n.toggleLanguage();
      renderHeader();
    });
  }

  // Badge Updates on Store changes
  if (!window._headerEventsBound) {
    window._headerEventsBound = true;
    events.on('cart:updated', (totals) => {
    const badge = document.querySelector('#header-cart-badge');
    if (badge) {
      badge.textContent = totals.itemCount;
      if (totals.itemCount > 0) {
        badge.classList.remove('empty');
        badge.classList.remove('badge-pop');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('badge-pop');
      } else {
        badge.classList.add('empty');
      }
    }
  });

  events.on('wishlist:toggled', ({ count }) => {
    const badge = document.querySelector('#header-wishlist-badge');
    if (badge) {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('empty');
        badge.classList.add('badge-pop');
      } else {
        badge.classList.add('empty');
      }
    }
  });
  }
}
