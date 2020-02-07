
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlContentHeaderPage = require('./pages/vl-content-header.page');

describe('vl-content-header', async () => {
    const vlContentHeaderPage = new VlContentHeaderPage(driver);

    before(() => {
        return vlContentHeaderPage.load();
    });

    it('als gebruiker kan ik een context-link meegegeven', async () => {
        const header = await vlContentHeaderPage.getHeader();
        const link = await header.getContextLink();

        assert.isTrue(await link.getText() == 'Context');
    });

    it('als gebruiker kan ik een title-link meegeven', async () => {
        const header = await vlContentHeaderPage.getHeader();
        const link = await header.getTitleLink();

        assert.isTrue(await link.getText() == 'Vlaanderen');
    });

    it('image component word correct geladen', async () => {
        const header = await vlContentHeaderPage.getHeader();
        const imageComponent = await header.getImageComponent();
        assert.isNotNull(imageComponent);
    });

    after(async () => {
        return driver.quit();
    })
});
