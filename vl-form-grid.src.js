import {VlGrid, VlColumn} from "/node_modules/vl-ui-grid/vl-grid.js";
import {define} from "/node_modules/vl-ui-core/vl-core.js";

/**
 * VlFormGrid
 * @class
 * @classdesc Class die een grid layout mogelijk maakt in een formulier. <a href="../demo/vl-form-grid.html">Demo</a>.
 * @extends VlGrid
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-grid/issues|Issues}
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
 * @classdesc Class die een kolom in een formulier grid layout representeert. <a href="../demo/vl-form-grid.html">Demo</a>.
 * @extends VlColumn
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-grid/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-form-grid/issues|Issues}
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

define('vl-form-grid', VlFormGrid, {extends: 'div'});
define('vl-form-column', VlFormColumn, {extends: 'div'});
