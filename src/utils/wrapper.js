const wrapper = (element, wrap, attrs) => {
	let output = '';

	if (element !== undefined) {
		output = element;

		if (wrap !== undefined) {
			const attributes = attrs !== undefined ? ` ${attrs}` : '';

			output = `<${wrap}${attributes}>${element}</${wrap}>`;
		}
	}

	return output;
};

export default wrapper;
