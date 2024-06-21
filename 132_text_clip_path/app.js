const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');

window.addEventListener('scroll', () => {
	const scrollValue = window.scrollY;
	circle1.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 0 0)`;
	circle2.style.clipPath = `circle(${150 + scrollValue * 0.75}px at 100% 100%)`;
});
