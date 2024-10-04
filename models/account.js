"use strict";

const { Model } = require("sequelize");
const { accountConfiguration } = require("../configurations");
const { name, attributes } = accountConfiguration;

class Account extends Model {
	static associate(models) {
		console.log(models);
	}
}

module.exports = function (sequelize) {
	Account.init(attributes, { sequelize, modelName: name, underscored: true });
	return Account;
};
