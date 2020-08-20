import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';

/**
 * VlAlert
 * @class
 * @classdesc Gebruik de vl-alert om de gebruiker te informeren over belangrijke informatie.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-closable - Attribuut wordt gebruikt om de optie toe te voegen om de waarschuwing te sluiten door op het sluit icoon te klikken in de rechterbovenhoek.
 * @property {boolean} data-vl-icon - Attribuut wordt gebruikt om het icoon type te bepalen.
 * @property {(small)} data-vl-size - Attribuut activeert een variant van de waarschuwing maar kleiner.
 * @property {string} data-vl-title - Attribuut wordt gebruikt als titel van de waarschuwing.
 * @property {(success | warning | error | info)} data-vl-type - Attribuut bepaalt de soort van waarschuwing, foutmelding, probleemmelding of succesmelding.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-alert/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-alert/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-alert.html|Demo}
 */
export class VlAlert extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['icon', 'title', 'closable', 'type', 'size'];
  }

  constructor() {
    super(`
      <style>
        @import '/src/style.css';
      </style>
      <div id="alert" class="vl-alert" role="alert">
        <div id="content" class="vl-alert__content">
          <p id="title" class="vl-alert__title"></p>
          <div id="message" class="vl-alert__message">
            <slot id="messages-slot"></slot>
          </div>
          <div id="actions" class="vl-alert__actions">
            <slot id="actions-slot" name="actions"></slot>
          </div>
        </div>
      </div>
    `);
  }

  connectedCallback() {
    this.__processActionsElementVisibility();
    this._actionsSlotElement.addEventListener('slotchange', () => this.__processButtons());
  }

  get _classPrefix() {
    return 'vl-alert--';
  }

  get _titleElement() {
    return this._element.querySelector('.vl-alert__title');
  }

  get _iconElement() {
    return this._element.querySelector('.vl-alert__icon');
  }

  get _closeButtonElement() {
    return this._element.querySelector('.vl-alert__close');
  }

  get _actionsElement() {
    return this._element.querySelector('.vl-alert__actions');
  }

  get _actionsSlotElement() {
    return this._element.querySelector('slot[name="actions"]');
  }

  _getIconTemplate(newValue) {
    return this._template(`
      <div class="vl-alert__icon">
        <span is="vl-icon" data-vl-icon="${newValue}"></span>
      </div>
    `);
  };

  _getCloseButtonTemplate() {
    return this._template(`
      <button id="close" class="vl-alert__close" type="button">
        <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
        <span class="vl-u-visually-hidden">Melding sluiten</span>
      </button>
    `);
  }

  _getActionsTemplate() {
    return this._template(`
      <div class="vl-alert__actions"></div>
    `);
  }

  _iconChangedCallback(oldValue, newValue) {
    if (this._iconElement) {
      this._iconElement.remove();
    }

    if (newValue != undefined) {
      this._element.prepend(this._getIconTemplate(newValue));
    }
  };

  _titleChangedCallback(oldValue, newValue) {
    this._titleElement.textContent = newValue;
  };

  _closableChangedCallback(oldValue, newValue) {
    if (this._closeButtonElement) {
      this._closeButtonElement.remove();
    }

    if (newValue != undefined) {
      const closeButtonTemplate = this._getCloseButtonTemplate();
      closeButtonTemplate.querySelector('button').addEventListener('click', this.__removeAlert);
      this._element.appendChild(closeButtonTemplate);
    }
  }

  _typeChangedCallback(oldValue, newValue) {
    if (['success', 'warning', 'error', 'info'].indexOf(newValue) >= 0) {
      this._changeClass(this._element, oldValue, newValue);
    } else {
      this._element.classList.remove(this._classPrefix + oldValue);
    }
  }

  _sizeChangedCallback(oldValue, newValue) {
    if (['small'].indexOf(newValue) >= 0) {
      this._changeClass(this._element, oldValue, newValue);
    } else {
      this._element.classList.remove(this._classPrefix + oldValue);
    }
  }

  __processActionsElementVisibility() {
    this._actionsElement.hidden = this._actionsSlotElement && this._actionsSlotElement.assignedElements().length == 0;
  }

  __processButtons() {
    if (this._actionsSlotElement) {
      this._actionsSlotElement.assignedNodes().forEach((element) => {
        if (element instanceof HTMLButtonElement) {
          element.setAttribute('data-vl-narrow', '');
        }
      });
    }
    this.__processActionsElementVisibility();
  }

  __removeAlert() {
    this.getRootNode().host.remove();
  }
}

define('vl-alert', VlAlert);
