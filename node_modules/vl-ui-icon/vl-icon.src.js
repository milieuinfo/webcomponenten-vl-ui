import { VlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlIcon
 * @class
 * @classdesc Gebruik de vl-icon om een extra visueel element toe te voegen. <a href="demo/vl-icon.html">Demo</a>.
 * 
 * @extends VlElement
 * 
 * @property {string} icoon - Attribuut wordt gebruikt om aan te geven welk icoon getoond moet worden.
 * @property {(small | large)} size - Attribuut wordt gebruikt om het icoon te verkleinen (80%) of te vergroten (120%) ten opzichte van de parent.
 * @property {boolean} light - Attribuut wordt gebruikt om het icoon een lichte kleur te geven.
 * @property {boolean} before - Attribuut wordt gebruikt wanneer het icoon voor een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.
 * @property {boolean} after - Attribuut wordt gebruikt wanneer het icoon achter een tekst staat en er wat ruimte tussen het icoon en de tekst getoond moet worden.
 * @property {boolean} 90deg - Attribuut wordt gebruikt om het icoon 90 graden te roteren.
 * @property {boolean} 180deg - Attribuut wordt gebruikt om het icoon 180 graden te roteren.
 */
export class VlIcon extends VlElement(HTMLElement) {
    static get _observedAttributes() {
        return ['icon', 'size', '90deg', '180deg'];
    }

    static get _observedChildClassAttributes() {
        return ['before', 'after', 'light'];
    }

    constructor() {
        super(`
            <style>
                @import "../style.css";

                .vl-icon:before {
                    vertical-align: middle;
                }
            </style>
            <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `);
    }

    get _classPrefix() {
        return 'vl-icon--';
    }

    _iconChangedCallback(oldValue, newValue) {
        this._changeClass(this._element, oldValue, newValue, 'vl-vi-');
    };

    _sizeChangedCallback(oldValue, newValue) {
        if (['small', 'large'].indexOf(newValue) >= 0) {
            this._changeClass(this._element, oldValue, newValue);
        } else {
            this._element.classList.remove(this._prefix + oldValue);
        }
    };

    _90degChangedCallback(oldValue, newValue) {
        this._toggleClass(this._element, newValue, 'vl-vi-u-90deg');
    }

    _180degChangedCallback(oldValue, newValue) {
        this._toggleClass(this._element, newValue, 'vl-vi-u-180deg');
    }
}

customElements.define('vl-icon', VlIcon);