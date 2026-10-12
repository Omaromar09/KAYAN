/**
 * KAYAN Luxury Fashion — Parallax Engine
 * Smooth multi-plane parallax effects on background imagery and editorial typography
 */

export function initParallax(selector = '[data-parallax]') {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const elements = document.querySelectorAll(selector);

  if (window.gsap && window.ScrollTrigger) {
    elements.forEach((el) => {
      const speed = parseFloat(el.dataset.parallaxSpeed || '0.2');
      const direction = el.dataset.parallaxDirection === 'down' ? 1 : -1;

      window.gsap.to(el, {
        y: () => direction * (window.innerHeight * speed),
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section') || el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  } else {
    // Passive scroll listener fallback
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      elements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallaxSpeed || '0.15');
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
      });
    }, { passive: true });
  }
}
