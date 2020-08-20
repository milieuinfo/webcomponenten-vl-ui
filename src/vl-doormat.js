import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/src/vl-doormat-content.js';

/**
 * VlDoormat
 * @class
 * @classdesc Gebruik de doormat component om een snel en duidelijk overzicht van de informatie op de website toe te voegen, onderverdeeld in categorieën. Elke doormat categorie krijgt een titel, een afbeelding (optioneel) en een korte intro. Elke categorie linkt naar de onderliggende pagina.
 *
 * @extends HTMLAnchorElement
 *
 * @property {boolean} alt - Attribuut wordt best gebruikt in combinatie met de vl-region alt variant zodat er contrasterende kleuren zijn.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-doormat.html|Demo}
 *
 */
export class VlDoormat extends nativeVlElement(HTMLAnchorElement) {
  static get _observedClassAttributes() {
    return ['alt', 'graphic'];
  }

  connectedCallback() {
    this._processStyle();
  }

  get contentElement() {
    return this._getElement('content');
  }

  get titleElement() {
    return this._getElement('title');
  }

  get textElement() {
    return this._getElement('text');
  }

  get imageElement() {
    return this._getElement('image');
  }

  get _contentTemplate() {
    return this._template(`<div is="vl-doormat-content"></div>`);
  }

  get _classPrefix() {
    return 'vl-doormat--';
  }

  _getElement(type) {
    return this.querySelector(`[is="vl-doormat-${type}"]`);
  }

  _processStyle() {
    this._addClass();
    this._addChildContainer();
    this._moveChildren();
  }

  _addClass() {
    this.classList.add('vl-doormat');
  }

  _addChildContainer() {
    this.prepend(this._contentTemplate);
  }

  _moveChildren() {
    this._moveTitle();
    this._moveText();
  }

  _moveTitle() {
    if (this.titleElement) {
      this.contentElement.append(this.titleElement);
    }
  }

  _moveText() {
    if (this.textElement) {
      this.contentElement.append(this.textElement);
    }
  }
}

define('vl-doormat', VlDoormat, {extends: 'a'});
