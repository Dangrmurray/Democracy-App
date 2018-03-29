const db = require('../models/bill.js');

// Find All The Bills
module.exports = {
  findAll: function(req, res) {
    console.log("Find All Bills");
    db.Bill
      .find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

// Add New Bills to DB
  create: function(req, res) {
    console.log("Create Bill");
    db.Bill
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Find Individual Bill by ID
  findById: function(req, res) {
    console.log("Find Bill By DB-ID");
    db.Bill
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Update Bill - mainly with new vote count
  update: function(req, res) {
    console.log("Update Bills");
    db.Bill
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Delete Bills - Wont be doing this.
  remove: function(req, res) {
    console.log("Delete Bills - not a thing");
    db.Bill
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
