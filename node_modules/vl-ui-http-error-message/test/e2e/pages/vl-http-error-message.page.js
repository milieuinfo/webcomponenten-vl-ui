const VlHttpErrorMessage = require('../components/vl-http-error-message');
const { Page, Config } = require('vl-ui-core');

class VlHttpErrorMessagePage extends Page {
    async _getHttpErrorMessage(selector) {
        return new VlHttpErrorMessage(this.driver, selector);
    }

    async clickOnButton() {
        const errorMessage = await this._getHttpErrorMessage('#not-found-message');
        return (await errorMessage.getActionButton()).click();
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-http-error-message.html');
    }
}

module.exports = VlHttpErrorMessagePage;
