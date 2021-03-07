`use strict`;
let score = 20;
let highScore = 0;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let checkButton = document
	.querySelector(`.check`)
	.addEventListener(`click`, function () {
		const guess = Number(document.querySelector(`.guess`).value);

		if (!guess) {
			document.querySelector(`.message`).textContent = `PLEASE ENTER A NUMBER!`;
		} else if (guess === secretNumber) {
			document.querySelector(`.message`).textContent = `Correct Number!`;
			document.querySelector(`.number`).textContent = secretNumber;
			document.querySelector(`body`).style.backgroundColor = `#60b347`;
			document.querySelector(`.number`).style.width = `30rem`;

			if (score > highScore) {
				highScore = score;
				document.querySelector(`.highscore`).textContent = highScore;
			}
		} else if (guess > secretNumber) {
			if (score > 1) {
				document.querySelector(`.message`).textContent = `Geuss a lower number`;
				score--;
				document.querySelector(`.score`).textContent = score;
			} else {
				document.querySelector(`.message`).textContent = `You lost the game...`;
				document.querySelector(`.score`).textContent = 0;
			}
		} else if (guess < secretNumber) {
			if (score > 1) {
				document.querySelector(
					`.message`
				).textContent = `Geuss a higher number`;
				score--;
				document.querySelector(`.score`).textContent = score;
			} else {
				document.querySelector(`.message`).textContent = `You lost the game...`;
				document.querySelector(`.score`).textContent = 0;
			}
		}
	});

let againButton = document
	.querySelector(`.again`)
	.addEventListener(`click`, function () {
		score = 20;
		const secretNumber = Math.trunc(Math.random() * 20) + 1;

		document.querySelector(`.message`).textContent = `Start guessing...`;
		document.querySelector(`body`).style.backgroundColor = `#222`;
		document.querySelector(`.number`).style.width = `15rem`;
		document.querySelector(`.number`).textContent = `?`;
		document.querySelector(`.guess`).value = ``;
		document.querySelector(`.score`).textContent = score;
	});
