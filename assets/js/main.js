/**
 * KAYAN Luxury Fashion — Global Application Bootstrap (ES Modules)
 * Orchestrates all architectural layers, component lifecycles, and global listeners
 */

import { store } from './core/store.js';
import { themeController } from './core/theme.js';
import { i18n } from './core/i18n.js';
import { events } from './core/events.js';
import { initSmoothScroll } from './animations/scroll.js';
import { initPreloader } from './components/preloader.js';
import { renderHeader } from './components/header.js';
import { renderMegaMenu } from './components/megamenu.js';
import { renderSearchModal } from './components/search.js';
import { renderCartDrawer } from './components/cart-drawer.js';
import { initQuickViewModal } from './components/quickview.js';
import { initGlobalModals } from './components/modal.js';
import { renderFooter } from './components/footer.js';
import { initCustomCursor } from './components/cursor.js';
import { initCookieBanner } from './components/cookie-banner.js';
import { setupPageTransitions } from './animations/page-transitions.js';
import { toastSystem } from './components/toast.js';

export function bootstrapApp(onReady = null) {
  // 1. Core theme & i18n setup
  themeController.init();
  i18n.init();

  // 2. Preloader (shows once per session, skippable)
  initPreloader(() => {
    // 3. Smooth scrolling with Lenis & ScrollTrigger
    initSmoothScroll();

    if (onReady) onReady();
  });

  // 4. Render Global UI Shell
  renderHeader();
  renderMegaMenu();
  renderSearchModal();
  renderCartDrawer();
  initQuickViewModal();
  initGlobalModals();
  renderFooter();

  // 5. Global Micro-interactions & animations
  initCustomCursor();
  initCookieBanner();
  setupPageTransitions();
  initKeyboardShortcuts();

  // 6. Reactive UI re-formatting when currency or language changes
  events.on('store:currency', () => {
    // Re-render components that display prices
    events.emit('cart:updated', store.getCartTotals());
    if (window.refreshPagePrices) window.refreshPagePrices();
  });

  events.on('i18n:changed', () => {
    i18n.updateDOM(document);
  });

  console.log('[KAYAN Atelier] High-craft animation & e-commerce engine initialized.');
}

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      showKeyboardShortcutsModal();
    }
  });
}

function showKeyboardShortcutsModal() {
  let modal = document.querySelector('.shortcuts-modal-overlay');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'modal-overlay shortcuts-modal-overlay';
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width:440px; padding:var(--space-xl);">
        <button class="modal-close-btn">&times;</button>
        <h3 class="font-display font-bold text-lg" style="margin-bottom:16px;">Keyboard Shortcuts</h3>
        <div style="display:flex; flex-direction:column; gap:10px; font-size:var(--text-xs);">
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Instant Search</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">/</kbd>
          </div>
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Close Modal / Drawer</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">ESC</kbd>
          </div>
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Navigate Carousel</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">&larr; / &rarr;</kbd>
          </div>
          <div style="display:flex; justify-content:space-between; padding-bottom:6px; border-bottom:1px solid var(--color-border-subtle);">
            <span>Toggle Theme</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">Shift + T</kbd>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span>Shortcuts Help</span>
            <kbd style="background:var(--color-bg-secondary); padding:2px 8px; border-radius:3px; font-family:monospace;">?</kbd>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  modal.classList.add('active');
}

// Quick theme shortcut
document.addEventListener('keydown', (e) => {
  if (e.shiftKey && (e.key === 'T' || e.key === 't')) {
    store.toggleTheme();
  }
});

// Auto-run bootstrap when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => bootstrapApp());
} else {
  bootstrapApp();
}
