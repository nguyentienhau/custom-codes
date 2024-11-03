"use strict";

const { Model } = require("sequelize");
const { ProductCategoryConfiguration } = require("../configurations");
const { modelName, modelAttributes, tableName } = ProductCategoryConfiguration;

class ProductCategory extends Model {
	static associate(models) {
		console.log(models);
	}
}

module.exports = function (sequelize, _DataTypes) {
	ProductCategory.init(modelAttributes, { sequelize, modelName, tableName, underscored: true });
	return ProductCategory;
};
