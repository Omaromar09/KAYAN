/**
 * KAYAN Luxury Fashion — Auth & Locale Modals Component
 * Tabbed login/register modal with password strength, and country/language/currency preferences
 */

import { store } from '../core/store.js';
import { events } from '../core/events.js';
import { i18n } from '../core/i18n.js';
import { CURRENCY_RATES } from '../core/promotions.js';

export function initGlobalModals() {
  initAuthModal();
  initLocaleModal();
}

function initAuthModal() {
  let overlay = document.querySelector('.auth-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay auth-modal-overlay';
    overlay.innerHTML = `
      <div class="modal-dialog auth-dialog">
        <button class="modal-close-btn">&times;</button>
        <div class="auth-tabs">
          <button class="auth-tab-btn active" data-tab="login">Sign In</button>
          <button class="auth-tab-btn" data-tab="register">Create Account</button>
        </div>

        <!-- Login Form -->
        <form class="auth-form" id="auth-login-form">
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="login-email" required placeholder="collector@kayan.com"/>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="login-password" required placeholder="••••••••"/>
          </div>
          <button type="submit" class="btn-submit-primary">Enter Atelier</button>
        </form>

        <!-- Register Form -->
        <form class="auth-form" id="auth-register-form" style="display:none;">
          <div class="form-group">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-input" id="register-name" required placeholder="Amina Al-Mansoor"/>
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="register-email" required placeholder="collector@kayan.com"/>
          </div>
          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="register-password" required placeholder="At least 8 characters"/>
            <div class="password-strength-bar">
              <div class="password-strength-fill" id="register-strength-fill"></div>
            </div>
          </div>
          <button type="submit" class="btn-submit-primary">Join Kayan Circle</button>
        </form>
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

  events.on('modal:auth:open', () => overlay.classList.add('active'));

  // Tab switching
  const tabs = overlay.querySelectorAll('.auth-tab-btn');
  const loginForm = overlay.querySelector('#auth-login-form');
  const regForm = overlay.querySelector('#auth-register-form');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.dataset.tab === 'login') {
        loginForm.style.display = 'flex';
        regForm.style.display = 'none';
      } else {
        loginForm.style.display = 'none';
        regForm.style.display = 'flex';
      }
    });
  });

  // Password Strength evaluation
  const regPass = overlay.querySelector('#register-password');
  const strengthFill = overlay.querySelector('#register-strength-fill');

  if (regPass && strengthFill) {
    regPass.addEventListener('input', () => {
      const val = regPass.value;
      if (val.length < 5) {
        strengthFill.className = 'password-strength-fill strength-weak';
      } else if (val.length < 9) {
        strengthFill.className = 'password-strength-fill strength-medium';
      } else {
        strengthFill.className = 'password-strength-fill strength-strong';
      }
    });
  }

  // Handle Login Submit
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = overlay.querySelector('#login-email').value;
    store.loginUser(email, email.split('@')[0]);
    closeModal();
  });

  // Handle Register Submit
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = overlay.querySelector('#register-name').value;
    const email = overlay.querySelector('#register-email').value;
    store.loginUser(email, name);
    closeModal();
  });
}

function initLocaleModal() {
  let overlay = document.querySelector('.locale-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'modal-overlay locale-modal-overlay';
    overlay.innerHTML = `
      <div class="modal-dialog" style="max-width:500px; padding:var(--space-xl);">
        <button class="modal-close-btn">&times;</button>
        <h3 class="font-display font-bold text-lg" style="margin-bottom:16px;">Regional & Currency Settings</h3>

        <div style="display:flex; flex-direction:column; gap:16px;">
          <!-- Language -->
          <div>
            <label class="form-label">Language / اللغة</label>
            <div style="display:flex; gap:8px;" id="locale-lang-group">
              <button class="btn-submit-primary" style="flex:1;" data-lang="en">English (LTR)</button>
              <button class="btn-submit-primary" style="flex:1; background:var(--color-bg-secondary); color:var(--color-text);" data-lang="ar">العربية (RTL)</button>
            </div>
          </div>

          <!-- Currency -->
          <div>
            <label class="form-label">Currency / العملة</label>
            <select class="form-input" id="locale-currency-select" style="cursor:pointer;">
              <option value="EGP" selected>EGP (ج.م - الجنيه المصري)</option>
              <option value="USD">USD ($ - United States Dollar)</option>
              <option value="AED">AED (د.إ - UAE Dirham)</option>
              <option value="SAR">SAR (ر.س - Saudi Riyal)</option>
              <option value="EUR">EUR (€ - Euro)</option>
            </select>
          </div>

          <!-- Theme -->
          <div>
            <label class="form-label">Appearance</label>
            <div style="display:flex; gap:8px;">
              <button class="btn-submit-primary" style="flex:1;" id="theme-light-btn">Light Atelier</button>
              <button class="btn-submit-primary" style="flex:1; background:var(--color-bg-secondary); color:var(--color-text);" id="theme-dark-btn">Dark Obsidian</button>
            </div>
          </div>
        </div>
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

  events.on('modal:locale:open', () => {
    const curr = store.getState().currency;
    const select = overlay.querySelector('#locale-currency-select');
    if (select) select.value = curr;
    overlay.classList.add('active');
  });

  // Language buttons
  overlay.querySelectorAll('#locale-lang-group button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      i18n.setLanguage(lang);
      closeModal();
    });
  });

  // Currency select
  const currencySelect = overlay.querySelector('#locale-currency-select');
  if (currencySelect) {
    currencySelect.addEventListener('change', () => {
      store.setCurrency(currencySelect.value);
      closeModal();
    });
  }

  // Theme buttons
  const lightBtn = overlay.querySelector('#theme-light-btn');
  const darkBtn = overlay.querySelector('#theme-dark-btn');
  if (lightBtn) {
    lightBtn.addEventListener('click', (e) => {
      store.setTheme('light');
      closeModal();
    });
  }
  if (darkBtn) {
    darkBtn.addEventListener('click', (e) => {
      store.setTheme('dark');
      closeModal();
    });
  }
}
