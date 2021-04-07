import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlCookie} from '/node_modules/vl-ui-cookie-statement/dist/vl-cookie.js';

/**
 * VlHeaderAuthenticationCookie
 * @class
 * @classdesc Authenticatie cookie beschrijving
 *
 * @extends VlCookie
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie.html|Demo}
 *
 */
export class VlHeaderAuthenticationCookie extends VlCookie {
  constructor() {
    super({
      title: 'Vlaams toegangsbeheer cookies',
      name: [
        'AMWEBJCT!%2Fsps!JSESSIONID',
        'https%3A%2F%2Fauthenticatie.vlaanderen.be%2Fsps%2Fvidp%2Fsaml20FIMSAML20',
        'PD_STATEFUL_5bb64e42-0d53-11e2-a712-52540052f0ed',
        'PD-H-SESSION-ID',
        'tbsession',
      ],
      purpose: 'Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van het Vlaams toegangsbeheer.',
      domain: 'authenticatie.vlaanderen.be',
      processor: 'Vlaamse overheid',
      validity: 'Sessie',
    });
  }
}

define('vl-header-authentication-cookie', VlHeaderAuthenticationCookie);
