import '/node_modules/vl-ui-icon/vl-icon.js';
import {NativeVlElement} from "/node_modules/vl-ui-core/vl-core.js";

/**
 * VlLinkList
 * @class
 * @classdesc Class die een lijst van links kan weergeven. <a href="../demo/vl-link-list.html">Demo</a>.
 * @extends NativeVlElement
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

  get _stylePath() {
    return "../style.css"
  }
}

/**
 * VlLinkListItem
 * @class
 * @classdesc Class die een item uit de {@link VlLinkList} weergeeft. <a href="../demo/vl-link-list.html">Demo</a>.
 * @extends NativeVlElement
 */
export class VlLinkListItem extends NativeVlElement(HTMLLIElement) {
  connectedCallback() {
    this.classList.add("vl-link-list__item");
    this._links.forEach(link => {
      link.insertAdjacentHTML("afterBegin",
          '<span is="vl-icon" icon="nav-right" before></span>')
    })
  }

  get _stylePath() {
    return "../style.css"
  }

  get _links() {
    return this.querySelectorAll("[is='vl-link']")
  }
}

customElements.define("vl-link-list", VlLinkList,
    {extends: "ul"});
customElements.define("vl-link-list-item", VlLinkListItem,
    {extends: "li"});