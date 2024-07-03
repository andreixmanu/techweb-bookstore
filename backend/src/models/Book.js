"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    price: { type: Number, required: true }
});
exports["default"] = mongoose_1["default"].model('Book', bookSchema);
