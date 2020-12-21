import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-403-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Geen toegang tot deze pagina',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Onvoldoende rechten',
      text: `<p>U heeft daarvoor onvoldoende rechten. <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 403">Mail de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 403.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
