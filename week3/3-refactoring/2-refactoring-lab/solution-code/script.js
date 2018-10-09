// Global variables
let currentTime = 10;
let timerIntervalId;
let timerIsRunning = false;

// DOM Elements
const startStopElement = document.getElementById('start-stop');
const timerElement = document.getElementById('timer-display');
const resetElement = document.getElementById('reset');

startStopElement.addEventListener('click', handleStartStopClick);
resetElement.addEventListener('click', resetTimer);

function handleStartStopClick() {
  timerIsRunning = !timerIsRunning;
  if (timerIsRunning === true) {
    timerIntervalId = setInterval(function() {
      updateTimer();
    }, 1000);
  } else {
    clearInterval(timerIntervalId);
  }
}

function updateTimer() {
  if (timerIsRunning) {
    if (currentTime > 0) {
      currentTime--;
    } else {
      timerIsRunning = false;
    }
  }
  timerElement.textContent=currentTime;
}

function resetTimer() {
  currentTime = 10;
  timerIsRunning = false;
  clearInterval(timerIntervalId);
  timerElement.textContent = currentTime;
}
