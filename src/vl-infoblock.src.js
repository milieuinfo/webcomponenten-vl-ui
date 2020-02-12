import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';
import '/node_modules/vl-ui-icon/vl-icon.js';

/**
 * VlInfoblock
 * @class
 * @classdesc Gebruik de infoblock om een sectie met een nieuwe content te starten.
 * 
 * @extends VlElement
 * 
 * @property {string} title - Attribuut dat wordt gebruikt om de titel van de infoblock te zetten.
 * @property {string} icon -  Attribuut dat wordt gebruikt om een icoon vooraan aan de titel toe te voegen. Het icoon kan gekozen worden uit de lijst op https://overheid.vlaanderen.be/webuniversum/v3/documentation/atoms/vl-ui-icon.
 * @property {string} type -  Er kan een vast icoon gekozen worden (contact, publications, faq, news, timeline, question)
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infoblock/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-infoblock/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-infoblock.html|Demo}
 * 
 */
export class VlInfoblock extends VlElement(HTMLElement) {

    static get _observedAttributes() {
        return ['title', 'icon', 'type'];
    }

    constructor() {
        super(`
                <style>
                    @import '../style.css';
                    @import '/node_modules/vl-ui-icon/style.css';
                    
                </style>
    
                <section id="infoblock-element" class="vl-infoblock">
                    <header class="vl-infoblock__header" role="presentation">
                        <span is="vl-icon" id="infoblock_icon" class="vl-infoblock__header__icon"></span>
                        <h2 class="vl-infoblock__title" id="infoblock_title"><slot name='title'></slot></h2>
                    </header>
                    <div class="vl-infoblock__content" id="infoblock_content">
                       <slot></slot>
                    </div>  
                </section>
            `);
    }

    _titleChangedCallback(oldValue, newValue) {
        this._titleElement.innerText = newValue;
    }

    _iconChangedCallback(oldValue, newValue) {
        this._iconElement.setAttribute("icon", newValue);
    }

    _typeChangedCallback(oldValue, newValue) {
        const classPrefix = 'vl-infoblock--';
        if (oldValue) {
            this._element.classList.remove(classPrefix + oldValue);
        }
        if (newValue) {
            this._element.classList.add(classPrefix + newValue);
        }
    }

    get _titleElement() {
        return this._element.querySelector('#infoblock_title');
    }

    get _iconElement() {
        return this._element.querySelector('#infoblock_icon');
    }
}

define('vl-infoblock', VlInfoblock);
