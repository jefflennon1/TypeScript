"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var api = express_1.default();
api.get('/', routes_1.default);
api.listen('5555', function () {
    console.log('BackEnd started! 😪');
});
