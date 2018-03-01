DROP DATABASE IF EXISTS node_storefrontdb;
CREATE DATABASE node_storefrontdb;

USE node_storefrontdb;

CREATE TABLE products(
	item_id INTEGER(100) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monster Hunter World", "Video Games", "59.99", "50");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blade Runner 2049", "Movies and Television", "24.99", "20");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Video Games", "299.99", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Expanse Season 2", "Movies and Television", "39.99", "35");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Principles of Object Oriented Javascript", "Books", "19.96", "12");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Library at Mount Char", "Books", "8.99", "8");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kingdom Come: Deliverance", "Video Games", "59.99", "80");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Psych Season 7", "Movies and Television", "14.99", "44");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("KEF Q100 Bookshelf Speakers", "Home Audio & Thaeter", "299.99", "6");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("6-inch Grey Couch Pillow", "Home & Kitchen", "23.99", "73");

SELECT * FROM products;