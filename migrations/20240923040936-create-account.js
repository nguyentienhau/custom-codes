"use strict";

const { accountConfiguration } = require("../configurations");
const { name, columns } = accountConfiguration;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		console.log(Sequelize);
		await queryInterface.createTable(name, columns);
	},
	async down(queryInterface, Sequelize) {
		console.log(Sequelize);
		await queryInterface.dropTable(name);
	}
};
