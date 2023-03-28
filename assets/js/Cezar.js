class Cezar {
	static eng = 'abcdefghigklmnopqrstuvwxyz';
	static rus = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
	static nums = '0123456789';

	static alph = this.eng + this.rus + this.nums;

	static res = '';

	static encode(text, key) {
		this.res = '';
		text = text.toLowerCase();
		for (let i = 0; i < text.length; i++) {
			if (this.alph.includes(text[i])) {
				this.res += this.alph[this.alph.indexOf(text[i]) + key];
			} else {
				console.log('not include');
				this.res += text[i];
			}
		}
		console.log(`Результат шифрования: ${this.res}`);
		return this.res;
	}

	static decode(text, key) {
		this.res = '';
		text = text.toLowerCase();
		for (let i = 0; i < text.length; i++) {
			if (this.alph.includes(text[i])) {
				this.res += this.alph[this.alph.indexOf(text[i]) - key];
			} else {
				this.res += text[i];
			}
		}
		console.log(`Результат дешифрования: ${this.res}`);
		return this.res;
	}
}

export default Cezar;
