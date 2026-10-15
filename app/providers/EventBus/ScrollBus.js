// lib/ScrollBus.js
export const ScrollBus = {
  listeners: new Set(),

  on(cb) {
    this.listeners.add(cb);
  },

  off(cb) {
    this.listeners.delete(cb);
  },

  emit(lenis) {
    this.listeners.forEach((cb) => cb(lenis));
  },
};
