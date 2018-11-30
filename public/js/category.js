$(document).ready(function () {

  console.log(sessionStorage.getItem("player"));
  console.log(sessionStorage.getItem("difficulty"));
  $(".Player1").text(sessionStorage.getItem("player"));
  if (sessionStorage.getItem("score") === null) {
    $("#score1").text(": 0");
  } else {
    $("#score1").text(": " +sessionStorage.getItem("score"));
  }
});

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


$(document).on("click", ".submit", function (event) {
  event.preventDefault();
  var qID = $(this).data("id");
  var difficulty = sessionStorage.getItem("difficulty");
  console.log("qID: " + qID);
  $('#answerModal').modal({ backdrop: 'static', keyboard: false });

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
      score += 5;
      sessionStorage.setItem("score", score);
    } else {
      $(".answerTitle").text("Sorry!");
      $(".answerBody").text(`The correct answer was actually ${response.correctAnswer}.`);
    };
    $("input[name=choices]:checked").prop('checked', false);
    $(".submitRow").empty();
    $(".submitRow").append("<button class='submit' type='submit'>Submit</button>");
  })

  $.ajax("/api/questions/" + qID, {
    type: "PUT",
    data: { answered: true }
  }).then(
    function (response) {
      console.log(response);
    });

  $(".answerClose").on("click", function () {
    $("#categoryPage").show();
    $("#questionPage").hide();
    location.reload();
  });

});
