const bcrypt            = require('bcrypt');
const User              = require('../../models/user');
let controller          = {};

controller.new          = (req, res) => {
  res.render('users/signup');
};

controller.create       = (req, res) => {
  User
  .create(req.body.user)
  .then(() => res.redirect('/login'));
};

controller.processLogin = (req, res) => {

};

module.exports          = controller;