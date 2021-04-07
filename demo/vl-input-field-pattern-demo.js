import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {vlPattern} from '/vl-pattern.js';
Promise.all([
  vlPattern.ready(),
]).then(() => define('vl-input-field-demo', VlInputFieldDemo, {extends: 'input'}));

export class VlInputFieldDemo extends nativeVlElement(HTMLInputElement) {
  connectedCallback() {
    this.classList.add('vl-input-field');
    this._dress();
  }

  static get _observedChildClassAttributes() {
    return ['block', 'small', 'error', 'success', 'disabled'];
  }

  get _classPrefix() {
    return 'vl-input-field--';
  }

  _dress() {
    this._dressPattern();
  }

  _dressPattern() {
    Object.assign(this, vlPattern);
    this.dress(this);
  }
}
