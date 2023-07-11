const { Op, Country, Activity } = require("../db");



const getCountryByName = async (req, res) => {
	const { name } = req.query;
	const firstMayus = name[0].toUpperCase()
	const endName = name.slice(1);
	const findName = firstMayus + endName;
	console.log(findName)
	
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
			const country = await Country.findOne({
				where: {
					name: findName,
				},
				include: [
					{
						model: Activity,
						attributes: ["name", "difficulty", "duration", "season"],
						through: { attributes: [] },
					},
				],
			});
			console.log(country)
			country
				? res.status(200).json(country)
				: res.status(404).json({ msg: "No se encontró el pais" });
		
		}
	} catch (error) {
		return res.status(404).send({ error: error.msg });
	}
}

module.exports = getCountryByName;