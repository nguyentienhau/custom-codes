"use strict";

const { DataTypes } = require("sequelize");
const dateSample = new Date(0);

module.exports = {
	modelName: "Category",
	instanceSample: { id: 0, name: "", description: "", createdAt: dateSample, updatedAt: dateSample },
	modelAttributes: {
		id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
		name: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
		description: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
		createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample },
		updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample }
	}
};
