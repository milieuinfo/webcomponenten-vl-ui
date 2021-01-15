import {vlElement, define} from '/node_modules/vl-ui-core/dist/vl-core.js';
import '/node_modules/vl-ui-functional-header/dist/vl-functional-header.js';
import '/node_modules/vl-ui-grid/dist/vl-grid.js';
import '/node_modules/vl-ui-titles/dist/vl-titles.js';
import '/node_modules/vl-ui-introduction/dist/vl-introduction.js';
import '/node_modules/vl-ui-typography/dist/vl-typography.js';
import '/node_modules/vl-ui-document/dist/vl-document.js';
import '/node_modules/vl-ui-link/dist/vl-link.js';
import '/node_modules/vl-ui-icon/dist/vl-icon.js';
import '/node_modules/vl-ui-contact-card/dist/vl-contact-card.js';
import '/node_modules/vl-ui-infoblock/dist/vl-infoblock.js';
import '/node_modules/vl-ui-properties/dist/vl-properties.js';
import '/node_modules/vl-ui-side-navigation/dist/vl-side-navigation-all.js';

/**
 * VlPrivacy
 * @class
 * @classdesc Privacy pagina
 *
 * @extends HTMLElement
 * @mixes vlElement
 *
 * @property {boolean} data-vl-date - Attribuut wordt gebruikt om aan te geven op welke datum deze toegankelijkheidspagina opgesteld werd.
 * @property {boolean} data-vl-version - Attribuut wordt gebruikt om de toegankelijkheidspagina versie aan te geven.
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-privacy/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-privacy/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-privacy.html|Demo}
 *
 */
