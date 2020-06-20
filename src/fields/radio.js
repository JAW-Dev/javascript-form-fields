import attributes from '../utils/attributes';

const radio = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		const label = args.label !== undefined ? args.label : null;
		output = `<input type="radio" ${attrs.output}>`;

		if (label !== null) {
			const labelAttrs = attributes(label, attrs.id, true);
			const labelText = label.text !== undefined ? label.text : '';

			output = `${output}<label${labelAttrs.output}>${labelText}</label>`;
		}
	}

	return output;
};

export default radio;
