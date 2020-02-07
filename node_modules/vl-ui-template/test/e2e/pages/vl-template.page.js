const VlTemplate = require('../components/vl-template');
const { Page, Config } = require('vl-ui-core').Test;

class VlTemplatePage extends Page {
    async getTemplate() {
        return new VlTemplate(this.driver, 'vl-template');
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-template.html');
    }
}

module.exports = VlTemplatePage;
