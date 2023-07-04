const {Country} = require("../db")
const loadDb =require('../controllers/loadDb')

const getAllCountries = async (req, res) => {
	try {
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
		
	} catch (error) {
		res.status(500).send({ error: error.msg });
	}
};



module.exports = getAllCountries;