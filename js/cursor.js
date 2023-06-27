'use strict';
const game = document.querySelector('.game');
const cursor = document.querySelector(".cursor");
const startBtn = document.querySelector('.start button');
// const holes = document.querySelectorAll('.hole');

const mouseMove = (e) => {
	let x = e.clientX;
	let y = e.clientY;
	cursor.style.left = `${x}px`;
	cursor.style.top = `${y}px`;
};

if ('maxTouchPoints' in navigator && navigator.maxTouchPoints === 0) {
	document.addEventListener('mousemove', mouseMove);
	holes.forEach((hole) => {
		hole.addEventListener('click', () => {
			cursor.classList.add('animate');
			setTimeout(() => {
				cursor.classList.remove('animate');
			}, 200);
		});
	});
	game.addEventListener('mouseover', () => {
		cursor.style.display = 'block';
		cursor.style.height = '80px';
		cursor.style.width = '80px';
		cursor.style.backgroundImage = 'url(img/humm.png)';
	});
	game.addEventListener('mouseout', () => {
		cursor.style.display = 'none';
	});
	startBtn.addEventListener('mouseover', () => {
		cursor.style.display = 'block';
		cursor.style.height = '40px';
		cursor.style.width = '40px';
		cursor.style.backgroundImage = 'url(img/cursor.png)';
	});
	startBtn.addEventListener('mouseout', () => {
		cursor.style.display = 'none';
	});
}

// document.addEventListener("mousemove", mouseMove);

// holes.forEach(function (hole) {
// 	hole.addEventListener('click', function () {
// 		cursor.classList.add('animate');
// 		setTimeout(() => {
// 			cursor.classList.remove('animate');
// 		}, 200)
// 	});
// });

// game.addEventListener('mouseover', function () {
// 	cursor.style.display = 'block';
// 	cursor.style.height = '80px'
// 	cursor.style.width = '80px'
// 	cursor.style.backgroundImage = 'url(img/humm.png)';
// });

// game.addEventListener('mouseout', function () {
// 	cursor.style.display = 'none';
// });

// startBtn.addEventListener('mouseover', function () {
// 	cursor.style.display = 'block';
// 	cursor.style.height = '40px'
// 	cursor.style.width = '40px'
// 	cursor.style.backgroundImage = 'url(img/cursor.png)';
// });

// startBtn.addEventListener('mouseout', function () {
// 	cursor.style.display = 'none';
// });