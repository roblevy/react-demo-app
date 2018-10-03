// Create an object
const classroom8 = { name: 'Classroom 8', capacity: 42 };

// PROPERTIES
// Add/overwrite a property
classroom8.occupant = 'WDI 37';
// or
classroom8['lightsOn'] = true;

// Creating an empty object
const ga = {}; // the empty object
ga.location = 'London';
ga['director'] = 'JDB';

console.log('The director of GA is', ga.director);

// Caution! String + Object = String
// BAD:
console.log('Classroom 8 is' + classroom8);
// GOOD
console.log('Classroom 8 is', classroom8);

// METHODS:
const classroom1 = {
  name: 'Classroom 1',
  switchLightsOn: function() {
    // 'this' inside an object method refers to the object itself
    this.lightsOn = true;
  },
  lightsOn: false
};

// Adding an object method to an existing object
function switchThemOff() {
  this.lightsOn = false;
}
// Add an object method using an existing function definition.
// NOTE: We are not invoking the function here!
classroom1.switchLightsOff = switchThemOff;

// Here's what happens when we invoke a function when Adding
// an object method/property:
function calculateCapacity(numberOfRows) {
  return numberOfRows * 6;
}
const classroom3 = {
  capacity: calculateCapacity(100)
};
classroom1.capacity = calculateCapacity(7);
