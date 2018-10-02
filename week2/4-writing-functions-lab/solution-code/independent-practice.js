/* eslint-disable no-unused-vars */

//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
const lengths = function(arr) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr;
};

lengths(['array', 'object', 'function']);

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

const transmogrifier = function(a, b, c) {
  return Math.pow((a * b), c);
};

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

// 3.  Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry
// about punctuation.

const wordReverse = function(string) {
  return string.split('').reverse().join('');
};

wordReverse('Ellie is cool :)');
wordReverse('JavaScript is cooler');
