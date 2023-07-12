const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Users = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"user",
		{
			id: {
				type: DataTypes.STRING(3),
				allowNull: false,
				primaryKey: true,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			
		},
		{
			timestamps: false,
		}
	);
};
module.exports = Users;
