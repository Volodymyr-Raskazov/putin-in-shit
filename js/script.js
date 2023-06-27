'use strict'
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const boom = document.querySelector('.boom');
const gameTime = 20000;

let lastHole;
let timeUp = false;
let score = 0;

const playSound = (soundFile, volume) => {
	const sound = new Audio(soundFile);
	sound.volume = volume;
	sound.play();
}

const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

const randomHole = (holes) => {
	let idx;
	let hole;
	do {
		idx = Math.floor(Math.random() * holes.length);
		hole = holes[idx];
	} while (hole === lastHole);
	lastHole = hole;
	return hole;
}

const peep = () => {
	if (!timeUp) {
		const time = randomTime(400, 1000);
		const hole = randomHole(holes);
		hole.classList.add('up');
		setTimeout(() => {
			hole.classList.remove('up');
			peep();
		}, time);
	}
}

const countdown = () => {
	let time = gameTime / 1000;
	startBtn.textContent = `${time}s left`;
	const timerId = setInterval(() => {
		time--;
		startBtn.textContent = `${time}s left`;
		if (time === 0) {
			startBtn.textContent = `Start!`;
			clearInterval(timerId);
		}
	}, 1000);
}

const startGame = () => {
	resetScoreboard();
	setTimeUpFlag();
	setScoreToZero();
	peep();
	countdown();
	setTimeoutForGameEnd();
}

const resetScoreboard = () => {
	scoreBoard.textContent = 0;
}
const setTimeUpFlag = () => {
	timeUp = false;
}
const setScoreToZero = () => {
	score = 0;
}
const setTimeoutForGameEnd = () => {
	setTimeout(() => {
		timeUp = true;
	}, gameTime);
}

function whack(e) {
	if (!e.isTrusted) return;

	// Update the score
	score++;
	scoreBoard.textContent = score;

	// Play the sound
	playSound('sound/boom.mp3', 0.2);

	// Show the boom effect
	boom.style.display = 'block';
	boom.style.top = this.offsetParent.offsetTop + 'px';
	boom.style.left = this.offsetParent.offsetLeft + 'px';

	// Hide the boom effect after 100ms
	setTimeout(() => {
		boom.style.display = 'none';
		this.parentNode.classList.remove('up');
	}, 100);
}

moles.forEach(mole => mole.addEventListener('click', whack));