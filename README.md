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

1. Run `docker compose up` for the docker image to be built.
<!-- 2. Create a Postgres Database:
    1. Connect to the Postgres console
    2. Run the following command `CREATE USER shopping_user WITH PASSWORD 'password123';`
    3. Create the Databases `shopping` and `shopping_test`
    4. Connect to both databases and `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;` -->

2. Add the following `.env` file:

<pre><code>
POSTGRES_HOST=127.0.0.1
POSTGRES_DB=shopping
POSTGRES_TEST_DB=shopping_test
POSTGRES_USER=shopping_user
POSTGRES_PASSWORD=password123
ENV=dev
BCRYPT_PASSWORD=speak-friend-and-enter
SALT_ROUNDS=10
TOKEN_SECRET=eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3Mjg0NzYxNywiaWF0IjoxNjcyODQ3NjE3fQ.5fR4ht_kHQdC_kaUfe7YZTgm72xaaWqlrBNlZJz_HSo
</code></pre>


## Ports and Endpoints

The server is on the port `localhost://3000` and the database is on `5432`. The design document is titled `Design_Document.pdf`.
