const { VlElement } = require('vl-ui-core').Test;
const { VlIcon } = require('vl-ui-icon').Test;
const { By } = require('selenium-webdriver');

class VlInfoblock extends VlElement {
    async getTitle() {
        return (await this._getTitle()).getText();
    }

    async getContent() {
        return await this._getContent();
    }

    async getText() {
        return this.driver.executeScript('return arguments[0].textContent', this);
    }

    async getIcon() {
        return new VlIcon(this.driver, await this._getIcon());
    }

    async getType() {
        return this.getAttribute('type');
    }

    async isContact() {
        return (await this.getType()) == 'contact';
    }

    async isPublication() {
        return (await this.getType()) == 'publications';
    }

    async isFaq() {
        return (await this.getType()) == 'faq';
    }

    async isNews() {
        return (await this.getType()) == 'news';
    }

    async isTimeline() {
        return (await this.getType()) == 'timeline';
    }

    async isQuestion() {
        return (await this.getType()) == 'question';
    }

    async _getTitle() {
        return await this.shadowRoot.findElement(By.css('#infoblock_title'));
    }

    async _getContent() {
        return await this.shadowRoot.findElement(By.css('#infoblock_content'));
    }

    async _getIcon() {
        return await this.shadowRoot.findElement(By.css('[is="vl-icon"]'));
    }
}

module.exports = VlInfoblock;
