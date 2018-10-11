// Objects
// Objects gather together data (in the form of properties)
// and functions (in the form of methods) into one place.
const joshsFaveSubjects = ['Objects', 'Arrays'];
const student = {
  name: 'josh',
  age: 105,
  greet: function(personToGreet) {
    return `Hello ${personToGreet}, my name is Josh`;
  },
  lunchboxItems: [ 'banana', 'sandwich' ],
  bestFriend: {
    name: 'james',
    age: 20
  },
  faveSubjects: joshsFaveSubjects
};

// Accessing properties and methods of objects:
const joshsAge = student.age;
const joshsName = student['name'];
const thingToGet = 'faveSubjects';
student[thingToGet]; // Get Josh's fave subjects

// Add properties and methods to existing objects
student.car = 'Renault';
student.house = {
  address: '110 Acacia Avenue',
  doorColor: 'blue'
};
student.fly = function() {
  alert('I cannot fly. Don\'t push...');
};

// Arrays
// Ordered collections of data/objects/functions
const bucketOfThings = [
  'a', 1, { name: 'Lucia' }, [ 1, 2, 3 ], 'stuff', student
];
// Accessed using indexing:
const student2 = bucketOfThings[2];
// Get Lucia out of the object
bucketOfThings[2].name;
// or
student2.name;

// Add something to an array
bucketOfThings[3].push(4);
// Get the 2 out of the array
bucketOfThings[3][1];

// Get Josh:
const josh = bucketOfThings[5];
