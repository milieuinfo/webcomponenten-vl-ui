import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

export const vlLinkElement = (SuperClass) => {
  return class extends nativeVlElement(SuperClass) {
    static get _observedAttributes() {
      return [];
    }

    static get _observedClassAttributes() {
      return ['block'];
    }

    connectedCallback() {
      this.classList.add('vl-link');
      this._setIconLinkAttribute();
    }

    get _classPrefix() {
      return 'vl-link--';
    }

    get _iconElementen() {
      return this.querySelectorAll('[is="vl-icon"]');
    }

    _setIconLinkAttribute() {
      this._iconElementen.forEach((icon) => {
        icon.setAttribute('link', '');
      });
    }
  };
};

export const VlLinkElement = vlLinkElement;

/**
 * VlLink
 * @class
 * @classdesc Gebruik de vl-link om de gebruiker door te verwijzen naar een andere URL, bijvoorbeeld een nieuwe pagina of een document.
 *
 * @extends HTMLAnchorElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link.html|Demo}
 */
export class VlLink extends vlLinkElement(HTMLAnchorElement) {}

/**
 * VlButtonLink
 * @class
 * @classdesc Een button gestyled als link.
 *
 * @extends HTMLButtonElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link.html|Demo}
 */
export class VlButtonLink extends vlLinkElement(HTMLButtonElement) {}

define('vl-link', VlLink, {extends: 'a'});
define('vl-button-link', VlButtonLink, {extends: 'button'});
