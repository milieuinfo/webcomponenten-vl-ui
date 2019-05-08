import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * VlTextArea
 * @class
 * @classdesc De vl-ui-textarea definieert een rechthoekig invoervak in een formulier, waarin de gebruiker over meerdere regels tekst kan invoeren. <a href="../demo/vl-textarea.html">Demo</a>.
 * 
 * @extends VlElement
 * 
 * @property {boolean} block - Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.
 * @property {boolean} error - Attribuut wordt gebruikt om aan te duiden dat de textarea verplicht is of ongeldige tekst bevat.
 * @property {boolean} success - Attribuut wordt gebruikt om aan te duiden dat de textarea correct werd ingevuld.
 * @property {boolean} disabled - Attribuut wordt gebruikt om te voorkomen dat de gebruiker tekst in de textarea kan ingeven.
 * @property {boolean} focus - Attribuut wordt gebruikt om de textarea focus te geven.
 */
export class VlTextarea extends NativeVlElement(HTMLTextAreaElement) {

  static get _observedClassAttributes() {
    return ['disabled', 'block', 'error', 'success', 'focus'];
  }

  connectedCallback() {
    this.classList.add('vl-textarea');
  }

  get _classPrefix() {
    return 'vl-textarea--';
  }

  get _stylePath() {
    return '../style.css';
  }
}

customElements.define('vl-textarea', VlTextarea, {extends: 'textarea'});