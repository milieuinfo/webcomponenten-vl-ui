import {VlGrid, VlColumn} from "/node_modules/vl-ui-grid/vl-grid.js";

/**
 * VlFormGrid
 * @class
 * @classdesc Class die een grid layout mogelijk maakt in een formulier.
 * @extends VlGrid
 */
export class VlFormGrid extends VlGrid {
  connectedCallback() {
    this.classList.add('vl-form-grid');
  }

  get _classPrefix() {
    return 'vl-form-grid--';
  }
}

/**
 * VlFormColumn
 * @class
 * @classdesc Class die een kolom in een formulier grid layout representeert.
 * @extends VlColumn
 */
export class VlFormColumn extends VlColumn {

  connectedCallback() {
    this.classList.add('vl-form-column');
  }

  get _classPrefix() {
    return 'vl-form-col--';
  }

  get _pushPrefix() {
    return 'vl-form-push--';
  }

}

customElements.define('vl-form-grid', VlFormGrid, {extends: 'div'});
customElements.define('vl-form-column', VlFormColumn, {extends: 'div'});