/**
 * KAYAN Luxury Fashion — Text Splitting & Masked Reveal Animation
 * Splits headers by word and character for editorial staggered reveal transitions
 */

export function splitTextIntoWords(element) {
  if (!element || element.dataset.splitDone) return;
  const text = element.textContent.trim();
  const words = text.split(/\s+/);

  element.innerHTML = words
    .map(
      (word) =>
        `<span class="split-word-wrapper" style="display:inline-block; overflow:hidden; vertical-align:top; margin-inline-end:0.25em;">` +
        `<span class="split-word-inner" style="display:inline-block; transform:translateY(110%); will-change:transform;">${word}</span>` +
        `</span>`
    )
    .join('');

  element.dataset.splitDone = 'true';
}

export function animateSplitText(element, delay = 0) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!element) return;

  if (prefersReducedMotion) {
    element.style.opacity = '1';
    return;
  }

  splitTextIntoWords(element);
  const inners = element.querySelectorAll('.split-word-inner');

  if (window.gsap) {
    window.gsap.to(inners, {
      y: '0%',
      duration: 0.9,
      stagger: 0.04,
      delay: delay,
      ease: 'expo.out'
    });
  } else {
    inners.forEach((inner, idx) => {
      setTimeout(() => {
        inner.style.transition = 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        inner.style.transform = 'translateY(0%)';
      }, (delay + idx * 0.04) * 1000);
    });
  }
}
