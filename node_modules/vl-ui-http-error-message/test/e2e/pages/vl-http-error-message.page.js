const VlHttpErrorMessage = require('../components/vl-http-error-message');
const { Page, Config } = require('vl-ui-core').Test;

class VlHttpErrorMessagePage extends Page {
    async _getHttpErrorMessage(selector) {
        return new VlHttpErrorMessage(this.driver, selector);
    }

    async getNotFoundErrorMessage() {
        return this._getHttpErrorMessage('#not-found-message');
    }

    async getCustomErrorMessage() {
    	return this._getHttpErrorMessage('#custom-message');
    }
    
    async load() {
        await super.load(Config.baseUrl + '/demo/vl-http-error-message.html');
    }
}

module.exports = VlHttpErrorMessagePage;
