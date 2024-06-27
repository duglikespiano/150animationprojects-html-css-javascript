const container = document.querySelector('.container');

for (let i = 0; i < 20; i++) {
	const glitchBox = document.createElement('div');
	glitchBox.classList.add('box');
	container.appendChild(glitchBox);
}

setInterval(() => {
	const glitches = document.querySelectorAll('.box');
	glitches.forEach((glitch) => {
		glitch.style.left = Math.random() * 100 + 'vw';
		glitch.style.top = Math.random() * 100 + 'vh';
		glitch.style.height = Math.random() * 100 + 'px';
		glitch.style.width = Math.random() * 400 + 'px';
		glitch.style.backgroundPosition = Math.random() * 50 + 'px';
	});
}, 1000);
