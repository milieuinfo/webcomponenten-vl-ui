import { VlRegisterElement, NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

 /**
 * VlInputField
 * @class
 * @classdesc Het input field laat de gebruiker toe om een informatie in te vullen in uw applicatie: bijvoorbeeld een email adres of een wachtwoord. <a href="demo/vl-input-field.html">Demo</a>.
 * 
 * @extends NativeVlElement
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

VlRegisterElement(() => {
  customElements.define('vl-input-field', VlInputField, {extends: 'input'});
});