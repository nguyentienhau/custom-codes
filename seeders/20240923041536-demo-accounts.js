"use strict";

const { accountConfiguration } = require("../configurations");
const { name, rowSample, columns } = accountConfiguration;
const demoAccounts = columns.role.values.map(function (role) {
	return { ...rowSample, username: role, password: role, full_name: role, role: role };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		console.log(Sequelize);
		await queryInterface.bulkInsert(tableName, demoAccounts, {});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(tableName, { username: { [Sequelize.Op.in]: columns.role.values } }, {});
	}
};
