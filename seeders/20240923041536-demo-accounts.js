"use strict";

const { accountConfiguration } = require("../configurations");
const { tableName, rowSample, tableColumns } = accountConfiguration;
const roles = tableColumns.role.values;
const accounts = roles.map((role) => ({ ...rowSample, username: role, role }));

module.exports = {
	async up(queryInterface, _Sequelize) {
		await queryInterface.bulkInsert(tableName, accounts, {});
	},
	async down(queryInterface, Sequelize) {
		const usernameConditions = { [Sequelize.Op.in]: roles };
		await queryInterface.bulkDelete(tableName, { username: usernameConditions }, {});
	}
};
