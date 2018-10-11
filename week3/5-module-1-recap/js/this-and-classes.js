// this: is THe Invoker, Stupid!
const matt = { name: 'matt', greet: function() { return 'hi!'; } };
matt.greet();
// ^
// |
// matt is the invoker of the method 'greet'.
// The invoker is whatever is on the left of the dot.
// If there's no invoker, then the function is invoked using
// the global object, a.k.a. Window
const ellie = {
  name: 'Ellie',
  greet: function() {
    return `Hi! My name is ${this.name}`;
  },
  age: 23
};
// 'this' is decided when the function is invoked, not when
// it's defined
// We normally invoke the function using its containg object:
ellie.greet();
// now this is assigned to the ellie object and the function is run.

// Nested objects and this:
const rob = {
  name: 'Rob',
  favouriteCheese: {
    name: 'Cheddar',
    announceSelf: function () {
      return 'Eat me, for I am ' + this.name;
    }
  }
};
rob.favouriteCheese.announceSelf();

// Warning: arrow functions don't get their own 'this'

// CLASSES
// An ES6 method for creating objects according to a template.
// A class is both a template and a factory for objects.
class Student {
  constructor(name, favouriteCheese) {
    console.log('I am ', name, 'and the cheese of the month should be', favouriteCheese);
    this.name = name;
    this.age = 200;
    this.favouriteCheese = favouriteCheese;
  }
}

// Instances of classes are created using the 'new' keyword
// const anaïs = new Student('anaïs');
// The 'this' keyword is bound to the object which is
// about to be created.

// Classes can have methods too.
class Hat {
  constructor(genre, colour, material) {
    this.genre = genre;
    this.colour = colour;
    this.material = material;
  }

  addFeather() {
    this.feather = true;
  }
}

// You can make more specific versions of classes
class TopHat extends Hat {
  constructor(height) {
    // The parent constructor has to be called manually here:
    super('Top', 'black', 'silk');
    this.height = height;
  }
}
const joeLsHat = new TopHat(1700);
joeLsHat.addFeather();
