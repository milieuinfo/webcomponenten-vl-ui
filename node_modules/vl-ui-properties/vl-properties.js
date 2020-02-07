import {NativeVlElement, VlElement, define} from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlProperties
 * @class
 * @classdesc De properties webcomponent vormt de container van een lijst van kenmerken van een onderwerp. Deze component wordt meestal gebruikt om informatie te tonen dat ingevuld werd in een formulier.
 * 
 * @extends VlElement
 * 
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlProperties extends VlElement(HTMLElement) {
    constructor() {
        super(`
            <style>
                @import '/node_modules/vl-ui-properties/style.css';
            </style>

            <div class="vl-properties">
                <slot></slot>
            </div>
        `);
    }

  connectedCallback() {
    this._setPropertiesTitle();
  }

  get _titles() {
    return this.querySelectorAll("h1,h2,h3,h4,h5,h6");
  }

  _setPropertiesTitle() {
    this._titles.forEach(title => {
      title.classList.add("vl-properties__title");
    });
  }
}

/**
 * VlPropertiesColumn
 * @class
 * @classdesc De properties kolom webcomponent wordt gebruikt om lijsten van kenmerken van een onderwerp te verdelen in verschillende kolommen. 
 * 
 * @extends VlElement
 *
 * @property {boolean} full - Attribuut wordt gebruikt om de kolom de volledige breedte te laten innemen.
 * 
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
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
        return '/node_modules/vl-ui-properties/style.css';
    }
}

/**
 * VlPropertiesList
 * @class
 * @classdesc De properties lijst webcomponent toont een lijst van kenmerken van een onderwerp. 
 * 
 * @extends VlElement
 * 
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertiesList extends NativeVlElement(HTMLDListElement) {
    connectedCallback() {
        this.classList.add('vl-properties__list');
    }

    get _stylePath() {
        return '/node_modules/vl-ui-properties/style.css';
    }
}

/**
 * VlPropertyTerm
 * @class
 * @classdesc De property kenmerk webcomponent toont de beschrijving van een onderwerp kenmerk. 
 * 
 * @extends VlElement
 * 
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertyTerm extends NativeVlElement(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__label');
    }

    get _stylePath() {
        return '/node_modules/vl-ui-properties/style.css';
    }
}

/**
 * VlPropertyValue
 * @class
 * @classdesc De property waarde webcomponent toont de waarde van een onderwerp kenmerk. 
 * 
 * @extends VlElement
 * 
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/releases/latest|Release notes}
 * @see {@link http://www.github.com/milieuinfo/webcomponent-vl-ui-properties/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-properties.html|Demo}
 */
export class VlPropertyValue extends NativeVlElement(HTMLElement) {
    connectedCallback() {
        this.classList.add('vl-properties__data');
    }

    get _stylePath() {
        return '/node_modules/vl-ui-properties/style.css';
    }
}

define('vl-properties', VlProperties);
define('vl-properties-column', VlPropertiesColumn, {extends: 'div'});
define('vl-properties-list', VlPropertiesList, {extends: 'dl'});
define('vl-property-term', VlPropertyTerm, {extends: 'dt'});
define('vl-property-value', VlPropertyValue, {extends: 'dd'});
