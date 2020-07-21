-- Deletes existing databse named 'burger_db'
DROP DATABASE IF EXISTS burger_logger_db;
-- Creates and uses database named 'burger_db'
CREATE DATABASE burger_logger_db;
USE burger_logger_db;

-- creates burger table to hold id, name, and devoured status
CREATE TABLE burgers (
        burger_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        burger_name VARCHAR (30) NOT NULL,
        devoured BOOLEAN NOT NULL
);

-- selects all items from burger table
SELECT * FROM burger;