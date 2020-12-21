import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlTypography
 * @class
 * @classdesc Gebruik de typograhpy component om de standaard elementen te visualiseren binnen een container. De typography component wordt voornamelijk gebruikt om de stijl van de inhoud van een wysiwyg-editor correct te renderen.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {string} data-vl-parameters - De key/value parameters die verwerkt en getoond zullen worden in het content element.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-typography/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-typography/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-typography.html|Demo}
 *
 */
export class VlTypography extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['parameters'];
  }

  constructor() {
    super(`
      <style>
        @import '/src/style.css';
      </style>
      <div id="content" class="vl-typography"></div>
    `);
    this._observer = this.__observeSlotElements(() => this.__processSlotElements());
  }

  connectedCallback() {
    this.__processSlotElements();
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  _parametersChangedCallback(oldValue, newValue) {
    this.__processSlotElements();
  }

  __processSlotElements() {
    this.__clearChildren();
    const parameters = this.dataset.vlParameters ? JSON.parse(this.dataset.vlParameters) : {};
    const template = this.__processTemplateParameters(this.innerHTML, parameters);
    this._element.insertAdjacentHTML('afterbegin', template);
  }

  __clearChildren() {
    while (this._element.hasChildNodes()) {
      this._element.firstChild.remove();
    }
  }

  __observeSlotElements(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, {attributes: true, childList: true, characterData: true, subtree: true});
    return observer;
  }

  __processTemplateParameters(template, params) {
    Object.keys(params).forEach((key) => template = template.replaceAll('${parameter.' + key + '}', params[key]));
    template = template.replace(/\${parameter.\w+}/g, '');
    return template;
  }
}

define('vl-typography', VlTypography);
