const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DayOfWeek = require('../Models/DayOfWeek');


var DaysHoursSchema = new Schema({
    
     
    day_of_week: [ {type: Schema.Types.ObjectId, ref: 'DayOfWeek', required: true} ],
    /*hour_periods: 
        {
            type: Array,
            items:
             {
                 type: String,
                 maxLength: 13
             },
             minItems: 1,
             required: true

        } */
        
          
});
let vare = Object.assign(DaysHoursSchema.statics, {
    DayOfWeek,    
  });

module.exports = mongoose.model('DaysHours', DaysHoursSchema);