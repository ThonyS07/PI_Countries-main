const axios = require("axios");
const Country = require("../models/Country");

const loadDb = async (req, res) => {
	try {
		{
			const AllCountApi = await axios.get('https://restcountries.com/v3/all')
			const ModelCountries = AllCountApi.data.map((count) => {
				return {
					countryId: count.cca3,
					name: count.name.common,
					flagImg: count.flags[1],
					continent: count.continents[0],
					capital: count.capital
						? count.capital[0]
						: "Este pais no tiene capital",
					subregion: count.subregion,
					area: count.area,
					population: count.population,
				};
			});
			
			// await Country.bulkCreate(ModelCountries)
			ModelCountries.forEach(async (e) => {
				await Country.findOrCreate({
					where: {
						countryId: e.CountryId,
						name: e.name,
						flagImg: e.flagImg,
						continent: e.continent,
						capital: e.capital,
						subregion: e.subregion,
						area: e.area,
						population: e.population,
					},
				});
			});
		}
		console.log('DB success')
	} catch (error) {
		throw (error);
	}
}
	
	
	// console.log("DB success");


const getAllCountriesByDb = async function () {
	let countries = await Country.findAll();
	return countries;
};

const getAllCountries = async function () {
	let dbCountries = await getAllCountriesByDb();
	if (dbCountries.length) {
		return dbCountries;
	}
	await getAllCountriesByRestcountries();
	dbCountries = await getAllCountriesByDb();
	return dbCountries;
};

const getCountriesWithTouristActivities = async function (id) {
	const touristActivities = await Country.findByPk(id, {
		include: {
			model: Activity,
		},
	});
	return touristActivities;
};

const createtNewActivity = async function (value) {
	const searchingActivity = await Activity.findAll({
		where: {
			name: value.name.toUpperCase(),
		},
	});
	if (searchingActivity.length)
		throw new Error("Esta actividad turistica ya existe");
	const newActivity = await Activity.create(value);
	const countriesByActivities = await Country.findAll({
		where: {
			name: value.countries,
		},
	});
	newActivity.addCountries(countriesByActivities);
	return newActivity;
};

const getAllActivities = async function () {
	const activities = await Activity.findAll({ include: { model: Country } });
	return activities;
};

const deleteActivity = async function (name) {
	console.log(name);
	await Activity.destroy({ where: { name } });
};

module.exports = {loadDb,
	deleteActivity,
	getAllCountries,
	getCountriesWithTouristActivities,
	createtNewActivity,
	getAllActivities,
};


