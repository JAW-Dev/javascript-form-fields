/* global document */

import render from './fields/render';

const nuefields = (selector, args) => {
	if (selector !== undefined || args !== undefined) {
		const element = document.querySelector(selector);

		element.innerHTML = render(args);
	}
};

export default nuefields;
