const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('button[data-action="start"]');
const stopButton = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

let intervalId = null;

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandColor() {
	let idx = randomIntegerFromInterval(0, colors.length - 1);
	return colors[idx]
};

function onTick() {
	body.style.backgroundColor = getRandColor();
};

function onStartButtonClick(event) {
	startButton.disabled = true;
	intervalId = setInterval(onTick, 1000);
};

function onStopButtonClick(event) {
	startButton.disabled = false;
	clearInterval(intervalId);
};

startButton.addEventListener('click', onStartButtonClick);
stopButton.addEventListener('click', onStopButtonClick);