/**
 * KAYAN Luxury Fashion — Theme Controller
 * Handles dark / light mode with circular expanding reveal transition & persistence
 */

import { store } from './store.js';
import { events } from './events.js';

class ThemeController {
  constructor() {
    this.currentTheme = store.getState().theme || 'light';
  }

  init() {
    // If not set, check system preference
    if (!localStorage.getItem('kayan_theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
      store.setTheme(this.currentTheme);
    } else {
      this.applyTheme(this.currentTheme);
    }

    // Listen to store updates
    events.on('store:theme', (theme) => {
      this.currentTheme = theme;
      this.applyTheme(theme);
    });
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(event = null) {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';

    // If browser supports View Transitions API and motion is not reduced
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (document.startViewTransition && !prefersReducedMotion && event) {
      const x = event.clientX;
      const y = event.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        this.currentTheme = nextTheme;
        store.setTheme(nextTheme);
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ];
        document.documentElement.animate(
          {
            clipPath: nextTheme === 'dark' ? clipPath : [...clipPath].reverse()
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            pseudoElement: nextTheme === 'dark' ? '::view-transition-new(root)' : '::view-transition-old(root)'
          }
        );
      });
    } else {
      this.currentTheme = nextTheme;
      store.setTheme(nextTheme);
    }
  }
}

export const themeController = new ThemeController();
