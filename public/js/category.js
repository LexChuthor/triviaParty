$(document).ready(function() {
    console.log(sessionStorage.getItem("player"));
    $(".Player1").text(sessionStorage.getItem("player"));
    $("#score1").text(sessionStorage.getItem("score"));
  });

$(".category").on("click", function() {

});

$(".question").on("click", function () {
    $("#categoryPage").hide();
    $("#questionPage").show();

    var qID = $(this).data("id");
    console.log("qID: " + qID);
  
    $.get("/api/questions/" + qID, function (response) {
          console.log(response);
        $("#questionText").text(response.text);
        $(".option1").attr("value", response.answer1);
        $(".option2").attr("value", response.answer2);
        $(".option3").attr("value", response.answer3);
        $(".option4").attr("value", response.answer4);

        $("#option1").text(response.answer1);
        $("#option2").text(response.answer2);
        $("#option3").text(response.answer3);
        $("#option4").text(response.answer4);
  
        });
  });
