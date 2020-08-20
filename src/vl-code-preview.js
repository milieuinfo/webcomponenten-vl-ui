import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/@govflanders/vl-ui-util/dist/js/util.js';
import '/node_modules/@govflanders/vl-ui-core/dist/js/core.js';
import '/node_modules/@govflanders/vl-ui-code-preview/dist/js/code-preview.js';

/**
 * VlCodePreview
 * @class
 * @classdesc De code preview visualiseert de broncode.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-code-preview/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-code-preview/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-code-preview.html|Demo}
 *
 */
export class VlCodePreview extends vlElement(HTMLElement) {
  constructor() {
    super(`
      <style>
        @import '/src/style.css';
      </style>
      <div class="vl-code-preview" data-vl-code-preview data-vl-code-preview-no-copy-button>
        <pre class="line-numbers">
          <code class="language-markup auto-indent"></code>
        </pre>
      </div>
    `);

    this._dress();
  }

  get _codeElement() {
    return this.shadowRoot.querySelector('code');
  }

  _dress() {
    [...this.children].forEach((child) => this._codeElement.append(child));
    vl.codePreview.dress(this._element);
  }
}

define('vl-code-preview', VlCodePreview);
