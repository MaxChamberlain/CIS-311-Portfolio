export const properText = (text: string) => {
	let str = text.split(' ').map((word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});
	return str.join(' ');
};

export const properNumber = (number: string | number) => {
	let newNum: string = number.toString();
	newNum = newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return newNum;
};
