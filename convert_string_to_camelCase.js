//* Convert a string to camel case

const convertStringToCamelCaseOneLine = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

let str = 'background-color';
str = convertStringToCamelCaseOneLine(str);
console.log(str);