const { Activity, Country } = require('../db');


const postActivity = async (req, res) => {
	try {
		const { name, difficulty, duration, season, cId } = req.body;
		console.log("will add activity", req.body);

		const validateActivity = await Activity.findAll({
			where: {
				name: name.toUpperCase(),
			},
		});

		if (!name || !difficulty || !duration || !season || !cId) {
			res.status(404).json({msg:"Completa todos los campos."});
		}

		if (validateActivity.length>0) {
			res.status(404).json({msg: "Esta actividad ya existe."});
		} else {
		
			const newActivity = await Activity.create({
				name,
				difficulty,
				duration,
				season,
			});

			for (let countryId of cId) {
				await newActivity.addCountry(countryId);
			}

			res.status(200).send("Actividad creada con exito");
		}
	} catch (error) {
		
		res.status(404).send(error.msg);
	}
};

module.exports = postActivity;