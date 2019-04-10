import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * `vl-button``
 * Gebruik de vl-button om een ​​call-to-action toe te voegen. Het type call-to-action wordt bepaald door het label of de pictogram.
 * 
 * ### Attributen
 * Attribuut | Uitleg | Waarde
 * ----------|--------|--------
 * `disabled` | Wordt gebruikt om aan de gebruiker aan te duiden dat de functionaliteit niet actief is. | { boolean }
 * `error` | Wordt gebruikt om het belang of de gevolgen van een actie te benadrukken. | { boolean }
 * `block` | Wordt gebruikt om ervoor te zorgen dat de knop getoond wordt als een block element en bijgevol de breedte van de parent zal aannemen. | { boolean }
 * `large` | Wordt gebruikt om de aandacht van de gebruiker te trekken door de font-size te vergroten. | { boolean }
 * `wide` | Zorgt ervoor dat de knop breder op het scherm zal getoond worden. | { boolean }
 * `narrow` | Zorgt ervoor dat de knop smaller op het scherm zal getoond worden. | { boolean } 
 * `loading` | Wordt gebruikt om aan de gebruiker aan te geven dat zijn actie momenteel verwerkt wordt. | { boolean }
 * `secondary` | Wordt gebruikt in combinatie met een gewone knop om alternatieve acties te voorzien. | { boolean } 
 * `tertiary` | Wordt gebruikt in combinatie met gewone en secondary knoppen om alternatieve acties te voorzien. | { boolean }
 * 
 * @demo demo/vl-button.html
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

customElements.define('vl-button', VlButton, {extends: 'button'});