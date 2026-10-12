/**
 * KAYAN Luxury Fashion — Stacked Toast Notification System
 * Listens to event bus and renders luxury dismissible alert cards with timer bars
 */

import { events } from '../core/events.js';

class ToastSystem {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    this.container = document.querySelector('.toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }

    events.on('toast:show', (data) => {
      this.show(data);
    });
  }

  show({ type = 'info', message = '', duration = 4000, actionText = null, onAction = null }) {
    if (!this.container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconMap = {
      success: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>`,
      error: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`,
      warning: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01"/></svg>`,
      info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`
    };

    let actionBtnHtml = '';
    if (actionText) {
      actionBtnHtml = `<button class="toast-action">${actionText}</button>`;
    }

    toast.innerHTML = `
      <div class="toast-icon ${type}">${iconMap[type] || iconMap.info}</div>
      <div class="toast-message">${message}</div>
      ${actionBtnHtml}
      <button class="toast-close" aria-label="Close notification">
        <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="toast-progress"></div>
    `;

    this.container.appendChild(toast);

    // Trigger entrance animation
    requestAnimationFrame(() => {
      toast.classList.add('active');
    });

    const progressEl = toast.querySelector('.toast-progress');
    if (progressEl) {
      progressEl.style.transition = `transform ${duration}ms linear`;
      requestAnimationFrame(() => {
        progressEl.style.transform = 'scaleX(0)';
      });
    }

    // Action button
    if (actionText && onAction) {
      const actBtn = toast.querySelector('.toast-action');
      actBtn.addEventListener('click', () => {
        onAction();
        this.dismiss(toast);
      });
    }

    // Close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => this.dismiss(toast));

    // Auto dismiss
    const timeout = setTimeout(() => {
      this.dismiss(toast);
    }, duration);

    toast.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      if (progressEl) progressEl.style.transition = 'none';
    });
  }

  dismiss(toast) {
    toast.classList.remove('active');
    toast.classList.add('closing');
    setTimeout(() => {
      toast.remove();
    }, 350);
  }
}

export const toastSystem = new ToastSystem();