export class VlPrivacy extends vlElement(HTMLElement) {
  constructor() {
    super(`
        <style>
            @import '/node_modules/vl-ui-privacy/dist/style.css';
            @import '/node_modules/vl-ui-grid/dist/style.css';
            @import '/node_modules/vl-ui-titles/dist/style.css';
            @import '/node_modules/vl-ui-introduction/dist/style.css';
            @import '/node_modules/vl-ui-link/dist/style.css';
            @import '/node_modules/vl-ui-icon/dist/style.css';
            @import '/node_modules/vl-ui-properties/dist/style.css';
            @import '/node_modules/vl-ui-side-navigation/dist/style.css';
        </style>
        <vl-functional-header data-vl-title="Departement Omgeving" data-vl-sub-title="Privacy" data-vl-link="/"></vl-functional-header>
    `);

    this._element.insertAdjacentHTML('afterend', `
        <section is="vl-region">
            <div is="vl-layout">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="10">
                        <h1 is="vl-h1" data-vl-no-space-bottom>Privacy</h1>
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
                                <div id="privacy-department" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h2 is="vl-h2">Het Departement Omgeving en uw privacy</h2>
                                    <p>Op 25 mei 2018 ging de Europese ‘Algemene Verordening Gegevensbescherming’ (AVG), ook gekend onder de Engelse naam ‘General Data Protection Regulation’ (GDPR) van kracht. Naar aanleiding daarvan heeft het Departement Omgeving zijn privacybeleid verduidelijkt. Om zijn dienstverlening verder te optimaliseren, beheert en gebruikt het departement alle persoonsgegevens die het verzamelt op een veilige, respectvolle manier en als een goede huisvader.</p>
                                    <br/>
                                    <p>Algemene info mbt privacy:</p>
                                    <br/>
                                    <div is="vl-grid">
                                        <div is="vl-column" data-vl-size="4" data-vl-medium-size="6">
                                            <vl-document data-vl-href="informatiepagina-algemene-verordening-gegevensbescherming-v1_0.pdf">
                                                <span slot="type">PDF</span>
                                                <span slot="title">Algemene informatie over de nieuwe Privacywet</span>
                                                <span slot="metadata">PDF - 216 kB</span>
                                            </vl-document>
                                        </div>
                                    </div>
                                    <br/>
                                    <p>Indien u specifieke vragen of klachten heeft ivm ons privacybeleid kan u deze mailen naar <a is="vl-link" href="mailto:omgeving@vlaanderen.be" target="_self">dpo@omgevingvlaanderen.be<span is="vl-icon" data-vl-icon="envelope" data-vl-after></span></a> of per post verzenden naar Departement Omgeving t.a.v. Data Protection Officer (DPO), Koning Albert II-laan 20 – bus 8, 1000 Brussel.</p>
                                </div>

                                <div id="privacy-declaration" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h2 is="vl-h2" data-vl-no-space-bottom>Privacyverklaring</h2>
                                </div>

                                <div id="privacy-declaration-general" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Algemeen</h3>
                                    <h4 is="vl-h4">Over het Departement Omgeving</h4>
                                    <p>Het Departement Omgeving van de Vlaamse overheid is een officieel overheidsorgaan dat als doel heeft het beleid en de handhaving van de Vlaamse overheid inzake de beleidsthema’s Ruimtelijke ordening, Leefmilieu, Natuur en Energie vorm te geven en te realiseren. Met behulp van de informatiesystemen en de methoden van het Departement Omgeving van de Vlaamse Overheid worden inventarissen gemaakt, beleidsmaatregelen uitgevoerd en informatie verstrekt aan het beleidsdomein, aan andere overheden, inspectiediensten en burgers. Het Departement Omgeving is verantwoordelijk voor de verwerking van uw persoonsgegevens die in deze verklaring worden omschreven en toegelicht. We verwerken alleen persoonsgegevens en we laten alleen persoonsgegevens verwerken als dat noodzakelijk is om de taken die ons zijn toebedeeld, te kunnen verrichten. We verwerken de gegevens altijd in overeenstemming met de bepalingen van de algemene verordening gegevensbescherming (AVG), en met de bepalingen van de federale en Vlaamse regelgeving over de bescherming van natuurlijke personen bij de verwerking van persoonsgegevens.</p>
                                </div>

                                <div id="privacy-declaration-information-processing-systems" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Informatieverwerkende systemen van het Departement Omgeving</h3>
                                    <p>Dit onderdeel beschrijft de gegevensverwerkingen op gestructureerde wijze, hoofdzakelijk door informaticasystemen en -oplossingen (software, databanken) van het departement Omgeving.</p>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Verwerking van persoonsgegevens</h4>
                                    <p>Het Departement Omgeving verwerkt persoonsgegevens van u als burger of als medewerker van een overheid/bestuur, organisatie of onderneming. In die hoedanigheid worden uw gegevens verwerkt als betrokkene en/of krijgt u een toegang tot op één of meerdere informatieverwerkende systemen De Algemene Verordening Gegevensbescherming geeft in Artikel 4 volgende definitie van het begrip 'verwerking': "een bewerking of een geheel van bewerkingen met betrekking tot persoonsgegevens of een geheel van persoonsgegevens, al dan niet uitgevoerd via geautomatiseerde procedés, zoals het verzamelen, vastleggen, ordenen, structureren, opslaan, bijwerken of wijzigen, opvragen, raadplegen, gebruiken, verstrekken door middel van doorzending, verspreiden of op andere wijze ter beschikking stellen, aligneren of combineren, afschermen, wissen of vernietigen van gegevens".</p>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Hoe verzamelen en verwerken we uw persoonsgegevens?</h4>
                                    <vl-typography>
                                        <p>Het Departement kan uw persoonsgegevens op verschillende manieren verkrijgen:</p>
                                        <ul>
                                            <li>We kunnen gegevens rechtstreeks bij u opvragen in een formulier of in documenten die u bij een formulier moet voegen. Die documenten zijn opgesomd in de regelgeving.</li>
                                            <li>Daarnaast vragen we gegevens op bij andere overheidsdiensten die er al over beschikken. We leven daarbij altijd de bepalingen na over de bescherming van natuurlijke personen bij de verwerking van persoonsgegevens, die in voorkomend geval op federaal of Vlaams niveau vastgelegd zijn. Zo hebben we een aantal machtigingen gekregen om gegevens bij andere overheidsdiensten op te vragen.</li>
                                        </ul>
                                    </vl-typography>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Waarvoor verwerken we uw persoonsgegevens?</h4>
                                    <vl-typography>
                                        <p>Om haar wettelijke verplichtingen en beleidsmatig toegewezen taken als overheidsinstelling na te komen en om bepaalde administratieve handelingen te kunnen verrichten (financiële administratie en facturatie, rechtenbeheer, beheer gebruikersovereenkomst, boeteheffing, uitkeren van een premie, verlenen van een vergunning, inspectie van een installatie, enz...), alsmede om u desgewenst op de hoogte te houden van nieuwe ontwikkelingen aangaande één of meerdere thema’s waarvoor het Departement Omgeving verantwoordelijkheden draagt, heeft het Departement Omgeving een aantal gegevens van u nodig. In dit kader verwerkt het Departement Omgeving, naargelang de aard van de relatie met u als burger, of medewerker van een overheid/bestuur, organisatie of onderneming en de noodzakelijke verwerking van (persoons)gegevens mogelijks de volgende gegevens:</p>
                                        <ul>
                                            <li>Aanhef/aanspreking</li>
                                            <li>Voornaam</li>
                                            <li>Tussenvoegsel</li>
                                            <li>Familienaam</li>
                                            <li>Rijksregisternummer</li>
                                            <li>Geslacht</li>
                                            <li>Geboortedatum</li>
                                            <li>Leeftijd of geboortejaar</li>
                                            <li>Nationaliteit</li>
                                            <li>Adres(sen)</li>
                                            <li>E-mailadres(sen)</li>
                                            <li>Telefoon/gsm/fax</li>
                                            <li>Beroepsgegevens, diploma’s, certificeringen</li>
                                            <li>Strafrechtelijke en justitiële gegevens</li>
                                        </ul>
                                        <p>Tijdens het gebruik van de informatieverwerkende systemen door medewerkers of door uzelf (bijvoorbeeld bij ingave in of consultatie van een via webtoegang beschikbaar gestelde applicatie) worden door het Departement Omgeving en/of de door haar aangewezen verwerkers ook bepaalde gegevens verzameld. Het gaat hier om gegevens die vereist zijn voor de dienstverlening en de bewaking van de kwaliteit van de verzamelde data van het Departement Omgeving. Deze gegevens kunnen door het Departement of een door haar aangewezen verwerker/dienstverlener onder strikte voorwaarden gebruikt worden als er bijvoorbeeld klachten zijn over de verbinding of het niet naar behoren functioneren van een software/webtoepassing. Afhankelijk van de activiteit die u daarbij als betrokkene verricht, verwerkt het Departement Omgeving in dit kader mogelijks de volgende gegevens:</p>
                                        <ul>
                                            <li>IP-adres</li>
                                            <li>gebruikersnaam (login) of identificatienummer</li>
                                            <li>eID identificatie- en authenticatiegegevens</li>
                                            <li>tijdstip van handelingen in de software</li>
                                            <li>registratie van de handelingen in de software (logging)</li>
                                        </ul>
                                    </vl-typography>
                                </div>

                                <div id="privacy-declaration-role-in-processing" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">De rol van het Departement Omgeving in de verwerking van (persoons)gegevens</h3>
                                    <p>Het Departement Omgeving verwerkt gegevens van haar doelgroepen en contactpersonen (burgers, medewerkers van andere overheden/organisaties/ondernemingen, medewerkers van scholen of MOS-referentiepersonen, adviesbureaus, experten, …) en is voor die gegevensverwerkingen een <strong>Verwerkingsverantwoordelijke</strong> in de zin van de Algemene Verordening Gegevensbescherming.</p>
                                    <br/>
                                    <p>In een aantal gevallen zullen daartoe aangestelde verwerkers, waarmee in het kader van de Algemene Verordening Gegevensbescherming en andere wettelijke en reglementaire verplichtingen een ter zake voldoend contract en/of verwerkingsovereenkomst is afgesloten, met de informatiesystemen of met door deze informatiesystemen verwerkte data op hun beurt persoonsgegevens gaan verwerken van betrokkenen.</p>
                                    <br/>
                                    <p>Tevens kan het Departement Omgeving zelf optreden als co-verwerkingsverantwoordelijke of als de Verwerker van persoonsgegevens in de zin van de Algemene Verordening Gegevensbescherming. Dat betekent dat het Departement Omgeving in opdracht en op instructie van andere overheden of daartoe bevoegde organen persoonsgegevens verwerkt. Deze andere overheden of organen treden in dat geval op als Verwerkingsverantwoordelijke voor deze gegevensverwerkingen, in de zin van de Algemene Verordening Gegevensbescherming. Zij hanteren daarbij een eigen privacy-beleid waar het Departement Omgeving niet verantwoordelijk voor is.</p>
                                </div>

                                <div id="privacy-declaration-general-data-protection-regulation" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Maatregelen in het kader van de Algemene verordening Gegevensbescherming</h3>
                                    <h4 is="vl-h4">Register van gegevensverwerkingen</h4>
                                    <vl-typography>
                                        <p>Er wordt, in overeenstemming met de vereisten van de Algemene Verordening Gegevensbescherming, een register van gegevensverwerkingen opgesteld. Dit wordt geactualiseerd indien zich wijzigingen aandienen. Een dergelijk register (inventaris) voor de verwerking van persoonsgegevens is verplicht en kan worden opgevraagd door de bevoegde Gegevensbeschermingsautoriteit (DBA, of Data Protection Authority/DPA); in België is dit [de Gegevensbeschermingsautoriteit, beter gekend als de GBA]. Elke organisatie die persoonsgegevens verwerkt en gevat is door de Algemene Verordening Gegevensbescherming is verplicht aan de Gegevensbeschermingsautoriteit inzage in het register te geven.</p>
                                        <p>Bij de <strong>verantwoordelijke</strong> voor de verwerking van gegevens bevat het register de volgende informatie:</p>
                                        <ul>
                                            <li>de naam en contactgegevens van verantwoordelijke (of diens vertegenwoordiger, wanneer de verantwoordelijke buiten de Europese Unie is gevestigd), en van de functionaris voor gegevensbescherming of FG – de Data Protection Officer (DPO)</li>
                                            <li>de doeleinden waarvoor gegevens worden verwerkt</li>
                                            <li>de categorieën gegevens (bijvoorbeeld Rijksregistergegevens, contactgegevens, betaalgegevens ...)</li>
                                            <li>de categorieën betrokkenen (bijvoorbeeld: klanten, websitebezoekers, werknemers ...)</li>
                                            <li>de categorieën ontvangers (aan wie worden de gegevens verstrekt?)</li>
                                            <li>informatie over eventuele doorgifte van gegevens naar landen buiten de Europese Unie</li>
                                            <li>de bewaartermijnen en gebeurlijk termijnen voor vernietiging van de gegevens</li>
                                            <li>de manieren waarop gegevens zijn beveiligd (bijvoorbeeld: encryptie, logische toegangscontrole, pseudonimisering, anonimisering in geval van bepaalde verdere verwerkingen, ...)</li>
                                        </ul>
                                        <p>Bij de <strong>verwerker</strong> is het register georganiseerd per verantwoordelijke. Verwerkers registreren per verantwoordelijke voor wie zij werken:</p>
                                        <ul>
                                            <li>de naam en contactgegevens van de verwerker en de verantwoordelijke (of hun vertegenwoordigers) en (indien voorzien) de functionaris voor gegevensbescherming</li>
                                            <li>de categorieën verwerkingen (dit komt overeen met de doeleinden uit het register van de verantwoordelijke)</li>
                                            <li>informatie over eventueel doorgifte van gegevens naar landen buiten de Europese Unie</li>
                                            <li>de manieren waarop gegevens zijn beveiligd</li>
                                        </ul>
                                        <p>Het Departement Omgeving spant zich in om de verwerkingsactiviteiten van de processen binnen haar afdelingen en diensten in kaart te brengen en deze inventarisatie (verwerkt in het register van verwerkingsactiviteiten) wordt op permanente basis geoptimaliseerd en geactualiseerd indien noodzakelijk.</p>
                                    </vl-typography>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Hoelang bewaren we uw persoonsgegevens?</h4>
                                    <p>Het Departement Omgeving verzamelt niet meer gegevens dan noodzakelijk voor de dienstverlening die zij geacht wordt te leveren en wenst deze niet langer bij te houden dan wettelijk verplicht, noodzakelijk of aanvaardbaar. Volgens de algemene regel mogen we uw persoonsgegevens alleen bewaren tijdens de periode waarin ze noodzakelijk zijn om bepaalde diensten te verlenen. We bewaren uw gegevens dus zolang u gebruikmaakt van onze diensten. Daarna bewaren we uw gegevens nog gedurende de termijn waarin we ons moeten kunnen verantwoorden voor de verleende diensten. Na verloop van die verjaringstermijn worden de gegevens verwijderd conform aan de bepalingen van het Vlaams Archiefdecreet, tenzij ze van historisch, cultureel of algemeen belang zijn.</p>
                                    <br/>
                                    <p>Bij de bewaring wordt een onderscheid gemaakt tussen de periode waarin uw dossier actief is en de periode waarin het passief wordt. Uw dossier is actief zolang u van de verleende dienst gebruikmaakt. Alle medewerkers die uw gegevens nodig hebben om hun taak te kunnen uitoefenen, hebben dan toegang tot uw gegevens. Nadien wordt uw dossier passief en heeft enkel een beperkt aantal medewerkers van de bevoegde dienst toegang tot uw gegevens.</p>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Persoonsgegevens van kinderen</h4>
                                    <p>In principe gebeurt er geen systematische verwerking van persoonsgegevens van kinderen onder de door de AVG en de Belgische wetgever bepaalde leeftijdsgrens.</p>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Beeldmateriaal</h4>
                                    <p>Voor opname en gebruik (publicatie) van beeldmateriaal zoals foto of film, wordt gevraagd om akkoord als de geportretteerden duidelijk individueel herkenbaar zijn.</p>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Toe te passen principes vereist door de Algemene Verordening Gegevensbescherming</h4>
                                    <p>Het risico voor een privacyschending of het niet kunnen garanderen van de rechten van u als betrokkene wordt mee in kaart gebracht en voor die activiteiten die een verhoogd risicoprofiel hebben inzake bescherming van de privacy wordt een gegevensbeschermingseffectbeoordeling (GEB) uitgevoerd. Ook de andere principes van de AVG zoals gegevensbescherming door ontwerp en met standaardinstellingen, incidentbeheer voor informatieveiligheids- en privacy-incidenten met procedure voor melding en aanpak van gegevenslek en gegevensverlies worden meegenomen in de aanpak van het Departement Omgeving inzake privacybescherming.</p>
                                </div>

                                <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h4 is="vl-h4">Mededeling van persoonsgegevens</h4>
                                    <p>Uw gegevens worden hoofdzakelijk intern verwerkt door onze medewerkers. Het is mogelijk dat we voor bepaalde specifieke diensten een beroep doen op derden, die uw gegevens verwerken. We bezorgen uw gegevens aan die verwerkers, zodat ze de dienst in kwestie kunnen verlenen. We oefenen daar op elk moment controle op uit.</p>
                                    <br/>
                                    <p>Indien er bepaalde persoonsgegevens worden overgemaakt aan of bekomen van andere entiteiten, overheden of derde partijen, dan gebeurt dit onder daarvoor bekomen machtigingen of afgesloten protocollen.</p>
                                </div>

                                <div  id="privacy-declaration-security" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Beveiliging van de informatie (persoonsgegevens)</h3>
                                    <p>Het Departement Omgeving voorziet in de nodige maatregelen om persoonsgegevens en privacy te beschermen, zowel in fysieke vorm, in de informatiesystemen en online. Het Departement Omgeving draagt zorg hiervoor door passende organisatorische en technische maatregelen te treffen om persoonsgegevens te beveiligen en ongeoorloofde toegang tot en gebruik van informatie te vermijden, zoals een degelijk paswoordbeleid, gebruik van SSL-certificaten op websites (https secured filetransfer), kwalitatieve firewalls, antivirus/antimalware en intrusie- en anomaliedetectie.</p>
                                    <br/>
                                    <p>Aan de medewerkers van het Departement Omgeving wordt toegang tot persoonlijke informatie verleend enkel voor zover ze die specifieke informatie nodig hebben om hun taken en dienstverlening naar behoren uit te voeren. De betrokken werknemers kregen in hun opleiding instructies om correct om te gaan met vertrouwelijke gegevens. Ambts- en beroepsgeheim met betrekking tot behandeling van persoonsgegevens zijn volledig van toepassing.</p>
                                    <br/>
                                    <p>De gegevens worden opgeslagen en verwerkt op eigen, beveiligde informaticaomgevingen en datacenters van het Departement Omgeving of in de beveiligde omgeving van verwerkers in opdracht van en onder toezicht van het Departement Omgeving.</p>
                                </div>

                                <div id="privacy-declaration-authorizations" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Machtigingen van de bevoegde autoriteiten en afgesloten protocollen voor het verwerken van bepaalde gegevens</h3>
                                    <p>Het Departement Omgeving of de overheidsinstanties waarvoor zij handelt als opvolger hebben voor een aantal verwerkingen van persoonsgegevens en/of gegevensoverdracht machtiging bekomen van Sectorale comités binnen de schoot van de Privacycommissie (CPBL) of van de Vlaamse Toezichtcommissie (VTC). De lijst met toelichting en referentie naar het machtigingsbesluit in kwestie wordt verder in deze pagina beschikbaar gesteld.</p>
                                    <br/>
                                    <p>Met de van toepassing worden van de Algemene Verordening Gegevensbescherming zijn de machtigingen opgeheven. De Machtigingen worden daarbij vervangen door protocollen. Bestaande machtigingen blijven wel rechtsgeldig. Het Departement Omgeving sluit, waar nodig, de nodige protocollen af en stelt deze eveneens ter beschikking op deze pagina.</p>
                                </div>

                                <div id="privacy-declaration-rights" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Uw rechten als betrokkene</h3>
                                    <vl-typography>
                                        <p>De Algemene Verordening Gegevensbescherming voorziet in een aantal privacy-rechten, waarop u als ‘betrokkene’ (dit is: natuurlijk persoon) beroep op kunt doen. Dit uiteraard rekening houdend met de privacyrechten van andere personen en met wettelijke bepalingen en beperkingen.</p>
                                        <p>Als betrokkene in de zin zoals bepaald in de Algemene Verordening Gegevensbescherming beschikt u over volgende rechten die samengevat kunnen worden in "het recht op een correcte, legitieme verwerking van uw persoonsgegevens":</p>
                                        <ul>
                                            <li>Recht van inzage van de met betrekking tot u verwerkte gegevens (AVG art. 15)</li>
                                            <li>Recht op rectificatie, of recht op correctie van fouten (AVG art. 16)</li>
                                            <li>Recht op gegevenswissing (officieel "recht op vergetelheid" of ook genoemd “het recht om vergeten te worden”); dit recht is toepasbaar in bepaalde gevallen en met name als wij gegevens van u verwerken op basis van een geïnformeerde toestemming waarbij wij geen wettelijke of andere wettelijke basis kunnen inroepen voor verdere verwerking inbegrepen bewaring ervan (AVG art. 17)</li>
                                            <li>Recht op beperking van verwerking (AVG art. 18)</li>
                                            <li>Notificatie van rechtzetting, van uitwissing of van beperking van verwerking (AVG art. 19)</li>
                                            <li>Recht op overdraagbaarheid van persoonsgegevens (AVG art. 20)</li>
                                            <li>Recht van bezwaar/verzet tegen verwerking van uw gegevens (AVG art. 21)</li>
                                            <li>Rechten met betrekking tot individuele besluitvorming, inclusief profilering (AVG art. 22)</li>
                                        </ul>
                                    </vl-typography>
                                </div>

                                <div id="privacy-declaration-rights-inspection-correction-removal" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Recht op inzage, verbetering of verwijdering</h3>
                                    <p>Voor de verwerkingen van persoonsgegevens waarbij het Departement Omgeving optreedt als de Verwerkingsverantwoordelijke voor de gegevensverwerkingen in de zin van de Algemene Verordening Gegevensbescherming, kunnen betrokkenen een verzoeken om inzage, correctie of verwijdering indienen en zal het Departement Omgeving deze behandelen conform de bepalingen die zijn voorgeschreven door de Algemene Verordening Gegevensbescherming, rekening houdend met de beperkingen voorzien in Art. 23 van de AVG.</p>
                                    <br/>
                                    <p>Voor de verwerkingen van persoonsgegevens waarbij het Departement Omgeving niet als de Verwerkingsverantwoordelijke voor de gegevensverwerkingen optreedt in de zin van de Algemene Verordening Gegevensbescherming, kunnen verzoeken om inzage, correctie of verwijdering niet door het Departement Omgeving zelfstandig worden afgehandeld. In dat geval moeten verzoeken om inzage, correctie of verwijdering worden ingediend bij de Verwerkingsverantwoordelijke voor de gegevensverwerkingen die gebruik maken van de diensten en verwerking met /door de informatiesystemen van het Departement Omgeving.</p>
                                    <br/>
                                    <p>Voor meer informatie over de wijze waarop persoonsgegevens worden verwerkt binnen het werkingsdomein van het Departement Omgeving of het uitoefenen van een recht in het kader van de Algemene Verordening Gegevensbescherming kunt u contact opnemen met de Data Protection Officer) van het Departement Omgeving (DPO) waarvan de contactgegevens onderaan deze pagina terug te vinden zijn.</p>
                                    <br/>
                                    <p>Daarnaast hebt u het recht om klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit(GBA), indien u meent dat uw rechten geschaad zijn en u zich ook na vraagstelling bij de bevoegde diensten van het Departement Omgeving of de door het Departement Omgeving aangestelde Functionaris voor gegevensbescherming (DPO) niet voldoende in uw rechten erkend weet.</p>
                                </div>

                                <div id="privacy-declaration-application" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h3 is="vl-h3">Toepassing van deze Privacyverklaring</h3>
                                    <p>Deze versie van de Privacyverklaring van het Departement Omgeving is van toepassing vanaf 25 mei 2018.</p>
                                    <br/>
                                    <p>Als de doelstellingen wijzigen waarvoor verwerking van persoonsgegevens gebeurt, zal het Departement Omgeving dit publiek melden en hiervan op transparante wijze mededeling doen in nieuwsbrieven, op de website <a is="vl-link" href="https://www.omgevingvlaanderen.be" target="_self">www.omgevingvlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a> en via andere mediakanalen waarvan het Departement Omgeving gebruik maakt.</p>
                                    <br/>
                                    <p>Het Departement Omgeving behoudt zich het recht voor om de privacyverklaring aan te passen aan nieuwe noden of inzichten. Er zal van wijzigingen aan de Privacyverklaring transparant melding gemaakt worden op de hoofdwebsite van het Departement Omgeving (<a is="vl-link" href="https://www.omgevingvlaanderen.be" target="_self">www.omgevingvlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a>) alsook op de papieren versie die op eenvoudige aanvraag verkrijgbaar is bij de Dienst Communicatie van het Departement Omgeving en via de Functionaris voor gegevensbescherming (Data Protection Officer) van het Departement Omgeving.</p>
                                    <br/>
                                    <p>Bij vragen over de Privacyverklaring of de aanpassingen eraan, kunt u terecht bij de Data Protection Officer waarvan u de contactgegevens terugvindt via de knop 'Hulp nodig?'.</p>
                                </div>

                                <div id="privacy-department" is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                                    <h2 is="vl-h2">Machtigingen en protocollen</h2>
                                    <p>Volledige lijst machtigingen en protocollen die het departement heeft afgesloten.</p>
                                    <br/>
                                    <div is="vl-grid">
                                        <div is="vl-column" data-vl-size="4" data-vl-medium-size="6">
                                            <vl-document data-vl-href="privacybeleid-op-website-dOMG- v0.2_0.docx">
                                                <span slot="type">DOCX</span>
                                                <span slot="title">Lijst van aangiften en machtigingen</span>
                                                <span slot="metadata">DOCX - 43 kB</span>
                                            </vl-document>
                                        </div>
                                    </div>
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
                                    <a is="vl-side-navigation-toggle" href="#privacy-department" data-vl-child="privacy-department">
                                    Het Departement Omgeving en uw privacy
                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                    </a>
                                </li>
                                <li is="vl-side-navigation-item" data-vl-parent>
                                    <a is="vl-side-navigation-toggle" href="#privacy-declaration" data-vl-child="privacy-declaration">
                                        Privacy
                                        <i class="vl-vi vl-vi-arrow-right-fat"></i>
                                    </a>
                                    <ul>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-general" data-vl-parent="privacy-declaration">Algemeen</a></div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-information-processing-systems" data-vl-parent="privacy-declaration">Informatieverwerkende systemen van het Departement Omgeving</a></div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-role-in-processing" data-vl-parent="privacy-declaration">De rol van het Departement Omgeving in de verwerking van (persoons)gegevens</a></div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-general-data-protection-regulation" data-vl-parent="privacy-declaration">Maatregelen in het kader van de Algemene verordening Gegevensbescherming</a></div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-security" data-vl-parent="privacy-declaration">Beveiliging van de informatie (persoonsgegevens)</a></div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-rights" data-vl-parent="privacy-declaration">Uw rechten als betrokkene</a></div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-rights-inspection-correction-removal" data-vl-parent="privacy-declaration">Recht op inzage, verbetering of verwijdering</a></div>
                                        </li>
                                        <li is="vl-side-navigation-item">
                                            <div><a href="#privacy-declaration-application" data-vl-parent="privacy-declaration">Toepassing van deze Privacyverklaring</a></div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <section is="vl-region" data-vl-overlap>
            <div is="vl-layout">
                <div is="vl-grid" data-vl-is-stacked>
                    <div is="vl-column" data-vl-size="12" data-vl-medium-size="12">
                        <vl-contact-card id="contact-card">
                            <vl-infoblock slot="info" data-vl-title="Departement Omgeving" data-vl-type="contact"></vl-infoblock>
                            <vl-properties slot="properties">
                                <dl is="vl-properties-list">
                                <dt is="vl-property-term">Adres</dt>
                                <dd is="vl-property-value">Graaf de Ferrarisgebouw<br/>Koning Albert II laan 20 (bus 8)<br/>1000 Brussel, België</dd>
                                <dt is="vl-property-term">Telefoon</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="tel:02 553 80 11">02 553 80 11<span is="vl-icon" data-vl-icon="phone" data-vl-after></span></a></dd>
                                <dt is="vl-property-term">E-mail</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="mailto:omgeving@vlaanderen.be">omgeving@vlaanderen.be<span is="vl-icon" data-vl-icon="mail" data-vl-after></span></a></dd>
                                <dt is="vl-property-term">Website</dt>
                                <dd is="vl-property-value"><a is="vl-link" href="http://onderwijs.vlaanderen.be" target="_blank">http://onderwijs.vlaanderen.be<span is="vl-icon" data-vl-icon="external" data-vl-after></span></a></dd>
                                <dt is="vl-property-term">KBO-nummer</dt>
                                <dd is="vl-property-value">0316.380.841 (ondernemingsnummer van de Vlaamse Overheid)</dd>
                                </dl>
                            </vl-properties>
                        </vl-contact-card>
                    </div>
                </div>
            </div>
        </section>
    `);
  }
}

define('vl-privacy', VlPrivacy);
