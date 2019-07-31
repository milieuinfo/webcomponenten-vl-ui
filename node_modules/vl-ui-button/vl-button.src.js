import { NativeVlElement, define } from '/node_modules/vl-ui-core/vl-core.js';
import { VlLinkElement } from "/node_modules/vl-ui-link/vl-link.js";
import { VlPillElement } from "/node_modules/vl-ui-pill/vl-pill.js";

/**
 * VlButton
 * @class
 * @classdesc Gebruik de vl-button om een ​​call-to-action toe te voegen. Het type call-to-action wordt bepaald door het label of de pictogram. <a href="demo/vl-button.html">Demo</a>.
 * 
 * @extends NativeVlElement
 * 
 * @property {boolean} disabled - Attribuut wordt gebruikt om aan de gebruiker aan te duiden dat de functionaliteit niet actief is.
 * @property {boolean} error - Attribuut wordt gebruikt om het belang of de gevolgen van een actie te benadrukken.
 * @property {boolean} block - Attribuut wordt gebruikt om ervoor te zorgen dat de knop getoond wordt als een block element en bijgevol de breedte van de parent zal aannemen.
 * @property {boolean} large - Attribuut wordt gebruikt om de aandacht van de gebruiker te trekken door de font-size te vergroten.
 * @property {boolean} wide - Attribuut zorgt ervoor dat de knop breder op het scherm zal getoond worden.
 * @property {boolean} narrow - Attribuut zorgt ervoor dat de knop smaller op het scherm zal getoond worden.
 * @property {boolean} loading - Attribuut wordt gebruikt om aan de gebruiker aan te geven dat zijn actie momenteel verwerkt wordt.
 * @property {boolean} secondary - Attribuut wordt gebruikt in combinatie met een gewone knop om alternatieve acties te voorzien.
 * @property {boolean} tertiary - Attribuut wordt gebruikt in combinatie met gewone en secondary knoppen om alternatieve acties te voorzien.
 */
export class VlButton extends NativeVlElement(HTMLButtonElement) {
    static get _observedAttributes() {
        return [];
    }

    static get _observedClassAttributes() {
        return ['disabled', 'error', 'block', 'large', 'wide', 'narrow', 'secondary', 'tertiary', 'loading'];
    }

    connectedCallback() {
        this.classList.add('vl-button');
    }

    get _classPrefix() {
        return 'vl-button--';
    }

    get _stylePath() {
        return '../style.css';
    }
}

export class VlButtonLink extends VlLinkElement(HTMLButtonElement) {}

export class VlButtonPill extends VlPillElement(NativeVlElement(HTMLButtonElement)) {
    constructor() {
        super();
        this.classList.add('vl-pill');
        this.classList.add('vl-pill--clickable');
    }

    get _stylePath() {
        return '../style.css';
    }
}


define('vl-button', VlButton, {extends: 'button'});
define('vl-button-link', VlButtonLink, {extends: 'button'});
define('vl-button-pill', VlButtonPill, {extends: 'button'});