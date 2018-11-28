$(document).ready(function() {
  console.log(sessionStorage.getItem("player"));
  $(".Player1").text(sessionStorage.getItem("player"));
  $("#score1").text(sessionStorage.getItem("score"));
});

$(".question").on("click", function() {
  $("#categoryPage").hide();
  $("#questionPage").show();
});

$(".category").on("click", function()
{
});
