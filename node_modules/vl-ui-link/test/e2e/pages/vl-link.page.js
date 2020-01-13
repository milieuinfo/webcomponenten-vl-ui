const VlLink = require('../components/vl-link');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlLinkPage extends Page {
    async _getLink(selector) {
        return new VlLink(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-link.html');
    }
}

module.exports = VlLinkPage;
