/**
 * KAYAN Luxury Fashion — Preloader & Cinematic Intro
 * Displays animated logo stroke reveal, 0-100 counter, and curtain wipe (skippable, 1x per session)
 */

export function initPreloader(onComplete = null) {
  const hasSeenIntro = sessionStorage.getItem('kayan_intro_seen');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If already seen or user prefers reduced motion, skip intro
  if (hasSeenIntro || prefersReducedMotion) {
    const preloaderEl = document.querySelector('.site-preloader');
    if (preloaderEl) preloaderEl.remove();
    if (onComplete) onComplete();
    return;
  }

  // Create preloader markup if not already in DOM
  let preloader = document.querySelector('.site-preloader');
  if (!preloader) {
    preloader = document.createElement('div');
    preloader.className = 'site-preloader';
    preloader.innerHTML = `
      <div class="preloader-backdrop">
        <div class="preloader-content">
          <div class="preloader-logo-wrap">
            <svg viewBox="0 0 64 64" width="72" height="72" class="preloader-monogram">
              <rect width="64" height="64" rx="14" fill="#0F0F10"/>
              <path class="preloader-k-stroke" d="M18 14 V50 M46 14 L24 32 L46 50" fill="none" stroke="#F9F8F5" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="35" cy="32" r="3" fill="#C98A4C"/>
            </svg>
            <div class="preloader-wordmark">K A Y A N</div>
            <div class="preloader-arabic">كَيَان</div>
          </div>
          <div class="preloader-progress-wrap">
            <div class="preloader-counter">0</div>
            <div class="preloader-bar"><div class="preloader-fill"></div></div>
          </div>
          <button class="preloader-skip-btn">Skip Intro &rarr;</button>
        </div>
      </div>
    `;
    document.body.prepend(preloader);
  }

  // Inject Preloader CSS if missing
  if (!document.getElementById('preloader-styles')) {
    const style = document.createElement('style');
    style.id = 'preloader-styles';
    style.textContent = `
      .site-preloader {
        position: fixed;
        inset: 0;
        width: 100vw;
        height: 100vh;
        z-index: var(--z-preloader);
        background: #0A0A0C;
        color: #FAF9F5;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .preloader-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        text-align: center;
      }
      .preloader-wordmark {
        font-family: var(--font-display);
        font-size: 1.8rem;
        font-weight: 700;
        letter-spacing: 0.35em;
        margin-top: 12px;
      }
      .preloader-arabic {
        font-family: var(--font-arabic);
        font-size: 1.1rem;
        color: var(--brand-terracotta-gold);
        margin-top: 4px;
      }
      .preloader-progress-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        width: 220px;
      }
      .preloader-counter {
        font-family: monospace;
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--brand-terracotta-gold);
      }
      .preloader-bar {
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 999px;
        overflow: hidden;
      }
      .preloader-fill {
        height: 100%;
        width: 0%;
        background: var(--brand-terracotta-gold);
        transition: width 0.05s linear;
      }
      .preloader-skip-btn {
        background: none;
        border: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        cursor: pointer;
        padding: 6px 12px;
        margin-top: 12px;
        transition: color 0.2s;
      }
      .preloader-skip-btn:hover { color: #FFF; }
      .preloader-k-stroke {
        stroke-dasharray: 120;
        stroke-dashoffset: 120;
        animation: strokeDraw 1.6s ease-out forwards;
      }
      @keyframes strokeDraw {
        to { stroke-dashoffset: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  const counterEl = preloader.querySelector('.preloader-counter');
  const fillEl = preloader.querySelector('.preloader-fill');
  const skipBtn = preloader.querySelector('.preloader-skip-btn');

  let count = 0;
  const interval = setInterval(() => {
    count += 2;
    if (counterEl) counterEl.textContent = count;
    if (fillEl) fillEl.style.width = `${count}%`;

    if (count >= 100) {
      clearInterval(interval);
      dismissPreloader();
    }
  }, 35);

  function dismissPreloader() {
    clearInterval(interval);
    sessionStorage.setItem('kayan_intro_seen', 'true');

    if (window.gsap) {
      window.gsap.to(preloader, {
        y: '-100%',
        duration: 0.85,
        ease: 'expo.inOut',
        onComplete: () => {
          preloader.remove();
          if (onComplete) onComplete();
        }
      });
    } else {
      preloader.style.transition = 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      preloader.style.transform = 'translateY(-100%)';
      setTimeout(() => {
        preloader.remove();
        if (onComplete) onComplete();
      }, 700);
    }
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', dismissPreloader);
  }
}
