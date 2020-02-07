const { VlElement } = require('vl-ui-core').Test;
const { By } = require('selenium-webdriver');

class VlDescriptionDataBlock extends VlElement {
	async getLabel() {
		return (await this._getLabel()).getText();
	}
	
	async getValue() {
		return (await this._getValue()).getText();
	}

	async _getLabel() {
		return this.findElement(By.css(".vl-description-data__label"));
	}

	async _getValue() {
		return this.findElement(By.css(".vl-description-data__value"));
	}
}

class VlDescriptionData extends VlElement {  
	async getDescriptionDataBlocks() {
		const elementen = await this.findElements(By.css(".vl-description-data-block"));
		return Promise.all(elementen.map(async element => {
			return await new VlDescriptionDataBlock(this.driver, element);
		}));
	}

	async getDescriptionDataBlock(index) {
		const elementen = await this.getDescriptionDataBlocks();
		return new VlDescriptionDataBlock(this.driver, elementen[index]);
	}
}

module.exports = VlDescriptionData;
