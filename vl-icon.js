import{VlElement}from"/node_modules/vl-ui-core/vl-core.js";export class VlIcon extends VlElement(HTMLElement){static get _observedAttributes(){return["icon","size","90deg","180deg"]}static get _observedChildClassAttributes(){return["before","after","light"]}constructor(){super(`
            <style>
                @import "/node_modules/vl-ui-icon/style.css";

                .vl-icon:before {
                    vertical-align: middle;
                }
            </style>
            <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `)}get _classPrefix(){return"vl-icon--"}_iconChangedCallback(oldValue,newValue){this._changeClass(this._element,oldValue,newValue,"vl-vi-")}_sizeChangedCallback(oldValue,newValue){if(["small","large"].indexOf(newValue)>=0){this._changeClass(this._element,oldValue,newValue)}else{this._element.classList.remove(this._prefix+oldValue)}}_90degChangedCallback(oldValue,newValue){this._toggleClass(this._element,newValue,"vl-vi-u-90deg")}_180degChangedCallback(oldValue,newValue){this._toggleClass(this._element,newValue,"vl-vi-u-180deg")}};customElements.define("vl-icon",VlIcon);