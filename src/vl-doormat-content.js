import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlDoormatContent
 * @class
 * @classdesc De doormat content container die gebruikt wordt in combinatie met de vl-doormat component.
 *
 * @extends HTMLDivElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-doormat.html|Demo}
 *
 */
export class VlDoormatContent extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this._processStyle();
  }

  get _iconTemplate() {
    return this._template(`<span class="vl-doormat__content__arrow" aria-hidden="true"></span>`);
  }

  _processStyle() {
    this._addClass();
    this._prependIcon();
  }

  _addClass() {
    this.classList.add('vl-doormat__content');
  }

  _prependIcon() {
    this.prepend(this._iconTemplate);
  }
}

define('vl-doormat-content', VlDoormatContent, {extends: 'div'});
