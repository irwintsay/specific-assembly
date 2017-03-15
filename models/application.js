const db                = require('../config/database');
let Application         = {};

Application.create      = (application) => {
  return db.none(
    `INSERT INTO applications
    (user_id, job_id, street, city, state, country, zip_code, phone_number, work_auth, salary_req, worked_here, date_available, education_level, school, cover_letter, resume)
    VALUES
    ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
    [req.session.user.id, application.job_id, application.street, application.city, application.state, application.country, application.zip_code, application.phone_number, application.work_auth, application.salary_req, application.worked_here, application.date_available, application.education_level, application.school, application.cover_letter, application.resume]
  );
};

module.exports          = Application;