
function handleButtonClick(event) {
  // Get current text content
  const display = document.getElementsByClassName('display')[0];
  // Which button was pressed?
  const button = event.target;
  // Set the text content to the old content plus the button
  display.textContent += button.textContent;
}

const allButtons = document.querySelectorAll('.buttons .button-row div');
allButtons.forEach(function(button) {
  button.addEventListener('click', handleButtonClick);
});

allButtons.forEach(function(button) {
  button.addEventListener('mousedown', function(event) {
    const button = event.target;
    button.classList.add('pushed');
  });
  button.addEventListener('mouseup', function(event) {
    const button = event.target;
    button.classList.remove('pushed');
  });
});
