"use strict";

const { ProductCategoryConfiguration } = require("../configurations");
const { tableName, tableColumns } = ProductCategoryConfiguration;

module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.createTable(tableName, tableColumns);
	},
	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable(tableName);
	}
};
