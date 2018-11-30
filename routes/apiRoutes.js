var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/categories", function(req, res) {
    db.Category.findAll({
      include: [db.Question]
    }).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  app.get("/api/questions/:difficulty/:id", function(req, res) {
    db.Question.findOne({
      where: {
        id: req.params.id,
        difficulty: req.params.difficulty
      }
    })
    .then(function(dbQuestion){
      res.json(dbQuestion);
    });
  });

  app.put("/api/questions/:id", function(req, res) {
    db.Question.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Question.create(req.body).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Question.destroy({ where: { id: req.params.id } }).then(function(
      dbQuestion
    ) {
      res.json(dbQuestion);
    });
  });

  app.post("/api/player", function(req, res) {
    db.Player.create(req.body).then(function(player) {
      res.json(player);
    });
  });

  app.put("/api/player", function(req, res) {
    db.Player.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(playerUp) {
      res.json(playerUp);
    });
  });
};


