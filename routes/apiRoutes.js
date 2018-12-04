var db = require("../models");

module.exports = function(app) {
  // Get all categories from the Categories tables, including the related questions of each
  app.get("/api/categories", function(req, res) {
    db.Category.findAll({
      include: [db.Question]
    }).then(function(dbCategories) {
      res.json(dbCategories);
    });
  });

  //Gets one question from the Questions table based on the question id and difficulty level fed to it in the route
  app.get("/api/questions/:difficulty/:id", function(req, res) {
    db.Question.findOne({
      where: {
        id: req.params.id,
        difficulty: req.params.difficulty
      }
    })
    .then(function(dbQuestion){
      console.log("Question Route: ");
      res.json(dbQuestion);
    });
  });

  //Updates question record based on its id from the route
  app.put("/api/questions/:id", function(req, res) {
    db.Question.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });

  //Updates each question based on their difficulty and id number from the route
  app.put("/api/questions/:difficulty/:id", function(req, res) {
    db.Question.update(req.body, {
      where: {
        id: req.params.id,
        difficulty: req.params.difficulty
      }
    }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
  });
  
  //Gets all players from the Players table
  app.get("/api/player", function(req, res){
    db.Player.findAll({}).then(function(players){
      res.json(players);
    });
  });

  //Creates new player record in the Players table
  app.post("/api/player", function(req, res) {
    db.Player.create(req.body).then(function(player) {
      res.json(player);
    });
  });

  //Updates player record based on its id from the route
  app.put("/api/player/:id", function(req, res) {
    db.Player.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(playerUp) {
      res.json(playerUp);
    });
  });
};


// // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Question.destroy({ where: { id: req.params.id } }).then(function(
  //     dbQuestion
  //   ) {
  //     res.json(dbQuestion);
  //   });
  // });


