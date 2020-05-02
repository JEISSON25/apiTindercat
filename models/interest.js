const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterestSchema = new Schema({
  interests: String,
  
})

const Interest = mongoose.model('interest', CatSchema)

module.exports = Interest
