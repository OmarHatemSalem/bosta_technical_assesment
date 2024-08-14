# Bosta Technical Assessment

## Short Description

This project implements a backend (specifically a search API endpoint) for a product catalog service. It uses the following technologies:

- NodeJS
- Tyepscript
- PostgreSQL
- Express
- Jasmine

## Running the Project

You must first clone the GitHub repo and then do the following steps:

<!-- 2. Create a Postgres Database:
    1. Connect to the Postgres console
    2. Run the following command `CREATE USER shopping_user WITH PASSWORD 'password123';`
    3. Create the Databases `shopping` and `shopping_test`
    4. Connect to both databases and `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;` -->

1. Add the following `.env` file:
2. Run `docker compose up` for the docker image to be built.

<pre><code>
POSTGRES_HOST=db
POSTGRES_DB=catalog
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_TEST_DB=catalog_test

POSTGRESDB_DOCKER_PORT=5432
POSTGRESDB_LOCAL_PORT=5433

NODE_DOCKER_PORT=8080
NODE_LOCAL_PORT=6868

ENV=dev
</code></pre>


## Populate the database

To fill out the database, 

1. Run the command `docker exec -ti project_1_postgres /bin/bash`
2. Run the command `psql catalog postgres`
3. Add the following schema:

<pre><code>
CREATE TABLE suppliers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250)
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250),
    price FLOAT, 
    category VARCHAR(50),
    units_sold INT,
    supplier_id INT,
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);
</code></pre>

4.You could add these entries.
<pre><code>
INSERT INTO suppliers (name) VALUES ('Bosta');
INSERT INTO suppliers (name) VALUES ('Apple');

INSERT INTO products (name, price, category, units_sold, supplier_id) VALUES ('Red T-shirt', 10, 'Fashion', 150, 1);
INSERT INTO products (name, price, category, units_sold, supplier_id) VALUES ('Green T-shirt V-Neck', 30, 'Fashion', 50, 2);
INSERT INTO products (name, price, category, units_sold, supplier_id) VALUES ('Blue Jeans', 25, 'Fashion', 250, 1);
</code></pre>



## Ports and Endpoints

The server is on the port `localhost://8080` and the database is on `5432`. The design document is titled `Design_Document.pdf`.
