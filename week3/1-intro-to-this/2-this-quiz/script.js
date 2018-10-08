function showMeThis() {
  console.log('this is', this);
}

// =======================
console.log('Question 1');
// showMeThis();

// =======================
console.log('Question 2');
// const rob = {
//   name: 'rob',
//   favouriteFruit: 'banana',
//   gimmeThis: showMeThis
// };
// rob.gimmeThis();

// =======================
console.log('Question 3');
// const ellie = {
//   name: 'ellie',
//   favouriteFruit: 'dragon fruit 💥'
// };
// ellie.reportThis = function() {
//   console.log('I am Ellie. This is', this);
// };
// ellie.reportThis();

// =======================
console.log('Question 4');
// function returnAnObject() {
//   const matt = {
//     name: 'matt',
//     favouriteFruit: 'the humble grape',
//     gimmeThis: function () {
//       console.log('I am Matt. This is', this);
//     }
//   };
//   return matt;
// }
// returnAnObject().gimmeThis();
//

// =======================
console.log('Question 5');
// function returnAFunction() {
//   return showMeThis;
// }
// const aFunction = returnAFunction();
// aFunction();


// =======================
console.log('Question 6');
// const clickableDiv = document.getElementById('clickable');
// clickableDiv.addEventListener('click', showMeThis);
// console.log('Click the div to see the answer');

// =======================
console.log('Question 7');
// const mike = {
//   name: 'Mike',
//   gimmeThis: () => {
//     const whatIsThis = this;
//     console.log('this is', whatIsThis);
//   }
// };
// mike.gimmeThis();

// =======================
console.log('Question 8');
// const underling = {
//   name: 'I am underling',
//   boss: mike
// };
// underling.boss.gimmeThis();

// =======================
console.log('Question 9');
// const casey = {
//   name: 'Casey',
//   colleague: function() {
//     const astrid = {
//       name: 'Astrid',
//       gimmeThis: () => {
//         console.log('this is', this);
//       }
//     };
//     return astrid;
//   }
// };
// casey.colleague().gimmeThis();
