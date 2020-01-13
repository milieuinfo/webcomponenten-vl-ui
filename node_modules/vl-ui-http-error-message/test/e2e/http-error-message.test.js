const { assert, driver } = require('vl-ui-core').Test;
const VlProzaMessagePage = require('./pages/vl-http-error-message.page');

describe('vl-proza-message', async () => {
    const vlProzaMessagePage = new VlProzaMessagePage(driver);

    before(() => {
        return vlProzaMessagePage.load();
    });

    it('klikken op de actieknop van een 404 bericht zal de gebruiker omleiden naar de startpagina', async () => {
        const originalUrl = await driver.getCurrentUrl();
        assert.isFalse(originalUrl.endsWith('/'));

        await vlProzaMessagePage.clickOnButton();

        const urlAfterClick = await driver.getCurrentUrl();
        assert.isTrue(urlAfterClick.endsWith('/'));
    });
});
