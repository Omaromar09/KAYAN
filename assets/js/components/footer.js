/**
 * KAYAN Luxury Fashion — Global Footer Component
 * Injects brand footer, newsletter form, link directory, and kinetic typography wordmark
 */

import { resolveUrl } from '../core/router-helpers.js';
import { i18n } from '../core/i18n.js';
import { events } from '../core/events.js';
import { initNewsletterForms } from './newsletter.js';
import { initMagneticElements } from '../animations/magnetic.js';

export function renderFooter() {
  const mount = document.querySelector('#site-footer-mount');
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <!-- Top Grid: Newsletter + Links -->
        <div class="footer-top-grid">
          <!-- Newsletter Column -->
          <div class="footer-newsletter-col">
            <h3 class="footer-brand-title" data-i18n="footer.newsletter_title">The Kayan Dispatch</h3>
            <p class="footer-newsletter-desc" data-i18n="footer.newsletter_desc">
              Quarterly meditations on form, craft, and private preview invitations.
            </p>

            <form class="footer-newsletter-form">
              <input type="email" class="footer-newsletter-input" placeholder="Enter your email address" data-i18n-placeholder="footer.newsletter_placeholder" required />
              <button type="submit" class="footer-newsletter-btn" data-i18n="footer.newsletter_subscribe">Subscribe</button>
            </form>

            <div class="footer-app-badges">
              <a href="#" class="app-store-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.87-.9.04-2 .6-2.63 1.34-.56.64-1.05 1.71-.92 2.74 1.01.08 2.02-.48 2.63-1.21z"/>
                </svg>
                <span>App Store</span>
              </a>
              <a href="#" class="app-store-badge">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 2.4l11.4 11.4-3.5 3.5L1.8 4.2c-.4-.6-.4-1.3 0-1.8.4-.5 1.1-.6 1.8 0zM17.5 11.2L5.8 4.4 15 13.6l2.5-2.4zm-2.5 4.8L5.8 22.8l11.7-6.8-2.5-2z"/>
                </svg>
                <span>Google Play</span>
              </a>
            </div>
          </div>

          <!-- Link Columns -->
          <div class="footer-links-grid">
            <div>
              <h4 class="footer-col-title" data-i18n="nav.women">Women</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-new-in')}">New Arrivals</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-coats')}">Coats & Trenches</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-dresses')}">Dresses & Maxis</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-blazers')}">Tailored Blazers</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=women&sub=women-bags')}">Leather Bags</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title" data-i18n="nav.men">Men</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-overshirts')}">Boxy Overshirts</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-overcoats')}">Tailored Coats</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-denim')}">Selvedge Denim</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-boots')}">Chelsea Boots</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=men&sub=men-hoodies')}">Heavyweight Knits</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Atelier & Living</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/shop.html?dept=beauty')}">Botanical Beauty</a></li>
                <li><a href="${resolveUrl('pages/shop.html?dept=home')}">Home & Objects</a></li>
                <li><a href="${resolveUrl('pages/lookbook.html')}">Seasonal Lookbook</a></li>
                <li><a href="${resolveUrl('pages/stores.html')}">Global Ateliers</a></li>
                <li><a href="${resolveUrl('pages/gift-cards.html')}">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 class="footer-col-title">Concierge</h4>
              <ul class="footer-links-list">
                <li><a href="${resolveUrl('pages/about.html')}">Brand Philosophy</a></li>
                <li><a href="${resolveUrl('pages/contact.html')}">Private Styling</a></li>
                <li><a href="${resolveUrl('pages/faq.html')}">Delivery & Returns</a></li>
                <li><a href="${resolveUrl('pages/account.html')}">Kayan Circle</a></li>
                <li><a href="${resolveUrl('pages/tests.html')}">System Verification</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Oversized Kinetic Brand Wordmark -->
        <div class="footer-oversized-wordmark">
          <div class="footer-kinetic-text">K A Y A N</div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom-bar">
          <div>&copy; 2026 KAYAN ATELIER. <span data-i18n="footer.rights">All rights reserved. Designed with architectural rigor.</span></div>

          <div class="footer-payment-methods">
            <span class="payment-icon-pill">Apple Pay</span>
            <span class="payment-icon-pill">Visa</span>
            <span class="payment-icon-pill">Mastercard</span>
            <span class="payment-icon-pill">Amex</span>
            <span class="payment-icon-pill">Mada</span>
          </div>

          <button id="footer-locale-trigger" style="background:none; border:none; color:inherit; text-decoration:underline; font-size:inherit; cursor:pointer;">
            United States / USD / English
          </button>
        </div>

        <!-- Director by OMAR Portfolio Attribution -->
        <div class="footer-director-badge" style="text-align:center; padding:18px 0; border-top:1px solid rgba(255,255,255,0.08); margin-top:28px; font-size:13px; letter-spacing:0.04em; color:var(--color-text-muted);">
          <span>Director by <strong style="color:var(--color-text); font-weight:700; letter-spacing:0.08em;">OMAR</strong></span>
          <span style="margin:0 12px; opacity:0.35;">•</span>
          <a href="https://7pstudio.tech" target="_blank" rel="noopener noreferrer" style="color:var(--color-accent); font-weight:700; text-decoration:none; border-bottom:1px solid var(--color-accent); padding-bottom:1px; transition:opacity 0.2s;">
            7pstudio.tech &nearr;
          </a>
        </div>
      </div>

      <!-- Floating Back-to-Top Button -->
      <button class="back-to-top-btn btn-magnetic" aria-label="Back to top">
        <svg class="back-to-top-progress-ring" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" class="back-to-top-progress-circle"/>
        </svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </footer>
  `;

  initNewsletterForms();
  initMagneticElements();

  const localeTrigger = mount.querySelector('#footer-locale-trigger');
  if (localeTrigger) {
    localeTrigger.addEventListener('click', () => events.emit('modal:locale:open'));
  }

  // Interactive mouse follow on oversized text
  const kineticText = mount.querySelector('.footer-kinetic-text');
  if (kineticText) {
    mount.querySelector('.footer-oversized-wordmark').addEventListener('mousemove', (e) => {
      const rect = kineticText.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.04;
      kineticText.style.transform = `translateX(${x}px) scale(1.02)`;
    });

    mount.querySelector('.footer-oversized-wordmark').addEventListener('mouseleave', () => {
      kineticText.style.transform = '';
    });
  }

  i18n.updateDOM(mount);
}
