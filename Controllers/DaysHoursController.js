const DaysHours = require('../Models/DaysHours');
const DayOfWeek = require('../Models/DayOfWeek')
exports.dayshours_create = function (req, res){

  
    let days = new DaysHours({
     
    });

    days.save().then(result => {
        
         console.log(result);  
           res.json({
              message: "dayshours added",
              days
           });
  
        }) 
        
      }
       