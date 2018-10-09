// Possibilities
const possibilities = [
  { name: 'rock', beats: 'scissors', beatenBy: 'paper' },
  { name: 'paper', beats: 'rock', beatenBy: 'scissors' },
  { name: 'scissors', beats: 'paper', beatenBy: 'rock' }
];

// DOM Elements
const $optionsContainer = $('.options-container');
const $displayUserChoice = $('.results-container .show-choice:first-of-type');
const $displayCompChoice = $('.results-container .show-choice:nth-of-type(2)');
const $displayWinner = $('.results-container .show-choice:last-of-type');
const $resetBtn = $('.reset');

// Variables
const options = [];
let userChoiceIndex = null;
let compChoice = null;
let userHasPlayed = false;

// Functions
function updateHtml(el, string) {
  el.html(string);
}

function getCompChoice() {
  return compChoice = possibilities[Math.floor(Math.random() * possibilities.length)];
}

function createButtons(i) {
  const $optionBtns = $optionsContainer.append($(`<div class="option" id="${i}">${possibilities[i].name}</div>`));
  options.push($optionBtns);
}

function findWinner() {
  if(possibilities[userChoiceIndex].beats === compChoice.name) {
    updateHtml($displayWinner, 'User wins!');
  } else if (possibilities[userChoiceIndex].beatenBy === compChoice.name) {
    updateHtml($displayWinner, 'Computer wins!');
  } else {
    updateHtml($displayWinner, 'Draw!');
  }
}

function toggleUserHasPlayed() {
  if(userHasPlayed) {
    return userHasPlayed = false;
  }
  return userHasPlayed = true;
}


// Game starts!
getCompChoice();

for(let i = 0; i < possibilities.length; i++) {
  createButtons(i);
}

options.forEach($option => {
  $option.on('click', function(e) {
    if(!userHasPlayed) {
      userChoiceIndex = e.target.id;
      updateHtml($displayUserChoice, `User selected ${e.target.innerHTML}`);
      updateHtml($displayCompChoice, `Computer selected ${compChoice.name}`);
      findWinner();
    }
    toggleUserHasPlayed();
  });
});

$resetBtn.on('click', function() {
  updateHtml($displayUserChoice, '');
  updateHtml($displayCompChoice, '');
  updateHtml($displayWinner, '');
  toggleUserHasPlayed();
});
