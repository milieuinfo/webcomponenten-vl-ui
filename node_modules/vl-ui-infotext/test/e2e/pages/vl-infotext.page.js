const VLInfotext = require('../components/vl-infotext');
const { Page, Config } = require('vl-ui-core');

class VLInfotextPage extends Page {
    async _getInfotext(selector) {
        return new VlInfotext(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl);
    }
}

module.exports = VLInfotextPage;
