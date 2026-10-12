/**
 * KAYAN Luxury Fashion — Central Event Bus
 * Facilitates loosely coupled communication between UI components
 */

class EventBus {
  constructor() {
    this.events = new Map();
  }

  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event).add(callback);
    return () => this.off(event, callback);
  }

  off(event, callback) {
    if (this.events.has(event)) {
      this.events.get(event).delete(callback);
    }
  }

  emit(event, payload = null) {
    if (this.events.has(event)) {
      this.events.get(event).forEach((cb) => {
        try {
          cb(payload);
        } catch (err) {
          console.error(`[EventBus] Error in handler for event "${event}":`, err);
        }
      });
    }
  }

  once(event, callback) {
    const unsub = this.on(event, (payload) => {
      unsub();
      callback(payload);
    });
    return unsub;
  }
}

export const events = new EventBus();
