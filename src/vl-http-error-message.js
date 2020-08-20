import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-grid/dist/vl-grid.js';
import '/node_modules/vl-ui-titles/dist/vl-titles.js';
import '/node_modules/vl-ui-typography/dist/vl-typography.js';
import '/node_modules/vl-ui-button/dist/vl-button.js';

/**
 * VlHttpErrorMessage
 * @class
 * @classdesc Toont een verklarend bericht voor een HTTP fout.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {String} data-vl-title - De titel van de foutmelding.
 * @property {String} data-vl-image - De url van de afbeelding die getoond moet worden.
 * @property {String} data-vl-image-alt - De alternatieve tekst van de afbeelding die getoond moet worden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-http-error-message/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-http-error-message/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-http-error-message.html|Demo}
 */
export class VlHttpErrorMessage extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['title', 'image', 'image-alt'];
  }

  /**
   * @param {Object} defaults - De standaardwaarden voor alles wat er in de foutboodschap getoond moet worden. Hier wordt op teruggevallen indien er op een andere manier geen waarde werd gespecificeerd.
   * @param {String} defaults.title - De titel van de foutmelding.
   * @param {String} defaults.image - De url van de afbeelding die getoond moet worden.
   * @param {String} defaults.imageAlt - De alternatieve tekst van de afbeelding die getoond moet worden.
   * @param {Literal} defaults.text - De uitleg die getoond moet worden.
   * @param {Literal} defaults.actions - De acties die mogelijk zijn.
   */
  constructor(defaults) {
    super(`
      <style>
        @import '/src/style.css';
        @import '/node_modules/vl-ui-grid/dist/style.css';
        @import '/node_modules/vl-ui-titles/dist/style.css';
        @import '/node_modules/vl-ui-button/dist/style.css';
      </style>
      <div is="vl-grid" is-stacked align-center v-center>
        <div is="vl-column" size="6" max-size="12" class="vl-u-hidden vl-u-visible--s">
          <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
            <img id="image-small"/>
          </div>
        </div>
        <div is="vl-column" size="6" max-size="12" small-size="8" small-max-size="12" extra-small-size="12" extra-small-max-size="12">
          <div is="vl-grid" is-stacked>
            <div is="vl-column" size="12" max-size="12">
              <h2 id="title" is="vl-h2"></h2>
              <vl-typography id="text"></vl-typography>
            </div>
            <div id="actions" is="vl-column" size="12" max-size="12"></div>
          </div>
        </div>
        <div is="vl-column" size="6" max-size="12" class="vl-u-hidden--s">
          <div class="vl-u-display-flex vl-u-flex-align-center vl-u-flex-v-center">
            <img id="image-normal"/>
          </div>
        </div>
      </div>
    `);

    this._defaults = defaults || {};
  }

  connectedCallback() {
    this.__processAttributes();
    this.__processSlotElements();
    this._observer = this.__observeSlotElements(() => this.__processSlotElements());
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  get _title() {
    return this.dataset.vlTitle || this._defaults.title;
  }

  get _image() {
    return this.dataset.vlImage || this._defaults.image;
  }

  get _imageAlt() {
    return this.dataset.vlImageAlt || this._defaults.imageAlt;
  }

  get _textSlotElement() {
    return this.querySelector('[slot="text"]') || VlHttpErrorMessage.__createDivWithContent(this._defaults.text);
  }

  get _actionsSlotElement() {
    return this.querySelector('[slot="actions"]') || VlHttpErrorMessage.__createDivWithContent(this._defaults.actions);
  }

  _titleChangedCallback() {
    this.__processTitle();
  }

  _imageChangedCallback() {
    this.__processImage();
  }

  _imageAltChangedCallback() {
    this.__processImageAlt();
  }

  __setImageAttribute(attribute, value) {
    this.__imageForSmallScreensElement.setAttribute(attribute, value);
    this.__imageForNormalScreensElement.setAttribute(attribute, value);
  }

  get __titleElement() {
    return this._element.querySelector('#title');
  }

  get __textElement() {
    return this._element.querySelector('#text');
  }

  get __actionsElement() {
    return this._element.querySelector('#actions');
  }

  get __actionElement() {
    return this._element.querySelector('#actions > *');
  }

  get __imageForSmallScreensElement() {
    return this._element.querySelector('#image-small');
  }

  get __imageForNormalScreensElement() {
    return this._element.querySelector('#image-normal');
  }

  __processTitle() {
    this.__titleElement.textContent = this._title;
  }

  __processImage() {
    this.__setImageAttribute('src', this._image);
  }

  __processImageAlt() {
    this.__setImageAttribute('alt', this._imageAlt);
  }

  __processAttributes() {
    this.__processTitle();
    this.__processImage();
    this.__processImageAlt();
  }

  __processSlotElements() {
    this.__processTextSlot();
    this.__processActionsSlot();
  }

  __observeSlotElements(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, {attributes: true, childList: true, characterData: true, subtree: true});
    return observer;
  }

  __processTextSlot() {
    VlHttpErrorMessage.__clearChildren(this.__textElement);

    if (this._textSlotElement) {
      this.__textElement.appendChild(this._textSlotElement.cloneNode(true));
    }
  }

  __processActionsSlot() {
    VlHttpErrorMessage.__clearChildren(this.__actionsElement);

    if (this._actionsSlotElement) {
      this.__actionsElement.appendChild(this._actionsSlotElement.cloneNode(true));
    }
  }

  static __clearChildren(element) {
    while (element.hasChildNodes()) {
      element.firstChild.remove();
    }
  }

  static __createDivWithContent(content) {
    const element = document.createElement('div');
    element.innerHTML = content;
    return element;
  }
}

define('vl-http-error-message', VlHttpErrorMessage);
define('vl-http-404-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, die pagina vonden we niet terug',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/page-not-found.svg',
      imageAlt: 'Pagina niet gevonden',
      text: `<p>De pagina die u zoekt, vonden we niet terug.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});

define('vl-http-500-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Oeps, er is iets fout gelopen',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Onverwachte fout',
      text: `<p>De actie die u heeft uitgevoerd is fout gelopen. Gelieve opnieuw te proberen.</p>`,
      actions: `<a is="vl-link-button">Terug naar de pagina</a>`,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this._registerBackLink();
  }

  _registerBackLink() {
    this.__actionElement.addEventListener('click', () => window.history.back());
  }
});
