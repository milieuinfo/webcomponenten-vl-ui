import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-grid/dist/vl-grid.js';
import '/node_modules/vl-ui-form-message/dist/vl-form-message.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';
import '/node_modules/vl-ui-button/dist/vl-button.js';
import '/node_modules/vl-ui-modal/dist/vl-modal.js';
import '/node_modules/vl-ui-pager/dist/vl-pager.js';

/**
 * VlRichData
 * @class
 * @classdesc
 *
 * @extends HTMLElement
 *
 * @property {boolean} data-vl-filter-closable - Attribuut dat de filter sluitbaar maakt en een knop getoond wordt om de filter te tonen en terug te verbergen. Op een klein scherm wordt een modal geopend bij het klikken op de filter knop ipv een de filter naast de tabel te tonen. Om elementen van de filter te verbergen enkel in de modal, kan het attribuut data-vl-hidden-in-modal gezet worden.
 * @property {boolean} data-vl-filter-closed - Attribuut dat aangeeft of dat de filter gesloten is.
 *
 * @slot toggle-filter-button-text - slot om de tekst te kunnen wijzigen van de toggle filter knop. Default: Filter.
 * @slot close-filter-button-text - slot om de onzichtbare tekst te kunnen wijzigen van de filter sluit knop. Default: Filter sluiten.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-rich-data/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-rich-data/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-rich-data.html|Demo}
 */
export class VlRichData extends vlElement(HTMLElement) {
  static get _observedAttributes() {
    return ['data', 'collapsed-m', 'collapsed-s', 'collapsed-xs', 'filter-closable', 'filter-closed'];
  }

  static get _defaultSearchColumnSize() {
    return 4;
  }

  constructor(style = '', content = '') {
    super(`
      <style>
        @import "/src/style.css";
        @import "/node_modules/vl-ui-grid/dist/style.css";
        @import "/node_modules/vl-ui-form-message/dist/style.css";
        @import "/node_modules/vl-ui-icon/dist/style.css";
        @import "/node_modules/vl-ui-button/dist/style.css";
      </style>
      ${style}
      <div>
        <div is="vl-grid" is-stacked>
          <div id="toggle-filter" is="vl-column" class="vl-u-align-right vl-u-hidden--s" hidden size="12" medium-size="12">
            <button id="toggle-filter-button" is="vl-button-link" type="button" aria-label="Toon de filter">
              <span is="vl-icon" data-vl-icon="content-filter" data-vl-before></span><slot name="toggle-filter-button-text">Filter</slot>
            </button>
          </div>
          <div id="open-filter" is="vl-column" class="vl-u-align-right vl-u-hidden" hidden size="12" medium-size="12">
            <button id="open-filter-button" is="vl-button-link" type="button" aria-label="Toon de filter">
              <span is="vl-icon" data-vl-icon="content-filter" data-vl-before></span><slot name="toggle-filter-button-text">Filter</slot>
            </button>
          </div>
          <div id="search" is="vl-column" size="0" medium-size="0" small-size="0" extra-small-size="0">
            <button id="close-filter-button" class="vl-filter__close" hidden type="button">
              <span is="vl-icon" data-vl-icon="close"></span>
              <span class="vl-u-visually-hidden"><slot name="close-filter-button-text">Filter sluiten</slot></span>
            </button>
            <div id="filter-slot-container">
              <slot id="filter-slot" name="filter"></slot>
            </div>
          </div>
          <div id="content" is="vl-column" size="12" medium-size="12" small-size="12" extra-small-size="12">
            <div is="vl-grid" is-stacked>
              <div id="search-results" is="vl-column" size="6" medium-size="6" small-size="6" extra-small-size="6">
                <span>We vonden</span> <strong><span id="search-results-number">0</span> resultaten</strong>
              </div>
              <div id="sorter" is="vl-column" size="6" medium-size="6" small-size="6" extra-small-size="6">
                <label is="vl-form-label" for="filter-sort">
                  Sorteer
                </label>
                <slot name="sorter"></slot>
              </div>
              <div is="vl-column" size="12" medium-size="12">
                <slot name="content">${content}</slot>
              </div>
            </div>
          </div>
          <div id="pager" is="vl-column" size="12" medium-size="12">
            <slot name="pager"></slot>
          </div>
        </div>
        <vl-modal id="filter-modal" closable not-cancellable></vl-modal>
      </div>
    `);

    this.__processSearchFilter();
    this.__processSorter();

    this.__observePager();
    this.__observeFilterButtons();
  }

