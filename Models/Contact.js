const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

var ContactSchema = new Schema({
    type: {type: String, required: true, maxlength: 100, },
    adress:[
        {type: Schema.Types.ObjectId, ref: 'Adress', required: true}
      ],
    email: {type: String, validate: [isEmail, 'invalid email']},
    mobile_phone_number: {type: String, required: true, maxlength: 20},
    office_phone_number: {type: String, required: true, maxlength: 20},
    fax_number: {type: String, required: true, maxlength: 20},
});


module.exports = mongoose.model('Contact', ContactSchema);