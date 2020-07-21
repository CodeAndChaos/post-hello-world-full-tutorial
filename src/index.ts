import i18n from './i18n/en.json';

export const printHelloWorld = ():void => {
  /* eslint-disable no-console */
  console.log(i18n.Hello_World);
};

printHelloWorld();
