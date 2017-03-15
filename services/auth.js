let AuthService        = {};

AuthService.restrict  = (req, res, next) => {
  if(req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/account/login?error=notloggedin');
  }
};

module.exports         = AuthService;