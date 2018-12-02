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

    var difficulty;
    db.Player.max("id").then(function (currentPlayer) {
      console.log(currentPlayer);
      var currentPlayerID = currentPlayer;

      db.Player.findOne({
        where: {
          id: currentPlayerID
        }
      })
        .then(function (dbPlayer) {
          console.log(JSON.stringify(dbPlayer, null, 2));
          difficulty = dbPlayer.difficulty

          db.Category.findAll({}).then(function (dbCategories) {
            console.log(JSON.stringify(dbCategories, null, 2));
            var randomCats = [];
            var randomNums = [];
            while (randomCats.length < 9) {
              var randomNum = Math.floor((Math.random() * 15));

              if (!randomNums.includes(randomNum)) {
                randomNums.push(randomNum);
                var random = dbCategories[randomNum];
                randomCats.push(
                  {
                    id: random.dataValues.id,
                    category: random.dataValues.category_name,
                    img: random.dataValues.image,
                    diff: difficulty
                  });
              }
            }
            console.log(randomCats);

            var array1 = [randomCats[0], randomCats[1], randomCats[2]];
            var array2 = [randomCats[3], randomCats[4], randomCats[5]];
            var array3 = [randomCats[6], randomCats[7], randomCats[8]];
            var arrays = { topRow: array1, middleRow: array2, bottomRow: array3 };
            console.log(arrays);

            res.render("index", arrays);

          })

        });
    });
  });

  app.get("/category/:difficulty/:id", function (req, res) {
    db.Question.findAll({
      where: {
        CategoryId: req.params.id,
        difficulty: req.params.difficulty
      }
    }).then(function (dbQuestions) {
      console.log(JSON.stringify(dbQuestions, null, 2));
      var unansweredQuestions = [];
      for (var i = 0; i < dbQuestions.length; i++) {
        if (!dbQuestions[i].answered) {
          unansweredQuestions.push(dbQuestions[i]);
        }
      };

      db.Category.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (dbCategory) {
        console.log(JSON.stringify(dbCategory, null, 2));

        var randomNum;
        var randomQs = [];
        var randomNums = [];
        var questionNum = 1;
        console.log("Number of Questions Left: " + unansweredQuestions.length);
        if (unansweredQuestions.length > 5) {
          while (randomQs.length < 5) {
             randomNum = Math.floor(Math.random() * unansweredQuestions.length);
            console.log("The first if is firing.");
            console.log(randomNums);

            if (!dbQuestions[randomNum].answered
              //&& !randomNums.includes(randomNum)
              ) {
             
              randomNums.push(randomNum);
              var random = unansweredQuestions[randomNum];
              randomQs.push(
                {
                  id: random.id,
                  question: random.text,
                  answer1: random.answer1,
                  answer2: random.answer2,
                  answer3: random.answer3,
                  answer4: random.answer4,
                  correctAnswer: random.correctAnswer,
                  questionNumber: questionNum,
                  img: dbCategory.image
                });
              questionNum++;
            }
          }
          console.log("RandomQs");
          console.log(randomQs);
        } else if (unansweredQuestions.length <= 5 && unansweredQuestions.length > 1)  {
          while (randomQs.length < unansweredQuestions.length) {
            
            randomNum = Math.floor(Math.random() * unansweredQuestions.length);

            console.log("The second if is firing.");
            console.log(randomNums);

            if (!dbQuestions[randomNum].answered
            //&& !randomNums.includes(randomNum)
            ) {
              randomNums.push(randomNum);
              var random = unansweredQuestions[randomNum];
              randomQs.push(
                {
                  id: random.id,
                  question: random.text,
                  answer1: random.answer1,
                  answer2: random.answer2,
                  answer3: random.answer3,
                  answer4: random.answer4,
                  correctAnswer: random.correctAnswer,
                  questionNumber: questionNum,
                  img: dbCategory.image
                });
              questionNum++;
            }
          }
        } else if (unansweredQuestions.length === 1) {
          var lastQuestion = unansweredQuestions[0];
          randomQs.push(
            {
              id: lastQuestion.id,
              question: lastQuestion.text,
              answer1: lastQuestion.answer1,
              answer2: lastQuestion.answer2,
              answer3: lastQuestion.answer3,
              answer4: lastQuestion.answer4,
              correctAnswer: lastQuestion.correctAnswer,
              questionNumber: questionNum,
              img: dbCategory.image
            });
        };
        console.log(randomQs);
        res.render("category", { questions: randomQs, currentCat: [dbCategory.category_name], background: [dbCategory.image] });
      });
    });


  });


  
  // app.get("/table", function (req, res) {

  //   var questionArray = [];
  //   var QIndex = 1;
  //   var findQuestions = function () {
  //     db.Question.findAll({
  //       where: {
  //         CategoryID: QIndex
  //       }
  //     }).then(function (dbQuestions) {
        
  //       console.log("Category " + QIndex);
  //       for(var i = 0; i < dbQuestions.length; i++){
  //         questionArray.push({
  //         question: dbQuestions[i].dataValues.text,
  //         answer1: dbQuestions[i].dataValues.answer1,

  //         })
  //       }
        
  //       QIndex++;
  //       if (QIndex < 16) {
  //         findQuestions();
  //       }
  //     });
  //   }
  //   findQuestions();
  // });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
