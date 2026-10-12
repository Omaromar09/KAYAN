/**
 * KAYAN Luxury Fashion — i18n Localization Engine
 * Handles EN <-> AR translations, instant RTL layout flipping, and Intl price formatting
 */

import { translations } from '../data/translations.js';
import { store } from './store.js';
import { events } from './events.js';

class I18nEngine {
  constructor() {
    this.currentLang = store.getState().language || 'en';
    this.translations = translations;
  }

  t(key, params = {}) {
    const dict = this.translations[this.currentLang] || this.translations.en;
    let text = dict[key] || this.translations.en[key] || key;

    // Parameter substitution: {amount}, {name}, etc.
    Object.keys(params).forEach((param) => {
      text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
    });

    return text;
  }

  formatPrice(amountUSD, targetCurrency = null, lang = null) {
    const state = store.getState();
    const currency = targetCurrency || state.currency || 'USD';
    const activeLang = lang || this.currentLang || 'en';

    // Get converted amount
    const rate = {
      USD: 1.0,
      AED: 3.67,
      EUR: 0.92,
      SAR: 3.75,
      EGP: 48.50
    }[currency] || 1.0;

    const converted = amountUSD * rate;

    try {
      const formatter = new Intl.NumberFormat(activeLang === 'ar' ? 'ar-AE' : 'en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return formatter.format(converted);
    } catch (e) {
      const symbol = { USD: '$', AED: 'AED', EUR: '€', SAR: 'SAR', EGP: 'EGP' }[currency] || '$';
      return `${symbol} ${Math.round(converted)}`;
    }
  }

  setLanguage(lang) {
    if (!['en', 'ar'].includes(lang)) return;
    this.currentLang = lang;
    store.setLanguage(lang);

    const isRtl = lang === 'ar';
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    this.updateDOM();
    events.emit('i18n:changed', { lang, isRtl });
  }

  toggleLanguage() {
    const nextLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.setLanguage(nextLang);
  }

  updateDOM(root = document) {
    // Text contents
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const text = this.t(key);
      if (text) el.textContent = text;
    });

    // Placeholders
    root.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.t(key);
      if (text) el.setAttribute('placeholder', text);
    });

    // Titles
    root.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      const text = this.t(key);
      if (text) el.setAttribute('title', text);
    });
  }

  init() {
    const initialLang = store.getState().language || 'en';
    this.setLanguage(initialLang);
  }
}

export const i18n = new I18nEngine();
