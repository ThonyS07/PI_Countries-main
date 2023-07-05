const {Country,Activity} = require("../db");

const getCountryById = async (req, res) => {
	const { id } = req.params;
	try {
		const countId = id.toUpperCase();
		console.log(countId);
		const country = await Country.findByPk(countId,{
			
			include: [
				{
					model: Activity,
					attributes: ["name", "difficulty", "duration", "season"],
					through: { attributes: [] },
				},
			],
		});
		
		console.log(country)
		
		!country
			? res.status(404).json({msg:"No se encontró el pais" })
			: res.status(200).json(country);
	
	} catch (error) {
		res.status(500).json({ error: 'Error interno del servidor'});
	}

	   

}

module.exports = getCountryById;