



function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function report(someFunction) {
  const result = someFunction(10, 20);
  console.log('The result was', result);
}

report(add);
report(subtract);
// With an anonymous function:
report(function(number1, number2) {
  return number1 * number2;
});

// Filtering an array
const someNumbers = [2, 4, 6, 7, 9, 12];

function smallerThan3(array) {
  const returnArray = [];
  for(let i = 0; i < array.length; i++) {
    if (array[i] < 3) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}

function biggerThan5(array) {
  const returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 5) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}

function filterByAnything(array, anyOldFunction) {
  const returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (anyOldFunction(array[i])) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
}

function numberIsBiggerThan5(number) {
  return number > 5;
}
function numberIsBiggerThan10(number) {
  return number > 10;
}

filterByAnything([1, 3, 6], numberIsBiggerThan5);

filterByAnything([1, 5, 100, 'carrot', 150, 'cat', 250, 'banana', ['a', 'b', 'c'], 130], function(element) {
  return element.toString().startsWith('c');
});

filterByAnything([1, 5, 100, 150], function(number) {
  return number.toString().includes('5');
});

filterByAnything([1, 5, 100, 'carrot', 150, 'cat', 250, 'banana', ['a', 'b', 'c'], 130], function(element) {
  return element.toString().length >= 3;
});
