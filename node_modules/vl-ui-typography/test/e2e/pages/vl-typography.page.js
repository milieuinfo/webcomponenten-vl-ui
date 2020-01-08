const VlTypography = require('../components/vl-typography');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlTypographyPage extends Page {
    async _getTypography(selector) {
        return new VlTypography(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-typography.html');
    }
}

module.exports = VlTypographyPage;
