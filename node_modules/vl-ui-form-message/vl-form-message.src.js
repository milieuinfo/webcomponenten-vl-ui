import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlFormLabel
 * @class
 * @classdesc Gebruik de vl-form-label om labels toe te voegen aan een formulier. <a href="demo/vl-form-message.html">Demo</a>.
 * 
 * @extends NativeVlElement
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


/**
 * VlFormValidation
 * @class
 * @classdesc Gebruik de vl-form-validation om een validatie boodschap toe te voegen aan een formulier. <a href="demo/vl-form-message.html">Demo</a>.
 *
 * @extends NativeVlElement
 *
 * @property {boolean} error - Attribuut wordt gebruikt om foutboodschap te tonen bij validatiefouten.
 * @property {boolean} success - Attribuut wordt gebruikt om boodschap te tonen bij een succesvolle validatie.
 * @property {boolean} block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormValidation extends NativeVlElement(HTMLParagraphElement) {

  static get _observedClassAttributes() {
    return ['block'];
  }

  get _type() {
    if (this.hasAttribute("success")) {
      return "success"
    }
    return "error";
  }

  connectedCallback() {
    this.classList.add(`vl-form__${this._type}`);
    this._addCheckIfSuccess();
  }

  _getCheckTemplate() {
    return this._template('<span class="vl-vi vl-vi-check" aria-hidden="true"></span>');
  }

  _addCheckIfSuccess() {
    if (this._type === 'success') {
      this._element.append(this._getCheckTemplate());
    }
  }

  get _classPrefix() {
    return `vl-form__${this._type}--`;
  }

  get _stylePath() {
    return '../style.css';
  }
}


/**
 * VlFormAnnotation
 * @class
 * @classdesc Gebruik de vl-form-annotation om invoerinstructies toe te voegen aan een formulier. <a href="demo/vl-form-message.html">Demo</a>.
 *
 * @extends NativeVlElement
 *
 * @property {boolean} block - Attribuut wordt gebruikt om het label in block vorm te tonen zodat het de breedte van het parent element aanneemt.
 */
export class VlFormAnnotation extends NativeVlElement(HTMLParagraphElement) {

  static get _observedClassAttributes() {
    return ['block'];
  }

  connectedCallback() {
    this.classList.add('vl-form__annotation');
  }

  get _classPrefix() {
    return 'vl-form__annotation--';
  }

  get _stylePath() {
    return '../style.css';
  }
}

define('vl-form-label', VlFormLabel, {extends: 'label'});
define('vl-form-validation', VlFormValidation, {extends: 'p'});
define('vl-form-annotation', VlFormAnnotation, {extends: 'p'});