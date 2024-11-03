"use strict";

const fs = require("fs");
const path = require("path");
require("../custom");

// prettier-ignore
fs.readdirSync(__dirname).filter(function (fileName) {
	const extensionIndex = fileName.lastIndexOf(".");
	return fileName !== path.basename(__filename) && extensionIndex > 0 && extensionIndex < fileName.length - 1;
}).forEach(function (fileName) {
	const extensionIndex = fileName.lastIndexOf(".");
	const filePath = path.resolve(__dirname, fileName);
	const configurationName = fileName.slice(0, extensionIndex).toCamelCase();
	const configurationData = require(filePath);
	const modelConfigurationKeys = ["modelName", "instanceSample", "modelAttributes"];

	if (modelConfigurationKeys.every((key) => Object.hasOwn(configurationData, key))) {
		const { modelName, instanceSample, modelAttributes } = configurationData;
		const attributeNames = Array.from(Object.keys(modelAttributes));
		configurationData.tableName = modelName.toSnakeCase();
		configurationData.rowSample = {};
		configurationData.tableColumns = {};

		for (const attributeName of attributeNames) {
			const columnName = attributeName.toSnakeCase();
			configurationData.rowSample[columnName] = instanceSample[attributeName];
			configurationData.tableColumns[columnName] = modelAttributes[attributeName];
		}
	}

	module.exports[`${configurationName}Configuration`] = configurationData;
});
