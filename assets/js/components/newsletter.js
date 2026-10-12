/**
 * KAYAN Luxury Fashion — Newsletter Subscription Component
 * Email regex validation, canvas confetti burst, and automatic promo discount unlock
 */

import { events } from '../core/events.js';
import { triggerConfetti } from '../core/utils.js';
import { storage } from '../core/storage.js';

export function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form, .footer-newsletter-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input) return;

      const email = input.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        events.emit('toast:show', {
          type: 'error',
          message: 'Please provide a valid email address.'
        });
        return;
      }

      // Save subscription state
      storage.set('newsletterSubscribed', true);
      input.value = '';

      // Trigger celebratory confetti burst
      triggerConfetti();

      events.emit('toast:show', {
        type: 'success',
        message: 'Welcome to The Kayan Dispatch. Your 15% code KAYAN15 is unlocked!'
      });
    });
  });
}
