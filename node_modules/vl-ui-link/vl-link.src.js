import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlButton
 * @class
 * @classdesc Gebruik de vl-link om de gebruiker door te verwijzen naar een andere URL, bijvoorbeeld een nieuwe pagina of een document. <a href="demo/vl-link.html">Demo</a>.
 * 
 * @extends NativeVlElement
 */
export class VlLink extends NativeVlElement(HTMLAnchorElement) {
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

    get _stylePath() {
        return '../style.css';
    }

    _setIconLinkAttribute() {
        this.querySelectorAll('[is="vl-icon"]').forEach((icon) => {
            icon.setAttribute('link', '');
        });
    }
}

customElements.define('vl-link', VlLink, {extends: 'a'});