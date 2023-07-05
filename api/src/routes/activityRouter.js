const { Router } = require("express");
const postActivity = require('../controllers/postActivity')
const getAllActivities = require('../controllers/getAllActivities')
const deleteActivity=require('../controllers/deleteActivity')


const activityRouter = Router();

activityRouter.get("/", getAllActivities);
activityRouter.post("/", postActivity)
activityRouter.delete("/:name",deleteActivity)
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
