class XOR {
	static encode(text, key) {
		let res = [];
		for (let i = 0; i < text.length; i++) {
			let code = text.charCodeAt(i);
			let keycode = key.charCodeAt(i);
			res.push(code ^ keycode);
		}
		return res.join(' ');
	}

	static decode(text, key) {
		let res = [];
		text = text.split(' ');
		for (let i = 0; i < text.length; i++) {
			let keycode = key.charCodeAt(i);
			res.push(String.fromCharCode(text[i] ^ keycode));
		}
		return res.join('');
	}
}

export default XOR;
