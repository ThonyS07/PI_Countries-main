const {Country,Activity} = require("../db");

const getCountryById = async (req, res) => {
	const { id } = req.params;
	try {
		const countId= id.toUpperCase()
		const country = await Country.findAll({
			where: {
				id: countId,
			},
			include: [
				{
					model: Activity,
					attributes: ["name", "difficulty", "duration", "season"],
					through: { attributes: [] },
				},
			],
		});
		if (country) {
			return res.status(200).json(country);
		} else {
			return res.status(404).json({ msg: "No se encontró el pais" });
		}
	} catch (error) {
		res.status(404).send(error.msg);
	}








	// try {
	// 	const { id } = req.params;

	// 	const existe = await Country.findAll({
	// 		where: {
	// 			id: id,
	// 		},
	// 		include: Activity,
	// 	});

	// 	if (existe) {
	// 		return res.json(existe);
	// 	} else
	// 		return res.status(404).json({
	// 			msg: "País no encontrado",
	// 		});
	// } catch (error) {
	// 	res.json(error);
	// }


	
	// const { id } = req.params;
	// let countries;

	// try {
	// 	if (id.length = 3) {
	// 		countries = await Country.findAll({ where:{ id: id },  /*include: Activity */});

	// 		countries = {
	// 			id: countries.id,
	// 			name: countries.name,
	// 			flagImg: countries.image,
	// 			continent: countries.continent,
	// 			capital: countries.capital,
	// 			subregion: countries.subregion,
	// 			area: countries.area,
	// 			population: countries.population,
	// 			// activities: countries.activities.map((e) => {
	// 			// 	return {
	// 			// 		id: e.id,
	// 			// 		name: e.name,
	// 			// 		difficulty: e.difficulty,
	// 			// 		duration: e.duration,
	// 			// 		season: e.season,
	// 			// 	};
	// 			// }),
	// 		};
	// 	}
	// 	res.status(200).json(countries);
	// } catch (error) {
	// 	next(error);
	// }
};



module.exports = getCountryById;
// async function GetCountryId(req, res) {
// 	try {
// 		const idpais = req.params.id.toUpperCase();
// 		// console.log(idpais)
// 		const country = await Country.findOne({
// 			where: {
// 				id: idpais,
// 			},
// 			include: Activity,
// 		});

// 		return res.json(country);
// 	} catch (error) {
// 		res.json(error);
// 	}
// }
