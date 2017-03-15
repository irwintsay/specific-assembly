const db          = require('../config/database');
let Job           = {};

Job.create        = (job) => {
  return db.none(
    `INSERT INTO jobs
    (position, city, state, description)
    VALUES
    ($1, $2, $3, $4)`,
    [job.position, job.city, job.state, job.description]
  );
};

Job.findAll       = () => {
  return db.any(
    `SELECT *
    FROM jobs`
  );
};

Job.findById      = (id) => {
  return db.oneOrNone(
    `SELECT *
    FROM jobs
    WHERE id = $1`,
    [id]
  );
};

module.exports    = Job;