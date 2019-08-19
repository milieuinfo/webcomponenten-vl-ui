import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

export const VlLinkElement = (SuperClass) => {
    return class extends NativeVlElement(SuperClass) {
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
    
        get _iconElementen() {
            return this.querySelectorAll('[is="vl-icon"]');
        }
    
        _setIconLinkAttribute() {
            this._iconElementen.forEach((icon) => {
                icon.setAttribute('link', '');
            });
        }
    }
};

/**
 * VlLink
 * @class
 * @classdesc Gebruik de vl-link om de gebruiker door te verwijzen naar een andere URL, bijvoorbeeld een nieuwe pagina of een document. <a href="demo/vl-link.html">Demo</a>.
 * 
 * @extends NativeVlElement
 * 
 * @version <a href="http://www.github.com/milieuinfo/webcomponent-vl-ui-link/releases/latest">Release notes</a>
 */
export class VlLink extends VlLinkElement(HTMLAnchorElement) {}

define('vl-link', VlLink, {extends: 'a'});
