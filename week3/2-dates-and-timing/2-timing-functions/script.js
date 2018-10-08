const clickDiv = document.querySelector('.click-me');

clickDiv.addEventListener('click', function(event) {
  setTimeout(() => alert('clicked!!!'), 3000);
  // Stop interval
  clearInterval(interval);
});

console.log('Javascript loaded');
setTimeout(function() {
  console.log('We waited for you...');
}, 3000);

let i = 0;
const interval = setInterval(function() {
  clickDiv.textContent = `It has happened ${i} times`;
  i = i + 1;
  console.log('The if statement is about to be evaluated');
  // Stop after a certain number of times
  if (i > 5) {
    clearInterval(interval);
    alert('STOPP!!');
  }
}, 1000);
