function printDiamond(num: number): void {
	let str = '';
	if (!num) return console.log('');
	if (num < 0) num = -num;
	if (num === 1) return console.log('*');
	str += ' '.repeat(num) + '*\n';

	for (var i = 1; i < num - 1; i++) {
		str += ' '.repeat(num - i) + '*'.repeat(i * 2 + 1) + '\n';
	}

	str += ' '.repeat(num - i) + '*'.repeat(i * 2 + 1) + '\n';

	for (let j = i - 1; j > 0; j--) {
		str += ' '.repeat(num - j) + '*'.repeat(j * 2 + 1) + '\n';
	}

	str += ' '.repeat(num) + '*';
	console.log(str);
}
printDiamond(5);
