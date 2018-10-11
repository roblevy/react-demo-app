function toUpperCase(string) {
  return string.toUpperCase();
}

function mapToUpperCase(array) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const mappedElement = toUpperCase(currentElement);
    mappedArray.push(mappedElement);
  }
  return mappedArray;
}

function mapToAnything(array, mappingFunction) {
  const mappedArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    const mappedElement = mappingFunction(currentElement);
    mappedArray.push(mappedElement);
  }
  return mappedArray;
}

// Running the mapToAnything function:
mapToAnything(a, function(string) {
	return string + string + string;
});

mapToAnything(a, function(x) {
	return 'goodbye' + x + 'hello';
});

// Here is array.map. It works in the same way
// as our mapToAnything function
const a = ['a', 'c', 'def'];
a.map(function(string) {
  return string + string + string;
});

// ARROW FUNCTIONS
// Same as normal functions, but shorter
// Type 1: proper arrow functions
// Let's rewrite that array.map stringstringstring thing above:
a.map((string) => {
  return string + string + string;
});
// Type 2: shortcut arrow functions
// No curly brackets, no return keyword, one line only
a.map((string) => string + string + string);
// If there's only one argument, the brackets can be omitted
a.map(string => string + string + string);
