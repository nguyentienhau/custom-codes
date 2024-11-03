"use strict";

const { Model } = require("sequelize");
const { CategoryConfiguration } = require("../configurations");
const { modelName, modelAttributes, tableName } = CategoryConfiguration;

class Category extends Model {
	static associate(models) {
		console.log(models);
	}
}

module.exports = function (sequelize, _DataTypes) {
	Category.init(modelAttributes, { sequelize, modelName, tableName, underscored: true });
	return Category;
};
