"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printHelloWorld = void 0;
const en_json_1 = __importDefault(require("./i18n/en.json"));
const printHelloWorld = () => {
    /* eslint-disable no-console */
    console.log(en_json_1.default.Hello_World);
};
exports.printHelloWorld = printHelloWorld;
(0, exports.printHelloWorld)();
