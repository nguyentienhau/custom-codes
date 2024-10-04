"use strict";

const fs = require("fs");
const path = require("path");

fs.readdirSync(__dirname)
	.filter(function (fileName) {
		const extensionIndex = fileName.lastIndexOf(".") + 1;
		return fileName !== path.basename(__filename) && extensionIndex > 0 && extensionIndex < fileName.length;
	})
	.forEach(function (fileName) {
		const extensionIndex = fileName.lastIndexOf(".") + 1;
		const filePath = path.resolve(__dirname, fileName);

		switch (fileName.slice(extensionIndex)) {
			case "js": {
				const { name, attributeNames, columnNames, sample, attributes } = require(filePath);
				const configurationName = name.replace(/\b[A-Z]/, (firstLetter) => firstLetter.toLowerCase());

				module.exports[`${configurationName}Configuration`] = {
					name,
					attributeNames,
					columnNames,
					sample,
					attributes,
					rowSample: columnNames.reduce(function (accumulator, columnName) {
						accumulator[columnName] = sample[attributeNames[index]];
						return accumulator;
					}, {}),
					columns: columnNames.reduce(function (accumulator, columnName, index) {
						accumulator[columnName] = attributes[attributeNames[index]];
						return accumulator;
					}, {})
				};
				break;
			}
			default: {
				const configurationName = fileName.slice(0, extensionIndex - 1);
				module.exports[`${configurationName}Configuration`] = require(filePath);
				break;
			}
		}
	});
