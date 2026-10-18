/**
 * KAYAN Luxury Fashion — Central Reactive State Store
 * Manages cart, wishlist, auth, currency, department, language & theme with localStorage persistence
 */

import { storage } from './storage.js';
import { events } from './events.js';
import { calculateCartTotals } from './promotions.js';

class Store {
  constructor() {
    const savedCurr = storage.get('currency');
    const currency = (!savedCurr || savedCurr === 'USD') ? 'EGP' : savedCurr;
    storage.set('currency', currency);

    this.state = {
      cart: storage.get('cart', { items: [], appliedCoupon: null }),
      wishlist: storage.get('wishlist', []),
      department: storage.get('department', 'women'),
      currency: currency,
      language: storage.get('language', 'ar'),
      theme: storage.get('theme', 'light'),
      user: storage.get('user', {
        loggedIn: false,
        name: 'Guest Collector',
        email: '',
        tier: 'Solstice Tier',
        points: 1850,
        orders: [
          {
            id: 'KYN-8921',
            date: '2026-09-28',
            total: 380,
            status: 'Delivered',
            items: [{ name: 'Sculpted Wool Cocoon Coat', size: 'M', price: 380 }]
          }
        ]
      }),
      recentlyViewed: storage.get('recentlyViewed', [])
    };

    this.subscribers = new Set();
    this.initCrossTabSync();
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.subscribers.add(listener);
    return () => this.subscribers.delete(listener);
  }

  notify(changedKey) {
    this.subscribers.forEach((fn) => {
      try {
        fn(this.state, changedKey);
      } catch (e) {
        console.error('[Store] Subscriber error:', e);
      }
    });
    events.emit(`store:${changedKey}`, this.state[changedKey]);
    events.emit('store:changed', { key: changedKey, state: this.state });
  }

  initCrossTabSync() {
    window.addEventListener('storage', (e) => {
      if (e.key && e.key.startsWith('kayan_')) {
        const rawKey = e.key.replace('kayan_', '');
        if (this.state.hasOwnProperty(rawKey)) {
          this.state[rawKey] = storage.get(rawKey, this.state[rawKey]);
          this.notify(rawKey);
        }
      }
    });
  }

  // --- Cart Actions ---
  getCartTotals() {
    return calculateCartTotals(
      this.state.cart.items,
      this.state.cart.appliedCoupon,
      'USD'
    );
  }

  addToCart(product, size = 'M', color = null, quantity = 1) {
    const items = [...this.state.cart.items];
    const selectedColor = color || (product.colors && product.colors[0] ? product.colors[0].name : 'Default');
    const existingIndex = items.findIndex(
      (item) => item.id === product.id && item.size === size && item.color === selectedColor
    );

    if (existingIndex > -1) {
      items[existingIndex].quantity += quantity;
    } else {
      items.push({
        id: product.id,
        slug: product.slug,
        name: product.name,
        brand: product.brand || 'KAYAN Atelier',
        price: product.price,
        salePrice: product.salePrice || null,
        size,
        color: selectedColor,
        colorHex: product.colors && product.colors[0] ? product.colors[0].hex : '#111',
        image: (product.images && product.images[0]) || '',
        quantity
      });
    }

    this.state.cart = { ...this.state.cart, items };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
    events.emit('toast:show', {
      type: 'success',
      message: `Added "${product.name}" (${size}) to your bag`
    });
  }

  removeFromCart(productId, size, color) {
    const removedItem = this.state.cart.items.find(
      (i) => i.id === productId && i.size === size && i.color === color
    );
    const items = this.state.cart.items.filter(
      (item) => !(item.id === productId && item.size === size && item.color === color)
    );

    this.state.cart = { ...this.state.cart, items };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());

    if (removedItem) {
      events.emit('toast:show', {
        type: 'info',
        message: `Removed ${removedItem.name}`,
        actionText: 'Undo',
        onAction: () => {
          this.addToCart(removedItem, removedItem.size, removedItem.color, removedItem.quantity);
        }
      });
    }
  }

  updateCartQuantity(productId, size, color, quantity) {
    if (quantity <= 0) {
      this.removeFromCart(productId, size, color);
      return;
    }

    const items = this.state.cart.items.map((item) => {
      if (item.id === productId && item.size === size && item.color === color) {
        return { ...item, quantity };
      }
      return item;
    });

    this.state.cart = { ...this.state.cart, items };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
  }

  applyCoupon(code) {
    const totals = calculateCartTotals(this.state.cart.items, code, this.state.currency);
    if (!totals.promoDiscount.valid) {
      events.emit('toast:show', {
        type: 'error',
        message: totals.promoDiscount.message || 'Invalid promotion code'
      });
      return false;
    }

    this.state.cart = { ...this.state.cart, appliedCoupon: code.toUpperCase() };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
    events.emit('toast:show', {
      type: 'success',
      message: `Applied ${totals.promoDiscount.message}`
    });
    return true;
  }

  removeCoupon() {
    this.state.cart = { ...this.state.cart, appliedCoupon: null };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
  }

  clearCart() {
    this.state.cart = { items: [], appliedCoupon: null };
    storage.set('cart', this.state.cart);
    this.notify('cart');
    events.emit('cart:updated', this.getCartTotals());
  }

  // --- Wishlist Actions ---
  toggleWishlist(productId) {
    const list = [...this.state.wishlist];
    const index = list.indexOf(productId);
    let added = false;

    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(productId);
      added = true;
    }

    this.state.wishlist = list;
    storage.set('wishlist', list);
    this.notify('wishlist');
    events.emit('wishlist:toggled', { productId, added, count: list.length });

    events.emit('toast:show', {
      type: added ? 'success' : 'info',
      message: added ? 'Added to Wishlist' : 'Removed from Wishlist'
    });
  }

  isInWishlist(productId) {
    return this.state.wishlist.includes(productId);
  }

  // --- Preferences ---
  setDepartment(dept) {
    this.state.department = dept;
    storage.set('department', dept);
    this.notify('department');
  }

  setCurrency(curr) {
    this.state.currency = curr;
    storage.set('currency', curr);
    this.notify('currency');
  }

  setLanguage(lang) {
    this.state.language = lang;
    storage.set('language', lang);
    this.notify('language');
  }

  setTheme(theme) {
    this.state.theme = theme;
    storage.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    this.notify('theme');
  }

  toggleTheme() {
    const next = this.state.theme === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }

  // --- User / Auth ---
  loginUser(email, name = 'Kayan Member') {
    this.state.user = {
      ...this.state.user,
      loggedIn: true,
      email,
      name
    };
    storage.set('user', this.state.user);
    this.notify('user');
    events.emit('toast:show', {
      type: 'success',
      message: `Welcome back, ${name}`
    });
  }

  logoutUser() {
    this.state.user = {
      ...this.state.user,
      loggedIn: false,
      email: ''
    };
    storage.set('user', this.state.user);
    this.notify('user');
    events.emit('toast:show', {
      type: 'info',
      message: 'Signed out successfully'
    });
  }

  // --- Recently Viewed ---
  addRecentlyViewed(product) {
    let recent = [...this.state.recentlyViewed];
    recent = recent.filter((p) => p.id !== product.id);
    recent.unshift({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      salePrice: product.salePrice,
      image: product.images && product.images[0] ? product.images[0] : ''
    });
    if (recent.length > 8) recent.pop();

    this.state.recentlyViewed = recent;
    storage.set('recentlyViewed', recent);
    this.notify('recentlyViewed');
  }
}

export const store = new Store();
