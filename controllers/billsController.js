const db = require('../models/bill.js');

// Defining methods for the billsController

// Find All The Bills
module.exports = {
  findAll: function(req, res) {
    console.log("Find All Bills");
    db.Bill
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // We Dont create Bills Here, we just vote on them.
  // create: function(req, res) {
  //   console.log("Create Bill");
  //   db.Bill
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    console.log("Find Bill By DB-ID");
    db.Bill
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Update Bills");
    db.Bill
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("Delete Bills - not a thing");
    db.Bill
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
