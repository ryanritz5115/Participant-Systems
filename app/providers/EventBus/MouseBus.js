// lib/MouseBus.js
export const MouseBus = {
  listeners: new Set(),

  on(cb) {
    this.listeners.add(cb);
  },

  off(cb) {
    this.listeners.delete(cb);
  },

  emit(mousePosition) {
    this.listeners.forEach((cb) => cb(mousePosition));
  },
};
