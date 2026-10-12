/**
 * KAYAN Luxury Fashion — Magnetic Micro-Interaction
 * Draws buttons smoothly toward cursor on hover
 */

export function initMagneticElements(selector = '[data-magnetic], .btn-magnetic') {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const elements = document.querySelectorAll(selector);

  elements.forEach((el) => {
    let boundRect = null;
    let ticking = false;
    let targetX = 0;
    let targetY = 0;
    const strength = parseFloat(el.dataset.magneticStrength || '0.35');

    function onMouseEnter() {
      boundRect = el.getBoundingClientRect();
    }

    function onMouseMove(e) {
      if (!boundRect) boundRect = el.getBoundingClientRect();
      targetX = (e.clientX - boundRect.left - boundRect.width / 2) * strength;
      targetY = (e.clientY - boundRect.top - boundRect.height / 2) * strength;

      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.gsap) {
            window.gsap.to(el, {
              x: targetX,
              y: targetY,
              duration: 0.25,
              ease: 'power2.out',
              overwrite: 'auto'
            });
          } else {
            el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    function onMouseLeave() {
      boundRect = null;
      if (window.gsap) {
        window.gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      } else {
        el.style.transform = 'translate3d(0, 0, 0)';
      }
    }

    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mousemove', onMouseMove, { passive: true });
    el.addEventListener('mouseleave', onMouseLeave);
  });
}
