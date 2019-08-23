import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

(() => {
  loadScript('util.js', '/node_modules/@govflanders/vl-ui-util/dist/js/util.min.js', () => {
    loadScript('core.js', '/node_modules/@govflanders/vl-ui-core/dist/js/core.min.js', () => {
      loadScript('select.js', '../dist/select.js');
    });
  });

  function loadScript(id, src, onload) {
    if (!document.head.querySelector('#' + id)) {
      let script = document.createElement('script');
      script.setAttribute('id', id);
      script.setAttribute('src', src);
      script.onload = onload;
      document.head.appendChild(script);
    }
  }
})();

 /**
 * VlSelect
 * @class
 * @classdesc Gebruik de select component om gebruikers toe te laten een selectie te maken uit een lijst met voorgedefinieerde opties. Het is aangeraden om enkel deze component te gebruiken als er 5 of meer opties zijn. Bij minder opties, kan er gebruik gemaakt worden van de radio component. <a href="demo/vl-select.html">Demo</a>.
 * 
 * @extends NativeVlElement
 * 
 * @property {boolean} block - Attribuut wordt gebruikt om ervoor te zorgen dat de textarea getoond wordt als een block element en bijgevolg de breedte van de parent zal aannemen.
 * @property {boolean} error - Attribuut wordt gebruikt om aan te duiden dat het select element verplicht is of ongeldige tekst bevat.
 * @property {boolean} success - Attribuut wordt gebruikt om aan te duiden dat het select element correct werd ingevuld.
 * @property {boolean} disabled - Attribuut wordt gebruikt om te voorkomen dat de gebruiker iets kan kiezen uit het select element.
 * @property {boolean} data-vl-select - Attribuut zorgt ervoor dat de zoek functionaliteit geïnitialiseerd wordt.
 * @property {boolean} data-vl-select-search-empty-text - Attribuut bepaalt de tekst die getoond wordt wanneer er geen resultaten gevonden zijn.
 * @property {boolean} data-vl-select-search - Attribuut om de zoek functionaliteit te activeren of deactiveren.
 * @property {boolean} data-vl-select-deletable - Attribuut om te activeren of deactiveren dat het geselecteerde kan verwijderd worden.
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-select/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-select/issues|Issues}
 */

export class VlSelect extends NativeVlElement(HTMLSelectElement) {

  static get _observedChildClassAttributes() {
    return ['block', 'error', 'success', 'disabled'];
  }

  connectedCallback() {
    this.classList.add('vl-select');
    if (this._dataVlSelectAttribute != undefined) {
      this.dress();
    }
  }

  get _classPrefix() {
    return 'vl-select--';
  }

  get _stylePath() {
    return '../style.css';
  }

  get _dressed() {
    return !!this.getAttribute(VlSelect._dressedAttributeName);
  }

  get _dataVlSelectAttribute() {
    return this.getAttribute('data-vl-select');
  }

  static get _dressedAttributeName() {
    return 'data-vl-select-dressed';
  }

  /**
   * Zet de mogelijkheden die gekozen kunnen worden.
   * 
   * @param {Object[]} choices met value en label attribuut
   */
  set choices(choices) {
    this._choices.setChoices(choices, 'value', 'label', true);
  }

  /**
   * Geef de `Choices` instantie.
   *
   * @see https://www.npmjs.com/package/choices.js
   * @returns {Choices} de `Choices` instantie of `null` als de component nog niet geinitialiseerd is door `dress()`
   */
  get _choices() {
    let choices = null;
    vl.util.each(vl.select.selectInstances, instance => {
      if (instance.element === this) {
        choices = instance;
      }
    });
    return choices;
  }

  /**
   * Initialiseer de `Choices` config.
   *
   * @see https://www.npmjs.com/package/choices.js
   * @param params object with callbackFn: function(select) with return value the items for `setChoices`
   */
  dress(params) {
    (async () => {
      while(!window.vl || !window.vl.select) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      if (!this._dressed) {
        vl.select.dress(this, params);
      }
    })();
  }

  /**
   * Vernietigt de `Choices` instantie van deze component.
   *
   * @see https://www.npmjs.com/package/choices.js
   */
  undress() {
    if (this._dressed) {
      try {
        vl.select.undress(this._choices);
      } catch(exception) {
        console.error("er liep iets fout bij de undress functie, controleer dat het vl-select element een id bevat! Foutmelding: " + exception);
      }
    }
  }

  /**
   * Activeer de component.
   */
  enable() {
    vl.select.enable(this);
  }

  /**
   * Deactiveer de component.
   */
  disable() {
    vl.select.disable(this);
  }

  /**
   * Verwijder de actieve geselecteerde optie.
   */
  removeActive() {
    vl.select.removeActive(this);
  }

  /**
   * Zet de actieve optie door een waarde.
   *
   * @param value de gekozen waarde om actief te zijn voor deze component
   */
  setValueByChoice(value) {
    vl.select.setValueByChoice(this, value);
  }
}

customElements.define('vl-select', VlSelect, {extends: 'select'});
