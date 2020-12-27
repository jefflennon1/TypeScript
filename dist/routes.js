"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function HelloWord(request, response) {
    return response.json({ message: 'Hello word' });
}
exports.default = HelloWord;
