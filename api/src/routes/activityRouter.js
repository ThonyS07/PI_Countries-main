const { Router } = require("express");
const postActivity = require('../controllers/postActivity')

const activityRouter = Router();

// activityRouter.post("/", createNewActivity);
activityRouter.post("/", postActivity)
	// try {
	// 	const { name, difficulty, duration, season, countries } = req.body;

	// 	const newActivity = await createNewActivity({
	// 		name,
	// 		difficulty,
	// 		duration,
	// 		season,
	// 		countries,
	// 	});
	// 	res.status(200).send(newActivity);
	// } catch (error) {
	// 	res.status(400).send(error.message);
    // }
    



    
// });
// countryRouter.get("/countries/:id", getCountryById);

module.exports = activityRouter;
