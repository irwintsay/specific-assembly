let AuthService        = {};

AuthService.loginCheck = (req, res, next) => {
  req.pageInfo = {};
  
  if(req.session.isAuthenticated) {
    req.pageInfo.loggedIn = true;
  } else {
    req.pageInfo.loggedIn = false;
  }
  
  next();
}

AuthService.restrict   = (req, res, next) => {
  req.pageInfo = {};
  
  if(req.session.isAuthenticated) {
    req.pageInfo.loggedIn = true;
    next();
  } else {
    req.pageInfo.loggedIn = false;
    res.redirect('/account/login?error=notloggedin');
  }
};

module.exports         = AuthService;