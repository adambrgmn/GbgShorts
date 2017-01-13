const requestAnimationFrame = cb => setTimeout(cb, 1000 / 60);

export default cb => window.requestAnimationFrame(cb) ||
  window.webkitRequestAnimationFrame(cb) ||
  window.mozRequestAnimationFrame(cb) ||
  requestAnimationFrame(cb);
