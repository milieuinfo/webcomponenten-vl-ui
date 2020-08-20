import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlForm
 * @class
 * @classdesc Formulier element.
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-form.html|Demo}
 *
 */
export class VlForm extends nativeVlElement(HTMLFormElement) {
  static get _observedAttributes() {
    return ['target', 'action'];
  }

  static get _targetElementName() {
    return 'hidden-form-target';
  }

  connectedCallback() {
    this._process();
  }

  get _targetElement() {
    return this.querySelector(`iframe[name="${VlForm._targetElementName}"]`);
  }

  _getTargetElementTemplate() {
    return this._template(`<iframe name="${VlForm._targetElementName}" width="0" height="0" border="0" hidden></iframe>`);
  }

  _process() {
    const targetAttributeIsMissing = !this.hasAttribute('target');
    const actionAttributeIsMissing = !this.hasAttribute('action');
    if (targetAttributeIsMissing && actionAttributeIsMissing) {
      this._addTargetElement();
    }
  }

  _addTargetElement() {
    this.setAttribute('target', VlForm._targetElementName);
    this.appendChild(this._getTargetElementTemplate());
  }

  _removeTargetElement() {
    this.removeAttribute('target');
    this._targetElement.remove();
  }

  _targetChangedCallback(oldValue, newValue) {
    if (newValue && newValue != VlForm._targetElementName && this._targetElement) {
      this._removeTargetElement();
    }
  }

  _actionChangedCallback(oldValue, newValue) {
    if (newValue && this._targetElement) {
      this._removeTargetElement();
    }
  }
}

define('vl-form', VlForm, {extends: 'form'});
