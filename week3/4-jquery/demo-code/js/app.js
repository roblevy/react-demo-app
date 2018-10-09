// Object of all possibilities
const possibilities = [
  { name: 'rock', beats: 'scissors', beatenBy: 'paper' },
  { name: 'paper', beats: 'rock', beatenBy: 'scissors' },
  { name: 'scissors', beats: 'paper', beatenBy: 'rock' }
];

// DOM Elements
const heading = document.querySelector('h1');
const optionsContainer = document.querySelector('.options-container');
const displayUserChoice = document.querySelector('.results-container .show-choice:first-of-type');
const displayCompChoice = document.querySelector('.results-container .show-choice:nth-of-type(2)');
const displayWinner = document.querySelector('.results-container .show-choice:last-of-type');
const resetBtn = document.querySelector('button');

// Variables
const options = [];
let userChoiceIndex = null;
let compChoice = null;

// Function to get random computer choice
const getCompChoice = function() {
  // Get a random number and return the array in the possibilities object with that index.
  return compChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
};


// Function to check for a win.
const getWinner = function() {
  if (possibilities[userChoiceIndex].beats === compChoice.name) {
    displayWinner.innerHTML = 'User wins';
  } else if (possibilities[userChoiceIndex].beatenBy === compChoice.name) {
    displayWinner.innerHTML = 'Computer wins';
  } else {
    displayWinner.innerHTML = 'Draw';
  }
};

// window.addEventListener('DOMContentLoaded', () => {

  // Get computer to make a choice
  getCompChoice();

  heading.innerHTML = 'Rock Paper Scissors';

  resetBtn.classList.add('reset');
  resetBtn.innerHTML = 'Play Again';

  // for each option...
  for(let i = 0; i < possibilities.length; i++) {
    // ... create a div, give it a class, an attribute, and some inner HTML
    const optionBtn = document.createElement('div');
    optionBtn.classList.add('option');
    optionBtn.innerHTML = possibilities[i].name;
    optionBtn.setAttribute('id', i);
    optionsContainer.appendChild(optionBtn);

    // push to array to use later...
    options.push(optionBtn);
  }


  // Loop through array
  options.forEach(option => {
    // Assign event listener to each div.
    option.addEventListener('click', function(event) {
      userChoiceIndex = event.target.getAttribute('id');
      // Log two choices to page
      displayUserChoice.innerHTML = `User selected ${event.target.innerHTML}`;
      displayCompChoice.innerHTML = `Computer selected ${compChoice.name}`;

      // Find the winner
      getWinner();
    });
  });


  // Reset game on click
  resetBtn.addEventListener('click', function() {
    // Reset displayed choices and winner
    displayUserChoice.innerHTML = '';
    displayCompChoice.innerHTML = '';
    displayWinner.innerHTML = '';
    // Computer selects a random answer again.
    getCompChoice();
  });
});
