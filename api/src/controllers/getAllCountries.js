const Country = require("../db")
const loadDb =require('../controllers/loadDb')

const getAllCountries = async (req, res) => {
	try {
		const countries = await Country.findAll({
			includes: Ativity}
		);
		if (!countries.length) {
			loadDb();
		}
		res.status(200).json(countries);
	} catch (error) {
		res.status(404).send({ error: error.msg });
	}
};



module.exports = getAllCountries;