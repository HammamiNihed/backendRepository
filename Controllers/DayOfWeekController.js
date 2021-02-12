const DayOfWeek = require('../Models/DayOfWeek')

exports.dayofweek_create = function (req, res){
  let days = new DayOfWeek({
    
  });
  days.save().then(result => {
    
        console.log(result);  
          res.json({
             message: "dayofweek added",
             days
          });
 
       });
 }




exports.dayofweek_details = function (req, res){
  
  //let weekday = DayOfWeek.schema.path('day').getDay;
 //console.log(weekday);
 DayOfWeek.find()
 .sort({ _id: -1 })
 .then((dayofweeks) => {
   res.status(200).send(dayofweeks);
 })
 .catch((err) => {
   res.status(500).send({
     message: err.message || "Error Occured",
   });
 });
};