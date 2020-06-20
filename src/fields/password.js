import attributes from '../utils/attributes';

const password = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		const label = args.label !== undefined ? args.label : '';
		output = `<input type="password" ${attrs}>`;

		if (label) {
			const labelFor = label.for !== undefined ? ` for="${label.for}"` : '';
			const labelAttrs = label.attrs !== undefined ? ` ${attributes(label.attrs, true)}` : '';
			const labelText = label.text !== undefined ? label.text : '';

			output = `<label${labelFor}${labelAttrs}>${labelText}</label>${output}`;
		}
	}

	return output;
};

export default password;
