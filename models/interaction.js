const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InteractionsSchema = new Schema({
 cat_id: String,
 casts_likes: [String],
 cats_unlikes: [String],
 cats_matches: [String],  
})

const Interaction = mongoose.model('cats', CatSchema)

module.exports = Interaction 
