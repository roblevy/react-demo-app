// 1
const message = 'hello my name is rob';
console.log(message.split(' '));

// 2
const greeting = 'Hello World';
console.log(greeting.substr(6));

// 3
const roberto = 'roberto';
console.log(roberto.toUpperCase().substr(0, 1) + roberto.substr(1));

// 4
const numberAsString = '12';
console.log('A number as a string', numberAsString, 'and as a number', parseInt(numberAsString));

// 5
const decimal = 15.827993;
console.log('A decimal', decimal, 'Rounded becomes', Math.round(decimal, 2).toString());

// 6
console.log('A random number between 0 and 1: ', Math.random());

// 7
console.log('A random number between 1 and 6: ', Math.round(Math.random() * 6));

// 8
const neg = -5;
Math.abs('neg is', neg, '. The absolute value is', Math.abs(-5));

// 9
const itIsTrue = true;
console.log(!itIsTrue);
