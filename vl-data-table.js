import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlDataTable extends(NativeVlElement(HTMLTableElement)){static get _observedAttributes(){return[]}static get _observedClassAttributes(){return["hover","matrix","lined","zebra"]}connectedCallback(){this.classList.add("vl-data-table")}get _classPrefix(){return"vl-data-table--"}get _stylePath(){return"/node_modules/vl-ui-data-table/style.css"}};define("vl-data-table",VlDataTable,{extends:"table"});