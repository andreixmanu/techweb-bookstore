"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var body_parser_1 = require("body-parser");
var app = (0, express_1["default"])();
var port = 3000;
// MongoDB connection
mongoose_1["default"].connect('mongodb://mongodb:27017/uni-bookstore')
    .then(function () { return console.log('MongoDB connected'); })["catch"](function (err) { return console.error('MongoDB connection error:', err); });
app.use(body_parser_1["default"].json());
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
