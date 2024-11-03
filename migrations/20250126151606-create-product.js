"use strict";

const { ProductConfiguration } = require("../configurations");
const { tableName, tableColumns } = ProductConfiguration;

module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.createTable(tableName, tableColumns);
	},
	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable(tableName);
	}
};
