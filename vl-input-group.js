import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlInputGroup extends VlElement(HTMLElement){constructor(){super(`
      <style>
        @import "/node_modules/vl-ui-input-group/style.css";
      </style>
      <div class="vl-input-group">
        <slot></slot>
      </div>
    `)}};define("vl-input-group",VlInputGroup);