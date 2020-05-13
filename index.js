"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var getYear = function (date) {
    return "" + date.getFullYear();
};
app.get('/', function (req, res) {
    var year = getYear(new Date());
    res.send("Hello World ! " + year);
});
app.listen(8080, function () {
    console.log('App listening on port 8080!');
});
