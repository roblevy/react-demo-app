console.log('Module 1 recap');

// Functions
// Defining a function:
// 1. a name (optional): add
// 2. some arguments: x and y
// 3. the function body: return x + y;
// 4. the return value (optional): x + y;
function add(x, y) {
  return x + y;
}

// An anonymous function
const divide = function(x, y) {
  return x / y;
}

// Invoking a Function
const lowest = 5;
const highest = 12;
const theSum = add(lowest, highest);

// Arguments are passed by ORDER not by NAME.
// Here, for example, when the function runs,
// x (the first argument) will be zero and
// y (the second argument) will be 100
const y = 0;
const x = 100;
add(y, x);

console.log(divide(15, 3));

// RETURN VALUES
// This value doesn't return anything...
function returnsNothing(arg1, arg2) {
  console.log('arg1 is', arg1);
}

// ...which means c is undefined
const c = returnsNothing(100, 5);

// This function returns a number....
function getHeight() {
  return 200;
}

// which can be used immediately like this:
const div = document.querySelector('div');
div.css.height = getHeight();

// This function has a side-effect, but returns nothing
function addBananas(array) {
  array.push('bananas');
}

// The fruit array is changed by running the addBananas function
const fruit = ['apple', 'grape'];
addBananas(fruit);
