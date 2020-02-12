import { NativeVlElement, define } from 'vl-ui-core';

/**
 * VlImage
 * @class
 * @classdesc Gebruik de image component om illustratiens, graphics, tekeningen, foto's, etc. te tonen op je site.
 * 
 * @extends NativeVlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-image/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-image/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-image.html|Demo}
 * 
 */
export class VlImage extends NativeVlElement(HTMLImageElement) {
	
	constructor() {
		super();
		this.classList.add('vl-image');
		if (!this.alt) {
			this.alt = "";
		}
	}	
	
    get _stylePath() {
        return '../style.css';
    }
}

define('vl-image', VlImage, {extends: 'img'});
