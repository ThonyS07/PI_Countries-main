const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"activity",
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: false,
				primaryKey: true,
			},

			name: {
				type: DataTypes.STRING,
				set(value) {
					this.setDataValue("name", value.toUpperCase());
				},
			},

			difficulty: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 5,
					isEven(value) {
						if (value < 1 || value > 5)
							throw new Error("La dificultad debe ser un valor entre 1 y 5");
					},
				},
			},

			duration: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 24,
					isEven(value) {
						if (value < 1 || value > 24)
							throw new Error("La duración debe ser entre 1 hora y 24 horas");
					},
				},
			},
			season: {
				type: DataTypes.ENUM(
					"verano",
					"primavera",
					"invierno",
					"otoño",
					"todas"
				),
				set(value) {
					this.setDataValue("season", value.toLowerCase());
				},
			},
		},
		{
			timestamps: false,
		}
	);
};
