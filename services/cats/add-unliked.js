const CatModel = require("../../models/cat");

const addUnLiked = async (catId, catIdLiked) => {
  try {
    const cat = await CatModel.findById(catId);
    cat.cats_unlikes.push(catIdLiked);
    cat.save();
    return { status: 1, cat };
  } catch (err) {
    return { status: 2, msg: "Liked" };
  }
};

module.exports = addUnLiked;
