import {define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import {VlCookie} from '/node_modules/vl-ui-cookie-statement/dist/vl-cookie.js';

/**
 * VlJSessionIdCookie
 * @class
 * @classdesc Session cookie beschrijving
 *
 * @extends VlCookie
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-cookie-statement/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-cookie.html|Demo}
 *
 */
export class VlJSessionIdCookie extends VlCookie {
  constructor() {
    super({
      title: 'Sessie cookie voor betere gebruikerservaring',
      name: [
        'JSESSIONID',
        'KEYCLOAK_IDENTITY',
        'KEYCLOAK_IDENTITY_LEGACY',
      ],
      purpose: 'De cookie wordt gebruikt om een sessie tussen de applicatieserver en een gebruiker in stand te houden. Dankzij deze cookie kan een gebruiker door de server op een uniek manier geïdentificeerd worden.',
      domain: window.location.hostname,
      processor: 'Departement Omgeving',
      validity: 'Beperkt tot de duur van de sessie',
    });
  }
}

define('vl-jsessionid-cookie', VlJSessionIdCookie);
