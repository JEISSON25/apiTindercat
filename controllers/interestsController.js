const AddInterestService = require("../services/interests/add_interes");
const GetllService = require("../services/interests/getAll");

const getAll = async (req, res) => {
  const response = await GetllService();
  res.send("Get all");
};

const add = async (req, res) => {
  const interests = req.body;
  const response = await AddInterestService(interests);
  res.json(response);
};

module.exports = {
  getAll,
  add,
};
