const Provider  = require('../Models/Provider');


exports.provider_create = function (req, res) {
    let provider = new Provider(
        {
            ...req.body
            
        }
    );

    provider.save(function (err) {
        if (err) {
           console.log(err)
        }
        else
        res.send('Provider Created successfully')
    })
};


exports.provider_details = function (req, res) {
    Provider.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
};

exports.provider_detailsId  = function (req, res) {
  Provider.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}

exports.provider_update = function (req, res) {
  Provider.findByIdAndUpdate(req.params.id, {
  $set: req.body
}, (error, data) => {
  if (error) {
    return next(error);
    console.log(error)
  } else {
    res.json(data)
    console.log('Provider updated successfully!')
  }
})
};

exports.provider_delete = function (req, res) {
Provider.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    return next(error);
  } else {
    res.status(200).json({
      msg: data
    })
  }
})
};