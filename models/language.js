module.exports = function(sequelize, DataTypes) {
	var Language = sequelize.define("Language", {
		language: {
			type: DataTypes.STRING,
			allowNull: false
		},
		studied: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}, 
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	});
	
	return Language;

};

