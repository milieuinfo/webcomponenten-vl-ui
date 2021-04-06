import {awaitUntil, define, vlElement} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlTabsPane} from '/src/vl-tabs-pane.js';
import '/src/vl-tab.js';
import '/lib/tabs.js';

/**
 * VlTabs
 * @class
 * @classdesc Gebruik de vl-tabs navigatie om veel maar gerelateerde informatie in kleinere stukken te verdelen. Wanneer er met tabs gewerkt wordt, zal een deel van de informatie verborgen worden. Het is daardoor belangrijk om de gebruiker hier attent op te maken en duidelijk over te brengen welke informatie in een tab zichtbaar zal zijn. Op mobiele toestellen zal de tab navigatie gevisualiseerd worden via een dropdown menu.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-alt - Attribuut om de alt variant van de tabs te tonen. Deze variant dient gebruikt te worden als subnavigatie onder de functional header.
 * @property {boolean} data-vl-responsive-label - Attribuut om de waarde in de tabs in responsive mode te veranderen. Enkel van toepassing wanneer geen tab is gekozen.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-tabs/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-tabs/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-tabs.html|Demo}
 *
 */
export class VlTabs extends vlElement(HTMLElement) {
  static get is() {
    return 'vl-tabs';
  }

  static get _observedAttributes() {
    return ['alt', 'responsive-label', 'active-tab'];
  }

  constructor() {
    super(`
    <style>
      @import '/src/style.css';
    </style>
    <div id="tabs" data-vl-tabs data-vl-tabs-responsive-label="Navigatie">
      <div id="tabs-wrapper" class="vl-tabs__wrapper">
        <ul id="tab-list" class="vl-tabs" data-vl-tabs-list role="tablist"></ul>  
        <button type="button" data-vl-tabs-toggle aria-expanded="false" class="vl-tabs__toggle" data-vl-close="false">
          <span id="data-vl-tabs-responsive-label">Navigatie</span>  
        </button>
      </div>
    </div>`);
  }

  connectedCallback() {
    this._renderTabs();
    this._renderSections();
    this.__dress();
    this._observer = this.__observeTabPanes((mutations) => this.__processTabPane(mutations));
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  get _dressed() {
    return !!this.getAttribute(VlTabs._dressedAttributeName);
  }

  static get _dressedAttributeName() {
    return 'data-vl-tabs-dressed';
  }

  async __dress(forced) {
    if (!this._dressed || forced) {
      await customElements.whenDefined('vl-tab');
      await customElements.whenDefined('vl-tab-section');
      vl.tabs.dress(this.shadowRoot);
      this.setAttribute(VlTabs._dressedAttributeName, '');
    }
  }

  /**
   * Wacht tot de tab initialisatie klaar is.
   *
   * @return {Promise}
   */
  async ready() {
    return awaitUntil(() => this._dressed != undefined);
  }

  get __tabs() {
    return this.shadowRoot.getElementById('tabs');
  }

  get __tabList() {
    return this.shadowRoot.getElementById('tab-list');
  }

  get __responsiveLabel() {
    return this.shadowRoot.getElementById('data-vl-tabs-responsive-label');
  }

  get __tabPanes() {
    return [...this.querySelectorAll(VlTabsPane.is)];
  }

  __getTabTemplate({id, title}) {
    const pathname = window.location.pathname;
    return this._template(`
      <li is="vl-tab" data-vl-href="${pathname}#${id}" data-vl-id="${id}">
        ${(title)}
      </li>
    `);
  }

  __getTabSectionTemplate({id}) {
    return this._template(`
      <section id="${id}-pane" is="vl-tab-section">
        <slot name="${id}-slot"></slot>
      </section>
    `);
  };

  _addTab({id, title, index}) {
    const element = this.__getTabTemplate({id, title});
    if (index && index >= 0) {
      this.__tabList.insertBefore(element, this.__tabList.children[index]);
    } else {
      this.__tabList.appendChild(element);
    }
  }

  _removeTab(id) {
    const element = this.__tabList.querySelector(`[data-vl-id="${id}"]`);
    if (element) {
      this.__tabList.removeChild(element);
    }
  }

  _addTabSection({id, index}) {
    this.__tabPanes[index].setAttribute('slot', `${id}-slot`);
    const element = this.__getTabSectionTemplate({id});
    if (index && index >= 0) {
      this.__tabs.insertBefore(element, this.__tabs.children[++index]);
    } else {
      this.__tabs.appendChild(element);
    }
  }

  _removeTabSection(id) {
    const element = this.__tabs.querySelector(`#${id}-pane`);
    if (element) {
      this.__tabs.removeChild(element);
    }
  }

  _renderTabs() {
    this.__tabList.innerHTML = '';
    this.__tabPanes.forEach((tabPane) => this._addTab({id: tabPane.id, title: tabPane.title}));
  }

  _renderSections() {
    this.__tabPanes.forEach((tabPane, index) => this._addTabSection({id: tabPane.id, index: index}));
  }

  _altChangedCallback(oldValue, newValue) {
    if (newValue != undefined) {
      this.__tabList.classList.add('vl-tabs--alt');
    } else {
      this.__tabList.classList.remove('vl-tabs--alt');
    }
  }

  _responsiveLabelChangedCallback(oldValue, newValue) {
    const value = newValue || 'Navigatie';
    this.__tabs.setAttribute('data-vl-tabs-responsive-label', value);
    this.__responsiveLabel.innerHTML = value;
  }

  async _activeTabChangedCallback(oldValue, newValue) {
    await this.ready();
    const tab = [...this.__tabList.children].find((tab) => tab.id == newValue);
    if (tab && !tab.isActive) {
      tab.activate();
    }
  }

  __observeTabPanes(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(this, {childList: true});
    return observer;
  }

  __processTabPane(mutations) {
    const tabPanesToAdd = mutations.flatMap((mutation) => [...mutation.addedNodes]).filter((node) => node instanceof VlTabsPane);
    tabPanesToAdd.forEach((tabPane) => {
      const index = this.__tabPanes.indexOf(tabPane);
      this._addTab({id: tabPane.id, title: tabPane.title, index: index});
      this._addTabSection({id: tabPane.id, index: index});
    });
    const tabPanesToDelete = mutations.flatMap((mutation) => [...mutation.removedNodes]).filter((node) => node instanceof VlTabsPane);
    tabPanesToDelete.forEach((tabPane) => {
      this._removeTab(tabPane.id);
      this._removeTabSection(tabPane.id);
    });
    this.__dress();
  }
}

awaitUntil(() => window.vl && window.vl.tabs).then(() => define(VlTabs.is, VlTabs));
