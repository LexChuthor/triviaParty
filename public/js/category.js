$(document).ready(function () {

  console.log(sessionStorage.getItem("player"));
  console.log(sessionStorage.getItem("difficulty"));
  $(".Player1").text(sessionStorage.getItem("player"));
  if (sessionStorage.getItem("score") === null) {
    $("#score1").text(": 0");
  } else {
    $("#score1").text(": " + sessionStorage.getItem("score"));
    if (parseInt(sessionStorage.getItem("score")) === 100) {

    }
  }
});

var name = $(".currentCat").text() + "Answered";

$(".question").on("click", function () {
  $("#categoryPage").hide();
  $("#questionPage").show();

  var qID = $(this).data("id");
  var difficulty = sessionStorage.getItem("difficulty");
  console.log("Difficulty: " + difficulty);
  console.log("qID: " + qID);


  $.get("/api/questions/" + difficulty + "/" + qID, function (response) {
    console.log(response);
    console.log(response.text);
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

var qAnswered = sessionStorage.getItem(name);

$(document).on("click", ".submit", function (event) {
  event.preventDefault();
  var qID = $(this).data("id");
  var difficulty = sessionStorage.getItem("difficulty");
  qAnswered++;
  console.log("qID: " + qID);


  $.get("/api/questions/" + difficulty + "/" + qID, function (response) {
    console.log("Value: " + $("input[name=choices]:checked").val());
    console.log("Answer: " + response.correctAnswer);
    if ($("input[name=choices]:checked").val() === response.correctAnswer) {
      $(".answerTitle").text("Congratulations!");
      $(".answerBody").text(`${response.correctAnswer} was the correct answer!`);
      var score = sessionStorage.getItem("score");
      if (score === null) {
        score = 0;
      }
      score = parseInt(score);
      score += 100;
      sessionStorage.setItem("score", score.toString());


    } else {
      $(".answerTitle").text("Sorry!");
      $(".answerBody").text(`The correct answer was actually ${response.correctAnswer}.`);
    };
    $("input[name=choices]:checked").prop('checked', false);


  });

  $.ajax("/api/questions/" + qID, {
    type: "PUT",
    data: { answered: true }
  }).then(
    function (response) {
      console.log(response);
      sessionStorage.setItem(name, qAnswered);
    });
});

$(".answerClose").on("click", function () {
  if (sessionStorage.getItem("score") == 200 && sessionStorage.getItem(name) == 8) {

    $('#winnerModal').modal({ backdrop: 'static', keyboard: false });
    $(".winnerTitle").text("That's correct! You have reached 100 points!");
    $(".winnerBody").text("You may continue to play, or save your winning score now!");

    $(".winnerClose").on("click", function () {
      window.location.href = "/";
    })

  } else if (sessionStorage.getItem("score") == 200) {
    $('#winnerModal').modal({ backdrop: 'static', keyboard: false });
    $(".winnerTitle").text("Winner! You just reached 100 points!");
    $(".winnerBody").text("You may continue to play, or save your winning score now!");

    $(".winnerClose").on("click", function () {
      location.reload();
    })
  } else if (sessionStorage.getItem(name) == 8) {
    window.location.href = "/";
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


$("#back").on("click", function (event) {
  event.preventDefault();
  window.location.href = "/";
});

$(".pointsClose").on("click", function () {
  location.reload();
})

$(document).on("click", ".submitHighScore", function () {
  $('#pointsModal').modal({ backdrop: 'static', keyboard: false });
  var id = sessionStorage.getItem("playerID");
  $.ajax({
    method: "PUT",
    url: "/api/player/" + id,
    data: { "highScore": sessionStorage.getItem("score") }
  });
  $(".pointsBody").text("Thank you for submitting your high score!");
  $(".winnerBody").text("Thank you for submitting your high score!");
  $("#submitHighScoreModal").hide();
});