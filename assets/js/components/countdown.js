/**
 * KAYAN Luxury Fashion — Sale Countdown Timer Component
 * Live days/hours/minutes/seconds countdown with animated digit transitions
 */

export function initCountdown(targetDateOrHours = 48, selector = '#sale-countdown') {
  const container = document.querySelector(selector);
  if (!container) return;

  const endTime = new Date(Date.now() + targetDateOrHours * 60 * 60 * 1000).getTime();

  function update() {
    const now = Date.now();
    const distance = Math.max(0, endTime - now);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const pad = (n) => String(n).padStart(2, '0');

    container.innerHTML = `
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(days)}</span>
        <span class="countdown-label">Days</span>
      </div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(hours)}</span>
        <span class="countdown-label">Hours</span>
      </div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(minutes)}</span>
        <span class="countdown-label">Mins</span>
      </div>
      <span class="countdown-sep">:</span>
      <div class="countdown-unit">
        <span class="countdown-digit">${pad(seconds)}</span>
        <span class="countdown-label">Secs</span>
      </div>
    `;

    // Also update announcement bar timer if present
    const annTimer = document.querySelector('#announcement-live-timer');
    if (annTimer) {
      annTimer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
  }

  update();
  setInterval(update, 1000);
}
