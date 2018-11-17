var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Question.findAll({}).then(function(dbQuestions) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbQuestions
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Question.findOne({ where: { id: req.params.id } }).then(function(
      dbQuestion
    ) {
      res.render("example", {
        example: dbQuestion
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
