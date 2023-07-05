const { Activity, Country } = require("../db");

const getAllActivities = async (req, res) => {
    try {
        
        const activities = await Activity.findAll({
            include: {
                model: Country,
                attributes: ["id"],
                through: { attributes: [] },
                },
        });
        
        !activities
            ? res.status(404).json({ msg: "No se encontró actividades" })
            : res.status(200).json(activities);
				
	
		
	} catch (error) {
		res.status(500).json({ error: "Error interno del servidor" });
	}
};

module.exports = getAllActivities;
