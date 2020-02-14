import '/node_modules/vl-ui-icon/vl-icon.js';
import {NativeVlElement, define} from "/node_modules/vl-ui-core/vl-core.js";

/**
 * VlLinkList
 * @class
 * @classdesc Class die een lijst van links kan weergeven.
 * @extends NativeVlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link-list.html|Demo}
 */
export class VlLinkList extends NativeVlElement(HTMLUListElement) {
  connectedCallback() {
    this.classList.add("vl-link-list")
  }

  static get _observedClassAttributes() {
    return ["small", "inline", "bordered"]
  }

  get _classPrefix() {
    return "vl-link-list--"
  }
}

/**
 * VlLinkListItem
 * @class
 * @classdesc Class die een item uit de {@link VlLinkList} weergeeft.
 * @extends NativeVlElement
 * 
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-link-list/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-link-list.html|Demo}
 */
export class VlLinkListItem extends NativeVlElement(HTMLLIElement) {
  connectedCallback() {
    this.classList.add("vl-link-list__item");
    this._links.forEach(link => {
      link.insertAdjacentHTML("afterBegin",
          '<span is="vl-icon" icon="nav-right" before></span>')
    })
  }

  get _links() {
    return this.querySelectorAll("[is='vl-link']")
  }
}

define("vl-link-list", VlLinkList, {extends: "ul"});
define("vl-link-list-item", VlLinkListItem, {extends: "li"});
