let authorization       = {};

authorization.restrict  = (req, res, next) => {
  if(req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/users/login');
  }
};

module.exports          = authorization;