/* eslint-disable no-unused-vars */

// 1. Write a Javascript function called `addThenSquare`
// This function should accept two arguments, which you can assume will be numbers.
//
// Your function should add the two numbers then square the result.
// Test your function in Chrome with various numbers.
function addThenSquare(firstNumber, secondNumber) {
  return (firstNumber + secondNumber) ** 2;
}
const result = addThenSquare(10, 6);
console.log('(10 + 6) squared is', result);

// 2. Write a function which accepts a single argument.
//    The function assumes the argument is an array and tries to return the third element.
//    If the array is shorter than three elements, the function returns early with an
//    appropriate message.
function thirdElement(inputArray) {
  if (inputArray.length < 3) {
    return 'The input array was too long';
  }
  return inputArray[2];
}
const firstResult = thirdElement(['a', 1, -1000]);
const secondResult = thirdElement([100, 'abc']);
console.log(firstResult);
console.log(secondResult);

// 3. Write a function `getLengths` that accepts a single argument as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.
// e.g. const someStrings = ['abc', 'hello', 'bananas'];
//      const someLengths = getLengths(someStrings);
//      console.log(someLengths);
// This should show [3, 5, 7] in the console.
function getLengths(inputArray) {
  const lengths = [];
  // Now use a for loop and with Array.push inside it
  for (let i = 0; i < inputArray.length; i++) {
    const currentWord = inputArray[i];
    lengths.push(currentWord.length);
  }
  return lengths;
}
const someStrings = ['abc', 'hello', 'bananas'];
const someLengths = getLengths(someStrings);
console.log(someLengths);

// 4.  Write a function `wordReverse` that accepts a single argument, a string.
// The method should return a string with the order of the words reversed.
// Don't worry
// about punctuation.
// For example, 'my breakfast tasted great' => 'great tasted breakfast my'
// HINT: You will need String.split and Array.join
function wordReverse(someString) {
  const words = someString.split(' ');
  const reversed = words.reverse();
  const reversedString = reversed.join(' ');
  return reversedString;
}
const sentence = 'i like bananas very much';
const reversed = wordReverse(sentence);
console.log('Reversed sentence is', reversed);
