const express = require("express");
// this file handles the endpoint management
// FLOW IS :
//  retrieve data from DB - > add to model --> controllers -> router
const { httpGetAllPlanets } = require("./planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/", httpGetAllPlanets);

module.exports = planetsRouter;
