import{VlElement,define}from"/node_modules/vl-ui-core/vl-core.js";import"https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/node_modules/@govflanders/vl-widget-polyfill/dist/index.js";export class VlFooter extends(VlElement(HTMLElement)){constructor(){super(),this.__addFooterElement()}static get id(){return"footer"}static get footer(){return document.getElementById(VlFooter.id)}get _widgetURL(){return"https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/"+this._widgetUUID+"/embed"}get _widgetUUID(){return this.dataset.vlIdentifier}getFooterTemplate(){return this._template(`\n            <div id="${VlFooter.id}"></div>\n        `)}__addFooterElement(){fetch(this._widgetURL).then(e=>{if(e.ok)return e.text();throw Error(`Response geeft aan dat er een fout is: ${e.statusText}`)}).then(e=>this.__executeCode(e)).catch(e=>console.error(e))}__executeCode(code){VlFooter.footer||document.body.appendChild(this.getFooterTemplate()),eval(code.replace(/document\.write\((.*?)\);/,'document.getElementById("'+VlFooter.id+'").innerHTML = $1;'))}};define("vl-footer",VlFooter);