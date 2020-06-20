import attributes from '../utils/attributes';

const text = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		output = `<input type="hidden" ${attrs.output}>`;
	}

	return output;
};

export default text;
