/**
 * KAYAN Luxury Fashion — Router & Path Helpers
 * Resolves static paths reliably across root & /pages/ directories and coordinates page transition wipes
 */

export function isPagesSubfolder() {
  return window.location.pathname.includes('/pages/') || window.location.pathname.endsWith('/pages');
}

export function getBasePath() {
  return isPagesSubfolder() ? '../' : './';
}

export function resolveUrl(path) {
  // If absolute or external link
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }

  const inSubfolder = isPagesSubfolder();

  // If path is targetting root index.html
  if (path === 'index.html' || path === '/' || path === './index.html') {
    return inSubfolder ? '../index.html' : 'index.html';
  }

  // If path is targetting a page in pages/
  if (path.startsWith('pages/')) {
    const pageName = path.replace('pages/', '');
    return inSubfolder ? pageName : path;
  }

  // If path is targetting assets
  if (path.startsWith('assets/')) {
    return inSubfolder ? `../${path}` : path;
  }

  return path;
}

/**
 * Page Transition Wipe Interceptor
 */
export function initPageTransitions() {
  const curtain = document.querySelector('.transition-curtain');
  if (!curtain) return;

  // Intercept local link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (
      !href ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('http') ||
      link.target === '_blank' ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }

    e.preventDefault();
    triggerPageTransition(href);
  });
}

export function triggerPageTransition(targetUrl) {
  const curtain = document.querySelector('.transition-curtain');
  if (!curtain) {
    window.location.href = targetUrl;
    return;
  }

  const logo = curtain.querySelector('.curtain-logo');

  if (window.gsap) {
    const tl = window.gsap.timeline({
      onComplete: () => {
        window.location.href = targetUrl;
      }
    });

    tl.set(curtain, { transformOrigin: 'bottom' })
      .to(curtain, {
        y: '0%',
        duration: 0.55,
        ease: 'expo.inOut'
      })
      .to(logo, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }, '-=0.2');
  } else {
    curtain.style.transform = 'translateY(0)';
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 400);
  }
}
