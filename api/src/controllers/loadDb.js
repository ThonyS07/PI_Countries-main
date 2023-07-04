const axios = require("axios");
const {Country} = require('../db')

const loadDb = async () => {
    const DB = await Country.count();
    if (!DB) {
        axios
            .get("https://restcountries.com/v3/all")
            .then((data) => {
                data.data.forEach(async (count) => {
                    await Country.create({
                        id: count.cca3,
                        name: count.name.common,
                        flagImg: count.flags[0],
                        continent: count.continents[0],
                        capital: count.capital
                            ? count.capital[0]
                            : "El país no tiene capital",
                        subregion: !count.subregion ? "Antarctic" : count.subregion,
                        area: count.area,
                        population: count.population,
                    });
                });
			
                console.log('Creado')
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

module.exports = loadDb;