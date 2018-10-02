function addNumbers(number1, number2) {
  console.log('Inside add numbers we have', number1, number2);
  return number1 + number2;
}

// The result is calculate but thrown away!
addNumbers(95, 37);
// To save the result
const result = addNumbers(95, 37);

console.log('95 + 37 = ', result);
