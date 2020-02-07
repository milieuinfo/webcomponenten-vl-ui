const VlContentHeader = require('../components/vl-content-header');
const { Page, Config } = require('vl-ui-core').Test;

class VlContentHeaderPage extends Page {
    async _getContentHeader(selector) {
        return new VlContentHeader(this.driver, selector);
    }

    async getHeader() {
        return this._getContentHeader('#content-header');
    }
    async load() {
        await super.load(Config.baseUrl + '/demo/vl-content-header.html');
    }
}

module.exports = VlContentHeaderPage;
