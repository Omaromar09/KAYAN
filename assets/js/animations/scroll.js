/**
 * KAYAN Luxury Fashion — Instant Native Scroll Engine
 * Provides 0ms instant scroll responsiveness with hardware acceleration,
 * smooth back-to-top interpolation, and progress tracking.
 */

let lenisInstance = null;

export function initSmoothScroll() {
  // 1. Ensure instant, buttery smooth native scrolling without artificial wheel delays
  document.documentElement.style.scrollBehavior = 'smooth';

  // 2. Scroll Progress Bar & Back-to-Top Indicator
  const progressBar = document.querySelector('.scroll-progress-bar');
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  const progressCircle = document.querySelector('.back-to-top-progress-circle');

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (progressBar) progressBar.style.width = `${progress}%`;

        if (backToTopBtn) {
          if (scrollTop > 350) {
            backToTopBtn.classList.add('visible');
          } else {
            backToTopBtn.classList.remove('visible');
          }

          if (progressCircle) {
            const circumference = 2 * Math.PI * 18;
            const offset = circumference - (progress / 100) * circumference;
            progressCircle.style.strokeDashoffset = offset;
          }
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Provide a lightweight mock for any external Lenis consumers
  lenisInstance = {
    scrollTo: (target, opts = {}) => {
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (target && target.scrollIntoView) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    raf: () => {},
    on: () => {},
    destroy: () => {}
  };

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
