const navegationButton = document.querySelector('.header__navegation-button');
const navegationMenu = document.querySelector('.header__navegation-menu');

navegationButton.addEventListener('click', function () {
	navegationMenu.classList.toggle('active');
});