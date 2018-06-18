// Behavior extends example

import { FormValidateBehavior } from "@appaya/behavior/list";
import { InputError } from "@appaya/behavior/list/form-validate/classes/input-error";


export class MyFormValidateBehavior extends FormValidateBehavior {
	createInputError(input: HTMLInputElement) {
		this.inputErrors.push(new InputError(input, document.querySelector('form'), 'afterbegin'));
	}
}