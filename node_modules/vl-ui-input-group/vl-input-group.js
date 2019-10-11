import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlInputGroup extends VlElement(HTMLElement){constructor(){super(`
      <style>
        @import "/node_modules/vl-ui-input-group/style.css";
      </style>
      <slot></slot>
    `)}connectedCallback(){this.classList.add("vl-input-group")}};define("vl-input-group",VlInputGroup);