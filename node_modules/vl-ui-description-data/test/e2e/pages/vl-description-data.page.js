const VlDescriptionData = require('../components/vl-description-data');
const { Page, Config } = require('vl-ui-core').Test;

class VlDescriptionDataPage extends Page {
    async getVlDescriptionData() {
    	return new VlDescriptionData(this.driver, "#vl-description-data");
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-description-data.html');
    }
}

module.exports = VlDescriptionDataPage;
