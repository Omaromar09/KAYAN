/**
 * KAYAN Luxury Fashion — Custom Touch & Inertia Carousel
 * Fully handwritten carousel with pointer drag, inertia, snap, arrows, and responsive views
 */

export class CustomCarousel {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    if (!this.container) return;

    this.track = this.container.querySelector('.carousel-track');
    this.slides = Array.from(this.container.querySelectorAll('.carousel-slide'));
    this.prevBtn = this.container.querySelector('.carousel-prev');
    this.nextBtn = this.container.querySelector('.carousel-next');
    this.progressBar = this.container.querySelector('.carousel-progress-fill');

    this.options = {
      gap: options.gap || 24,
      autoPlay: options.autoPlay || false,
      autoPlayInterval: options.autoPlayInterval || 5000,
      ...options
    };

    this.currentIndex = 0;
    this.isDragging = false;
    this.startX = 0;
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    this.animationId = null;

    this.init();
  }

  init() {
    if (!this.track || !this.slides.length) return;

    // Pointer events (unifies mouse and touch)
    this.track.addEventListener('pointerdown', this.onPointerDown.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));
    window.addEventListener('pointerup', this.onPointerUp.bind(this));
    window.addEventListener('pointercancel', this.onPointerUp.bind(this));

    // Nav buttons
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prev());
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.next());
    }

    // Keyboard support
    this.container.setAttribute('tabindex', '0');
    this.container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.next() : this.prev();
      } else if (e.key === 'ArrowRight') {
        const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
        isRtl ? this.prev() : this.next();
      }
    });

    window.addEventListener('resize', () => this.updatePosition());
    this.updatePosition();
  }

  getSlideWidth() {
    if (!this.slides[0]) return 0;
    return this.slides[0].getBoundingClientRect().width + this.options.gap;
  }

  getMaxIndex() {
    const containerWidth = this.container.getBoundingClientRect().width;
    const totalWidth = this.slides.length * this.getSlideWidth();
    const visibleSlides = Math.max(1, Math.floor(containerWidth / this.getSlideWidth()));
    return Math.max(0, this.slides.length - visibleSlides);
  }

  onPointerDown(e) {
    if (e.target.closest('button, a, input')) return;
    this.isDragging = true;
    this.startX = e.clientX;
    this.track.style.cursor = 'grabbing';
    this.track.style.transition = 'none';
    cancelAnimationFrame(this.animationId);
  }

  onPointerMove(e) {
    if (!this.isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + diff;
    this.track.style.transform = `translate3d(${this.currentTranslate}px, 0, 0)`;
  }

  onPointerUp(e) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.track.style.cursor = '';

    const movedBy = this.currentTranslate - this.prevTranslate;
    const threshold = this.getSlideWidth() * 0.2;

    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const directionModifier = isRtl ? -1 : 1;

    if (movedBy * directionModifier < -threshold) {
      this.next();
    } else if (movedBy * directionModifier > threshold) {
      this.prev();
    } else {
      this.updatePosition();
    }
  }

  next() {
    if (this.currentIndex < this.getMaxIndex()) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // loop
    }
    this.updatePosition();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.getMaxIndex();
    }
    this.updatePosition();
  }

  updatePosition() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const slideW = this.getSlideWidth();
    const target = isRtl ? this.currentIndex * slideW : -this.currentIndex * slideW;

    this.currentTranslate = target;
    this.prevTranslate = target;

    this.track.style.transition = 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)';
    this.track.style.transform = `translate3d(${target}px, 0, 0)`;

    if (this.progressBar) {
      const max = this.getMaxIndex();
      const progress = max > 0 ? (this.currentIndex / max) * 100 : 100;
      this.progressBar.style.width = `${Math.min(100, Math.max(15, progress))}%`;
    }
  }
}
