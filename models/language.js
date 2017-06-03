var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

//create code that will call the ORM functions using burger-specific input for the ORM.
var Language = sequelize.define("langauge", {
	language: {
		type: Sequelize.STRING,
		allowNull: false
	},
	studied: {
		type: Sequelize.BOOLEAN
		allowNull: false,
		defaultValue: false
	}, 
	createdAt: {
		type: Sequelize.DATE
		allowNull: false
	}
}, {
	timestamps: false
});

Language.sync();

module.exports = Language;
