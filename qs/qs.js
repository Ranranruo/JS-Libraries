window.$ = (sel) => document.querySelector(sel);
window.$$ = (sel) => document.querySelectorAll(sel);
HTMLElement.prototype.$ = function(sel) { return this.querySelector(sel); };
HTMLElement.prototype.$$ = function(sel) { return this.querySelectorAll(sel); };