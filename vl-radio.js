import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {vlRadioGroup} from '/node_modules/vl-ui-radio/dist/vl-radio-group.js';

/**
 * VlRadio
 * @class
 * @classdesc De radio laat de gebruiker toe om een enkele optie te selecteren uit een lijst. Gebruik de radio in formulieren. Vermijd een voorgedefinieerde keuze vast te leggen om de gebruiker een bewuste keuze te laten maken.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-block - Attribuut wordt gebruikt om ervoor te zorgen dat de radio getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.
 * @property {boolean} data-vl-checked - Attribuut wordt gebruikt om de radio standaard te selecteren.
 * @property {boolean} data-vl-disabled - Attribuut wordt gebruikt om te voorkomen dat de gebruiker de radio kan selecteren.
 * @property {boolean} data-vl-error - Attribuut wordt gebruikt om aan te duiden dat de radio een fout bevat.
 * @property {boolean} data-vl-label - Attribuut wordt gebruikt om de label tekst te bepalen.
 * @property {boolean} data-vl-name - Attribuut wordt gebruikt om verschillende sibling radio's te groeperen zodat er maar één in die groep geselecteerd kan worden.
 * @property {boolean} data-vl-single - Attribuut wordt gebruikt om alleen een radio te tonen zonder label.
 * @property {boolean} data-vl-value - Attribuut wordt gebruikt om de radio waarde te bepalen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-radio/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-radio/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-radio.html|Demo}
 */
export class VlRadio extends vlElement(HTMLElement) {
  static get formAssociated() {
    return true;
  }

  static get _observedAttributes() {
    return ['label', 'name', 'value', 'checked'];
  }

  static get _observedChildClassAttributes() {
    return ['block', 'single', 'disabled', 'error'];
  }

  constructor() {
    super(`
      <style>
      @import '/node_modules/vl-ui-radio/dist/style.css';
      </style>
      
      <label class="vl-radio" for="radio">
        <input class="vl-radio__toggle" type="radio" id="radio" name="radio"/>
        <div class="vl-radio__label">
          <span id="label-text">
            <slot></slot>
          </span>
        </div>
      </label>
    `);

    Object.assign(this, vlRadioGroup);
    if (this.attachInternals) {
      this._internals = this.attachInternals();
    }
  }

  connectedCallback() {
    this._inputElement.addEventListener('change', () => this._check());
    this._registerChangeEvent();
    setTimeout(() => {
      this.registerKeyEvents(this._radios);
      this.transmitFocus(this._radios);
    });
  }

  /**
   * Callback called when the form is reset.
   */
  formResetCallback() {
    this.checked = this.hasAttribute('checked');
  }

  /**
   * Returns a reference to the parent <form> element.
   *
   * @return {HTMLFormElement}
   */
  get form() {
    return this._internals?.form;
  }

  /**
   * Returns the element's current validity state.
   *
   * @return {ValidityState}
   */
  get validity() {
    return this._internals?.validity;
  }

  /**
   * Returns a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willvalidate is false), or it satisfies its constraints. This value can be set by the setCustomValidity method.
   *
   * @return {string}
   */
  get validationMessage() {
    return this._internals?.validationMessage;
  }

  /**
   * Returns whether the element is a candidate for constraint validation.
   *
   * @return {boolean}
   */
  get willValidate() {
    return this._internals?.willValidate;
  }

  /**
   * Geeft de value attribuut waarde van het input element.
   * @return {string}
   */
  get value() {
    return this._inputElement.value;
  }

  /**
   * Geeft de huidige status van het input element.
   * @return {boolean}
   */
  get checked() {
    return this._inputElement.checked;
  }

  /**
   * Geeft de disabled attribuut waarde van het input element dat een indicatie geeft of er interactie mogelijk is.
   * @return {boolean}
   */
  get disabled() {
    return this._inputElement.disabled;
  }

  /**
   * Geeft terug of het input element focus heeft.
   * @return {boolean}
   */
  get hasFocus() {
    return this._inputElement == this._getActiveElement();
  }

  /**
   * Zet de status van het input element.
   * @param {boolean} value
   */
  set checked(value) {
    this._inputElement.checked = value;
    if (value) {
      this._check();
    }
    return value;
  }

  /**
   * Zet de disabled attribuut waarde van het input element om interactie uit of in te schakelen.
   * @param {boolean} value
   */
  set disabled(value) {
    return this._inputElement.disabled = value;
  }

  get _classPrefix() {
    return 'vl-radio--';
  }

  get _inputElement() {
    return this._element.querySelector('input');
  }

  get _labelText() {
    return this._element.querySelector('#label-text');
  }

  get _radios() {
    const isSlot = this.assignedSlot != undefined;
    const rootNode = isSlot ? this.closest('vl-radio-group') : this.getRootNode();
    return [...(rootNode || this.getRootNode()).querySelectorAll(`vl-radio[data-vl-name='${this.dataset.vlName}']`)];
  }

  check() {
    this._inputElement.click();
  }

  focus() {
    this._inputElement.focus();
  }

  _check() {
    this.focus();
    this._inputElement.tabIndex = 0;
    this._radios
        .filter((radio) => radio.checked)
        .filter((radio) => radio !== this)
        .forEach((radio) => radio.checked = false);
    this._radios
        .filter((radio) => !radio.checked)
        .forEach((radio) => radio._inputElement.tabIndex = '-1');
  }

  _labelChangedCallback(oldValue, newValue) {
    this._labelText.textContent = newValue;
  }

  _valueChangedCallback(oldValue, newValue) {
    this._inputElement.value = newValue;
  }

  _nameChangedCallback(oldValue, newValue) {
    if (this._inputElement.name != newValue) {
      this._inputElement.name = newValue;
      this.setAttribute('name', newValue);
    }
  }

  _checkedChangedCallback(oldValue, newValue) {
    this._inputElement.checked = newValue != null;
  }

  _disabledChangedCallback(oldValue, newValue) {
    this._inputElement.disabled = newValue != null;
  }

  _singleChangedCallback(oldValue, newValue) {
    this._toggleClass(this._labelText, newValue, 'vl-u-visually-hidden');
  }

  _getActiveElement(element = document) {
    if (element.activeElement && element.activeElement.shadowRoot) {
      return this._getActiveElement(element.activeElement.shadowRoot);
    } else {
      return element.activeElement || element;
    }
  }

  _registerChangeEvent() {
    this._inputElement.addEventListener('change', () => this.dispatchEvent(new Event('change')));
  }
}

define('vl-radio', VlRadio);
