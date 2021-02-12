const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RatingSchema = new Schema({
    ranking: {type: Number, required: true}
    
});

module.exports = mongoose.model('Rating', RatingSchema);