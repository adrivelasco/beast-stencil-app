'use strict';
exports.__esModule = true;
var express = require("express");
var path = require("path");
var compression = require("compression");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var sanitized = require("express-sanitized");
var morgan = require("morgan");
var stencil = require("@stencil/core/server");
var config_1 = require("../config");
var Main = /** @class */ (function () {
    function Main() {
        this.app = express();
        this.injectMiddlewares();
        this.routing();
    }
    Main.prototype.injectMiddlewares = function () {
        global.navigator = global.navigator || {};
        global.navigator.userAgent = global.navigator.userAgent || 'all';
        if (config_1["default"].env === 'development') {
            this.app.use(morgan('dev'));
            this.app.enable('trust proxy');
        }
        this.app.disable('x-powered-by');
        this.app.use(cookieParser());
        this.app.use(sanitized());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(compression());
        var wwwDir = stencil.initApp({
            app: this.app,
            configPath: path.resolve(__dirname, '../../')
        }).wwwDir;
        this.app.use(express.static(wwwDir));
    };
    Main.prototype.routing = function () {
        // App's routes here
    };
    return Main;
}());
exports["default"] = new Main().app;
