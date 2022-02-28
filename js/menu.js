let	menuBtn = document.querySelector('#menuBtn'),
	nav = document.querySelector('nav');

menuBtn.onclick = () => {
	nav.classList.toggle('nav-active');
	menuBtn.classList.toggle('menu-btn-active');
	if (menuBtn.innerHTML == '☰') {
		menuBtn.innerHTML = '✖';
	}
	else {
		menuBtn.innerHTML = '☰';
	}
}