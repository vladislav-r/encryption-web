import XOR from './XOR.js';
import Cezar from './Cezar.js';

const navLink = document.querySelectorAll('.navLink');

const successBtn = document.querySelector('.successBtn');
const select = document.querySelector('#select');
const messageInput = document.querySelector('.messageInput');
const keyInput = document.querySelector('.keyInput');
const resElem = document.querySelector('.res');

successBtn.onclick = e => {
	e.preventDefault();
	console.log(window.location.pathname);
	if (window.location.pathname == '/') {
		if (select.value == 'decode') {
			const res = XOR.decode(messageInput.value, keyInput.value);
			resElem.textContent = res;
		}

		if (select.value == 'encode') {
			const res = XOR.encode(messageInput.value, keyInput.value);
			resElem.textContent = res;
		}
	}

	if (window.location.pathname == '/cesar.html') {
		if (select.value == 'decode') {
			const res = Cezar.decode(messageInput.value, +keyInput.value);
			resElem.textContent = res;
		}
		if (select.value == 'encode') {
			const res = Cezar.encode(messageInput.value, +keyInput.value);
			resElem.textContent = res;
		}
	}
};

navLink.onclick = e => {
	n.classList.toggle('active');
};

resElem.onclick = e => {
	try {
		navigator.clipboard.writeText(e.target.innerHTML);
		alert('Скопированно успешно');
	} catch (error) {
		alert(`Ошибка при копировании: ${error}`);
	}
};
