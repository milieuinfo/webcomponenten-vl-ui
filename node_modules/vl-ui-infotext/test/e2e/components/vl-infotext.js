const { VlElement } = require('vl-ui-core');
const { By } = require('selenium-webdriver');

class VlInfotext extends VlElement {  

    async getValue() {
        return (await this.findElement(By.css('div[data-vl-value]'))).getText();
    }

    async getText() {
        return (await this.findElement(By.css('div[data-vl-text]'))).getText();
    }
}

module.exports = VlInfotext;
