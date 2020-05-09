const InterestModel = require("../../models/interest");

const addInterest = async (interest) => {
  try {
    const response = await InterestModel(interest).save();
    return { status: 1, response };
  } catch (err) {
    return { status: 2, msg: "Error saving document" };
  }
};

module.exports = addInterest;
