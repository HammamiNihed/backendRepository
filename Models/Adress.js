const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdressSchema = new Schema({
    street_address: {type: String, required: true, maxlength: 1024},
    subdivision: {type: String,  required: true, maxlength: 50},
    postal_code: {type: String, required: true,  maxlength: 20},
    locality: {type: String,  required: true ,maxlength: 50},
    country: {type: String,  required: true, maxlength: 2, minlength: 2},
});


module.exports = mongoose.model('Adress', AdressSchema);