import attributes from '../utils/attributes';

const checkbox = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		const label = args.label !== undefined ? args.label : null;
		output = `<input type="checkbox" ${attrs.output}>`;

		if (label !== null) {
			const labelAttrs = attributes(label, attrs.id, true);
			const labelText = label.text !== undefined ? label.text : '';

			output = `${output}<label${labelAttrs.output}>${labelText}</label>`;
		}
	}

	return output;
};

export default checkbox;
