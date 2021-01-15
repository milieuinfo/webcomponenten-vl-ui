import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-functional-header/dist/vl-functional-header.js';
import '/node_modules/vl-ui-grid/dist/vl-grid.js';
import '/node_modules/vl-ui-titles/dist/vl-titles.js';
import '/node_modules/vl-ui-introduction/dist/vl-introduction.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';
import '/node_modules/vl-ui-link/dist/vl-link.js';
import '/node_modules/vl-ui-typography/dist/vl-typography.js';
import '/node_modules/vl-ui-link/dist/vl-link.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';
import '/node_modules/vl-ui-side-navigation/dist/vl-side-navigation-all.js';

/**
 * VlAccessibility
 * @class
 * @classdesc Toegankelijkheid pagina
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-application - Attribuut wordt gebruikt om aan te geven voor welke applicatie deze toegankelijkheidspagina van toepassing is.
 * @property {boolean} data-vl-date - Attribuut wordt gebruikt om aan te geven op welke datum deze toegankelijkheidspagina opgesteld werd.
 * @property {boolean} data-vl-date-modified - Attribuut wordt gebruikt om aan te geven op welke datum deze toegankelijkheidspagina het laatst gewijzigd werd.
 * @property {boolean} data-vl-version - Attribuut wordt gebruikt om de toegankelijkheidspagina versie aan te geven.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-accessibility/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-accessibility.html|Demo}
 *
 */
