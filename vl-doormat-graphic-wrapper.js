import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlDoormatGraphicWrapper
 * @class
 * @classdesc De doormat graphic container die gebruikt wordt in combinatie met de vl-doormat component.
 *
 * @extends HTMLDivElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-doormat.html|Demo}
 *
 */
export class VlDoormatGraphicWrapper extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this._processStyle();
  }

  _processStyle() {
    this._addClass();
  }

  _addClass() {
    this.classList.add('vl-doormat__graphic-wrapper');
  }
}

define('vl-doormat-graphic-wrapper', VlDoormatGraphicWrapper, {extends: 'div'});
