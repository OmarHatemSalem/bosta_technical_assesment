/* Replace with your SQL commands */

CREATE TABLE suppliers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) 
);

ALTER TABLE products
ADD supplier_id INT;

ALTER TABLE products
ADD FOREIGN KEY (supplier_id) REFERENCES suppliers(id);