"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
it('prints hello world', () => {
    const log = jest.spyOn(console, 'log');
    _1.printHelloWorld();
    expect(log).toHaveBeenCalledWith("Hello World!");
    expect(log).toHaveBeenCalledTimes(1);
});
