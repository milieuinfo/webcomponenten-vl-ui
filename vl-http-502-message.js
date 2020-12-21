import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlHttpErrorMessage} from '/node_modules/vl-ui-http-error-message/dist/vl-http-error-message.js';

define('vl-http-502-message', class extends VlHttpErrorMessage {
  constructor() {
    super({
      title: 'Tijdelijk niet bereikbaar',
      image: 'https://cdn.milieuinfo.be/http-error-message-assets/LATEST/img/unexpected-error.svg',
      imageAlt: 'Tijdelijk niet bereikbaar',
      text: `<p>De website is tijdelijk niet bereikbaar. Probeer later opnieuw. Heb je vragen: <a href="mailto:help@omgevingvlaanderen.be?subject=HTTP-code 502">mail dan de helpdesk</a> en vermeld daarbij de URL hierboven en de foutcode 502.</p>`,
      actions: `<a is="vl-link-button" href="/">Terug naar de startpagina</a>`,
    });
  }
});
