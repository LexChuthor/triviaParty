var db = require("../models");

module.exports = function (app) {
  // Load index page
  // app.get("/", function (req, res) {
  //   db.Question.findAll({}).then(function (dbQuestions) {
  //     res.render("index", {

  //       msg: "Trivia Party!",
  //       examples: dbQuestions
  //     });
  //   });
  // });

  app.get("/", function (req, res) {
    db.Category.findAll({}).then(function (dbCategories) {
      console.log(JSON.stringify(dbCategories, null, 2));
      var randomCats = [];
      var randomNums = [];
      while(randomCats.length < 9){
        randomNum = Math.floor((Math.random() * 14) + 1);

        if (!randomNums.includes(randomNum)) {
          randomNums.push(randomNum);
          var random = dbCategories[randomNum];
          randomCats.push(
            {
              id: random.dataValues.id,
              category: random.dataValues.category_name,
              img: random.dataValues.image
            });
        }
      }
      console.log(randomCats);

      var array1 = [randomCats[0], randomCats[1], randomCats[2]];
      var array2 = [randomCats[3], randomCats[4], randomCats[5]];
      var array3 = [randomCats[6], randomCats[7], randomCats[8]];
      var arrays = {topRow: array1, middleRow: array2, bottomRow: array3};
      console.log(arrays);

      res.render("index", arrays);

    })
  });

  app.get("/category/:id", function(req, res) {
    db.Question.findAll({
      where: {
        CategoryId: req.params.id
      }
    }).then(function (dbQuestions) {
      console.log(JSON.stringify(dbQuestions, null, 2));

      var randomQs = [];
      var randomNums = [];
      var questionNum = 1;
      while(randomQs.length < 5){
        randomNum = Math.floor((Math.random() * 5) + 1);

        if (!randomNums.includes(randomNum)) {
          randomNums.push(randomNum);
          var random = dbQuestions[randomNum];
          randomQs.push(
            {
              id: random.id,
              question: random.text,
              answer1: random.answer1,
              answer2: random.answer2,
              answer3: random.answer3,
              answer4: random.answer4,
              correctAnswer: random.correctAnswer,
              questionNumber: questionNum
            });
            questionNum++;
        }
      }
      console.log(randomQs);
      res.render("category", {questions: randomQs});
    });
    
   
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Question.findOne({ where: { id: req.params.id } }).then(function (
      dbQuestion
    ) {
      res.render("example", {
        example: dbQuestion
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
