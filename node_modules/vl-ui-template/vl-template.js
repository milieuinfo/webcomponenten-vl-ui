import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlTemplate extends VlElement(HTMLElement){constructor(){super(`
        <style>
            @import '/node_modules/vl-ui-template/style.css';
        </style>
        <slot name="header"></slot>
        <div class="vl-page">
          <main class="vl-main-content">
            <slot name="main"></slot>
          </main>
        </div>
        <slot name="footer"></slot>
    `)}};define("vl-template",VlTemplate);