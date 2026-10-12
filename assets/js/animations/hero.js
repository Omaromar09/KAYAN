/**
 * KAYAN Luxury Fashion — Hero WebGL / Canvas Silk Simulation
 * Creates an interactive undulating silk fabric ripple responding to cursor motion
 */

export function initHeroCanvas(containerSelector = '#hero-webgl-container') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.createElement('canvas');
  canvas.className = 'hero-canvas-element';
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  canvas.style.opacity = '0.35';
  canvas.style.mixBlendMode = 'screen';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = container.clientWidth);
  let height = (canvas.height = container.clientHeight);

  let mouseX = width / 2;
  let mouseY = height / 2;
  let targetMouseX = mouseX;
  let targetMouseY = mouseY;

  window.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    if (e.clientY <= rect.bottom && e.clientY >= rect.top) {
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    width = canvas.width = container.clientWidth;
    height = canvas.height = container.clientHeight;
  });

  // Mesh wave lines simulating undulating silk fabric (Optimized count)
  const waveLines = Array.from({ length: 8 }).map((_, i) => ({
    yBase: (height / 10) * (i + 1),
    speed: 0.0012 + i * 0.0003,
    amplitude: 20 + i * 3,
    wavelength: 0.004 + (i % 3) * 0.001,
    color: i % 2 === 0 ? 'rgba(201, 138, 76, 0.35)' : 'rgba(240, 238, 232, 0.25)'
  }));

  let time = 0;
  let animId = null;
  let isVisible = true;

  // Pause canvas when out of viewport
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
    if (isVisible && !animId) {
      animId = requestAnimationFrame(render);
    } else if (!isVisible && animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  }, { threshold: 0.05 });
  observer.observe(container);

  function render() {
    if (!isVisible) return;
    time += 1;

    // Smooth lerp mouse
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    ctx.clearRect(0, 0, width, height);

    waveLines.forEach((wave) => {
      ctx.beginPath();
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = 1.2;

      for (let x = 0; x <= width; x += 24) {
        const dx = x - mouseX;
        const dy = wave.yBase - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const mouseEffect = Math.max(0, 1 - dist / 300) * 35;

        const y =
          wave.yBase +
          Math.sin(x * wave.wavelength + time * wave.speed) * wave.amplitude +
          Math.cos(x * 0.002 - time * 0.001) * 12 +
          Math.sin(dist * 0.02 - time * 0.03) * mouseEffect;

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    });

    animId = requestAnimationFrame(render);
  }

  animId = requestAnimationFrame(render);

  return () => {
    observer.disconnect();
    if (animId) cancelAnimationFrame(animId);
    canvas.remove();
  };
}
