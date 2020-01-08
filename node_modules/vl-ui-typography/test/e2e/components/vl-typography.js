const { VlElement } = require('vl-ui-core');

class VlTypography extends VlElement {  
    constructor(driver, selector) {
        super(driver, selector);
    }

    async getText() {
        const div = await this.shadowRoot.findElement(By.css('#content'));
        return this.driver.executeScript('return arguments[0].innerText', div);
    }

}

module.exports = VlTypography;
