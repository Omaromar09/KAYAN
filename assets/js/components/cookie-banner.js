/**
 * KAYAN Luxury Fashion — Cookie Consent Banner
 * Non-intrusive animated bottom drawer that persists user preference
 */

import { storage } from '../core/storage.js';

export function initCookieBanner() {
  const hasConsented = storage.get('cookieConsent', null);
  if (hasConsented !== null) return;

  let banner = document.querySelector('.cookie-banner');
  if (!banner) {
    banner = document.createElement('div');
    banner.className = 'cookie-banner';
    banner.innerHTML = `
      <div class="cookie-banner-text">
        We utilize necessary and performance cookies to curate your atelier experience, preserve your shopping bag, and deliver tailored recommendations across our global collections.
      </div>
      <div class="cookie-banner-actions">
        <button class="cookie-btn cookie-btn-decline" id="cookie-decline">Essential Only</button>
        <button class="cookie-btn cookie-btn-accept" id="cookie-accept">Accept All</button>
      </div>
    `;
    document.body.appendChild(banner);
  }

  setTimeout(() => {
    banner.classList.add('active');
  }, 1600);

  const acceptBtn = banner.querySelector('#cookie-accept');
  const declineBtn = banner.querySelector('#cookie-decline');

  function dismiss(choice) {
    storage.set('cookieConsent', choice);
    banner.classList.remove('active');
    setTimeout(() => banner.remove(), 400);
  }

  if (acceptBtn) acceptBtn.addEventListener('click', () => dismiss(true));
  if (declineBtn) declineBtn.addEventListener('click', () => dismiss(false));
}
