// truthy vs. falsey
if ('') {
  console.log('empty string!');
} else {
  console.log('empty string is falsey!');
}


if ('false') {
  console.log('false!');
}

// comparisons
if (0 == '') {
  console.log('Zero two equals empty string!!???');
}
if ('' === '') {
  console.log('Emptystring and emptystring are the same');
}
const a = 500;
const b = 400;
if (b >= a) {
  console.log('B is bigger?');
}
if (b <= a) {
  console.log('B is smaller?');
}
if (b !== undefined) {
  console.log('b and undefined are not equal');
}
let c; // c is undefined
if (b !== 400) {
  console.log('b is not 400');
}
if (b === 400) {
  console.log('b is 400');
}
// Loops
let d = 1;
while (d < 5) {
  // alert(d);
  d += 1;
}
console.log('DONE!!');

// // Infinite loop!
// while (5 > 3) {
//   console.log('Hello WDI 37');
// }

for(let e = 2; e < 500; e = e + 100) {
  console.log('e is', e);
}

for(let e = 100; e > 1; e = e / 2) {
  console.log('e is now', e);
}

// Complex if/elses:
// (Only the first true one will run)
const z = 50;
if (z < 10) {
  console.log('z is small');
} else if (z < 30) {
  console.log('z is medium');
} else if (z < 60) {
  console.log('z is big');
} else {
  console.log('z is massive');
}
