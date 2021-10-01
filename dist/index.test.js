"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const en_json_1 = __importDefault(require("./i18n/en.json"));
const _1 = require(".");
it('prints hello world', () => {
    const log = jest.spyOn(console, 'log');
    (0, _1.printHelloWorld)();
    expect(log).toHaveBeenCalledWith(en_json_1.default.Hello_World);
    expect(log).toHaveBeenCalledTimes(1);
});
