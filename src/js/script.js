window.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.header__burger');

	burger.onclick = () => {
		burger.classList.toggle('active');
		document.querySelector('.header__menu').classList.toggle('active');
		document.querySelector('body').classList.toggle('lock');
	}
})