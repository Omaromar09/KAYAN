/**
 * KAYAN Luxury Fashion — Velocity-Reactive Marquee
 * Accelerates and shifts direction based on user scroll velocity
 */

export function initMarquees() {
  const marquees = document.querySelectorAll('.marquee-track');
  if (!marquees.length) return;

  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    scrollVelocity = Math.abs(currentScrollY - lastScrollY);
    lastScrollY = currentScrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        const factor = Math.min(3.5, 1 + scrollVelocity * 0.04);
        marquees.forEach((m) => {
          m.style.animationDuration = `${32 / factor}s`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Reset to default speed when scrolling ceases
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      marquees.forEach((m) => {
        m.style.animationDuration = '32s';
      });
    }, 150);
  }, { passive: true });
}
