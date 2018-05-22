'use strict';
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config();
var app_1 = require("./app");
var config_1 = require("./config");
app_1["default"].listen(config_1["default"].port, function () {
    return console.log("Nodejs server listening on port " + config_1["default"].port + ". (" + config_1["default"].env + ")");
});
