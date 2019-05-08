import{VlElement,NativeVlElement}from"/node_modules/vl-ui-core/vl-core.js";export class VlProperties extends VlElement(HTMLElement){constructor(){super(`
            <style>
                @import '/node_modules/vl-ui-properties/style.css';
            </style>

            <div class="vl-properties">
                <slot></slot>
            </div>
        `)}};export class VlPropertiesColumn extends NativeVlElement(HTMLDivElement){static get _observedClassAttributes(){return["full"]}connectedCallback(){this.classList.add("vl-properties__column")}get _classPrefix(){return"vl-properties__column--"}get _stylePath(){return"/node_modules/vl-ui-properties/style.css"}};export class VlPropertiesList extends NativeVlElement(HTMLDListElement){connectedCallback(){this.classList.add("vl-properties__list")}get _stylePath(){return"/node_modules/vl-ui-properties/style.css"}};export class VlPropertiesTitle extends NativeVlElement(HTMLHeadingElement){connectedCallback(){this.classList.add("vl-properties__title")}get _stylePath(){return"/node_modules/vl-ui-properties/style.css"}};export class VlPropertyTerm extends NativeVlElement(HTMLElement){connectedCallback(){this.classList.add("vl-properties__label")}get _stylePath(){return"/node_modules/vl-ui-properties/style.css"}};export class VlPropertyValue extends NativeVlElement(HTMLElement){connectedCallback(){this.classList.add("vl-properties__data")}get _stylePath(){return"/node_modules/vl-ui-properties/style.css"}};customElements.define("vl-properties",VlProperties),customElements.define("vl-properties-column",VlPropertiesColumn,{extends:"div"}),customElements.define("vl-properties-list",VlPropertiesList,{extends:"dl"}),customElements.define("vl-properties-title",VlPropertiesTitle,{extends:"h1"}),customElements.define("vl-property-term",VlPropertyTerm,{extends:"dt"}),customElements.define("vl-property-value",VlPropertyValue,{extends:"dd"});