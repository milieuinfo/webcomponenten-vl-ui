import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {vlFormValidation} from '/node_modules/vl-ui-form-validation/dist/vl-form-validation.js';

Promise.all([
  vlFormValidation(Object).awaitUntilReady(),
]).then(() => define('vl-input-field', VlInputField, {extends: 'input'}));

/**
* VlInputField
* @class
* @classdesc Het input field laat de gebruiker toe om een informatie in te vullen in uw applicatie: bijvoorbeeld een email adres of een wachtwoord.
*
* @extend HTMLInputElement
* @mixin nativeVlElement
*
* @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-field/releases/latest|Release notes}
* @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-field/issues|Issues}
* @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-field.html|Demo}
*/
export class VlInputField extends vlFormValidation(nativeVlElement(HTMLInputElement)) {
  static get _observedChildClassAttributes() {
    return ['block', 'small', 'error', 'success', 'disabled'];
  }

  connectedCallback() {
    this.classList.add('vl-input-field');
    this._dress();
  }

  get _classPrefix() {
    return 'vl-input-field--';
  }

  _dress() {
    if (this.form) {
      this.setAttribute('data-vl-success-class', 'vl-input-field--success');
      this.setAttribute('data-vl-error-class', 'vl-input-field--error');
      this.dress(this.form);
    }
  }
}
