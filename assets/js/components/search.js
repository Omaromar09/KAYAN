/**
 * KAYAN Luxury Fashion — Fullscreen Fuzzy Search Component
 * Features instant typo-tolerant fuzzy matching, recent searches, voice search, and keyboard navigation
 */

import { products } from '../data/products.js';
import { fuzzyMatch, debounce } from '../core/utils.js';
import { storage } from '../core/storage.js';
import { events } from '../core/events.js';
import { resolveUrl } from '../core/router-helpers.js';
import { i18n } from '../core/i18n.js';

export function renderSearchModal() {
  let overlay = document.querySelector('.search-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'search-modal-overlay';
    overlay.innerHTML = `
      <div class="search-modal-container">
        <!-- Input Bar -->
        <div class="search-input-wrapper">
          <svg class="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input type="text" class="search-input-field" placeholder="Search silhouettes, materials, or archival pieces..." autocomplete="off"/>
          <div class="search-action-btns">
            <button class="search-voice-btn" title="Voice Search" aria-label="Voice Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/>
              </svg>
            </button>
            <button class="search-clear-btn" style="display:none;" aria-label="Clear Search">&times;</button>
            <span class="search-kbd-hint">ESC</span>
            <button class="search-close-btn" aria-label="Close search overlay">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Dynamic Results Body -->
        <div class="search-results-content">
          <!-- Recent & Trending Tags Default View -->
          <div class="search-tags-section" id="search-tags-section">
            <div id="recent-searches-box" style="display:none; margin-bottom: 24px;">
              <div class="search-section-label">Recent Inquiries</div>
              <div class="search-chips-row" id="recent-chips-mount"></div>
            </div>

            <div class="search-section-label">Trending Now</div>
            <div class="search-chips-row">
              <button class="search-chip" data-query="Merino Wool">Merino Wool</button>
              <button class="search-chip" data-query="Silk Kimono">Silk Kimono</button>
              <button class="search-chip" data-query="Trench Coat">Trench Coat</button>
              <button class="search-chip" data-query="Oud Extrait">Oud Extrait</button>
              <button class="search-chip" data-query="Travertine">Travertine</button>
              <button class="search-chip" data-query="Selvedge Denim">Selvedge Denim</button>
              <button class="search-chip" data-query="Linen Duvet">Linen Duvet</button>
            </div>
          </div>

          <!-- Product Results List -->
          <div id="search-products-section" style="display:none;">
            <div class="search-section-label" id="search-results-count" style="margin-bottom:12px;">Matched Silhouettes</div>
            <div class="search-products-grid" id="search-results-grid"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  initSearchLogic(overlay);
}

function initSearchLogic(overlay) {
  const input = overlay.querySelector('.search-input-field');
  const clearBtn = overlay.querySelector('.search-clear-btn');
  const closeBtn = overlay.querySelector('.search-close-btn');
  const voiceBtn = overlay.querySelector('.search-voice-btn');
  const tagsSection = overlay.querySelector('#search-tags-section');
  const productsSection = overlay.querySelector('#search-products-section');
  const resultsGrid = overlay.querySelector('#search-results-grid');
  const resultsCount = overlay.querySelector('#search-results-count');

  let selectedIndex = -1;

  function openSearch() {
    overlay.classList.add('active');
    renderRecentSearches();
    setTimeout(() => input.focus(), 150);
  }

  function closeSearch() {
    overlay.classList.remove('active');
    input.value = '';
    clearBtn.style.display = 'none';
    tagsSection.style.display = 'block';
    productsSection.style.display = 'none';
    selectedIndex = -1;
  }

  events.on('search:open', openSearch);
  closeBtn.addEventListener('click', closeSearch);

  // Close on Escape or click outside
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    // Open on '/' shortcut if not already inside an input
    if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeSearch();
    }
  });

  // Recent Searches rendering
  function renderRecentSearches() {
    const recent = storage.get('recentSearches', []);
    const recentBox = overlay.querySelector('#recent-searches-box');
    const recentMount = overlay.querySelector('#recent-chips-mount');

    if (recent.length > 0) {
      recentBox.style.display = 'block';
      recentMount.innerHTML = recent
        .map(
          (q) => `
        <span class="search-chip" data-query="${q}">
          ${q}
          <span class="remove-recent" data-del="${q}" style="margin-left:6px; opacity:0.6;">&times;</span>
        </span>
      `
        )
        .join('');

      recentMount.querySelectorAll('.remove-recent').forEach((delBtn) => {
        delBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const toDel = delBtn.dataset.del;
          const updated = recent.filter((item) => item !== toDel);
          storage.set('recentSearches', updated);
          renderRecentSearches();
        });
      });
    } else {
      recentBox.style.display = 'none';
    }
  }

  function saveRecentSearch(query) {
    if (!query || query.length < 2) return;
    let recent = storage.get('recentSearches', []);
    recent = recent.filter((q) => q.toLowerCase() !== query.toLowerCase());
    recent.unshift(query);
    if (recent.length > 6) recent.pop();
    storage.set('recentSearches', recent);
  }

  // Live Query Execution with Debounce
  const handleSearch = debounce((query) => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      tagsSection.style.display = 'block';
      productsSection.style.display = 'none';
      clearBtn.style.display = 'none';
      return;
    }

    clearBtn.style.display = 'block';
    tagsSection.style.display = 'none';
    productsSection.style.display = 'block';

    const matches = products.filter((p) => {
      const matchName = fuzzyMatch(q, p.name).match;
      const matchCat = fuzzyMatch(q, p.category).match;
      const matchMat = fuzzyMatch(q, p.material).match;
      const matchBrand = fuzzyMatch(q, p.brand).match;
      return matchName || matchCat || matchMat || matchBrand;
    });

    resultsCount.textContent = `Found ${matches.length} matching pieces for "${query}"`;

    if (matches.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: rgba(255,255,255,0.6);">
          <p>No silhouettes match your query. Explore our seasonal collections:</p>
          <div style="margin-top: 16px;">
            <a href="${resolveUrl('pages/shop.html')}" class="search-chip" style="display:inline-block;">View All Collections &rarr;</a>
          </div>
        </div>
      `;
      return;
    }

    resultsGrid.innerHTML = matches
      .slice(0, 8)
      .map((p) => {
        // Highlight query in name
        const regex = new RegExp(`(${q})`, 'gi');
        const highlightedName = p.name.replace(regex, '<span class="search-highlight">$1</span>');

        return `
        <a href="${resolveUrl(`pages/product.html?slug=${p.slug}`)}" class="search-product-item" data-url="${resolveUrl(`pages/product.html?slug=${p.slug}`)}">
          <div class="search-product-thumb">
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy"/>
          </div>
          <div class="search-product-details">
            <span style="font-size:10px; text-transform:uppercase; color:rgba(255,255,255,0.5);">${p.brand}</span>
            <div class="search-product-name">${highlightedName}</div>
            <div class="search-product-price">${i18n.formatPrice(p.salePrice || p.price)}</div>
          </div>
        </a>
      `;
      })
      .join('');
  }, 200);

  input.addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    handleSearch('');
    input.focus();
  });

  // Clicking trending chips
  overlay.addEventListener('click', (e) => {
    const chip = e.target.closest('.search-chip');
    if (chip && chip.dataset.query) {
      input.value = chip.dataset.query;
      handleSearch(chip.dataset.query);
      saveRecentSearch(chip.dataset.query);
    }
  });

  // Keyboard navigation through results
  input.addEventListener('keydown', (e) => {
    const items = overlay.querySelectorAll('.search-product-item');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      updateKeyFocus(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + items.length) % items.length;
      updateKeyFocus(items);
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0 && items[selectedIndex]) {
        e.preventDefault();
        saveRecentSearch(input.value);
        items[selectedIndex].click();
      } else if (input.value) {
        saveRecentSearch(input.value);
      }
    }
  });

  function updateKeyFocus(items) {
    items.forEach((it, idx) => {
      it.classList.toggle('keyboard-selected', idx === selectedIndex);
    });
  }

  // Voice Search (Web Speech API)
  if (voiceBtn) {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        input.value = transcript;
        handleSearch(transcript);
        saveRecentSearch(transcript);
        voiceBtn.style.color = '';
      };

      recognition.onerror = () => {
        voiceBtn.style.color = '';
      };

      recognition.onend = () => {
        voiceBtn.style.color = '';
      };

      voiceBtn.addEventListener('click', () => {
        voiceBtn.style.color = 'var(--color-accent)';
        try {
          recognition.start();
        } catch (err) {
          // already listening
        }
      });
    } else {
      voiceBtn.style.display = 'none';
    }
  }
}
