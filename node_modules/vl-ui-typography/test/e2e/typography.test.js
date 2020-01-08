
const { driver } = require('vl-ui-core').Test;
const VlTypographyPage = require('./pages/vl-typography.page');

describe('vl-typography', async () => {
    const vlTypographyPage = new VlTypographyPage(driver);

    before(() => {
        return vlTypographyPage.load();
    });

    after(() => {
        driver.quit();
    });

});
