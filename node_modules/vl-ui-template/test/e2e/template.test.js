
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlTemplatePage = require('./pages/vl-template.page');

describe('vl-template', async () => {
    const vlTemplatePage = new VlTemplatePage(driver);

    before(() => {
        return vlTemplatePage.load();
    });

    after(async () => { 
        return driver.quit();
    });

    it('de header word weergegeven', async () => {
        const template = await vlTemplatePage.getTemplate();
        await assert.eventually.isNotNull(template.getHeader());
    });

    it('de footer word weergegeven', async () => {
        const template = await vlTemplatePage.getTemplate();
        await assert.eventually.isNotNull(template.getFooter());
    });

    it('de content word weergegeven', async () => {
        const template = await vlTemplatePage.getTemplate();
        await assert.eventually.isNotNull(template.getContent());
    });
});
