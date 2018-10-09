const possibilities = [
  { name: 'rock', beats: 'scissors', beatenBy: 'paper' },
  { name: 'paper', beats: 'rock', beatenBy: 'scissors' },
  { name: 'scissors', beats: 'paper', beatenBy: 'rock' }
];


const $heading = $('h1');
const $optionsContainer = $('.options-container');

const $displayUserChoice = $('.results-container .show-choice:first-of-type');

const $displayCompChoice = $('.results-container .show-choice:nth-of-type(2)');

const $displayWinner = $('.results-container .show-choice:last-of-type');

const $resetBtn = $('button');

const options = [];
let userChoiceIndex = null;
let compChoice = null;

$heading.html('Rock Paper Scissors');

$resetBtn.html('Play Again');
$resetBtn.addClass('reset');
$resetBtn.css('backgroundColor', 'pink');
$resetBtn.css('color', 'papayawhip');


const $spans = $('span');
console.log('Spans are', $spans);

$spans.each(function() {
  const $span = $(this);
  const currentHtml = $span.html();
  $span.html(currentHtml.toUpperCase());
  // $span.css('fontSize', '28px');
});


$spans.css({
  fontSize: '140px',
  color: 'yellow',
  backgroundColor: 'hotpink'
});


$spans.on('mouseover', function() {
  const $span = $(this);
  $span.css({
    fontSize: '300px',
    color: 'orange'
  });
});

$spans.on('mouseout', function() {
  const $span = $(this);
  $span.css({
    fontSize: '140px',
    color: 'yellow'
  });
});
