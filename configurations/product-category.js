"use strict";

const { DataTypes } = require("sequelize");
const dateSample = new Date(0);

module.exports = {
	modelName: "ProductCategory",
	instanceSample: { id: 0, productId: 0, categoryId: 0, createdAt: dateSample, updatedAt: dateSample },
	modelAttributes: {
		id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
		productId: { type: DataTypes.STRING, allowNull: false, defaultValue: 0 },
		categoryId: { type: DataTypes.STRING, allowNull: false, defaultValue: 0 },
		createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample },
		updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: dateSample }
	}
};
