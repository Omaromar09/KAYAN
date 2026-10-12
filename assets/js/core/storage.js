/**
 * KAYAN Luxury Fashion — Storage Utility
 * Safe localStorage wrapper with memory fallback & versioning
 */

const STORAGE_PREFIX = 'kayan_';
const memoryStore = new Map();

export const storage = {
  get(key, defaultValue = null) {
    try {
      const fullKey = STORAGE_PREFIX + key;
      const raw = localStorage.getItem(fullKey);
      if (raw === null) return defaultValue;
      return JSON.parse(raw);
    } catch (e) {
      return memoryStore.has(key) ? memoryStore.get(key) : defaultValue;
    }
  },

  set(key, value) {
    try {
      const fullKey = STORAGE_PREFIX + key;
      localStorage.setItem(fullKey, JSON.stringify(value));
    } catch (e) {
      memoryStore.set(key, value);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (e) {
      memoryStore.delete(key);
    }
  },

  clear() {
    try {
      Object.keys(localStorage).forEach((k) => {
        if (k.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(k);
        }
      });
    } catch (e) {
      memoryStore.clear();
    }
  }
};
