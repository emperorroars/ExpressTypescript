"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.default = router;
router.get('/', function (req, res, next) {
    res.status(200).json({ todos: todos });
});
