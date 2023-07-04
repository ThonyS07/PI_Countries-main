const Country=require('../models/Country')

const getAllCountriesByDb = async () => {
	let countries = await Country.findAll();
	return countries;
};

module.exports = getAllCountriesByDb;
