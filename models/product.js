"use strict";

const { Model } = require("sequelize");
const { ProductConfiguration } = require("../configurations");
const { modelName, modelAttributes, tableName } = ProductConfiguration;

class Product extends Model {
	static associate(models) {
		console.log(models);
	}
}

module.exports = function (sequelize, _DataTypes) {
	Product.init(modelAttributes, { sequelize, modelName, tableName, underscored: true });
	return Product;
};
