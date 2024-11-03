"use strict";

const { CategoryConfiguration } = require("../configurations");
const { tableName, tableColumns } = CategoryConfiguration;

module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.createTable(tableName, tableColumns);
	},
	async down(queryInterface, _Sequelize) {
		await queryInterface.dropTable(tableName);
	}
};
