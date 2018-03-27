const router = require("express").Router();
const billsControllerbooksController = require("../../controllers/billsController");

// Matches with "/api/books"
router.route("/")
  .get(billsController.findAll)
  .post(billsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(billsController.findById)
  .put(billsController.update)
  .delete(billsController.remove);

module.exports = router;
