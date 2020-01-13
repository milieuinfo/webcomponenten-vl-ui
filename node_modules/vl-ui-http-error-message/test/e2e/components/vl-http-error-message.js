const { VlElement } = require('vl-ui-core');
const { VlTypography } = require('vl-ui-typography');
const { By } = require('selenium-webdriver');

class VlHttpErrorMessage extends VlElement {
    async getTitle() {
        return this.shadowRoot.findElement(By.css('#title'));
    }

    async getContent() {
        const typo = new VlTypography(this.driver, this.shadowRoot.findElement(By.css('#text')));
        return typo.getText();
    }

    async getActionButton() {
        return this.shadowRoot.findElement(By.css('a'));
    }
}

module.exports = VlHttpErrorMessage;
