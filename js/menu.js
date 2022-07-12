let	menuBtn = document.querySelector('#menuBtn'),
	nav = document.querySelector('nav'),
	navBtns = document.querySelectorAll('.nav-btn');

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

for (let i = 0; i < navBtns.length; i++) {
	navBtns[i].onclick = () => {
		nav.classList.remove('nav-active');
		menuBtn.classList.remove('menu-btn-active');
		menuBtn.innerHTML = '☰';
	}
}