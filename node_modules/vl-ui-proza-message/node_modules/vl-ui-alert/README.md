# "vl-alert" Web Component
De ["alert" component van Webuniversum Vlaanderen](https://overheid.vlaanderen.be/webuniversum/v3/documentation/components/vl-ui-alert) als Web Component


## Installation
```
npm install --save vl-ui-alert
```

## Demo
```
npm run demo
```

## Kanttekening
Niet geïmplementeerd:
* Large versie: wél de class, wat meer padding geeft, maar de rest niet; is eigelijk ook een volledig andere component (volledig andere markup);
* Naked versie: geen verschil; class staat wel in de documentatie maar zit niet in de code (wordt ook op de WU demo niet toegepast);
* Dependencies op vl-ui-button, vl-ui-titles en vl-ui-typography: zijn niet van toepassing op het Web Component deel van de alert, hooguit op de content die IN de alert komt. 


Overige:
* om een alert te sluiten wordt gebruik gemaakt van de .remove() method. Deze wordt door IE niet ondersteund. Een polyfill is beschikbaar. Zie https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove


## Credits
Zie de lijst van [ontwikkelaars](https://github.com/milieuinfo/webcomponent-vl-ui-alert/graphs/contributors) die meegewerkt hebben aan de webcomponent.

## Contact
Mail je suggesties, opmerkingen of tips naar [help@omgevingvlaanderen.be](mailto:help@omgevingvlaanderen.be)
