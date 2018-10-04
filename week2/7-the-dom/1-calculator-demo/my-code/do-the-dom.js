// Get an element by its ID
const myDiv = document.getElementById('content');

// Get/set the content
const divContent = myDiv.textContent;
// alert(divContent);
myDiv.textContent = 'I am forever changed';

// Get/set the style
myDiv.style.backgroundColor = 'pink'; // Notice the quotes
myDiv.style.color = 'steelblue';

// Create new elements!
const newP = document.createElement('p');
newP.textContent = 'I am new 🍔';
myDiv.appendChild(newP);

// Dynamically update a webpage
const username = prompt('What is your name?');
newP.textContent = 'Hello ' + username + '! Here is your 🍔';
