const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongodb = require('mongodb');
const { isEmail } = require('validator');
/**
 * @swagger
 * definitions:
 *  Provider: 
 *   type: object
 *   description: informations related to a provider;
 *   properties:
 *     provider_id:
 *       description: Identifier of the provider
 *       type: string
 *       maxLength: 50
 *       example: '012684khkjgugb-515'
 *     contacts:
 *       description: Information of the different types of contact of the provider.
 *       type: array
 *       items:
 *         $ref: '#/definitions/Contact'
 *     opening_days_hours:
 *       type: array
 *       items:
 *         $ref: '#/definitions/DaysHours'
 *     services:
 *       description: List of services the provider can made.
 *       type: string 
 *     is_auto_assignable:
 *       description: Indicates if the provider is eligible to automatic assignment.
 *       type: boolean
 *       example: true
 *     rating:
 *       description: The rating information of the provider.
 *       allOf:
 *         - $ref: '#/definitions/Rating'
 *   required: [provider_id,country,contacts,opening_days_hours,service,is_auto_assignable,rating]
 */

/*var ProviderSchema = new Schema({
    provider_id: {type: String, maxlength: 50},
    type: {type: String, required: true, maxlength: 100},
    contacts:[
        {type: Schema.Types.Array, ref: 'Contact'}
      ],
    opening_days_hours: [
        {type: Schema.Types.Array, ref: 'DaysHours'}
      ],
    services: {type: String, required: true},
    is_auto_assignable: {type: Boolean, required: true},
    rating: [
        {type: Schema.Types.ObjectId, ref: 'Rating'}
      ]
});


module.exports = mongoose.model('Provider', ProviderSchema);*/

var ProviderSchema = new Schema({
  provider_id: {type: mongodb.ObjectID, maxlength: 50},
  type: {type: String, required: true, maxlength: 100},

  contacts: [{
    type: Object,
    properties: {
    type: {type: String, required: true, maxlength: 100, },
    adress:
    [{
      type: Object, 
      properties:  {
          street_address: {type: String, required: true, maxlength: 1024},
          subdivision: {type: String,  required: true, maxlength: 50},
          postal_code: {type: String, required: true,  maxlength: 20},
          locality: {type: String,  required: true ,maxlength: 50},
          country: {type: String,  required: true, maxlength: 2, minlength: 2},
        },
    }],
    email: {type: String, validate: [isEmail, 'invalid email']},
    mobile_phone_number: {type: String, required: true, maxlength: 20},
    office_phone_number: {type: String, required: true, maxlength: 20},
    fax_number: {type: String, required: true, maxlength: 20},
  }}],

  opening_days_hours: [{
    type: Object,
    properties: {
    day_of_week: [{
      type: Object,
      properties: {
        day: {   
        type: String,        
        enum: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY ', 'SUNDAY']
        }
    },
    }],
    hour_periods: 
        {
            type: Array,
            items:
             {
                 type: String,
                 maxLength: 13
             },
             minItems: 1,
             required: true

        } 
  }}],

  services: {type: String},

  is_auto_assignable: {type: Boolean, required: true},

  rating: [{
    type: Object, required: true,
    properties:
    {ranking: {type: Number, required: true}}
  }],

});

module.exports = mongoose.model('Provider', ProviderSchema)