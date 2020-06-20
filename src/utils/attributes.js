import idHash from './idHash';

const attributes = (args, passedId, label = false) => {
	let output = '';
	const arg = args !== undefined ? args : '';
	const id = arg.id !== undefined ? arg.id : passedId || idHash();

	if (!label) {
		output += ` id="${id}"`;
	} else if (label) {
		if (arg.for) {
			output += ` for="${arg.for}"`;
		} else {
			output += ` for="${id}"`;
		}
	}

	if (arg.name !== undefined) {
		output += ` name="${arg.name}"`;
	}

	if (arg.value !== undefined) {
		output += ` value="${arg.value}"`;
	}

	if (arg.classes !== undefined) {
		output += ` class="${arg.classes}"`;
	}

	if (arg.attributes !== undefined) {
		output += ` ${arg.attributes}`;
	}

	return {
		output,
		id
	};
};

export default attributes;
