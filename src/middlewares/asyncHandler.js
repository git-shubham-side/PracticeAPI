// asyncHandler.js — eliminates try/catch boilerplate in controllers
module.exports = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
