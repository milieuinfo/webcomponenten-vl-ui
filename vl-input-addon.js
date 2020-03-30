import { NativeVlElement, define } from '/node_modules/vl-ui-core/dist/vl-core.js';


/**
 * VlInputAddonElemnt
 * @class
 * @classdesc Base klasse voor inputAddon elementen.
 * 
 * @extends NativeVlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 * 
 */
export const VlInputAddonElement = (SuperClass) => {
    return class extends NativeVlElement(SuperClass) {
        connectedCallback() {
            this.classList.add('vl-input-addon');
        }
    }
};

/**
 * VlInput-addon
 * @class
 * @classdesc Gebruik de input-addon in combinatie met de vl-ui-input-group webcomponent. Deze combinatie zorgt ervoor dat de gebruiker extra informatie ontvangt over de inhoud of de vorm van de inhoud dat ingevuld moet worden.
 * 
 * @extends NativeVlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 * 
 */
export class VlInputAddon extends VlInputAddonElement(HTMLParagraphElement) {}

/**
 * VlButtonInputAddon
 * @class
 * @classdesc Gebruik de vl-button-input-addon in combinatie met de vl-input-group webcomponent. Deze combinatie zorgt er voor dat men een button heeft die naast de input in vl-input-group staat.
 * 
 * @extends VlInputAddonElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-input-addon/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-input-addon.html|Demo}
 * 
 */
export class VlButtonInputAddon extends VlInputAddonElement(NativeVlElement(HTMLButtonElement)) {} 


define('vl-input-addon', VlInputAddon, {extends: 'p'});
define('vl-button-input-addon', VlButtonInputAddon, {extends: 'button'});
