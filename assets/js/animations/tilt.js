/**
 * KAYAN Luxury Fashion — 3D Tilt Card Interaction
 * Smooth parallax tilt with lighting sheen on desktop cursor hover
 */

export function init3DTilt(selector = '[data-tilt], .tilt-card') {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    let rect = null;
    let ticking = false;

    function onMouseEnter() {
      rect = el.getBoundingClientRect();
      el.style.transformStyle = 'preserve-3d';
    }

    function onMouseMove(e) {
      if (!rect) rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (rect) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    function onMouseLeave() {
      rect = null;
      el.style.transition = 'transform 0.4s ease-out';
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      setTimeout(() => {
        el.style.transition = '';
      }, 400);
    }

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('mouseleave', onMouseLeave);
  });
}
