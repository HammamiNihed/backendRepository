const Rating  = require('../Models/Rating');

exports.rating_create = function (req, res){
let rating = new Rating({
    ...req.body
  });

  rating.save()
  .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Rating created"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.rating_details = function (req, res) {
  Rating.find()
        .sort({ ranking: -1 })
        .then((ratings) => {
          res.status(200).send(ratings);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error Occured",
          });
        });
};

exports.rating_update = function (req, res) {
    Rating.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, rating) {
        if (err) return next(err);
        res.send('Rating udpated.');
    });
};
