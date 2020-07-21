import i18n from './i18n/en.json';
import { printHelloWorld } from '.';

it('prints hello world', () => {
  const log = jest.spyOn(console, 'log');
  printHelloWorld();
  expect(log).toHaveBeenCalledWith(i18n.Hello_World);
  expect(log).toHaveBeenCalledTimes(1);
});
