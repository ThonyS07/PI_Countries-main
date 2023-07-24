const { Router } = require("express");
const postActivity = require('../controllers/postActivity')
const getAllActivities = require('../controllers/getAllActivities')
const deleteActivity=require('../controllers/deleteActivity');



const activityRouter = Router();

activityRouter.get("/", getAllActivities);
activityRouter.post("/", postActivity)
activityRouter.delete("/:name",deleteActivity)
	

module.exports = activityRouter;
