DROP DATABASE IF EXISTS node_storefrontdb;
CREATE DATABASE node_storefrontdb;

USE node_storefrontdb;

CREATE TABLE products(
	item_id INTEGER(100) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(7,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    product_sales DECIMAL(8,2) NOT NULL,
    PRIMARY KEY (item_id)
);

CREATE TABLE departments(
	department_id INTEGER(100) NOT NULL AUTO_INCREMENT,
	department_name VARCHAR(100) NOT NULL,
	over_head_costs DECIMAL(7,2) NOT NULL,
	PRIMARY KEY (department_name)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monster Hunter World", "Video Games", "59.99", "50");

ALTER TABLE products
MODIFY COLUMN product_sales decimal(8,2) NOT NULL;
UPDATE products SET product_sales = 0;

SELECT * FROM products 