"use strict";

const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");
const { DatabaseConfiguration } = require("../configurations");
const database = { sequelize: new Sequelize(DatabaseConfiguration[process.env.ENVIRONMENT || "development"]) };

// prettier-ignore
fs.readdirSync(__dirname).filter(function (fileName) {
	const extensionIndex = fileName.lastIndexOf(".");
	return fileName !== path.basename(__filename) && extensionIndex > 0 && extensionIndex < fileName.length - 1 && fileName.endsWith(".js");
}).forEach(function (fileName) {
	const filePath = path.resolve(__dirname, fileName);
	const model = require(filePath)(database.sequelize);
	database[model.name] = model;

	if (database[model.name].associate) {
		database[model.name].associate(database);
	}
});

database["Product"].belongsToMany(database["Category"], { through: database["ProductCategory"] });
database["Category"].belongsToMany(database["Product"], { through: database["ProductCategory"] });

module.exports = database;
