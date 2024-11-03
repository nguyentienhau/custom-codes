"use strict";

const { accountConfiguration } = require("../configurations");
const { tableName, tableColumns } = accountConfiguration;

module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.createTable(tableName, tableColumns);
	},
	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable(tableName);
	}
};
