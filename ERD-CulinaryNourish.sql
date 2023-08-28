CREATE DATABASE culinaryNourish;
USE culinaryNourish;

CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `email` VARCHAR(32) NOT NULL,
  `password` VARCHAR(8) NOT NULL,
  `is_admin` BOOLEAN DEFAULT FALSE,
  `profile_image` VARCHAR(255)
);


CREATE TABLE `galeries` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `prep_time` VARCHAR(32) NOT NULL,
  `cook_time` VARCHAR(32) NOT NULL,
  `servings` VARCHAR(32) NOT NULL,
  `ingredients` JSON,
  `intruction` JSON,
  `nutrition_fact` VARCHAR (255)
);

INSERT INTO users (NAME, email, PASSWORD,is_admin) VALUES 
('Krise Rohalia','krise@gmail.com','12345',TRUE);
