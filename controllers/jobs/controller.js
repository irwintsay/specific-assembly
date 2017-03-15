const Job             = require('../../models/job');
let controller        = {};

controller.index      = (req, res) => {
  Job
  .findAll()
  .then(jobs => res.render('jobs/index', { jobs }));
};

controller.show       = (req, res) => {
  // Job
  // .findById(req.params.id)
  // .then(job => res.render('jobs/show', { job }));

  res.render('jobs/show', { job_id: req.params.id })
};

controller.new        = (req, res) => {
  res.render('jobs/new');
};

controller.create     = (req, res) => {
  Job
  .create(req.body.job)
  .then(() =>  res.redirect('/jobs'));
};

controller.thank      = (req, res) => {
  res.render('jobs/thankyou');
}

module.exports        = controller;