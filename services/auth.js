let AuthService        = {};

AuthService.loginCheck = (req, res, next) => {
  res.pageInfo = {};
  
  if(req.session.isAuthenticated) {
    res.pageInfo.loggedIn = true;
  } else {
    res.pageInfo.loggedIn = false;
  }
  
  next();
}

AuthService.restrict   = (req, res, next) => {
  res.pageInfo = {};
  
  if(req.session.isAuthenticated) {
    res.pageInfo.loggedIn = true;
    next();
  } else {
    res.pageInfo.loggedIn = false;
    res.redirect('/account/login?error=notloggedin');
  }
};

module.exports         = AuthService;