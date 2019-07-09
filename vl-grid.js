import{NativeVlElement,define}from"/node_modules/vl-ui-core/vl-core.js";export class VlRegion extends(NativeVlElement(HTMLElement)){static get _observedClassAttributes(){return["no-space","no-space-bottom","no-space-top","alt","small","medium","bordered"]}connectedCallback(){this.classList.add("vl-region")}get _classPrefix(){return"vl-region--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}};export class VlLayout extends(NativeVlElement(HTMLDivElement)){static get _observedClassAttributes(){return[]}connectedCallback(){this.classList.add("vl-layout")}get _classPrefix(){return"vl-layout--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}};export class VlGrid extends(NativeVlElement(HTMLDivElement)){static get _observedClassAttributes(){return["is-stacked"]}connectedCallback(){this.classList.add("vl-grid")}get _classPrefix(){return"vl-grid--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}};export class VlColumn extends(NativeVlElement(HTMLDivElement)){static get _observedAttributes(){return["size","max-size","small-size","small-max-size","push"]}get _defaultMinSize(){return 12}get _defaultMaxSize(){return 12}get _sizeAttribute(){return this.getAttribute("size")||this._defaultMinSize}get _maxSizeAttribute(){return this.getAttribute("max-size")||this._defaultMaxSize}get _smallSizeAttribute(){return this.getAttribute("small-size")||this._defaultMinSize}get _smallMaxSizeAttribute(){return this.getAttribute("small-max-size")||this._defaultMaxSize}get _classPrefix(){return"vl-col--"}get _pushPrefix(){return"vl-push--"}get _stylePath(){return"/node_modules/vl-ui-core/core-style.css"}_sizeChangedCallback(e,t){this._changeClass(this,e+"-"+this._maxSizeAttribute,t+"-"+this._maxSizeAttribute,this._classPrefix)}_max_sizeChangedCallback(e,t){this._changeClass(this,this._sizeAttribute+"-"+e,this._sizeAttribute+"-"+t,this._classPrefix)}_small_sizeChangedCallback(e,t){this._changeClass(this,e+"-"+this._smallMaxSizeAttribute+"--s",t+"-"+this._smallMaxSizeAttribute+"--s",this._classPrefix)}_small_max_sizeChangedCallback(e,t){this._changeClass(this,this._smallSizeAttribute+"-"+e+"--s",this._smallSizeAttribute+"-"+t+"--s",this._classPrefix)}_pushChangedCallback(e,t){this._changeClass(this,e+"-"+this._maxSizeAttribute,t+"-"+this._maxSizeAttribute,this._pushPrefix)}};define("vl-region",VlRegion,{extends:"section"}),define("vl-layout",VlLayout,{extends:"div"}),define("vl-grid",VlGrid,{extends:"div"}),define("vl-column",VlColumn,{extends:"div"});