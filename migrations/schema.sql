BEGIN TRANSACTION;

CREATE TABLE users (
  id              BIGSERIAL PRIMARY KEY,
  first_name      VARCHAR(255) NOT NULL,
  last_name       VARCHAR(255) NOT NULL,
  email           VARCHAR(255) NOT NULL,
  password_digest VARCHAR(255) NOT NULL,
  app_count       INTEGER DEFAULT 0 NOT NULL
);

CREATE TABLE admins (
  id              BIGSERIAL PRIMARY KEY,
  username        VARCHAR(255) NOT NULL,
  password_digest VARCHAR(255) NOT NULL
);

CREATE TABLE applications (
  id              BIGSERIAL PRIMARY KEY,
  user_id         INTEGER REFERENCES users (id) NOT NULL,
  street          VARCHAR(255) NOT NULL,
  city            VARCHAR(255) NOT NULL,
  state           VARCHAR(255) NOT NULL,
  country         VARCHAR(255) NOT NULL,
  zip_code        VARCHAR(5) NOT NULL,
  phone_number    VARCHAR(10) NOT NULL,
  work_auth       BOOLEAN NOT NULL,
  salary_req      INTEGER NOT NULL,
  hear_about_us   VARCHAR(255),
  worked_here     BOOLEAN NOT NULL,
  date_available  DATE,
  education_level VARCHAR(255) NOT NULL,
  school          VARCHAR(255) NOT NULL,
  cover_letter    VARCHAR(255) NOT NULL,
  resume          VARCHAR(255) NOT NULL
);

COMMIT;