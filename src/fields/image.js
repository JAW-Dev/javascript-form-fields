import attributes from '../utils/attributes';

const image = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		output = `<input type="image" ${attrs.output}>`;
	}

	return output;
};

export default image;
