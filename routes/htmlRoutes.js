var db = require("../models");

module.exports = function (app) {

  //HTML route for main index page
  app.get("/", function (req, res) {

    var difficulty;
    //Grabs highest player id in the player table in order to start the game with the current/most recent player
    db.Player.max("id").then(function (currentPlayer) {
      console.log(currentPlayer);
      var currentPlayerID = currentPlayer;

      //Finds that most recent player with their id
      db.Player.findOne({
        where: {
          id: currentPlayerID
        }
      })
        .then(function (dbPlayer) {
          console.log(JSON.stringify(dbPlayer, null, 2));
          difficulty = dbPlayer.difficulty

          //Finds all categories
          db.Category.findAll({}).then(function (dbCategories) {
            console.log(JSON.stringify(dbCategories, null, 2));
            var randomCats = [];
            var randomNums = [];
            //Loop runs until randomCats has 9 categories in it
            while (randomCats.length < 9) {
              //Generates random number between 0 and 14
              var randomNum = Math.floor((Math.random() * 15));
              //If the random number hasn't already been generated
              if (!randomNums.includes(randomNum)) {
                //The random number is added to randomNums array to keep track of them
                randomNums.push(randomNum);
                //A random category is assigned to the random variable
                var random = dbCategories[randomNum];
                //That random category's id, name, image, and the current player's difficulty level are pushed to the randomCats array
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

            //Three arrays of three categories, corresponding to the category rows in index.handlebars
            var array1 = [randomCats[0], randomCats[1], randomCats[2]];
            var array2 = [randomCats[3], randomCats[4], randomCats[5]];
            var array3 = [randomCats[6], randomCats[7], randomCats[8]];
            var arrays = { topRow: array1, middleRow: array2, bottomRow: array3 };
            console.log(arrays);

            //The index.handlebars file is rendered with the object of arrays
            res.render("index", arrays);
          })
        });
    });
  });

  //HTML route for each category page
  app.get("/category/:difficulty/:id", function (req, res) {
    //Finds all questions in the current category and of the current difficulty level
    db.Question.findAll({
      where: {
        CategoryId: req.params.id,
        difficulty: req.params.difficulty
      }
    }).then(function (dbQuestions) {
      console.log(JSON.stringify(dbQuestions, null, 2));

      //Array for keeping track of questions yet to be answered
      var unansweredQuestions = [];
      //Loops through all the questions, adding them to the unanswered Questions array if their answered value is false
      for (var i = 0; i < dbQuestions.length; i++) {
        if (!dbQuestions[i].answered) {
          unansweredQuestions.push(dbQuestions[i]);
        }
      };

      //Finds the current category in the database
      db.Category.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (dbCategory) {
        console.log(JSON.stringify(dbCategory, null, 2));

        var randomNum;
        var randomQs = [];
        var randomNums = [];
        //Number for display on the page as it increases (Question 1, Question 2, etc.)
        var questionNum = 1;
        console.log("Number of Questions Left: " + unansweredQuestions.length);

        //If there are more than 5 questions left to be answered
        if (unansweredQuestions.length > 5) {
          //While loops runs until the randomQs array has five questions in it
          while (randomQs.length < 5) {
            //Random number generated between 0 and the number of unanswered questions
            randomNum = Math.floor(Math.random() * unansweredQuestions.length);
            console.log("The first if is firing.");
            console.log(randomNums);

            //If the randomly picked question has not been answered
            if (!dbQuestions[randomNum].answered
              //&& !randomNums.includes(randomNum)
            ) {
              //In order to fix a bug, this array of random numbers doesn't really apply anymore
              randomNums.push(randomNum);
              //A random unanswered question is assigned to the random variable
              var random = unansweredQuestions[randomNum];
              //An object is pushed to the randomQs array with all the information needed to display the question, answer choices, the increasing question number (Question 1, Question 2, etc.), and the category image to change the background image
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
          //If the number of unanswered questions is between 2 and 5
        } else if (unansweredQuestions.length <= 5 && unansweredQuestions.length > 1) {
          //While loop runs until the randomQs array has the same number of questions as the unansweredQuestions array (meaning everything that is unanswered)
          while (randomQs.length < unansweredQuestions.length) {
            //Random number generated between 0 and the number of unanswered questions
            randomNum = Math.floor(Math.random() * unansweredQuestions.length);

            console.log("The second if is firing.");
            console.log(randomNums);

            //If the randomly picked question has not been answered
            if (!unansweredQuestions[randomNum].answered
              //&& !randomNums.includes(randomNum)
            ) {
              //In order to fix a bug, this array of random numbers doesn't really apply anymore
              randomNums.push(randomNum);
              //A random unanswered question is assigned to the random variable
              var random = unansweredQuestions[randomNum];
              //An object is pushed to the randomQs array with all the information needed to display the question, answer choices, the increasing question number (Question 1, Question 2, etc.), and the category image to change the background image
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
          //If there is only one question yet to be answered
        } else if (unansweredQuestions.length === 1) {
          //That last question is assigned to a variable, and its information is pushed to the randomQs array
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

        //The category.handlebars page is rendered with all the pertinent arrays as objects
        res.render("category", { questions: randomQs, currentCat: [dbCategory.category_name], background: [dbCategory.image] });
      });
    });


  });


  //The table page is something for future development

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
