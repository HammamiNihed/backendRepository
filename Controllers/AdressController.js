const Adress  = require('../Models/Adress');

exports.adress_create = function (req, res){
let adress = new Adress({
    ...req.body
  });

  adress.save()
  .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Adress created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.adress_details = function (req, res) {
  Adress.find()
        .sort({ country: -1 })
        .then((adresses) => {
          res.status(200).send(adresses);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error Occured",
          });
        });
};