export class VlAccessibility extends vlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '/src/style.css';
            @import '/node_modules/vl-ui-grid/dist/style.css';
            @import '/node_modules/vl-ui-titles/dist/style.css';
            @import '/node_modules/vl-ui-introduction/dist/style.css';
            @import '/node_modules/vl-ui-icon/dist/style.css';
            @import '/node_modules/vl-ui-link/dist/style.css';
            @import '/node_modules/vl-ui-link/dist/style.css';
            @import '/node_modules/vl-ui-icon/dist/style.css';
            @import '/node_modules/vl-ui-side-navigation/dist/style.css';
        </style>
        <vl-functional-header data-vl-title="Departement Omgeving" data-vl-sub-title="Toegankelijkheid en gebruiksvoorwaarden" data-vl-link="/"></vl-functional-header>
    `);

    this._element.insertAdjacentHTML('afterend', `
      <section is="vl-region">
        <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="10">
              <h1 is="vl-h1" data-vl-no-space-bottom>Toegankelijkheid</h1>
            </div>
            <div is="vl-column" data-vl-size="10">
              <p is="vl-introduction">
                <span>Versie</span> ${this.dataset.vlVersion} - ${this.dataset.vlDate}
              </p>
            </div>

            <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
              <vl-typography>
                <hr/>
              </vl-typography>
            </div>
          </div>
        </div>
      </section>

      <section id="content" is="vl-region">
        <div is="vl-layout">
          <div is="vl-grid" data-vl-is-stacked>
            <div is="vl-column" data-vl-size="8" data-vl-medium-size="8" data-vl-small-size="8" data-vl-extra-small-size="12">
              <div is="vl-side-navigation-reference" data-vl--scrollspy-content>
                <div is="vl-grid" data-vl-is-stacked>
                  <div id="accessibility-statement" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <h2 is="vl-h2">Toegankelijkheidsverklaring</h2>
                    <p>De Vlaamse overheid streeft ernaar haar websites en (mobiele) toepassingen toegankelijk te maken, overeenkomstig het <a is="vl-link" href="http://www.ejustice.just.fgov.be/cgi_loi/loi_a1.pl?language=nl&cn=2018120705&table_name=wet&caller=list&fromtab=wet#LNK0011" target="_blank">bestuursdecreet van 7 december 2018<span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-light></span></a> waarmee de <a is="vl-link" href="https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=uriserv:OJ.L_.2016.327.01.0001.01.NLD&toc=OJ:L:2016:327:TOC" target="_blank">Europese Richtlijn 2016/2102<span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-light></span></a> is omgezet.</p>
                    <br/>
                    <p>Deze toegankelijkheidsverklaring is van toepassing op ${this.dataset.vlApplication} en voldoet gedeeltelijk aan de <a is="vl-link" href="https://www.w3.org/TR/WCAG21" target="_blank">Web Content Accessibility Guidelines versie 2.1 niveau AA<span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-light></span></a>.</p>
                    <br/>
                    <p>Er wordt momenteel onderzocht welke acties nodig zijn om volledig naar deze richtlijn te conformeren en er worden stelselmatig verbeteringen doorgevoerd.</p>
                    <br/>
                    <p>Deze toegankelijkheidsverklaring is opgesteld op ${this.dataset.vlDate} en werd voor het laatst herzien op ${this.dataset.vlDateModified}.</p>
                  </div>

                  <div id="accessibility-statement-browsers" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <h3 is="vl-h3">Ondersteunde browsers</h3>
                    <p>Om deze website of toepassing optimaal te kunnen gebruiken, moet u over <a is="vl-link" href="https://www.vlaanderen.be/over-vlaanderenbe/uw-browser-wordt-niet-ondersteund" target="_blank">de nieuwste versie van uw browser<span is="vl-icon" data-vl-icon="external" data-vl-after data-vl-light></span></a> beschikken. Bij oudere versies kunt u misschien bepaalde toepassingen niet zien of gebruiken, zal de website er anders uitzien of zullen bepaalde functionaliteiten niet werken. Bij zeer oude browsers wordt surfen zelfs onveilig.</p>
                    <br/>
                    <p>U kunt uw browser zelf bijwerken naar de meest recente update voor een optimale beleving. Kijk na bij de instellingen van uw browser welke versie u hebt en hoe u een nieuwe versie moet installeren. Voor smartphones en tablets zorgt u er best voor dat u over de meest recente software-update beschikt.</p>
                  </div>

                  <div id="accessibility-statement-languages" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <h3 is="vl-h3">Ondersteunde talen</h3>
                    <p>Deze website/toepassing is enkel beschikbaar in het Nederlands.</p>
                  </div>

                  <div id="terms-of-use" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <h2 is="vl-h2">Gebruiksvoorwaarden</h2>
                    <p>De Vlaamse overheid besteedt veel aandacht en zorg aan haar websites en streeft ernaar dat alle informatie zo volledig, juist, begrijpelijk, nauwkeurig en actueel mogelijk is. Ondanks alle inspanningen kan de Vlaamse overheid niet garanderen dat de ter beschikking gestelde informatie volledig, juist, nauwkeurig of bijgewerkt is.</p>
                    <br/>
                    <p>Als de op of via deze website verstrekte informatie tekortkomingen vertoont, zal de Vlaamse overheid al het mogelijke doen om die zo snel mogelijk weg te werken. Als u onjuistheden vaststelt, kunt u met ons contact opnemen (zie onder). De Vlaamse overheid spant zich ook in om onderbrekingen van technische aard zo veel mogelijk te voorkomen. De Vlaamse overheid kan echter niet garanderen dat de website volledig vrij is van onderbrekingen en andere technische problemen.</p>
                  </div>

                  <div id="terms-of-use-photos" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <h3 is="vl-h3">Foto's en afbeeldingen</h3>
                    <p>Op de foto's en afbeeldingen rust copyright.</p>
                  </div>

                  <div id="terms-of-use-hyperlinks" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <h3 is="vl-h3">Hyperlinks en verwijzingen</h3>
                    <p>Deze site bevat hyperlinks naar websites van andere overheden, instanties en organisaties, en naar informatiebronnen die door derden worden beheerd. De Vlaamse overheid beschikt voor deze sites over geen enkele technische of inhoudelijke controle of zeggenschap en kan daarom geen enkele garantie bieden over de volledigheid of juistheid van de inhoud en over de beschikbaarheid van de websites en informatiebronnen.</p>
                  </div>

                  <div id="feedback-contact" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                    <h2 is="vl-h2">Feedback en contactgegevens</h2>
                    <p>Ondervindt u problemen en wenst u hulp bij het vinden van informatie of het uitvoeren van een actie? Of hebt u vragen of opmerkingen over de toegankelijkheid van deze website of toepassing, of over deze toegankelijkheidsverklaring? Neem dan contact met ons op via één van de kanalen aangeboden in de sectie "Hulp nodig?" die u terugvindt rechts in de paginahoofding.</p>
                  </div>
                </div>
              </div>
            </div>

            <div is="vl-column" data-vl-size="4" data-vl-medium-size="4" data-vl-small-size="4" data-vl-extra-small-size="0">
              <nav is="vl-side-navigation" aria-label="inhoudsopgave">
                <h5 is="vl-side-navigation-h5">Op deze pagina</h5>
                <div is="vl-side-navigation-content">
                  <ul is="vl-side-navigation-group">
                    <li is="vl-side-navigation-item" data-vl-parent>
                      <a is="vl-side-navigation-toggle" href="#accessibility-statement" data-vl-child="accessibility-statement">
                        Toegankelijkheidsverklaring
                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                      </a>
                      <ul>
                        <li is="vl-side-navigation-item">
                          <div><a href="#accessibility-statement-browsers" data-vl-parent="accessibility-statement">Ondersteunde browsers</a></div>
                        </li>
                        <li is="vl-side-navigation-item">
                          <div><a href="#accessibility-statement-languages" data-vl-parent="accessibility-statement">Ondersteunde talen</a></div>
                        </li>
                      </ul>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                      <a is="vl-side-navigation-toggle" href="#terms-of-use" data-vl-child="terms-of-use">
                        Gebruiksvoorwaarden
                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                      </a>
                      <ul>
                        <li is="vl-side-navigation-item">
                          <div><a href="#terms-of-use-photos" data-vl-parent="terms-of-use">Foto's en afbeeldingen</a></div>
                        </li>
                        <li is="vl-side-navigation-item">
                          <div><a href="#terms-of-use-hyperlinks" data-vl-parent="terms-of-use">Hyperlinks en verwijzingen</a></div>
                        </li>
                      </ul>
                    </li>
                    <li is="vl-side-navigation-item" data-vl-parent>
                      <a is="vl-side-navigation-toggle" href="#feedback-contact" data-vl-child="feedback-contact">
                        Feedback en contactgegevens
                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    `);
  }
}

define('vl-accessibility', VlAccessibility);
