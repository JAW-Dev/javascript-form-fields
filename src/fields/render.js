import checkbox from './checkbox';
import color from './color';
import date from './date';
import email from './email';
import file from './file';
import hidden from './hidden';
import image from './image';
import number from './number';
import password from './password';
import radio from './radio';
import range from './range';
import reset from './reset';
import search from './search';
import submit from './submit';
import tel from './tel';
import text from './text';
import textarea from './textarea';
import time from './time';
import url from './url';
import wrapper from '../utils/wrapper';

const render = args => {
	let output = '';

	if (args !== undefined) {
		args.forEach(item => {
			const { field } = item;

			switch (field) {
				case 'checkbox':
					output += wrapper(checkbox(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'color':
					output += wrapper(color(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'date':
					output += wrapper(date(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'email':
					output += wrapper(email(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'file':
					output += wrapper(file(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'hidden':
					output += wrapper(hidden(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'image':
					output += wrapper(image(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'number':
					output += wrapper(number(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'password':
					output += wrapper(password(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'radio':
					output += wrapper(radio(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'range':
					output += wrapper(range(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'reset':
					output += wrapper(reset(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'search':
					output += wrapper(search(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'submit':
					output += wrapper(submit(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'tel':
					output += wrapper(tel(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'text':
					output += wrapper(text(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'textarea':
					output += wrapper(textarea(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'time':
					output += wrapper(time(item), item.wrapper, item.wrapperAttrs);
					break;
				case 'url':
					output += wrapper(url(item), item.wrapper, item.wrapperAttrs);
					break;
				default:
					break;
			}
		});
	}

	return output;
};

export default render;
