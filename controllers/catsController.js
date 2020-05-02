const { authentication } = require('./../services/catsService')

const login = (req, res) => {
  const { email, password } = req.query
  const response = authentication(email, password)
  res.json(response)
}

const signup = (req, res) => {
  res.send('signup ctrl')
}

const catList = (req, res) => {
  res.send('catList ctrl')
}

const like = (req, res) => {
  res.send('like')
}
const unlike = (req, res) => {
  res.send('unlike')
}

const addInterest = (req, res) =>{
  res.send('add interest')
}
const removeInterest = (req, res) =>{
  res.send('remove interest')
}
const updatePreferences = (req, res) =>{
  res.send('update preferences')
}

module.exports = {
  login,
  signup,
  catList,
  like,
  unlike,
  addInterest,
  removeInterest,
  updatePreferences
}
