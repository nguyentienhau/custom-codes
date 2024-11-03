"use strict";

const { DataTypes } = require("sequelize");
const dateSample = new Date(0);

module.exports = {
	modelName: "Product",
	instanceSample: { id: 0, name: "", description: "", imageUrl: "", price: 0, createdAt: dateSample, updatedAt: dateSample },
	modelAttributes: {
		id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
		name: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
		description: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
		imageUrl: { type: DataTypes.STRING, allowNull: false, defaultValue: "" },
		price: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
		createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample },
		updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample }
	}
};
