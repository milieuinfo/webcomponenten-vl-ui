import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

 /**
 * VlInputField
 * @class
 * @classdesc Het input field laat de gebruiker toe om een informatie in te vullen in uw applicatie: bijvoorbeeld een email adres of een wachtwoord.
 * 
 * @extends NativeVlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-field/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-field/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-ui-input-field.html|Demo}
 */
export class VlInputField extends NativeVlElement(HTMLInputElement) {

  static get _observedChildClassAttributes() {
    return ['block', 'small', 'error', 'success', 'disabled'];
  }

  connectedCallback() {
    this.classList.add('vl-input-field');
  }

  get _classPrefix() {
    return 'vl-input-field--';
  }
  
  get _stylePath() {
    return '../style.css';
  }
}

define('vl-input-field', VlInputField, {extends: 'input'});
