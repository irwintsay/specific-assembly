const bcrypt            = require('bcrypt');
const User              = require('../../models/user');
let controller          = {};

controller.new          = (req, res) => {
  res.render('users/signup', req.pageInfo);
};

controller.create       = (req, res) => {
  User
  .create(req.body.user)
  .then(() => res.redirect('account/login'));
};

controller.login        = (req, res) => {
  // Refactor this into middleware
  req.pageInfo.error = {};
  if(req.query.error) {
    if(req.query.error === 'usernotfound') req.pageInfo.error.message = 'Incorrect email address';
    else if(req.query.error === 'incorrectpassword') req.pageInfo.error.message = 'Incorrect password';
    else req.pageInfo.error.message = 'Please log in first';
  } else {
    req.pageInfo.error.message = undefined;
  }
  res.render('users/login', req.pageInfo);
};

controller.profile      = (req, res) => {
  res.render('users/profile', req.pageInfo);
};

controller.processLogin = (req, res) => {
  User
  .findByEmail(req.body.user.email)
  .then(user => {
    if(user) {
      let authorized = bcrypt.compareSync(req.body.user.password, user.password_digest);
      if(authorized) {
        req.session.isAuthenticated = true;
        delete user.password_digest;
        req.session.user = user;
        res.redirect('/account/profile');
      } else {
        res.redirect('/account/login?error=incorrectpassword');
      }
    } else {
      res.redirect('/account/login?error=usernotfound');
    }
  });
};

module.exports          = controller;