const loginService = require("../services/cats/login");
const signupService = require("../services/cats/signup");
const addInterestService = require("../services/cats/add-interest");
const removeInterestService = require("../services/cats/remove-interest");
const updatePreferencesService = require("../services/cats/update-preferences");

const login = (req, res) => {
  const { email, password } = req.query;
  const response = loginService(email, password);
  res.json(response);
};

const signup = async (req, res) => {
  const cat = req.body;
  const response = await signupService(cat);
  res.json(response);
};

const catList = (req, res) => {
  res.send("catList ctrl");
};

const liked = (req, res) => {
  // TODO
  res.send("like");
};

const unliked = (req, res) => {
  // TODO
  res.send("unlike");
};

const addInterest = async (req, res) => {
  const { catId, interestId } = req.body;
  const response = await addInterestService(catId, interestId);
  res.json(response);
};

const removeInterest = async (req, res) => {
  const { catId, interestId } = req.body;
  const response = await removeInterestService(catId, interestId);
  res.json(response);
};

const updatePreferences = async (req, res) => {
  const { catId, preferences } = req.body;
  const response = await updatePreferencesService(catId, preferences);
  res.json(response);
};

module.exports = {
  login,
  signup,
  catList,
  liked,
  unliked,
  addInterest,
  removeInterest,
  updatePreferences,
};
