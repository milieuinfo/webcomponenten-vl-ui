import { VlElement, NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlProperties
 * @class
 * @classdesc De properties webcomponent vormt de container van een lijst van kenmerken van een onderwerp. Deze component wordt meestal gebruikt om informatie te tonen dat ingevuld werd in een formulier. <a href="demo/vl-properties.html">Demo</a>.
 * 
 * @extends VlElement
 */
export class VlProperties extends VlElement(HTMLElement) {
    constructor() {
        super(`
            <style>
                @import '../style.css';
            </style>

            <div class="vl-properties">
                <slot></slot>
            </div>
        `);
    }
}

/**
 * VlPropertiesColumn
 * @class
 * @classdesc De properties kolom webcomponent wordt gebruikt om lijsten van kenmerken van een onderwerp te verdelen in verschillende kolommen. <a href="demo/vl-properties.html">Demo</a>.
 * 
 * @extends VlElement
 *
 * @property {boolean} full - Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.
 */
export class VlPropertiesColumn extends NativeVlElement(HTMLDivElement) {
    static get _observedClassAttributes() {
        return ['full'];
    }

    connectedCallback() {
        this.classList.add('vl-properties__column');
    }

    get _classPrefix() {
        return 'vl-properties__column--';
    }

    get _stylePath() {
        return '../style.css';
    }
}

/**
 * VlPropertiesList
 * @class
 * @classdesc De properties lijst webcomponent toont een lijst van kenmerken van een onderwerp. <a href="demo/vl-properties.html">Demo</a>.
 * 
 * @extends VlElement
 */
export class VlPropertiesList extends NativeVlElement(HTMLDListElement) {
    connectedCallback() {
        this.classList.add('vl-properties__list');
    }

    get _stylePath() {
        return '../style.css';
    }
}

/**
 * VlPropertiesTitle
 * @class
 * @classdesc De property titel webcomponent wordt gebruikt om een title toe te voegen aan een lijst van kenmerken. <a href="demo/vl-properties.html">Demo</a>.
 * 
 * @extends VlElement
 */
export class VlPropertiesTitle extends NativeVlElement(HTMLHeadingElement) {
    connectedCallback() {
        this.classList.add('vl-properties__title');
    }

    get _stylePath() {
        return '../style.css';
    }
}

/**
 * VlPropertyTerm
 * @class
 * @classdesc De property kenmerk webcomponent toont de beschrijving van een onderwerp kenmerk. <a href="demo/vl-properties.html">Demo</a>.
 * 
 * @extends VlElement
 */
export class VlPropertyTerm extends NativeVlElement(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__label');
    }

    get _stylePath() {
        return '../style.css';
    }
}

/**
 * VlPropertyValue
 * @class
 * @classdesc De property waarde webcomponent toont de waarde van een onderwerp kenmerk. <a href="demo/vl-properties.html">Demo</a>.
 * 
 * @extends VlElement
 */
export class VlPropertyValue extends NativeVlElement(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__data');
    }

    get _stylePath() {
        return '../style.css';
    }
}

customElements.define('vl-properties', VlProperties);
customElements.define('vl-properties-column', VlPropertiesColumn, {extends: 'div'});
customElements.define('vl-properties-list', VlPropertiesList, {extends: 'dl'});
customElements.define('vl-properties-title', VlPropertiesTitle, {extends: 'h1'});
customElements.define('vl-property-term', VlPropertyTerm, {extends: 'dt'});
customElements.define('vl-property-value', VlPropertyValue, {extends: 'dd'});