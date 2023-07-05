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
					// name: { [Op.ilike]: `%${name}%` },
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












    // try {
    //     const { name } = req.query;

    //     if (name) {
    //         const countries = await Country.findAll({
    //             where: {
    //                 name: {
    //                     [Op.iLike]: `%${name}%`
    //                 }
    //             },
    //             include: Activity
    //         })

    //         if (countries.length === 0) {
    //             return res.status(404).json({
    //                 msg: "País no encontrado"
    //             })
    //         }

    //         res.status(200).json(countries)
    //     }
    //     else {
    //         const countries = await Country.findAll({
    //             include: {
    //                 model: Activity,
    //                 attributes: ["name"]
    //             }
    //         })
    //         res.status(200).json(countries)
    //     }
    // } catch (error) {
	// 	res.status(404).send({ error: error.msg });
	// }
}




// 	try {
// 		const { name } = req.query;
// 		const countries = await Country.findAll({include:Activity});
// 		if (name) {
// 			const countryByName = countries.filter((count) =>
// 				count.name.toLowerCase().startsWith(name.toLowerCase())
// 			);
// 			countryByName.length
// 				? res.json(countryByName)
// 				: res.status(404).send({ msg: "No se encontró el país solicitado" });
// 		}
// 		res.status(200).json(countries);
// 	} catch (error) {
// 		res.status(404).send({ error: error.msg });
// 	}
// };

module.exports = getCountryByName;