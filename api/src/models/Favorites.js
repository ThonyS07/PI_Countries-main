const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Country = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"country",
		{
			id: {
				type: DataTypes.STRING(3),
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		
		},
		{
			timestamps: false,
		}
	);
};
module.exports = Country;
