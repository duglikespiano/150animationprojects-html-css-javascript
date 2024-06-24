const section = document.querySelector('section');
let j = 0;

while (j < 200) {
	let star = document.createElement('i');
	let x = Math.floor(Math.random() * window.innerWidth);
	let y = Math.floor(Math.random() * window.innerHeight);
	let duration = Math.random() * 2;
	let size = Math.random() * 4;

	star.style.left = `${x}px`;
	star.style.top = `${y}px`;
	star.style.width = `${1 + size}px`;
	star.style.height = `${1 + size}px`;
	star.style.animationDuration = `${duration + 1}s`;

	section.appendChild(star);
	j++;
}
