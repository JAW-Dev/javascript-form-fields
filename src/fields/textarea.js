import attributes from '../utils/attributes';

const textarea = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		const label = args.label !== undefined ? args.label : null;
		const value = args.value !== undefined ? args.value : '';
		output = `<textarea${attrs.output}>${value}</textarea>`;

		if (label !== null) {
			const labelAttrs = attributes(label, attrs.id, true);
			const labelText = label.text !== undefined ? label.text : '';

			output = `<label${labelAttrs.output}>${labelText}</label>${output}`;
		}
	}

	return output;
};

export default textarea;
