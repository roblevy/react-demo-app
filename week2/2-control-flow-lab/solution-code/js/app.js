// Color converter
const hexColour = prompt('message');
console.log(hexColour);
const r = hexColour.substr(0, 2); // Start 0, length 2
const g = hexColour.substr(2, 2); // Start 2, length 2
const b = hexColour.substr(4, 2); // Start 4, length 2
const rDecimal = parseInt(r, 16); // e.g. ff => 255
const gDecimal = parseInt(g, 16); // e.g. ff => 255
const bDecimal = parseInt(b, 16); // e.g. ff => 255
console.log('rgb is', rDecimal, gDecimal, bDecimal);
// FizzBuzz

// Guess the number

// Password strength checker

// Mastermind
