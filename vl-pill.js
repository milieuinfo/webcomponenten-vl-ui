import{VlElement,NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export const VlPillElement=l=>(class extends(VlElement(l)){static get _observedAttributes(){return["type"]}get _classPrefix(){return"vl-pill--"}_typeChangedCallback(l,e){["success","warning","error"].indexOf(e)>=0?this._changeClass(this._element,l,e):this._element.classList.remove(this._classPrefix+l)}});export class VlPill extends(VlPillElement(HTMLElement)){static get pillTemplate(){return'\n      <span class="vl-pill">\n        <slot></slot>\n      </span>\n    '}constructor(){super(`\n      <style>\n          @import "/node_modules/vl-ui-pill/style.css";\n      </style>\n      ${VlPill.pillTemplate}\n    `)}static get _observedAttributes(){return super._observedAttributes.concat(["closable"])}_getPillTemplate(){return this._template(VlPill.pillTemplate)}_getClosablePillTemplate(){return this._template('\n      <div class="vl-pill vl-pill--closable">\n          <slot></slot>\n        <button class="vl-pill__close" type="button">\n          <span class="vl-u-visually-hidden">Verwijderen</span>\n        </button>\n      </div>\n    ')}_closableChangedCallback(l,e){this._shadow.lastElementChild.replaceWith(null!=e?this._getClosablePillTemplate():this._getPillTemplate())}};export class VlLabelPill extends(VlPillElement(NativeVlElement(HTMLLabelElement))){constructor(){super()}connectedCallback(){this.classList.add("vl-pill"),this.classList.add("vl-pill--checkable");const l=this._inputElement;l.classList.add("vl-pill--checkable__checkbox"),l.insertAdjacentHTML("afterend",this._inputStyleElement)}get _stylePath(){return"/node_modules/vl-ui-pill/style.css"}get _inputElement(){return this._element.querySelector("input")}get _inputStyleElement(){return"\n      <span></span>\n    "}};define("vl-pill",VlPill),define("vl-label-pill",VlLabelPill,{extends:"label"});