"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("../services/CreateUser"));
function HelloWord(request, response) {
    var user = CreateUser_1.default({
        username: 'Jefferson',
        email: 'jeffersonlennon@outlook.com',
        password: '12345'
    });
    console.log(user);
    return response.json({ message: 'Hello word' });
}
exports.default = HelloWord;
