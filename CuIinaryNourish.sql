
CREATE DATABASE /*!32312 IF NOT EXISTS*/`culinarynourish` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `culinarynourish`;


DROP TABLE IF EXISTS `galeries`;

CREATE TABLE `galeries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `prep_time` varchar(32) NOT NULL,
  `cook_time` varchar(32) NOT NULL,
  `servings` varchar(32) NOT NULL,
  `ingredients` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`ingredients`)),
  `intruction` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`intruction`)),
  `nutrition_fact` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `galeries` */

insert  into `galeries`(`id`,`title`,`image`,`description`,`prep_time`,`cook_time`,`servings`,`ingredients`,`intruction`,`nutrition_fact`) values 
(1,'Opor Ayam (Chicken in Coconut Milk )','https://www.allrecipes.com/thmb/3ygqwFG65rdu4OEw68Z8989o_K4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/264501_Opoor-Ayam-Chicken-in-Coconut-Milk_GrowinKitchen_5745136_original-4x3-1-2e40800e81fa414da0ccab8098d892f4.jpg','Opor ayam is an Indonesian chicken dish originating from the central to Eastern parts of the Java islands. This is usually served to enliven Ramadan in our tradition, along with ketupat and sambal goreng kentang (chile-fried potato).','15 mins','50 mins','8','[{\"n\":\"chicken, cut into 8 pieces\",\"c\":\"1(2 to 3 pound)\"},{\"n\":\"lemon, juiced\",\"c\":\"1\"},{\"n\":\"candlenuts\",\"c\":\"4\"},{\"n\":\"ground coriander\",\"c\":\"1 teaspoon\"},{\"n\":\"cumin seeds\",\"c\":\"½ teaspoon\"},{\"n\":\"shallots, peeled\",\"c\":\"7\"},{\"n\":\"garlic, peeled\",\"c\":\"5 cloves\"},{\"n\":\"chopped galangal\",\"c\":\"1 tablespoon\"},{\"n\":\"chopped ginger\",\"c\":\"½ tablespoon\"},{\"n\":\"white peppercorns\",\"c\":\"½ teaspoon\"},{\"n\":\"chopped fresh turmeric root\",\"c\":\"½ teaspoon\"},{\"n\":\"vegetable oil\",\"c\":\"3 tablespoons\"},{\"n\":\"lemongrass, bruised\",\"c\":\"2 stalks\"},{\"n\":\"tamarind juice\",\"c\":\"1 tablespoon\"},{\"n\":\"lime leaves\",\"c\":\"5 makrut\"},{\"n\":\"bay leaves\",\"c\":\"3\"},{\"n\":\"salt\",\"c\":\"1 teaspoon\"},{\"n\":\"white sugar\",\"c\":\"½ teaspoon\"},{\"n\":\"thin coconut milk\",\"c\":\"3 ⅓ cups\"},{\"n\":\"thick coconut milk\",\"c\":\"1 cup\"},{\"n\":\"Thai basil (Optional)\",\"c\":\"1 small bunch\"},{\"n\":\"fried shallots\",\"c\":\"1 (2.8 ounce) package\"}]','[{\"step\":1,\"instruction\":\"Soak chicken pieces in lemon juice for 30 minutes.\"},{\"step\":2,\"instruction\":\"Meanwhile, heat a dry skillet over medium heat. Toast candlenuts, coriander, and cumin in the skillet until fragrant, about 1 minute. Transfer to a large mortar and pestle and grind into a paste with shallots, garlic, galangal, ginger, peppercorns, and turmeric. Work in batches if necessary.\"},{\"step\":3,\"instruction\":\"Heat oil in a large skillet over medium heat. Add spice paste and stir until aromatic, 2 to 3 minutes. Add lemongrass, tamarind juice, lime leaves, bay leaves, salt, and sugar.\"},{\"step\":4,\"instruction\":\"Rinse lemon juice off chicken pieces and slide them into the skillet. Turn to coat evenly with spices. Pour in thin and thick coconut milk. Simmer until flavors combine, about 30 minutes. Add basil leaves. Continue cooking until chicken is tender, about 15 minutes more.\"},{\"step\":5,\"instruction\":\"Serve chicken and sauce in a bowl, sprinkled with fried shallots.\"}]','538 Calories 46g Fat 19g Carbs 17g Protein'),
(2,'Japanese Soba Noodle Salad Buahh','https://www.allrecipes.com/thmb/R25tMghsjq5WSF0QmQei97FVbs8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8872286-87dfd2bbd4b24d3eb23ca31507a06c13.jpg','Traditionally, this soba noodle salad is served cold. Mirin is a sweet wine that can be found in most Asian grocery stores. I do not know of any substitute.','15 mins','20 mins','4 servings','[{\"n\":\"soba noodles\",\"c\":\"1 pound\"},{\"n\":\"olive oil, or to taste\",\"c\":\"½ tablespoon\"},{\"n\":\"ginger root, minced\",\"c\":\"1 (1 1/2 inch) piece\"},{\"n\":\"garlic, minced\",\"c\":\"1 clove\"},{\"n\":\"miso paste\",\"c\":\"2 tablespoons\"},{\"n\":\"fresh lime juice\",\"c\":\"2 tablespoons\"},{\"n\":\"mirin\",\"c\":\"1 tablespoon\"},{\"n\":\"green onions, chopped\",\"c\":\"3\"},{\"n\":\"sesame seeds\",\"c\":\"2 tablespoons\"},{\"n\":\"chopped cilantro, or to taste\",\"c\":\"1 tablespoon\"}]','[{\"step\":\"1\",\"instruction\":\"Bring lightly salted water to a boil in a large pot. Add soba noodles; cook, stirring occasionally until tender, about 5 minutes. Drain and rinse with cold water. Set aside.\"},{\"step\":\"2\",\"instruction\":\"Heat olive oil in a skillet over medium heat. Cook and stir ginger and garlic until golden brown, about 3 minutes. Remove from heat.\"},{\"step\":\"3\",\"instruction\":\"Mix ginger, garlic, miso paste, lime juice, and mirin together in a small bowl. Pour salad dressing mixture over soba noodles. Top with green onions, sesame seeds, and cilantro. Chill until serving.\"}]','456 Calories 5g Fat 91g Carbs 19g Protein'),
(3,'Japanese Curry','https://www.allrecipes.com/thmb/8FfLo363HrdCZ1I94ojJpDvFtmM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4917776-japanese-curry-MMSVA-4x3-1-ea36281f103d4aa7a7c289714cc498df.jpg','Japanese curry is different from Indian or Thai curries. It is more of a brown stew and it can be mild or spicy, depending on your tastes. The curry roux, from no heat to very spicy, can be bought at any international grocery store. It can be served over white rice or with udon noodles. This recipe is very flexible; it can easily be made for more or less people. It can also be frozen (don\'t put the potatoes in).','30 mins','1 hr 10 mins','8 servings','[{\"n\":\"vegetable oil, or more as needed\",\"c\":\"1 tablespoon\"},{\"n\":\"beef chuck, cut into 2-inch cubes\",\"c\":\"1 ¾ pounds\"},{\"n\":\"onions, quartered\",\"c\":\"3\"},{\"n\":\"ketchup\",\"c\":\"1 tablespoon\"},{\"n\":\"Worcestershire sauce\",\"c\":\"1 ½ teaspoons\"},{\"n\":\"cayenne pepper, or to taste\",\"c\":\"1 pinch (Optional)\"},{\"n\":\"carrots, cut into 2-inch pieces\",\"c\":\"4\"},{\"n\":\"chicken bouillon\",\"c\":\"1 cube (Optional)\"},{\"n\":\"potatoes, cut into 3-inch chunks\",\"c\":\"3 medium\"},{\"n\":\"Japanese curry roux, or more to taste\",\"c\":\"1 ½ (3.5 ounce) containers\"}]','[{\"step\":\"1\",\"instruction\":\"Heat oil in a 6-quart pot over medium-high heat. Add beef and saute until brown, 5 to 7 minutes.\"},{\"step\":\"2\",\"instruction\":\"Add onions and cook until starting to soften, about 3 minutes. Add ketchup and Worcestershire sauce. Stir to coat. Add cayenne pepper. Pour in water to cover mixture by 1 or 2 inches. Add carrots and bouillon.\"},{\"step\":\"3\",\"instruction\":\"Simmer, skimming fat off the surface of the broth as needed, for 30 minutes. Add potatoes. Stir in 1 package of curry roux and let dissolve; add remaining curry as needed to achieve desired thickness. Continue simmering until beef and vegetables are tender, about 30 minutes more.\"}]','360 Calories 15g Fat 40g Carbs 16g Protein'),
(4,'Japanese Egg Salad Sandwich (Tamago Sando)','https://imagesvc.meredithcorp.io/v3/jumpstartpure/image/?url=https%3A%2F%2Fcf-images.us-east-1.prod.boltdns.net%2Fv1%2Fstatic%2F1033249144001%2F7f441de9-2d81-4ac8-88ea-eea0fa165c39%2Fdd958f3f-dc30-42ca-97d9-53ba8d2b39c4%2F1280x720%2Fmatch%2Fimage.jpg&w=64','Im going to show you my take on the world-famous tamago sando, plus how to make a version of a mayonnaise so addictive, it literally has a cult following. If that wasnt enough, Im also going to tease an upcoming video for the worlds most critically-acclaimed white bread.','10 mins','15 mins','2 sandwiches','[{\"n\":\"mayonnaise\",\"c\":\"½ cup\"},{\"n\":\"kosher salt\",\"c\":\"¼ teaspoon\"},{\"n\":\"white sugar\",\"c\":\"¾ teaspoon\"},{\"n\":\"Dijon mustard\",\"c\":\"1 teaspoon\"},{\"n\":\"hot sauce, or to taste\",\"c\":\"3 dashes\"},{\"n\":\"freshly squeezed lemon juice\",\"c\":\"1 teaspoon\"},{\"n\":\"rice vinegar\",\"c\":\"2 teaspoons\"},{\"n\":\"kosher salt, or to taste\",\"c\":\"½ teaspoon\"},{\"n\":\"white sugar\",\"c\":\"¼ teaspoon\"},{\"n\":\"cayenne pepper\",\"c\":\"1 pinch\"},{\"n\":\"heavy cream\",\"c\":\"1 tablespoon\"},{\"n\":\"soft white bread\",\"c\":\"4 slices\"},{\"n\":\"unsalted butter, softened\",\"c\":\"1 tablespoon\"}]','[{\"step\":\"1\",\"instruction\":\"Place eggs in the bottom of a saucepan. Add 1/4 inch of water. Heat over medium-high heat and bring to a boil. Cover and steam for 11 minutes. Turn off the heat and drain water carefully; pour cold water over and let cool.\"},{\"step\":\"2\",\"instruction\":\"Mix mayonnaise, salt, sugar, mustard, hot sauce, lemon juice, and vinegar for Kewpie-style mayonnaise together. Cover with plastic wrap and refrigerate until needed.\"},{\"step\":\"3\",\"instruction\":\"Peel eggs. Mash in a shallow bowl with the side and back of a fork until desired texture is reached. Add salt, sugar, cayenne, heavy cream, and 3 tablespoons Kewpie-style mayonnaise. Stir to combine. Wrap and refrigerate until well chilled, at least 1 hour. Taste and adjust seasonings.\"},{\"step\":\"4\",\"instruction\":\"Butter bread slices and use 1/2 of the egg salad on each sandwich. Cut crusts off before serving if youre fancy.\"}]','759 Calories 64g Fat 31g Carbs 17g Protein'),
(5,'Potato and Cheese Pierogi','https://www.allrecipes.com/thmb/kvJCLJ2XHby9f_zLZg_ZL4kIOPM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5969304-9d7bc02799b1453bbc9d30489225ea07.jpg','This recipe is an Ukrainian one of my Great-Grandmothers passed down from the years. They are great with melted butter and sauteed onions, or fry if desired. They can also be frozen between layers of plastic wrap.','2 hrs','10 mins','60','[{\"n\":\"all-purpose flour\",\"c\":\"6 cups\"},{\"n\":\"eggs\",\"c\":\"3\"},{\"n\":\"salt\",\"c\":\"1 pinch\"},{\"n\":\"water as needed\"},{\"n\":\"potatoes, peeled\",\"c\":\"5 pounds\"},{\"n\":\"processed cheese, cubed\",\"c\":\"1 pound\"},{\"n\":\"salt and pepper to taste\"},{\"n\":\"onion salt to taste\"}]','[{\"step\":\"1\",\"instruction\":\"Bring a large pot of salted water to a boil. Add potatoes and cook until tender but still firm, about 15 minutes; drain.\"},{\"step\":\"2\",\"instruction\":\"Combine flour, eggs and salt. Mix in a little water at a time until dough is somewhat stiff. Roll dough in small sections about 1/4 inch thick. Using a large biscuit cutter or drinking glass, make circle cuts.\"},{\"step\":\"3\",\"instruction\":\"To make filling: Mix together potatoes, cheese, salt, pepper and onion salt. Fill each with 1 to 2 tablespoons of the potato mixture, fold over and seal edges. To cook, bring a large pot of water to boil, carefully dropping in one at a time; stir once. They are done when they float to the top.\"}]','97 Calories 2g Fat 15g Carbs 4g Protein'),
(6,'Black Beans and Rice','https://www.allrecipes.com/thmb/u4Tlz5RDlY5uzGIhS6aYRV2TL6M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Black-Beans-and-Rice-by-House-of-Aqua-2119665_original-4e87fb50007047deb0756d83d15591b7.jpg','Black beans and rice make a great 30-minute vegetarian meal that\'s filling, delicious, and cheap! Great as a side dish or in a burrito bowl, too.','5 mins','25 mins','6','[{\"n\":\"olive oil\",\"c\":\"1 teaspoon\"},{\"n\":\"onion, chopped\",\"c\":\"1\"},{\"n\":\"cloves garlic, minced\",\"c\":\"2\"},{\"n\":\"uncooked white rice\",\"c\":\"¾ cup\"},{\"n\":\"low sodium, low fat vegetable broth\",\"c\":\"1 ½ cups\"},{\"n\":\"canned black beans, drained\",\"c\":\"3 ½ cups\"},{\"n\":\"ground cumin\",\"c\":\"1 teaspoon\"},{\"n\":\"cayenne pepper\",\"c\":\"¼ teaspoon\"}]','[{\"step\":\"1\",\"instruction\":\"Heat oil in a saucepan over medium-high heat. Add onion and garlic; cook and stir until onion has softened, about 4 minutes. Stir in rice to coat; cook and stir for 2 minutes.\"},{\"step\":\"2\",\"instruction\":\"Add vegetable broth and bring to a boil. Cover, reduce to a simmer, and cook until liquid is absorbed, about 20 minutes.\"},{\"step\":\"3\",\"instruction\":\"Stir in beans, cumin, and cayenne; cook until beans are warmed through.\"}]','140 Calories 1g Fat 27g Carbs 6g Protein'),
(7,'Thin-Crust Pizza Dough','https://www.allrecipes.com/thmb/0tu2RTrRhpNKEypfe0ZQxIu6Nas=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4475700-6211dfa93fcb4473a42a08ba757bb915.jpg','This thin-crust pizza dough recipe is ready to bake in just 15 minutes with deliciously crisp results.','10 mins','5 mins','4','[{\"n\":\"active dry yeast\",\"c\":\"1 teaspoon\"},{\"n\":\"white sugar\",\"c\":\"¼ teaspoon\"},{\"n\":\"lukewarm water\",\"c\":\"¾ cup\"},{\"n\":\"all-purpose flour, divided\",\"c\":\"2 cups\"},{\"n\":\"salt\",\"c\":\"½ teaspoon\"}]','[{\"step\":\"1\",\"instruction\":\"Dissolve yeast and sugar in warm water that\'s 110 degrees F (44 degrees C) in a small bowl. Let stand until yeast softens and begins to form a creamy foam, about 5 to 8 minutes.\"},{\"step\":\"2\",\"instruction\":\"Combine 1 3/4 cups flour and salt in a large bowl. Pour in yeast mixture; mix well until dough comes together.\"},{\"step\":\"3\",\"instruction\":\"Transfer dough to a floured surface and knead until smooth, about 2 minutes. Add remaining 1/4 cup flour if dough is too sticky.\"},{\"step\":\"4\",\"instruction\":\"Roll dough into a 12-inch circle. Transfer to a greased pizza pan.\"}]','237 Calories 17g Fat 13g Carbs 9g Protein'),
(8,'Telur Balado (Spicy Chile Sauce with Eggs)','https://asset.kompas.com/crops/ZAz3wC7IIS7ATFMJxieKxsrZR5w=/100x67:900x600/750x500/data/photo/2023/05/04/64533129bf231.jpg','Originated from North Sumatra (Padang or Minang), this humble dish can be easily bought from many street vendors (warung nasi). When I studied abroad, I found a shortcut to make this lovely dish. Serve with hot, steamed rice or Indonesian fried rice (nasi goreng) with prawn crackers on the side.','15 mins','20 mins','6','[{\"n\":\"vegetable oil for frying\",\"c\":\"1 cup\"},{\"n\":\"hard-boiled eggs, shells removed\",\"c\":\"6\"},{\"n\":\"red chile peppers, seeded and chopped\",\"c\":\"6\"},{\"n\":\"cloves garlic\",\"c\":\"4\"},{\"n\":\"medium shallots\",\"c\":\"4\"},{\"n\":\"tomatoes, quartered\",\"c\":\"2\"},{\"n\":\"shrimp paste\",\"c\":\"1 teaspoon\"},{\"n\":\"peanut oil\",\"c\":\"1 ½ tablespoons\"},{\"n\":\"vegetable oil\",\"c\":\"1 tablespoon\"},{\"n\":\"white vinegar\",\"c\":\"1 teaspoon\"},{\"n\":\"white sugar\",\"c\":\"1 teaspoon\"},{\"n\":\"salt and pepper to taste\"}]','[{\"step\":\"1\",\"instruction\":\"Heat 1 cup oil in a small saucepan over medium-high heat. Deep fry the eggs in the hot oil until they are golden brown, 5 to 7 minutes; set aside.\"},{\"step\":\"2\",\"instruction\":\"Combine the chile peppers, garlic, shallots, tomatoes, and shrimp paste in a food processor; blend into a paste. Add in peanut oil. Process again until smooth.\"},{\"step\":\"3\",\"instruction\":\"Heat 1 tablespoon oil in a large skillet over medium heat. Pour the chile pepper mixture into the skillet. Stir the vinegar, sugar, salt, and pepper into the mixture. Add the fried eggs to the mixture, turning to coat. Reduce heat to medium-low; simmer until fragrant, about 5 minutes.\"}]','237 Calories 17g Fat 13g Carbs 9g Protein');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` text DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`password`,`is_admin`) values 
(2,'Putri','put@gmail.com','$2a$10$/LQ5yx70rDp54wMv9OPVCeX1c9vP9y9eg/B0MgBCRYVhU32zUoiiS',0),
(5,'kkcnjdnc','kwjkw@gmail.com','$2a$10$48H/vy5ve1vV01WP795Y9.ogFAJhVScWoOTwzVZA6O8J1XhVTFBSe',1),
(6,'Krise','ice@gmail.com','$2a$10$nWM1Es9VHdvG94Hk6IYMBOAKCCjpWDWA5.5YuhLzyT6xOqOG5/ifm',1),
(7,'Krise Rohalia','krise@gmail.com','$2a$10$KCqym16vHqd2LxrM/isJSuEA1QKAejEn.Uo5zdKmtqOfpTF/ouGw2',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;