
const { assert, driver } = require('vl-ui-core').Test.Setup;
const VlDescriptionDataPage = require('./pages/vl-description-data.page');

describe('vl-description-data', async () => {
    const vlDescriptionDataPage = new VlDescriptionDataPage(driver);

    before(() => {
        return vlDescriptionDataPage.load();
    });
    
    it('de value en label van elke description data block worden correct getoond', async () => {
    	const descriptionData = await vlDescriptionDataPage.getVlDescriptionData();
        
        const descriptionDatablocks = await descriptionData.getDescriptionDataBlocks();
        assert.lengthOf(descriptionDatablocks, 4);

        await assert.eventually.equal(descriptionDatablocks[0].getLabel(), "Uitgever");
        await assert.eventually.equal(descriptionDatablocks[0].getValue(), "Kind en Gezin");

        await assert.eventually.equal(descriptionDatablocks[1].getLabel(), "Publicatiedatum");
        await assert.eventually.equal(descriptionDatablocks[1].getValue(), "Augustus 2018");

        await assert.eventually.equal(descriptionDatablocks[2].getLabel(), "Publicatietype");
        await assert.eventually.equal(descriptionDatablocks[2].getValue(), "Brochure");

        await assert.eventually.equal(descriptionDatablocks[3].getLabel(), "Categorie");
        await assert.eventually.equal(descriptionDatablocks[3].getValue(), "Kinderen en jongeren");
    });

    after(async () => {
        return driver.quit();
    })
});
