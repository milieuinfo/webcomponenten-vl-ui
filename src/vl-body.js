import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';

/**
 * VlBody
 * @class
 * @classdesc
 *
 * @extends HTMLBodyElement
 * @mixes nativeVlElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-body/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-body/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-body.html|Demo}
 *
 */
export class VlBody extends nativeVlElement(HTMLBodyElement) {}

define('vl-body', VlBody, {extends: 'body'});
