const display = document.querySelector('.display');
display.textContent = 'Dates and timing';

display.textContent = new Date();

const today = new Date();
const yesterday = today - 1;
display.textContent = `Today ${today} Yesterday ${yesterday}`;

display.textContent = `The year is ${today.getFullYear()}`;
const yesterdaysDate = new Date(today.getFullYear(),
  today.getMonth(),
  today.getDate() - 1);

display.textContent = `Yesterday was ${yesterdaysDate.toLocaleDateString()}`;
// Also check out: toLocaleString and toLocaleTimeString

// Calculating yesterday
const oneDay = 24 * 60 * 60 * 1000;
new Date(new Date() - oneDay)
