const VlInfotext = require('../components/vl-infotext');
const { Page, Config } = require('vl-ui-core').Test;

class VLInfotextPage extends Page {
    
    async getInfotext() {
        return new VlInfotext(this.driver, '#infotext');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-infotext.html');
    }
}

module.exports = VLInfotextPage;
