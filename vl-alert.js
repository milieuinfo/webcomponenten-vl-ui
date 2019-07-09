import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";import"/node_modules/vl-ui-icon/vl-icon.js";export class VlAlert extends VlElement(HTMLElement){constructor(){super(`
            <style>
                @import "/node_modules/vl-ui-alert/style.css";
            </style>
            <div class="vl-alert" role="alert">
                <div class="vl-alert__content">
                    <p class="vl-alert__title"></p>
                    <div class="vl-alert__message">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `)}static get _observedAttributes(){return["icon","title","closable","type","size"]}get _classPrefix(){return"vl-alert--"}get _titelElement(){return this._element.querySelector(".vl-alert__title")}get _iconElement(){return this._element.querySelector(".vl-alert__icon")}get _closeButtonElement(){return this._element.querySelector(".vl-alert__close")}_getIconTemplate(newValue){return this._template(`
            <div class="vl-alert__icon">
                <span is="vl-icon" icon="${newValue}"></span>
            </div>
        `)}_getCloseButtonTemplate(){return this._template(`
            <button class="vl-alert__close" type="button">
                <i class="vl-vi vl-vi-cross" aria-hidden="true"></i>
                <span class="vl-u-visually-hidden">Melding sluiten</span>
            </button>
        `)}_iconChangedCallback(oldValue,newValue){if(this._iconElement){this._iconElement.remove()}if(newValue!=undefined){this._element.insertBefore(this._getIconTemplate(newValue),this._element.firstChild)}}_titleChangedCallback(oldValue,newValue){this._titelElement.textContent=newValue}_closableChangedCallback(oldValue,newValue){if(this._closeButtonElement){this._closeButtonElement.remove()}if(newValue!=undefined){const closeButtonTemplate=this._getCloseButtonTemplate();closeButtonTemplate.querySelector("button").addEventListener("click",()=>this.remove());this._element.appendChild(closeButtonTemplate)}}_typeChangedCallback(oldValue,newValue){if(["success","warning","error"].indexOf(newValue)>=0){this._changeClass(this._element,oldValue,newValue)}else{this._element.classList.remove(this._classPrefix+oldValue)}}_sizeChangedCallback(oldValue,newValue){if(["large","small"].indexOf(newValue)>=0){this._changeClass(this._element,oldValue,newValue)}else{this._element.classList.remove(this._classPrefix+oldValue)}}};define("vl-alert",VlAlert);