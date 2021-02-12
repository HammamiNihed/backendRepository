const Contact  = require('../Models/Contact');
const Adress  = require('../Models/Adress');
const mongoose = require('mongoose');

exports.contact_create = function (req, res){

            let contact = new Contact({
            _id: new mongoose.Types.ObjectId(),
            type: req.body.type, 
            adress: req.body.adress,
            email: req.body.email,
            mobile_phone_number: req.body.mobile_phone_number,
            office_phone_number: req.body.office_phone_number,
            fax_number: req.body.fax_number 
            });

            contact.save().then(result => {
                Contact
                   .populate(contact, { path: "adress" })
                   .then(contact => {
                    console.log(result);  
                      res.json({
                         message: "Contact added",
                         contact
                      });
             
                   })
             });
};

exports.contact_details = function (req, res) {
    Contact.find()
          .sort({ type: -1 })
          .then((contacts) => {
            res.status(200).send(contacts);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || "Error Occured",
            });
          });
  };




