"use strict";

const { DataTypes } = require("sequelize");
const dateSample = new Date(0);
const attributeNames = ["id", "username", "password", "fullName", "role", "createdAt", "updatedAt"];
const columnNames = ["id", "username", "password", "full_name", "role", "created_at", "updated_at"];
const sample = { id: 0, username: "", password: "", fullName: "", role: "user", createdAt: dateSample, updatedAt: dateSample };

module.exports = {
	name: "Account",
	attributeNames,
	columnNames,
	sample,
	attributes: {
		id: { type: DataTypes.INTEGER, allowNull: false, defaultValue: sample.id, autoIncrement: true, primaryKey: true },
		username: { type: DataTypes.STRING, allowNull: false, defaultValue: sample.username, unique: true },
		password: { type: DataTypes.STRING, allowNull: false, defaultValue: sample.password },
		fullName: { type: DataTypes.STRING, allowNull: false, defaultValue: sample.fullName },
		role: { type: DataTypes.ENUM, allowNull: false, defaultValue: sample.role, values: ["user", "admin"] },
		createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: sample.createdAt },
		updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: sample.updatedAt }
	}
};
