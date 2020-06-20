import attributes from '../utils/attributes';

const submit = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		output = `<input type="submit" ${attrs.output}>`;
	}

	return output;
};

export default submit;
