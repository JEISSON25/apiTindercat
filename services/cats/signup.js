const CatModel = require('../../models/cat')
const signup = async (catData) => {
  // TODO
 const response = await CatModel(catData).save()
  return { status: 1, response}
}

module.exports = signup
