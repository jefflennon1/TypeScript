"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(_a) {
    var username = _a.username, email = _a.email, password = _a.password;
    var user = {
        username: username,
        email: email,
        password: password
    };
    return user;
}
exports.default = CreateUser;
