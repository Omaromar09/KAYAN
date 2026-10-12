/**
 * KAYAN Luxury Fashion — Custom Interactive Cursor
 * Dual-element follower (inner dot + lagging smooth ring) with context-aware morphing
 */

export function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let dot = document.querySelector('.custom-cursor-dot');
  let ring = document.querySelector('.custom-cursor-ring');

  if (!dot) {
    dot = document.createElement('div');
    dot.className = 'custom-cursor-dot';
    document.body.appendChild(dot);
  }

  if (!ring) {
    ring = document.createElement('div');
    ring.className = 'custom-cursor-ring';
    document.body.appendChild(ring);
  }

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function renderCursor() {
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    ringX += (mouseX - ringX) * 0.22;
    ringY += (mouseY - ringY) * 0.22;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Fast Event Delegation for cursor hover states (replaces 1000+ individual element listeners)
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.closest('.product-card')) {
      ring.classList.add('cursor-view');
      ring.textContent = 'VIEW';
    } else if (target.closest('a, button, input, select, .btn-magnetic')) {
      ring.classList.add('cursor-hover');
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.closest('.product-card')) {
      ring.classList.remove('cursor-view');
      ring.textContent = '';
    } else if (target.closest('a, button, input, select, .btn-magnetic')) {
      ring.classList.remove('cursor-hover');
    }
  }, { passive: true });
  document.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (target.closest('.carousel-container, .trending-pills-strip, .lookbook-track')) {
      ring.classList.add('cursor-drag');
      ring.textContent = 'DRAG';
    }
  }, { passive: true });

  document.addEventListener('mouseout', (e) => {
    const target = e.target;
    if (target.closest('.carousel-container, .trending-pills-strip, .lookbook-track')) {
      ring.classList.remove('cursor-drag');
      ring.textContent = '';
    }
  }, { passive: true });

  // Hide cursor when exiting viewport
  document.addEventListener('mouseleave', () => {
    dot.classList.add('cursor-hidden');
    ring.classList.add('cursor-hidden');
  });

  document.addEventListener('mouseenter', () => {
    dot.classList.remove('cursor-hidden');
    ring.classList.remove('cursor-hidden');
  });
}
