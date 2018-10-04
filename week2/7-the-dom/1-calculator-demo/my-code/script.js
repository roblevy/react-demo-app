
function handleButtonClick(event) {
  // Get current text content
  const display = document.getElementsByClassName('display')[0];
  const displayText = display.textContent;
  // Which button was pressed?
  const button = event.target;
  console.log('The button pressed was', button.textContent);
  // Set the text content to the old content plus the button
  //  YOUR CODE HERE
}

// Button 7
const button7 = document.querySelectorAll('.buttons .button-row div')[0];
button7.addEventListener('click', handleButtonClick);

// Button 8
// const button8 = document.querySelectorAll('.buttons .button-row div')[1];
// YOUR CODE HERE

// Here's another way of adding event listeners.
// The function is written in place!
button7.addEventListener('mouseover', function(event) {
  // console.log('mouseover!!');
});
