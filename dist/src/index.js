"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const en_json_1 = __importDefault(require("../i18n/en.json"));
exports.printHelloWorld = () => {
    console.log(en_json_1.default.Hello_World);
};
exports.printHelloWorld();
