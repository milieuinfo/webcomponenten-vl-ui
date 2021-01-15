import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-grid/dist/vl-grid.js';

/**
 * VlContactCard
 * @class
 * @classdesc Gebruik een contact card om contactgegevens van een overheidsdienst te tonen.
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-contact-card/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-contact-card/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-contact-card.html|Demo}
 *
 */
export class VlContactCard extends vlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '/src/style.css';
            @import '/node_modules/vl-ui-grid/dist/style.css';
        </style>
        <div class="vl-contact-data">
            <div is="vl-grid" data-vl-is-stacked>
                <div is="vl-column" data-vl-size="3" data-vl-medium-size="12">
                    <slot name="info"></slot>
                </div>
                <div is="vl-column" data-vl-size="8" data-vl-medium-size="12" data-vl-push="1" class="vl-push--reset--m">
                    <slot name="properties"></slot>
                </div>
            </div>
        </div>
    `);
  }
}

define('vl-contact-card', VlContactCard);
