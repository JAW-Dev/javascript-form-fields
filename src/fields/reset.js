import attributes from '../utils/attributes';

const reset = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		output = `<input type="reset" ${attrs.output}>`;
	}

	return output;
};

export default reset;
