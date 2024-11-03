"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const { databaseConfiguration } = require("../configurations");
const db = { sequelize: new Sequelize(databaseConfiguration[process.env.ENVIRONMENT || "development"]) };

// prettier-ignore
fs.readdirSync(__dirname).filter(function (fileName) {
	const extensionIndex = fileName.lastIndexOf(".");
	return fileName !== path.basename(__filename) && extensionIndex > 0 && extensionIndex < fileName.length - 1 && fileName.endsWith(".js");
}).forEach(function (fileName) {
	const filePath = path.resolve(__dirname, fileName);
	const model = require(filePath)(db.sequelize);
	db[model.name] = model;

	if (db[model.name].associate) {
		db[model.name].associate(db);
	}
});

module.exports = db;
