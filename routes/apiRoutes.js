var express = require("express");

var articlesController = require("../controllers/articlesController");

var router = new express.Router();

// Get all saved-articles (or optionally a specific article with an id)
router.get("/articles/:id?", articlesController.index);
// Create a new quote using data passed in req.body
router.post("/articles", articlesController.create);
// Update an existing quote with a speicified id param, using data in req.body
//router.patch("/quotes/:id", articlesController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/articles/:id", articlesController.destroy);

module.exports = router;