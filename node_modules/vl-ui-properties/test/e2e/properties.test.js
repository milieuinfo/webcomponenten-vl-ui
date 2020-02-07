
const { assert, driver } = require('vl-ui-core').Test.Config;
const VlPropertiesPage = require('./pages/vl-properties.page');

describe('vl-properties', async () => {
    const vlPropertiesPage = new VlPropertiesPage(driver);

    before(() => {
        return vlPropertiesPage.load();
    });

    after(async () => {
        return driver.quit();
    })

});
