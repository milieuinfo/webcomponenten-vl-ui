import {vlElement, define, awaitUntil} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-grid/dist/vl-grid.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';
import '/node_modules/vl-ui-button/dist/vl-button.js';
import '/node_modules/vl-ui-action-group/dist/vl-action-group.js';
import '/node_modules/@govflanders/vl-ui-util/dist/js/util.js';
import '/node_modules/@govflanders/vl-ui-core/dist/js/core.js';
import '/node_modules/vl-ui-modal/lib/modal.js';

/**
 * VlModal
 * @class
 * @classdesc Gebruik de modal dialoog om de gebruiker te informeren over onbewaarde wijzigingen wanneer hij de pagina verlaat. Een modal dialoog vraagt de aandacht van de gebruiker en verplicht de gebruiker om actie te ondernemen voordat de site verder gebruikt kan worden.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-title - Attribuut wordt gebruikt om de titel (in een h2) te zetten. Indien leeg of weggelaten, wordt er geen titel element gezet.
 * @property {boolean} data-vl-open - Attribuut wordt gebruikt om aan te duiden dat de modal onmiddellijk geopend moet worden na het renderen.
 * @property {boolean} data-vl-closable - Attribuut wordt gebruikt om aan te duiden dat de modal sluitbaar is.
 * @property {boolean} data-vl-not-cancellable - Attribuut wordt gebruikt om aan te duiden dat de modal niet annuleerbaar is.
 * @property {boolean} data-vl-not-auto-closable - Attribuut wordt gebruikt om aan te duiden dat de modal niet sluit bij het uitvoeren van een actie in de button slot.
 * @property {boolean} data-vl-allow-overflow - Attribuut wordt gebruikt om aan te duiden de inhoud van de modal uit de modal mag treden.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-modal/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-modal/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-modal.html|Demo}
 */
export class VlModal extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['id', 'title', 'closable', 'not-cancellable', 'open', 'not-auto-closable', 'allow-overflow'];
  }

  static get _closableAttribute() {
    return 'data-vl-modal-closable';
  }

  static get _closeAttribute() {
    return 'data-vl-modal-close';
  }

  constructor() {
    super(`
      <style>
        @import '/node_modules/vl-ui-modal/dist/style.css';
        @import '/node_modules/vl-ui-grid/dist/style.css';
        @import '/node_modules/vl-ui-icon/dist/style.css';
        @import '/node_modules/vl-ui-link/dist/style.css';
        @import '/node_modules/vl-ui-action-group/dist/style.css';
        @import '/node_modules/vl-ui-button/dist/style.css';

        :host([data-vl-allow-overflow]) dialog {
          overflow: visible;
        }
      </style>

      <div class="vl-modal">
        <dialog class="vl-modal-dialog" data-vl-modal tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="modal-toggle-title" aria-describedby="modal-toggle-description">
          <div is="vl-grid" data-vl-is-stacked>
            <div id="modal-toggle-description" is="vl-column" data-vl-size="12" data-vl-medium-size="12" class="vl-modal-dialog__content">
              <slot name="content">Modal content</slot>
            </div>
            <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
              <div id="modal-action-group" is="vl-action-group">
                <slot name="button" data-vl-modal-close></slot>
                <button is="vl-button-link" id="modal-toggle-cancellable" data-vl-modal-close>
                  <span is="vl-icon" icon="cross" before></span>Annuleer
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    `);
  }

  connectedCallback() {
    this.dress();
  }

  get _dialogElement() {
    return this._element.querySelector('dialog');
  }

  get _titleElement() {
    return this._element.querySelector('#modal-toggle-title');
  }

  get _actionGroupElement() {
    return this._element.querySelector('#modal-action-group');
  }

  get _cancelElement() {
    return this._element.querySelector('#modal-toggle-cancellable');
  }

  get _slotButtonElement() {
    return this._element.querySelector('slot[name="button"]');
  }

  get _dressed() {
    return !!this.getAttribute('data-vl-modal-dressed');
  }

  /**
   * Initialiseer de modal config.
   */
  dress() {
    if (!this._dressed) {
      vl.modal.dress(this._dialogElement);
    }
  }

  /**
   * Handmatig openen van modal.
   */
  open() {
    vl.modal.lastClickedToggle = this._dialogElement;
    if (!this._dialogElement.hasAttribute('open')) {
      awaitUntil(() => this._dialogElement.isConnected).then(() => {
        vl.modal.toggle(this._dialogElement);
      });
    }
  }

  /**
   * Handmatig sluiten van modal.
   */
  close() {
    if (this._dialogElement.hasAttribute('open')) {
      vl.modal.toggle(this._dialogElement);
    }
  }

  /**
   * Mogelijkheid om functies toe te voegen op events die op de dialog voorkomen.
   * @param {String} event
   * @param {Function} callback
   */
  on(event, callback) {
    this._dialogElement.addEventListener(event, callback);
  }

  _getCloseButtonTemplate() {
    return this._template(`
      <button id="close" type="button" class="vl-modal-dialog__close" data-vl-modal-close>
        <i class="vl-modal-dialog__close__icon vl-vi vl-vi-cross" aria-hidden="true"></i>
        <span class="vl-u-visually-hidden">Venster sluiten</span>
      </button>
    `);
  }

  _getTitleTemplate(titel) {
    return this._template(`
      <h2 class="vl-modal-dialog__title" id="modal-toggle-title">${titel}</h2>`);
  }

  _getCancelTemplate() {
    return this._template(`
      <button is="vl-button-link" data-vl-modal-close id="modal-toggle-cancellable">
          <span is="vl-icon" icon="cross" before data-vl-modal-close></span>Annuleer
      </button>`);
  }

  _idChangedCallback(oldValue, newValue) {
    this._dialogElement.id = newValue;
  }

  _titleChangedCallback(oldValue, newValue) {
    if (newValue) {
      if (this._titleElement) {
        this._titleElement.innerText = newValue;
      } else {
        this._dialogElement.prepend(this._getTitleTemplate(newValue));
      }
    } else {
      if (this._titleElement) {
        this._titleElement.remove();
      }
    }
  }

  _notCancellableChangedCallback(oldValue, newValue) {
    if (newValue == undefined && !this._cancelElement) {
      this._actionGroupElement.append(this._getCancelTemplate());
    } else if (newValue != undefined && this._cancelElement) {
      this._cancelElement.remove();
    }
  }

  _openChangedCallback(oldValue, newValue) {
    this._dialogElement.setAttribute('open', newValue);
  }

  _closableChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this._closeButtonElement = this._getCloseButtonTemplate();
      this._dialogElement.setAttribute(VlModal._closableAttribute, '');
      this._dialogElement.appendChild(this._closeButtonElement);
    } else {
      if (this._closeButtonElement) {
        this._closeButtonElement.remove();
        this._dialogElement.removeAttribute(VlModal._closableAttribute);
      }
    }
  }

  _notAutoClosableChangedCallback(oldValue, newValue) {
    if (newValue == undefined && !this._slotButtonElement.hasAttribute(VlModal._closeAttribute)) {
      this._slotButtonElement.setAttribute(VlModal._closeAttribute, '');
    } else if (newValue != undefined && this._slotButtonElement.hasAttribute(VlModal._closeAttribute)) {
      this._slotButtonElement.removeAttribute(VlModal._closeAttribute);
    }
  }
}

define('vl-modal', VlModal);
