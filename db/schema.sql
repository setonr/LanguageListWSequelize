CREATE DATABASE languages_db;
USE languages_db;

-- Create the table plans.
CREATE TABLE books
(
id int NOT NULL AUTO_INCREMENT,
language varchar(50) NOT NULL,
studied boolean NOT NULL DEFAULT 0,
dateT TIMESTAMP,
PRIMARY KEY (id)
);
