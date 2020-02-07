const { VlElement } = require('vl-ui-core').Test;
const { VlHeader } = require('vl-ui-header').Test;
const { VlFooter } = require('vl-ui-footer').Test;
const { By } = require('selenium-webdriver');

class VlTemplate extends VlElement {  
    async getHeader() {
        const header = await this.findElement(By.css('#header'));
        return new VlHeader(this.driver, header);
    }

    async getContent() {
        return this.findElement(By.css('#content'));
    }

    async getFooter() {
        const footer = await this.findElement(By.css('#footer'));
        return new VlFooter(this.driver, footer);
    }

}

module.exports = VlTemplate;
