const video = document.querySelector('.video');
const thumbs = document.querySelectorAll('ul li');

thumbs.forEach((thumb, i) => {
	thumb.addEventListener('click', () => {
		video.src = `video${i + 1}.mp4`;
	});
});
