import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlDoormatTitle
 * @class
 * @classdesc De doormat title die gebruikt wordt in combinatie met de vl-doormat component.
 *
 * @extends HTMLHeadingElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-doormat.html|Demo}
 *
 */
export class VlDoormatTitle extends nativeVlElement(HTMLHeadingElement) {
  connectedCallback() {
    this._processStyle();
  }

  _processStyle() {
    this._addClass();
  }

  _addClass() {
    this.classList.add('vl-doormat__title');
  }
}

define('vl-doormat-title', VlDoormatTitle, {extends: 'h2'});
