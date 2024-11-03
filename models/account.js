"use strict";

const { Model } = require("sequelize");
const { accountConfiguration } = require("../configurations");
const { modelName, modelAttributes } = accountConfiguration;

class Account extends Model {
	static associate(models) {
		console.log(models);
	}
}

module.exports = function (sequelize) {
	Account.init(modelAttributes, { sequelize, modelName, underscored: true });
	return Account;
};
