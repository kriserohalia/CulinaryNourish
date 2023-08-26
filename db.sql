CREATE DATABASE culinary_nourish;
USE culinary_nourish;

CREATE TABLE users(
id INT PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(32) NOT NULL,
email VARCHAR(320) NOT NULL,
PASSWORD VARCHAR(8) NOT NULL
);

CREATE TABLE categories(
id INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(255) NOT NULL,
description VARCHAR(255)
);

CREATE TABLE recipes (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description VARCHAR(255),
intruction TEXT,
cooking_time INT,
servings INT,
image BLOB,
category_id INT(255),
FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE ingredients(
id INT PRIMARY KEY AUTO_INCREMENT,
NAME VARCHAR(255) NOT NULL,
recipe_id INT,
FOREIGN KEY (recipe_id) REFERENCES recipes(id)
);

