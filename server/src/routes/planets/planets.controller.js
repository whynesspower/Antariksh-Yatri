const { getAllPlanets } = require("../../models/planets.model");
// Here we get the function which get all the planets from the database
// since a model controls the functions dealing with the database,
// we are impporting from the planets.model

async function httpGetAllPlanets(req, res) {
  return res.status(200).json(await getAllPlanets());
}
module.exports = {
  httpGetAllPlanets,
};
