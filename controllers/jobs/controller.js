const Job             = require('../../models/job');
let controller        = {};

controller.index      = (req, res) => {
  Job
  .findAll()
  .then(jobs => {
    res.pageInfo.jobs = jobs;
    res.render('jobs/index', res.pageInfo)
  });
};

controller.show       = (req, res) => {
  // Job
  // .findById(req.params.id)
  // .then(job => res.render('jobs/show', { job }));
  res.pageInfo.job_id = req.params.id;
  res.render('jobs/show', res.pageInfo)
};

controller.new        = (req, res) => {
  res.render('jobs/new', res.pageInfo);
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