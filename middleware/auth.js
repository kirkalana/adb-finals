exports.requireLogin = (req, res, next) => {
  if (req.session.user) return next();
  req.session.flash = { type: 'error', text: 'Please log in first.' };
  req.session.returnTo = req.originalUrl;
  res.redirect('/login');
};

exports.requireGuest = (req, res, next) => {
  if (req.session.user) return res.redirect('/');
  next();
};

exports.wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);