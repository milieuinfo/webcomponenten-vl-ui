const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');
const { VlImage } = require('vl-ui-image').Test;

class VlContentHeader extends VlElement {  
    constructor(driver, selector) {
        super(driver, selector);
    }

    async getImageComponent() {
        return new VlImage(this.driver, '#img-component');
    }

    async getImage() {
        return this.shadowRoot.findElement(By.css('#picture'));
    }

    async getContextLink() {
        return this.shadowRoot.findElement(By.css('#context>a'));
    }

    async getTitleLink() {
        return this.shadowRoot.findElement(By.css('#title>a'));
    }
}

module.exports = VlContentHeader;
