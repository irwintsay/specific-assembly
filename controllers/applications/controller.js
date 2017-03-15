const Application       = require('../../models/application');
let controller          = {};

controller.create       = (req, res) => {
  Application
  .create(req.body.application)
  .then(() => res.redirect('/careers/thankyou'));
};

module.exports          = controller;