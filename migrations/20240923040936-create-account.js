"use strict";

const { AccountConfiguration } = require("../configurations");
const { tableName, tableColumns } = AccountConfiguration;

module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.createTable(tableName, tableColumns);
	},
	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable(tableName);
	}
};
