"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var product_handler_1 = __importDefault(require("./handlers/product_handler"));
var dotenv_1 = __importDefault(require("dotenv"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
var corsOptions = {
    origin: 'http:/someotherdomain.com',
    optionsSucessStatus: 200
};
app.use((0, cors_1["default"])(corsOptions));
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/test-cors', (0, cors_1["default"])(), function (req, res, next) {
    res.json({ msg: 'This is CORS enabled with a middle ware' });
});
(0, product_handler_1["default"])(app);
dotenv_1["default"].config();
var PORT = process.env.NODE_DOCKER_PORT || 3000;
console.log(PORT);
app.listen(PORT, function () {
    console.log("starting app on: ".concat(address));
});
