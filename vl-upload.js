import{VlElement,define,awaitScript,awaitUntil}from"/node_modules/vl-ui-core/vl-core.js";import"/node_modules/vl-ui-icon/vl-icon.js";Promise.all([awaitScript("util","/node_modules/@govflanders/vl-ui-util/dist/js/util.min.js"),awaitScript("core","/node_modules/@govflanders/vl-ui-core/dist/js/core.min.js"),awaitScript("upload","/node_modules/vl-ui-upload/dist/upload.js"),awaitUntil(()=>window.vl&&window.vl.upload)]).then(()=>define("vl-upload",VlUpload));export class VlUpload extends(VlElement(HTMLElement)){static get _observedAttributes(){return["url","input-name","error-message-filesize","error-message-accepted-files","error-message-maxfiles","max-files","max-size","accepted-files","full-body-drop","autoprocess","disallow-duplicates"]}static get _observedChildClassAttributes(){return["error"]}get _classPrefix(){return"vl-upload--"}constructor(){super("\n            <style>\n            @import '/node_modules/vl-ui-link/style.css';\n            @import '/node_modules/vl-ui-icon/style.css';\n            @import '/node_modules/vl-ui-upload/style.css';\n            </style>\n            <div class=\"vl-upload\" data-vl-upload data-vl-upload-url=\"http://www.example.com\">\n            </div>\n        ")}connectedCallback(){this.dress()}get _upload(){return this._element}get _dressed(){return!!this.getAttribute("data-vl-upload-dressed")}get _dropzone(){return vl.upload.dropzoneInstances.filter(e=>e.element===this._element)[0]}get acceptedFiles(){return this._dropzone.getAcceptedFiles()}get rejectedFiles(){return this._dropzone.getRejectedFiles()}get files(){return this._dropzone.files}get _templates(){return this._template('\n        <template id="uploadTemplate">\n          <div class="vl-upload__element">\n            <div class="vl-upload__element__label">\n              <button type="button" class="vl-upload__element__button vl-link">\n                <span is="vl-icon" icon="paperclip"></span>\n                <span class="vl-upload__element__button__container"></span>\n              </button>\n              <small></small>\n            </div>\n          </div>\n        </template>\n    \n        <template id="previewFilesWrapper">\n          <div class="vl-upload__files">\n            <div class="vl-upload__files__container"></div>\n            <div class="vl-upload__files__input__container"></div>\n            <button class="vl-upload__files__close vl-link vl-link--icon">\n              <span is="vl-icon" icon="trash" link></span>\n              Verwijder alle bestanden\n            </button>\n          </div>\n        </template>\n\n        <template id="previewTemplate">\n          <div class="vl-upload__file">\n            <p class="vl-upload__file__name">\n              <span is="vl-icon" class="vl-upload__file__name__icon" icon="document"></span>\n              <span data-dz-name></span>\n              <span class="vl-upload__file__size">\n            (<span data-dz-size></span>)\n          </span>\n            </p>\n            <div class="dz-error-message">\n              <span data-dz-errormessage></span>\n            </div>\n            <button type="button" class="vl-upload__file__close vl-link vl-link--icon" data-dz-remove>\n              <span is="vl-icon" icon="cross"></span>\n            </button>\n          </div>\n        </template>\n\n        <template id="uploadOverlay">\n          <div class="vl-upload__overlay">\n            <p class="vl-upload__overlay__text">\n              <span is="vl-icon" icon="paperclip" link></span>\n            </p>\n          </div>\n        </template>')}get _prefix(){return"data-vl-upload-"}dress(){this._dressed||(document.body.appendChild(this._templates),vl.upload.dress(this._upload))}upload(e){e&&(this._dropzone.options.url=e),this._dropzone.processQueue()}clear(){this._dropzone.removeAllFiles()}on(e,t){this._element.addEventListener(e,t)}_urlChangedCallback(e,t){this._element.setAttribute(this._prefix+"url",t)}_input_nameChangedCallback(e,t){this._element.setAttribute(this._prefix+"input-name",t)}_error_message_filesizeChangedCallback(e,t){this._element.setAttribute(this._prefix+"error-message-filesize",t)}_error_message_accepted_filesChangedCallback(e,t){this._element.setAttribute(this._prefix+"error-message-accepted-files",t)}_error_message_maxfilesChangedCallback(e,t){this._element.setAttribute(this._prefix+"error-message-maxfiles",t)}_max_filesChangedCallback(e,t){this._element.setAttribute(this._prefix+"max-files",t)}_max_sizeChangedCallback(e,t){this._element.setAttribute(this._prefix+"max-size",t)}_accepted_filesChangedCallback(e,t){this._element.setAttribute(this._prefix+"accepted-files",t),this._element.setAttribute("accept",t)}_full_body_dropChangedCallback(e,t){this._element.setAttribute(this._prefix+"full-body-drop","")}_autoprocessChangedCallback(e,t){this._element.setAttribute(this._prefix+"autoprocess",t)}_disallow_duplicatesChangedCallback(e,t){this._element.setAttribute(this._prefix+"disallow-duplicates",t)}};