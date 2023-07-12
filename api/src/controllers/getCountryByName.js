const { Sequelize, Op, Country, Activity } = require("../db");
const getAllCountries = require("./getAllCountries")

const getCountryByName = async (req, res) => {
	const { name } = req.query;


	try {
		if (!name) {
		
			const countries = await Country.findAll({
				include: [
					{
						model: Activity,
						attributes: ["name", "difficulty", "duration", "season"],
						through: { attributes: [] },
					},
				],
			});
			countries.length
				? res.status(200).json(countries)
				: res.status(404).json({
						msg: "País no encontrado",
				  });
		} else {
			const first = name[0].toUpperCase();
			const end = name.slice(1).toLowerCase();
			const findName = first + end;
			const country = await Country.findOne({
				where: {
				
					name: findName
				},

				// 	Sequelize.where(
				// 	Sequelize.fn("LOWER", Sequelize.col("name")),
				// 	Sequelize.fn("LOWER", name)
				// ),
				include: [
					{
						model: Activity,
						attributes: ["name", "difficulty", "duration", "season"],
						through: { attributes: [] },
					},
				],
			});
			console.log(country);
			country
				? res.status(200).json(country)
				: res.status(404).json({ msg: "No se encontró el pais" });
		}
	} catch (error) {
		return res.status(404).send({ error: error.msg });
	}
};

module.exports = getCountryByName;
