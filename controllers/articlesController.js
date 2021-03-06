var Article = require("../models/article");

module.exports = {
  // This method handles retrieving articles from the db
  index: function(req, res) {
    var query;
    if (req.query) {
      query = req.query;
    }
    else {
      query = req.params.id ? { _id: req.params.id } : {};
    }
    Article.find(query)
      .then(function(doc) {
        res.json(doc);
      }).catch(function(err) {
        res.json(err);
      });
  },
  // This method handles creating new quotes
  create: function(req, res) {
  	console.log("create: ", req);
    Article.create(req.body.article).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  // This method handles updating quotes
  // update: function(req, res) {
  //   Quote.update({
  //     _id: req.params.id
  //   },
  //     req.body
  //   ).then(function(doc) {
  //     res.json(doc);
  //   }).catch(function(err) {
  //     res.json(err);
  //   });
  // },
  // This method handles deleting quotes
  destroy: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
