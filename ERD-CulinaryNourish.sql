CREATE DATABASE culinaryNourish;
USE culinaryNourish;

CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `email` VARCHAR(32) NOT NULL,
  `password` VARCHAR(8) NOT NULL,
  `profile_image` VARCHAR(255)
);

CREATE TABLE `categories` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL
);

CREATE TABLE `subcategories` (
`id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(32) NOT NULL,
`id_category` INT 
);

CREATE TABLE `recipes` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255),
  `ingredients` VARCHAR(500) NOT NULL,
  `intruction` TEXT NOT NULL,
  `nutrition_fact` VARCHAR (255),
  `category_id` INT(32),
  `subcategory_id` INT (32)
);

CREATE TABLE `ingredients` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL
);

ALTER TABLE `recipes` ADD FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
ALTER TABLE `recipes` ADD FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`);
ALTER TABLE `subcategories` ADD FOREIGN  KEY (`id_category`) REFERENCES `categories` (`id`);

INSERT INTO categories ( NAME) VALUES 
('meals'),
('cuisine'),
('healthy');

INSERT INTO subcategories ( id_category, NAME) VALUES 
(1,'breakfast'),
(1,'lunch'),
(1,'dinner'),
(2,'indonesian'),
(2,'japanese'),
(2,'korean'),
(3,'low-carb foods'),
(3,'low-fat foods'), 
(3,'hight-fiber foods'); 

INSERT INTO ingredients (NAME) VALUES ('chicken'),('seafood'),('meat'),('nut'),('pasta');

INSERT INTO users (NAME,email,PASSWORD,profile_image) VALUES
('krise','krise@gmail.com','12345','krise.jpg');

INSERT INTO recipes
(title,image,DESCRIPTION,ingredients,intruction,nutrition_fact,category_id,subcategory_id) VALUES
('Banana Wffles','banana_waffle.jpbg',
'The most delicious banana waffles! We usually serve them as a snack or dessert. You can also try them with Korean red bean paste instead of the banana, it is even better. I remember eating these while visiting Korea and wanted to recreate the taste at home.',
'1 ¼ cups all-purpose flour,3 teaspoons baking powder,½ teaspoon salt,1 pinch ground nutmeg,1 cup 1% milk,1 large egg,nonstick cooking spray,2 ripe bananas, sliced',
'(1)Preheat the waffle iron.(2)Sift together flour, baking powder, salt, and nutmeg in a large mixing bowl. Stir in milk and egg until mixture is smooth.(3)Spray preheated waffle iron with nonstick cooking spray.(4)Pour 2 tablespoons waffle batter onto the hot waffle iron. Place 2 banana slices on top of the batter and then spoon another 2 tablespoons batter on top of the banana. Cook until golden brown. Serve hot.','241 Calories, 3g Fat, 47g Carbs, 8g Protein'
,1,
1);
