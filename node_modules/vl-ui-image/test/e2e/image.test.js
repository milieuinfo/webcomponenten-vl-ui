
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlImagePage = require('./pages/vl-image.page');

describe('vl-image', async () => {
    const vlImagePage = new VlImagePage(driver);

    before(() => {
        return vlImagePage.load();
    });

    it('image word geladen', async () => {
        const image = await vlImagePage.getImage();
        await assert.eventually.isTrue(image.isDisplayed());
    });

    after(async () => {
        return driver.quit();
    })
});
