import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlBreadcrumb
 * @class
 * @classdesc Gebruik de breadcrumb om de locatie van de huidige pagina binnen een navigatie hiërarchie te tonen
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-breadcrumb/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-breadcrumb/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-breadcrumb.html|Demo}
 *
 */
export class VlBreadcrumb extends nativeVlElement(HTMLElement) {
  connectedCallback() {
    this._processStyle();
  }

  get _olElements() {
    return [...this.querySelectorAll('ol')];
  }

  get _liElements() {
    return this._olElements.flatMap((ol) => [...ol.querySelectorAll('li')]);
  }

  get _aElements() {
    return this._liElements.flatMap((li) => [...li.querySelectorAll('a')]);
  }

  get _separatorTemplate() {
    return this._template(`<span class="vl-breadcrumb__list__item__separator" aria-hidden="true"></span>`);
  }

  _processStyle() {
    this._addClasses();
    this._addSeparators();
  }

  _addClasses() {
    this.classList.add('vl-breadcrumb');
    this._olElements.forEach((ol) => ol.classList.add('vl-breadcrumb__list'));
    this._liElements.forEach((li) => li.classList.add('vl-breadcrumb__list__item'));
    this._aElements.forEach((a) => a.classList.add('vl-breadcrumb__list__item__cta'));
  }

  _addSeparators() {
    this._liElements.slice(1, this._liElements.length).forEach((li) => li.prepend(this._separatorTemplate));
  }
}

define('vl-breadcrumb', VlBreadcrumb, {extends: 'nav'});
