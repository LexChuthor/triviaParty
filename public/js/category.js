//When document first loads
$(document).ready(function () {
 
  console.log(sessionStorage.getItem("player"));
  console.log(sessionStorage.getItem("difficulty"));

  //The current player's name is displayed at the top of the page
  $(".Player1").text(sessionStorage.getItem("player"));
  //If there is no stored score, it is displayed as 0; otherwise, the score shows from sessionStorage
  if (sessionStorage.getItem("score") === null) {
    $("#score1").text(": 0");
  } else {
    $("#score1").text(": " + sessionStorage.getItem("score"));
  }
});

//Creates variable for that particular category's number of answered questions, which is kept in sessionStorage
var name = $(".currentCat").text() + "Answered";

//When a question circle is clicked
$(".question").on("click", function () {
  //The category page is hidden and replaced with the questionPage
  $("#categoryPage").hide();
  $("#questionPage").show();

  //The id of that specific question is grabbed from the question circle and the difficulty level is grabbed from sessionStorage
  var qID = $(this).data("id");
  var difficulty = sessionStorage.getItem("difficulty");
  console.log("Difficulty: " + difficulty);
  console.log("qID: " + qID);

  //Get call returns all the information for that particular question
  $.get("/api/questions/" + difficulty + "/" + qID, function (response) {
    console.log(response);
    console.log(response.text);
    //Question information is displayed on page and stored as data values
    $("#questionText").text(response.text);
    $(".option1").attr("value", response.answer1);
    $(".option2").attr("value", response.answer2);
    $(".option3").attr("value", response.answer3);
    $(".option4").attr("value", response.answer4);

    $("#option1").text(response.answer1);
    $("#option2").text(response.answer2);
    $("#option3").text(response.answer3);
    $("#option4").text(response.answer4);
    $(".submit").attr("data-id", qID);

  });
});

//Variable grabs how many questions have been answered in that category
var qAnswered = sessionStorage.getItem(name);

//When submit button is clicked
$(document).on("click", ".submit", function (event) {
  event.preventDefault();
  //The current question's id is grabbed from submit button and the difficulty level from sessionStorage
  var qID = $(this).data("id");
  var difficulty = sessionStorage.getItem("difficulty");
  //Number of questions answered from that category increases by 1
  qAnswered++;
  console.log("qID: " + qID);

  //Get call returns information for that question
  $.get("/api/questions/" + difficulty + "/" + qID, function (response) {
    console.log("Value: " + $("input[name=choices]:checked").val());
    console.log("Answer: " + response.correctAnswer);
    //If chosen answer is same as the correctAnswer from the database
    if ($("input[name=choices]:checked").val() === response.correctAnswer) {
      //Congratulatory message and correct answer appear in answer modal, which is triggered in the HTML file
      $(".answerTitle").text("Congratulations!");
      $(".answerBody").text(`${response.correctAnswer} was the correct answer!`);

      //Score is grabbed from sessionStorage, increased by 5 points, and restored in sessionStorage
      var score = sessionStorage.getItem("score");
      if (score === null) {
        score = 0;
      }
      score = parseInt(score);
      score += 5;
      sessionStorage.setItem("score", score.toString());
      
    } else {
      //If chosen answer is wrong, the answer modal shows a "Sorry" message and the correct answer
      $(".answerTitle").text("Sorry!");
      $(".answerBody").text(`The correct answer was actually ${response.correctAnswer}.`);
    };

    //The radio button of the checked answer is cleared
    $("input[name=choices]:checked").prop('checked', false);
  });

  //AJAX call updates that specific question, marking it as having been answered
  $.ajax("/api/questions/" + qID, {
    type: "PUT",
    data: { answered: true }
  }).then(
    function (response) {
      console.log(response);
      //The number of questions answered in that category is stored in sessionStorage
      sessionStorage.setItem(name, qAnswered);
    });
});

//When answer modal is closed
$(".answerClose").on("click", function () {
  //If the score reaches 100 and 8 questions have been answered
  if (sessionStorage.getItem("score") == 100 && sessionStorage.getItem(name) == 8) {
    //The winner modal is displayed, congratulating the winner
    $('#winnerModal').modal({ backdrop: 'static', keyboard: false });
    $(".winnerTitle").text("That's correct! You have reached 100 points!");
    $(".winnerBody").text("You may continue to play, or save your winning score now!");
    //When winner modal is closed, the page returns to the index page
    $(".winnerClose").on("click", function () {
      window.location.href = "/";
    })
    //If the score is just at 100
  } else if (sessionStorage.getItem("score") == 100) {
    //The winner modal is displayed, congratulating the winner
    $('#winnerModal').modal({ backdrop: 'static', keyboard: false });
    $(".winnerTitle").text("Winner! You just reached 100 points!");
    $(".winnerBody").text("You may continue to play, or save your winning score now!");
    //When winner modal is closed, the category page is reloaded
    $(".winnerClose").on("click", function () {
      location.reload();
    })
    //If the 8 questions in that category have been answered, the page returns to the index page
  } else if (sessionStorage.getItem(name) == 8) {
    window.location.href = "/";
    //Otherwise, the page is simply reloaded
  } else {
    location.reload();
  }
});

// $(".answerClose").on("click", function () {
//   //$("#categoryPage").show();
//   //$("#questionPage").hide();
//   if (sessionStorage.getItem(name) < 8) {
//     location.reload();
//   } else {
//     window.location.href = "/";
//   }
// });

//When back button is pressed, the page returns to the index page
$("#back").on("click", function (event) {
  event.preventDefault();
  window.location.href = "/";
});

//When the pointsModal is closed, the page reloads
$(".pointsClose").on("click", function () {
  location.reload();
});

//When high score submit button is clicked
$(document).on("click", ".submitHighScore", function () {
  //The pointsModal is displayed, such that only clicking the close button can close it
  $('#pointsModal').modal({ backdrop: 'static', keyboard: false });

  //AJAX PUT cal update the current player's high score in the database
  var id = sessionStorage.getItem("playerID");
  $.ajax({
    method: "PUT",
    url: "/api/player/" + id,
    data: { "highScore": sessionStorage.getItem("score") }
  });
  
  //"Thank you" message appears in modal, while submit button is hidden
  $(".pointsBody").text("Thank you for submitting your high score!");
  $(".winnerBody").text("Thank you for submitting your high score!");
  $("#submitHighScoreModal").hide();
});