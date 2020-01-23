
const { assert, driver } = require('vl-ui-core').Test;
const VlInfotextPage = require('./pages/vl-infotext.page');

describe('vl-infotext', async () => {
    const vlInfotextPage = new VlInfotextPage(driver);

    before(() => {
        return vlInfotextPage.load();
    });

    it('als gebruiker kan ik de value opvragen', async () => {
        const infoText = await vlInfotextPage.getInfotext();
        const value = await infoText.getValue();
        assert.equal(value, '3200');
    });

    it('als gebruiker kan ik de tekst opvragen', async () => {
        const infoText = await vlInfotextPage.getInfotext();
        const text = await infoText.getText();
        assert.equal(text, 'Bezoekers per dag');
    });

});
