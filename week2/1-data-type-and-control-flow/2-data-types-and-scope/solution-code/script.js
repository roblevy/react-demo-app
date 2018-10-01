// GLOBAL SCOPE
var a = 'hello';

function myHouse() {
  // FUNCTION SCOPE
  var b = 'goodbye';
  console.log('b inside my house is', b);
}

if (a === 'hello') {
  // GLOBAL SCOPE ☹️
  var c = 3.14; // The last time we will write var
  // BLOCK SCOPE :)
  const d = true;
}

console.log('c outside my block is', c);
console.log('d outside my block is', d);

// You can't reassign a const
const e = 'bananas';
e = 'bananarz';

myHouse();
console.log('b outside my house is', b);

function myPiedATerre {
  if(a === 'hello') { // a HAS GLOBAL SCOPE!!!
    const f = 'teach me something'; // BLOCK SCOPE
    var g = 'gulp'; // FUNCTION SCOPE
  }
  let z = 'wdi 37' // FUNCTION SCOPE
}
