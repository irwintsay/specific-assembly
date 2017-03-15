const Application       = require('../../models/application');
let controller          = {};

controller.create       = (req, res) => {
  console.log(req.body.application);
  console.log(req.session.user.id);
  Application
  .create(req.body.application, req.session.user.id)
  .then(() => res.redirect('/careers/thankyou'));
};

module.exports          = controller;