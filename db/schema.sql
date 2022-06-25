-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE IF NOT EXISTS `category` (`id` INTEGER NOT NULL auto_increment , `category_name` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`));
-- CREATE TABLE IF NOT EXISTS `product` (`id` INTEGER NOT NULL auto_increment , `product_name` VARCHAR(255) NOT NULL, `price` DECIMAL NOT NULL, `stock` INTEGER NOT NULL DEFAULT 10, `category_id` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE);
-- -- CREATE TABLE IF NOT EXISTS product_tag;
-- -- CREATE TABLE IF NOT EXISTS tag;