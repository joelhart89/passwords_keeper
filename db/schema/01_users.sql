DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  master_password VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT TRUE
);
