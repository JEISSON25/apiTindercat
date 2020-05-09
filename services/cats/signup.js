const CatModel = require('../../models/cat')
<<<<<<< HEAD
const signup = async (catData) => {
  // TODO
 const response = await CatModel(catData).save()
  return { status: 1, response}
=======

const signup = async (catData) => {
  try {
    const response = await CatModel(catData).save()
    return { status: 1, response }
  } catch (err) {
    return { status: 2, msg: 'Error saving document' }
  }
>>>>>>> 2aaa5696a83cdac87952b8fdb6044f4510b1c0e0
}

module.exports = signup
