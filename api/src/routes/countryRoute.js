const { Router } = require("express");
const getCountryByName = require("../controllers/getCountryByName")
const getCountryById = require("../controllers/getCountryById")

const countryRouter = Router();

countryRouter.get("/", getCountryByName);
countryRouter.get("/:id", getCountryById);


module.exports = countryRouter;
