"use strict";

const { Model } = require("sequelize");
const { AccountConfiguration } = require("../configurations");
const { modelName, modelAttributes, tableName } = AccountConfiguration;

class Account extends Model {
	static associate(models) {
		console.log(models);
	}
}

module.exports = function (sequelize, _DataTypes) {
	Account.init(modelAttributes, { sequelize, modelName, tableName, underscored: true });
	return Account;
};
