export const properText = (text: string) => {
	let str = text.split(' ').map((word: string) => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});
	return str.join(' ');
};
