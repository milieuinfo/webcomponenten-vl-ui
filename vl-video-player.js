import {nativeVlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/@govflanders/vl-ui-util/dist/js/util.js';
import '/node_modules/@govflanders/vl-ui-core/dist/js/core.js';
import '/node_modules/vl-ui-video-player/lib/video-player.js';

/**
 * VlVideoPlayer
 * @class
 * @classdesc Een toegankelijke video speler met HTML5 ondersteuning.
 *
 * @extends HTMLElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-video-player/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-video-player/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-video-player.html|Demo}
 *
 */
export class VlVideoPlayer extends nativeVlElement(HTMLVideoElement) {
  connectedCallback() {
    this._processStyle();
  }

  get _containerTemplate() {
    return this._template(`<div class="vl-video-player"></div>`);
  }

  get _hasContainer() {
    return this.closest('.vl-video-player') != undefined;
  }

  get _isDressed() {
    return this.hasAttribute('data-vl-video-player-dressed');
  }

  _processStyle() {
    this.setAttribute('data-vl-video-player', '');
    this._addContainerElement();
    this._dress();
  }

  _dress() {
    if (!this._isDressed) {
      vl.videoPlayer.dress(this);
    }
  }

  _addContainerElement() {
    if (!this._hasContainer) {
      const container = this._containerTemplate.firstElementChild;
      this.parentElement.append(container);
      container.append(this);
    }
  }
}

define('vl-video-player', VlVideoPlayer, {extends: 'video'});
