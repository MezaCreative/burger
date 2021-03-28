-- Drops the burger_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "burgers_db" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the burgers_db for all the rest of the script
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30),
  devoured boolean,
  PRIMARY KEY(id)
);