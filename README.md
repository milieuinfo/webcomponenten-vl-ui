# webcomponenten-vl-ui
![GitHub issues](https://img.shields.io/github/issues-raw/milieuinfo/webcomponenten-vl-ui) ![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/milieuinfo/webcomponenten-vl-ui) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/milieuinfo/webcomponenten-vl-ui)

Een overzicht van de webcomponenten met bijhorende API en demo's, gepubliceerd via de [demo](https://webcomponenten.omgeving.vlaanderen.be) pagina.

Deze dependency kan ook gebruikt worden als bill of materials (BOM). Enerzijds als leidraad of rechtstreeks als dependency.

## BOM leidraad
De BOM kan als leidraad gebruikt worden om versies te selecteren die applicatief gebruikt kunnen worden. De BOM draait in één build de e2e testen van elke webcomponent, waardoor de versies opgesomd in de BOM (volgens de testen) probleemloos gecombineerd kunnen worden.

## BOM dependency
De BOM kan ook als dependency gebruikt worden zodat automatisch de juiste versie van elke webcomponent applicatief beschikbaar zal zijn. Bij elke BOM release zal de grootste change (major/minor/patch) van de onderliggend gewijzigde webcomponenten de BOM versie bepalen. Bij breaking changes zal ook in de BOM een samenvatting van de onderliggende breaking change release notes voorzien worden om migratie te vereenvoudigen.

## Installatie
``` bash
$ npm install --save webcomponenten-vl-ui
```

## API
De API van elke webcomponent worden gepubliceerd via de [demo](https://webcomponenten.omgeving.vlaanderen.be) pagina.


## Demo
De [demo](https://webcomponenten.omgeving.vlaanderen.be) pagina bevat een overzicht van de mogelijkheden met code voorbeelden. Lokaal opstarten kan met onderstaand [NPM](https://www.npmjs.com) script.
``` bash
$ npm run demo
```

## Publicatie
Om een nieuwe webcomponenten pagina te publiceren kan het generate script uitgevoerd worden.
``` bash
$ npm run generate
```

## Testen
De webcomponent bevat verschillende unit testen die bij elke commit geautomatiseerd in Chrome en Firefox draaien. Hierdoor kunnen we bij elke release een minimum aan kwaliteit garanderen. Later zullen er ook nog UI testen toegevoegd worden zodat al de functionaliteit uitgebreid getest wordt.

De testen kunnen lokaal opgestart worden met onderstaand [NPM](https://www.npmjs.com) script.
``` bash
$ npm run test
```

## Issues
Indien je nood hebt aan extra feature of een bug gevonden hebt, mag je hiervoor een issue aanmaken. Er zijn 3 issues templates beschikbaar:
1. Feature request
2. Bug
3. Task

Uiteraard is het ook toegelaten om mee te ontwikkelen door gebruik te maken van Pull Requests (PR). Gelieve volgende conventies te respecteren:
1. Bug issue best linken aan een branch met een test die het probleem illustreert zodat de bug opgelost kan worden
2. Elke commit die betrekking heeft tot een issue moet een verwijzing hiernaar hebben vb. #33 fix uitlijning header
3. Elke PR moet een issue verwijzing hebben, zodat deze automatisch opgenomen kan worden in de release notes

## Versionering
We gebruiken [Semantic Versioning](https://semver.org) en voorzien elke release van release notes, zie een overzicht van de [releases](https://github.com/milieuinfo/webcomponent-vl-ui-button/releases).

## Browser ondersteuning
De webcomponenten zijn ontwikkeld door uitsluitend gebruik te maken van web standaarden (JavaScript, HTML, CSS). Hierdoor worden al de evergreen browser automatisch ondersteund.

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)
| --- | --- | --- | --- | --- |
| <center>Chrome</center> | <center>Firefox</center> | <center>Safari</center> | <center>Opera</center> | <center>Edge</center> |

## Credits
Zie de lijst van [ontwikkelaars](https://github.com/milieuinfo/webcomponent-vl-ui-button/graphs/contributors) die meegewerkt hebben aan de webcomponent.

## Contact
Heb je suggesties, opmerkingen of tips? Voel je dan vrij om ons te contacteren via help@omgevingvlaanderen.be.