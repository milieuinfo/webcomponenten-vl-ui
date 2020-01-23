const { VlElement } = require('vl-ui-core');

class VlTypography extends VlElement {
    async getText() {
        return this.shadowRoot.getText();
    }
}

module.exports = VlTypography;
