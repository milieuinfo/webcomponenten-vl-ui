import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlInfotext
 * @class
 * @classdesc Gebruik de infotext om belangrijke getallen weer te geven.
 * 
 * @extends VlElement
 * 
 * @property {boolean} data-vl-badge - Attribuut wordt gebruikt om een badge te maken. Indien weggelaten wordt er geen badge gemaakt.
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infotext/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infotext/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-infotext.html|Demo}
 * 
 */
export class VlInfotext extends NativeVlElement(HTMLDivElement) {
    static get _observedAttributes() {
        return ['data-vl-badge'];
    }
   
    connectedCallback() {
        if (this.__hasOneChild()) {
            this.classList.add('vl-infotext-wrapper');
            this.__addClass(this.firstElementChild, 'vl-infotext');
            this.__addClass(this.__valueElement, 'vl-infotext__value');
            this.__addClass(this.__textElement, 'vl-infotext__text');
            this. _data_vl_badgeChangedCallback(null, this.getAttribute('data-vl-badge')); 
        } else {
            console.warn('De infotext component mag slechts 1 child hebben (<div> of <a>)');
        }
    }

    __hasOneChild() {
        return this.children.length == 1;
    }

    __addClass(element, className) {
        if (element) {
            element.classList.add(className)
        }
    }

    get __valueElement() {
        return this.querySelector('[data-vl-value]');
    }

    get __textElement() {
        return this.querySelector('[data-vl-text]');
    }

    get _stylePath() {
        return '../style.css';
    }

    _data_vl_badgeChangedCallback(oldValue, newValue) {
        if (newValue != undefined) {
            this.__addClass(this.firstElementChild, 'vl-infotext--badge');
        } else {
            this.firstElementChild.classList.remove('vl-infotext--badge');
        }
    }
}

define('vl-infotext', VlInfotext, {extends: 'div'});
