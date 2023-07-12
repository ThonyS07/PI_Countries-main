const { Router } = require("express");
const getCountryByName = require("../controllers/getCountryByName")
const getCountryById = require("../controllers/getCountryById")
const getAllCountries= require("../controllers/getAllCountries")

const countryRouter = Router();

countryRouter.get("/", getCountryByName);
countryRouter.get("/all", getAllCountries);
countryRouter.get("/:id", getCountryById);


module.exports = countryRouter;
