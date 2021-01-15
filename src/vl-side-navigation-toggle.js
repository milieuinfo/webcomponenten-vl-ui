import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlSideNavigationToggle
 * @class
 * @classdesc Het navigatie toggle element.
 *
 * @extends HTMLLIElement
 * @mixes nativeVlElement
 *
 * @property {String} data-vl-child - Attribuut wordt gebruikt om aan te geven dat het een menu item is. De koppeling gebeurt via het `data-vl-parent` attribuut van de submenu items.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-side-navigation/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-side-navigation.html|Demo}
 *
 */
export class VlSideNavigationToggle extends nativeVlElement(HTMLAnchorElement) {
  constructor() {
    super();
    this._processClasses();
  }

  _processClasses() {
    this.classList.add('vl-side-navigation__toggle');
  }
}

define('vl-side-navigation-toggle', VlSideNavigationToggle, {extends: 'a'});
