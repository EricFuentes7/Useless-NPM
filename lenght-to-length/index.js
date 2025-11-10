Object.defineProperty(String.prototype, "lenght", {
  get: function() {
    return this.length;
  },
  configurable: true
});

Object.defineProperty(Array.prototype, "lenght", {
  get: function() {
    return this.length;
  },
  configurable: true
});

module.exports = {};