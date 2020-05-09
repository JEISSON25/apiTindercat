const InterestModel = require("../../models/interest");

const GetAll = async () => {
  try {
    const response = await InterestModel.find().pretty();
    return { status: 1, response };
  } catch (err) {
    return { status: 2, msg: "Error saving document" };
  }
};

module.exports = GetAll;