  connectedCallback() {
    this._observer = this.__observeSearchFilter();
    this.__updateNumberOfSearchResults();
  }

  disconnectedCallback() {
    this._observer.disconnect();
  }

  /**
   * Stelt in welke data de tabel moet tonen.
   * @param {Object[]} object - Een Array van objecten die de data voorstellen.
   */
  set data(object) {
    if (this.__data !== object) {
      const {paging, sorting, filter} = object;
      this._paging = paging;
      this._sorting = sorting;
      this._filter = filter;
      this.__data = object;
    }
  }

  /**
   * Geeft de data terug die in de tabel wordt getoond.
   * @return {Object[]}
   */
  get data() {
    return this.__data || {data: []};
  }

  get __contentColumn() {
    return this.shadowRoot.querySelector('#content');
  }

  get __filter() {
    return this.querySelector('[slot="filter"]');
  }

  get __filterCloseButton() {
    return this.shadowRoot.querySelector('#close-filter-button');
  }

  get __filterModal() {
    return this.shadowRoot.querySelector('#filter-modal');
  }

  get __filterSlotContainer() {
    return this.shadowRoot.querySelector('#filter-slot-container');
  }

  get __filterOpenContainer() {
    return this.shadowRoot.querySelector('#open-filter');
  }

  get __filterOpenButton() {
    return this.shadowRoot.querySelector('#open-filter-button');
  }

  get __filterToggleContainer() {
    return this.shadowRoot.querySelector('#toggle-filter');
  }

  get __filterToggleButton() {
    return this.shadowRoot.querySelector('#toggle-filter-button');
  }

  get __searchResults() {
    return this.shadowRoot.querySelector('#search-results');
  }

  get __numberOfSearchResults() {
    return this.__searchResults.querySelector('#search-results-number');
  }

  get __sorterContainer() {
    return this.shadowRoot.querySelector('#sorter');
  }

  get __sorter() {
    return this.querySelector('[slot="sorter"]');
  }

  get __pager() {
    return this.querySelector('[slot="pager"]');
  }

  get __searchColumn() {
    return this.shadowRoot.querySelector('#search');
  }

  get __searchFilter() {
    if (this.__filter) {
      return this.__filter.querySelector('[is="vl-search-filter"]');
    }
  }

  get __searchFilterForm() {
    if (this.__searchFilter) {
      return this.__searchFilter.querySelector('form');
    }
  }

  get __formDataState() {
    if (this.__searchFilter && this.__searchFilter.formData) {
      const hasFilterValue = [...this.__searchFilter.formData.values()].find(Boolean);
      if (hasFilterValue) {
        return this.__searchFilter.formData;
      }
    }
  }

  get __pagingState() {
    if (this.__pager) {
      return {
        currentPage: this.__pager.currentPage,
        totalPages: this.__pager.totalPages,
        itemsPerPage: this.__pager.itemsPerPage,
        totalItems: this.__pager.totalItems,
      };
    }
  }

  set _paging(paging) {
    if (paging) {
      if (paging.currentPage != null) {
        this.__pager.setAttribute('current-page', paging.currentPage);
      }
      if (paging.itemsPerPage != null) {
        this.__pager.setAttribute('items-per-page', paging.itemsPerPage);
      }
      if (paging.totalItems != null) {
        this.__pager.setAttribute('total-items', paging.totalItems);
        this.__updateNumberOfSearchResults(paging.totalItems);
      }
    }
  }

  set _filter(filter) {
    if (filter && this.__searchFilter) {
      const form = this.__searchFilter.querySelector('form');
      if (form) {
        filter.forEach((entry) => {
          const formElement = form.elements[entry.name];
          if (formElement) {
            formElement.value = entry.value;
          }
        });
      }
    }
  }

