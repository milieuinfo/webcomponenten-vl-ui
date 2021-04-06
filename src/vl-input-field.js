import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {vlFormValidation, vlFormValidationElement} from '/node_modules/vl-ui-form-validation/dist/vl-form-validation-all.js';
import {vlPattern} from '/node_modules/vl-ui-pattern/dist/vl-pattern.js';

Promise.all([
  vlFormValidation.ready(),
  vlPattern.ready(),
]).then(() => define('vl-input-field', VlInputField, {extends: 'input'}));

/**
* VlInputField
* @class
* @classdesc Het input field laat de gebruiker toe om een informatie in te vullen in uw applicatie: bijvoorbeeld een email adres of een wachtwoord.
*
* @extend HTMLInputElement
* @mixes nativeVlElement
*
* @property {boolean} data-vl-block - Het input-veld zal de breedte van zijn parent aannemen
* @property {boolean} data-vl-disabled - Schakelt interactie door de gebruiker uit
* @property {boolean} data-vl-error - Zorgt ervoor da er een rode rand rond het input-veld verschijnt
* @property {boolean} data-vl-small - Kleine variant van het input-field
* @property {boolean} data-vl-success - Zorgt ervoor dat er een groene rand rond het input-veld verschijnt
*
* @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-field/releases/latest|Release notes}
* @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-field/issues|Issues}
* @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-field.html|Demo}
*/
export class VlInputField extends vlFormValidationElement(nativeVlElement(HTMLInputElement)) {
  static get _observedAttributes() {
    return vlFormValidation._observedAttributes();
  }

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
    this._dressFormValidation();
    this._dressPattern();
  }

  _dressPattern() {
    Object.assign(this, vlPattern);
    this.dress(this);
  }
}
