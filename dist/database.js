"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1["default"].config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, POSTGRESDB_DOCKER_PORT = _a.POSTGRESDB_DOCKER_PORT, POSTGRESDB_LOCAL_PORT = _a.POSTGRESDB_LOCAL_PORT, NODE_DOCKER_PORT = _a.NODE_DOCKER_PORT, NODE_LOCAL_PORT = _a.NODE_LOCAL_PORT, ENV = _a.ENV;
var Client = new pg_1.Pool();
console.log(ENV);
if (ENV === 'dev') {
    Client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
if (ENV === 'test') {
    Client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD
    });
}
exports["default"] = Client;
