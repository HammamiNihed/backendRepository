const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Days = Object.freeze({
    Mondy: 'MONDAY',
    Tuesdy: 'TUESDAY',
    Wednesday: 'WEDNESDAY',
    Thursday: 'THURSDAY',
    Friday: 'FRIDAY',
    Saturdy: 'SATURDAY',
    Sundy: 'SUNDAY'
  });
var DayOfWeekSchema = new Schema({
       
    type: String,
    enum: Object.values(Days),
    enum: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY ', 'SUNDAY']
   
});

module.exports = mongoose.model('DayOfWeek', DayOfWeekSchema);