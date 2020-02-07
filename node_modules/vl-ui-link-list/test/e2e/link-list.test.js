
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlLinkListPage = require('./pages/vl-link-list.page');

describe('vl-link-list', async () => {
    const vlLinkListPage = new VlLinkListPage(driver);

    before(() => {
        return vlLinkListPage.load();
    });

    after(async () => {
        return driver.quit();
    })
});
