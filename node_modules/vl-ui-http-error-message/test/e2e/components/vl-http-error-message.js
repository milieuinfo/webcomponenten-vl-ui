const { VlElement } = require('vl-ui-core');
const { VlTypography } = require('vl-ui-typography');
const { VlButton } = require('vl-ui-button');
const { By } = require('selenium-webdriver');

class VlHttpErrorMessage extends VlElement {
    async getTitle() {
        return (await this._getTitle()).getText();
    }

    async getContent() {
        return (await this._getTypography()).getText();
    }

    async clickOnAction() {
        return (await this._getAction()).click();
    }

    async _getTitle() {
        return this.shadowRoot.findElement(By.css('#title'));
    }

    async _getTypography() {
        const element = await this.shadowRoot.findElement(By.css('#text'));
        return new VlTypography(this.driver, element);
    }

    async _getAction() {
        const element = await this.shadowRoot.findElement(By.css('a'));
        return new VlButton(this.driver, element);
    }

    async _getImage() {
        const smallImage = await this._getSmallImage();
        const normalImage = await this._getNormalImage();
        const smallImageSrc = await smallImage.getAttribute('src');
        const normalImageSrc = await normalImage.getAttribute('src');
        const smallImageAlt = await smallImage.getAttribute('alt');
        const normalImageAlt = await normalImage.getAttribute('alt');
        if (smallImageSrc != normalImageSrc) {
        	throw new Error("Small en normal image src moeten gelijk zijn");
        }
        if (smallImageAlt != normalImageAlt) {
        	throw new Error("Small en normal image alt moeten gelijk zijn");
        }
        return smallImage;
    }

    async _getNormalImage() {
        return this.shadowRoot.findElement(By.css('#image-normal'));
    }

    async _getSmallImage() {
        return this.shadowRoot.findElement(By.css('#image-small'));
    }
}

module.exports = VlHttpErrorMessage;
