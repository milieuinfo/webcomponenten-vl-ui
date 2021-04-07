import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlCookie} from '/src/vl-cookie.js';

/**
 * VlAuthenticationCookie
 * @class
 * @classdesc Departement Omgeving authenticatie cookie beschrijving
 *
 * @extends VlCookie
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie.html|Demo}
 *
 */
export class VlAuthenticationCookie extends VlCookie {
  constructor() {
    super({
      title: 'Departement Omgeving toegangsbeheer cookies',
      name: [
        'KEYCLOAK_SESSION',
        'KEYCLOAK_SESSION_LEGACY',
      ],
      purpose: 'Sessiegebaseerde cookies die het mogelijk maken om gebruikers te herkennen op een webpagina van Departement Omgeving.',
      domain: window.location.hostname,
      processor: 'Departement Omgeving',
      validity: '10 uur',
    });
  }
}

define('vl-authentication-cookie', VlAuthenticationCookie);
