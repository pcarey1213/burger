DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT(11) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100) DEFAULT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
)