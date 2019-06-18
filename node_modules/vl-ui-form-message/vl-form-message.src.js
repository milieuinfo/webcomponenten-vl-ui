import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlFormLabel
 * @class
 * @classdesc Gebruik de vl-form-message om labels toe te voegen aan een formulier. <a href="demo/vl-form-message.html">Demo</a>.
 * 
 * @extends VlElement
 * 
 * @property {boolean} light - Attribuut wordt gebruikt om het label in een lichte kleur te tonen.
 * @property {boolean} block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormLabel extends NativeVlElement(HTMLLabelElement) {

  static get _observedClassAttributes() {
    return ['light', 'block'];
  }

  connectedCallback() {
    this.classList.add('vl-form__label');
  }

  get _classPrefix() {
    return 'vl-form__label--';
  }
  
  get _stylePath() {
    return '../style.css';
  }
}

customElements.define('vl-form-label', VlFormLabel, {extends: 'label'});