import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlInputField} from '/node_modules/vl-ui-input-field/dist/vl-input-field.js';
import {vlFormValidation} from '/vl-form-validation-all.js';

Promise.all([vlFormValidation.ready()]).then(() => define('vl-input-field-demo', VlInputFieldDemo, {extends: 'input'}));

export class VlInputFieldDemo extends VlInputField {}
