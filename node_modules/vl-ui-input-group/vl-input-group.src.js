import { VlElement, define } from '/node_modules/vl-ui-core/vl-core.js';

/**
* VlInputGroup
* @class
* @classdesc Gebruik vl-ui-input-group om een 'input field' en een 'input add-on' te combineren. Bijvoorbeeld: de 'vl-datepicker' component combineert een 'input field' en een 'input add-on' in een 'input group'. <a href="demo/vl-input-group.html">Demo</a>.
* 
* @extends VlElement
*
* @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-group/releases/latest|Release notes}
* @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-group/issues|Issues}
*/
export class VlInputGroup extends VlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        @import "../style.css";
      </style>
      <div class="vl-input-group">
        <slot></slot>
      </div>
    `);
  }
}

define('vl-input-group', VlInputGroup);