  __onStateChange(event, {paging = false} = {}) {
    event.stopPropagation();
    event.preventDefault();
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.__getState({paging}),
      bubbles: true,
    }));
  }

  __getState({paging}) {
    const state = {};
    state.formData = this.__formDataState;
    state.paging = this.__pagingState;
    if (!paging && state.paging) {
      state.paging.currentPage = 1;
    }
    return state;
  }

  _filterClosableChangedCallback(oldValue, newValue) {
    this.__filterCloseButton.hidden = newValue == null;
    this.__filterToggleContainer.hidden = newValue == null;
    this.__filterOpenContainer.hidden = newValue == null;
    if (newValue == null) {
      this.__filterOpenContainer.classList.remove('vl-u-visible--s');
      this.__searchColumn.classList.remove('vl-u-hidden--s');
    } else {
      this.__filterOpenContainer.classList.add('vl-u-visible--s');
      this.__searchColumn.classList.add('vl-u-hidden--s');
    }
  }

  _filterClosedChangedCallback(oldValue, newValue) {
    if (newValue == null) {
      this.__showSearchColumn();
    } else {
      this.__hideSearchColumn();
    }
  }

  __observeFilterButtons() {
    this.__filterCloseButton.addEventListener('click', () => {
      this.setAttribute('data-vl-filter-closed', '');
    });
    this.__filterToggleButton.addEventListener('click', () => {
      this.__filterSlotContainer.removeAttribute('slot');
      this.__searchColumn.appendChild(this.__filterSlotContainer);
      this.__showHiddenInModalElements();
      this.toggleAttribute('data-vl-filter-closed');
    });
    this.__filterOpenButton.addEventListener('click', () => {
      this.setAttribute('data-vl-filter-closed', ''); // first close to make sure when resized that it doesn't show without proper slot
      this.__filterSlotContainer.setAttribute('slot', 'content');
      this.__filterModal.appendChild(this.__filterSlotContainer);
      this.__hideHiddenInModalElements();
      this.__filterModal.open();
    });
  }

  __showHiddenInModalElements() {
    this.__setHiddenInModalElements(false);
  }

  __hideHiddenInModalElements() {
    this.__setHiddenInModalElements(true);
  }

  __setHiddenInModalElements(hidden) {
    this.__filter.querySelectorAll('[data-vl-hidden-in-modal]').forEach((element) => element.hidden = hidden);
  }

  __observePager() {
    if (this.__pager) {
      this.__pager.setAttribute('align-right', true);
      this.__pager.addEventListener('change', (e) => {
        this.__onStateChange(e, {paging: true});
      });
    }
  }

  __observeSearchFilter() {
    const observer = new MutationObserver((mutations) => {
      mutations = mutations.filter((mutation) => mutation.target && mutation.target.slot != 'content');
      if (mutations && mutations.length > 0) {
        this.__processSearchFilter();
      }
    });
    observer.observe(this, {childList: true, subtree: true});
    return observer;
  }

  __processSearchFilter() {
    if (this.__searchFilter) {
      this.__searchFilter.setAttribute('alt', '');
      this.__showSearchColumn();
      this.__showSearchResults();
      this.__addSearchFilterEventListeners();
    } else {
      this.__hideSearchColumn();
      this.__hideSearchResults();
    }
  }

  __processSorter() {
    if (this.__sorter) {
      this.__showSorter();
    } else {
      this.__hideSorter();
    }
  }

  __hideSearchColumn() {
    this.__searchColumn.hidden = true;
    this.__setGridColumnWidth(0);
  }

  __hideSearchResults() {
    this.__searchResults.hidden = true;
  }

  __hideSorter() {
    this.__sorterContainer.hidden = true;
  }

  __showSearchColumn() {
    this.__searchColumn.hidden = false;
    this.__setGridColumnWidth(VlRichData._defaultSearchColumnSize);
  }

  __showSearchResults() {
    this.__searchResults.hidden = false;
  }

  __showSorter() {
    this.__sorterContainer.hidden = false;
  }

  __setGridColumnWidth(width) {
    ['size', 'medium-size'].forEach((size) => {
      this.__searchColumn.setAttribute(size, width);
      this.__contentColumn.setAttribute(size, 12 - width);
    });
  }

  __updateNumberOfSearchResults(number) {
    if (number) {
      this.__numberOfSearchResults.textContent = number;
    } else {
      if (this.__pager) {
        customElements.whenDefined('vl-pager').then(() => {
          this.__numberOfSearchResults.textContent = this.__pager.totalItems || 0;
        });
      }
    }
  }

  __addSearchFilterEventListeners() {
    this.__searchFilter.addEventListener('change', (e) => {
      e.stopPropagation();
      e.preventDefault();
    });
    this.__searchFilter.addEventListener('input', (e) => {
      this.__onFilterFieldChanged(e);
    });
    if (this.__searchFilterForm) {
      this.__searchFilterForm.addEventListener('reset', (e) => {
        setTimeout(() => {
          this.__onFilterFieldChanged(e);
        });
      });
    }
  }

  __onFilterFieldChanged(event) {
    event.stopPropagation();
    event.preventDefault();
    this.__onStateChange(event);
  }
}

define('vl-rich-data', VlRichData);
