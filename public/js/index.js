//Function for displaying modal, such that it can't be closed by clicking outside the modal or hitting escape, only with the close button
function showModal() {
  $('#signInModal').modal({ backdrop: 'static', keyboard: false });
};

var difficulty;

$(document).ready(function () {
  console.log(sessionStorage.getItem("player"));

  // Shows modal after 2 Seconds
  if (sessionStorage.getItem("player") === null) {
    setTimeout(function () { showModal(); }, 2000);

    //Disables log-in button at beginning of game
    $("#log-in").prop("disabled", true);

    //In opening modal, when difficulty button is pressed
    $(".diffButton").on("click", function () {
      //Button's id (easy, medium, or hard) is attached to difficulty variable
      difficulty = $(this).children().data("id");
      //If the player has already entered their name, the log-in button is enabled
      if ($("#playerName").val()) {
        $("#log-in").prop("disabled", false);
      }
      //When a name is entered in the playerName field, the log-in button is enabled if a difficulty button has been already pressed
      $("#playerName").on("input", function () {
        if (difficulty) {
          $("#log-in").prop("disabled", false);
        }
      });
    });
    
  } else {
    //Displays stored player name at the top of the page
    $(".Player1").text(sessionStorage.getItem("player"));
    //If there is no score, then 0 is displayed
    if (sessionStorage.getItem("score") === null) {
      $("#score1").text(": 0");
    } else {
      //If there is a score in sessionStorage, it is displayed next to the player name
      $("#score1").text(":" + sessionStorage.getItem("score"));
    }
  }

  //Replaces each category's name text with the word "Completed" (thus removing link) if 8 questions have been answered in that category
  if (sessionStorage.getItem("HistoryAnswered") == 8) {
    $(".History").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("SportsAnswered") == 8) {
    $(".Sports").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("GeographyAnswered") == 8) {
    $(".Geography").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("FilmAnswered") == 8) {
    $(".Film").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("Video GamesAnswered") == 8) {
    $(".Video").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("MusicAnswered") == 8) {
    $(".Music").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("AnimalsAnswered") == 8) {
    $(".Animals").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("TechnologyAnswered") == 8) {
    $(".Technology").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("BooksAnswered") == 8) {
    $(".Books").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("AnimeAnswered") == 8) {
    $(".Anime").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("TelevisionAnswered") == 8) {
    $(".Television").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("ArtAnswered") == 8) {
    $(".Art").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("PlantsAnswered") == 8) {
    $(".Plants").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("WeatherAnswered") == 8) {
    $(".Weather").empty().append(`<br><h3>Completed</h3>`);
  };

  if (sessionStorage.getItem("FoodAnswered") == 8) {
    $(".Food").empty().append(`<br><h3>Completed</h3>`);
  };
});

// var difficulty;

// //In opening modal, when difficulty button is pressed
// $(".diffButton").on("click", function () {
//   //Button's id (easy, medium, or hard) is attached to difficulty variable
//   difficulty = $(this).children().data("id");
//   //If the player has already entered their name, the log-in button is enabled
//   if ($("#playerName").val()) {
//     $("#log-in").prop("disabled", false);
//   }
//   //When a name is entered in the playerName field, the log-in button is enabled if a difficulty button has been already pressed
//   $("#playerName").on("input", function () {
//     if (difficulty) {
//       $("#log-in").prop("disabled", false);
//     }
//   });

//When the log-in button is pressed (after being enabled)
$("#log-in").on("click", function () {
  event.preventDefault();
  //The typed player name is displayed at the top of the page
  var playerName = $("#playerName")
    .val()
    .trim();
  $(".Player1").text(playerName);
  //The player name and difficulty are stored in sessionStorage
  sessionStorage.setItem("player", playerName);
  sessionStorage.setItem("difficulty", difficulty);

  //Placeholders are set for keeping track of how many questions have been answered in each category
  sessionStorage.setItem("ArtAnswered", 0);
  sessionStorage.setItem("FilmAnswered", 0);
  sessionStorage.setItem("TelevisionAnswered", 0);
  sessionStorage.setItem("AnimeAnswered", 0);
  sessionStorage.setItem("TechnologyAnswered", 0);
  sessionStorage.setItem("GeographyAnswered", 0);
  sessionStorage.setItem("SportsAnswered", 0);
  sessionStorage.setItem("HistoryAnswered", 0);
  sessionStorage.setItem("MusicAnswered", 0);
  sessionStorage.setItem("Video GamesAnswered", 0);
  sessionStorage.setItem("AnimalsAnswered", 0);
  sessionStorage.setItem("BooksAnswered", 0);
  sessionStorage.setItem("PlantsAnswered", 0);
  sessionStorage.setItem("WeatherAnswered", 0);
  sessionStorage.setItem("FoodAnswered", 0);

  let id = 14;
  //This id number depends on the number of questions in the database, resetting all those of the chosen difficulty to "unanswered" status if there's a new player present
  //14 was used in the production and testing, but the deployed version uses 290
  for (var i = 1; i < id; i++) {
    console.log("Difficulty: " + difficulty);
    console.log("ID: " + id);
    $.ajax({
      method: "PUT",
      url: "/api/questions/" + difficulty + "/" + i,
      data: { "answered": false }
    }).then(function () {
      console.log("updated!");
    });
  }

  //New player is posted with name and difficulty, storing the new player's id in sessionStorage as well and reloading the page to display changes
  $.post("/api/player", {
    player_name: playerName,
    difficulty: difficulty
  }, function (response) {
    console.log("something happened");
    console.log(response);
    sessionStorage.setItem("playerID", response.id);
    location.reload();
  });

});


//When high score submit button is pressed
$(document).on("click", ".submitHighScore", function () {
  //The points modal is displayed, such that only the close button can close it
  $('#pointsModal').modal({ backdrop: 'static', keyboard: false });

  //Player id is grabbed from sessionStorage and used to update that player's high score value
  var id = sessionStorage.getItem("playerID");
  $.ajax({
    method: "PUT",
    url: "/api/player/" + id,
    data: { "highScore": sessionStorage.getItem("score") }
  });
  //Displays modal text
  $(".pointsBody").text("Thank you for submitting your high score!");
});

//Page is reloaded when randomize button is clicked
$("#randomize").on("click", function () {
  location.reload();
});

//Page is reloaded when pointsModal is closed, in order to display change
$(".pointsClose").on("click", function () {
  location.reload();
});

//When button is clicked for high scores list
$("#showHighScores").on("click", function () {
  //High scores modal is displayed, such that only clicking the close button will close it
  $('#highScoresModal').modal({ backdrop: 'static', keyboard: false });
  var highScores = [];
  //Gets all player names and high scores and pushes them to an array
  $.get("/api/player", function (response) {
    for (var i = 0; i < response.length; i++) {
      highScores.push({
        name: response[i].player_name,
        highScore: parseInt(response[i].highScore)
      });
    }
    //Sorts highScores array from highest to least
    highScores.sort(compare);
    //Loops through the first ten objects of the highScores array and adds them to a table in the modal
    for (var j = 0; j < 10; j++) {
      $(".highScoreTable").append(`
    <tr style="border-bottom: 2px solid black">
      <td>${j + 1}</td>
      <td>${highScores[j].name}</td>
      <td>${highScores[j].highScore}</td>
    </tr>
  `);
    }
  });
});

//Compare function for sorting highScores from highest to least
function compare(a, b) {

  const valA = a.highScore;
  const valB = b.highScore;

  if (valA > valB) return -1;
  if (valB < valA) return 1;

  return 0;
}


// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function (example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function () {
//     return $.ajax({
//       url: "/api/question/",
//       type: "GET"
//     });
//   },
//   deleteExample: function (id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// API.getExamples().then(function (data) {
//   console.log("It worked!");
// })

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function () {
//   API.getExamples().then(function (data) {
//     var $examples = data.map(function (example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function () {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// //Modernizr 2.5.3 (Custom Build) | MIT & BSD
// ; window.Modernizr = function (a, b, c) { function z(a) { j.cssText = a } function A(a, b) { return z(m.join(a + ";") + (b || "")) } function B(a, b) { return typeof a === b } function C(a, b) { return !!~("" + a).indexOf(b) } function D(a, b) { for (var d in a) if (j[a[d]] !== c) return b == "pfx" ? a[d] : !0; return !1 } function E(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f } return !1 } function F(a, b, c) { var d = a.charAt(0).toUpperCase() + a.substr(1), e = (a + " " + o.join(d + " ") + d).split(" "); return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c)) } var d = "2.5.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function (a, c, d, e) { var f, i, j, k = b.createElement("div"), l = b.body, m = l ? l : b.createElement("body"); if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), k.appendChild(j); return f = ["&#173;", "<style>", a, "</style>"].join(""), k.id = h, (l ? k : m).innerHTML += f, m.appendChild(k), l || (m.style.background = "", g.appendChild(m)), i = c(k, a), l ? k.parentNode.removeChild(k) : m.parentNode.removeChild(m), !!i }, x = {}.hasOwnProperty, y; !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) { return x.call(a, b) } : y = function (a, b) { return b in a && B(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = u.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(u.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(u.call(arguments))) }; return e }); var G = function (a, c) { var d = a.join(""), f = c.length; w(d, function (a, c) { var d = b.styleSheets[b.styleSheets.length - 1], g = d ? d.cssRules && d.cssRules[0] ? d.cssRules[0].cssText : d.cssText || "" : "", h = a.childNodes, i = {}; while (f--) i[h[f].id] = h[f]; e.csstransforms3d = (i.csstransforms3d && i.csstransforms3d.offsetLeft) === 9 && i.csstransforms3d.offsetHeight === 3 }, f, c) }([, ["@media (", m.join("transform-3d),("), h, ")", "{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], [, "csstransforms3d"]); q.cssanimations = function () { return F("animationName") }, q.csstransforms = function () { return !!F("transform") }, q.csstransforms3d = function () { var a = !!F("perspective"); return a && "webkitPerspective" in g.style && (a = e.csstransforms3d), a }, q.csstransitions = function () { return F("transition") }; for (var H in q) y(q, H) && (v = H.toLowerCase(), e[v] = q[H](), t.push((e[v] ? "" : "no-") + v)); return z(""), i = k = null, function (a, b) { function g(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function h() { var a = k.elements; return typeof a == "string" ? a.split(" ") : a } function i(a) { var b = {}, c = a.createElement, e = a.createDocumentFragment, f = e(); a.createElement = function (a) { var e = (b[a] || (b[a] = c(a))).cloneNode(); return k.shivMethods && e.canHaveChildren && !d.test(a) ? f.appendChild(e) : e }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + h().join().replace(/\w+/g, function (a) { return b[a] = c(a), f.createElement(a), 'c("' + a + '")' }) + ");return n}")(k, f) } function j(a) { var b; return a.documentShived ? a : (k.shivCSS && !e && (b = !!g(a, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), f || (b = !i(a)), b && (a.documentShived = b), a) } var c = a.html5 || {}, d = /^<|^(?:button|form|map|select|textarea)$/i, e, f; (function () { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", e = "hidden" in a, f = a.childNodes.length == 1 || function () { try { b.createElement("a") } catch (a) { return !0 } var c = b.createDocumentFragment(); return typeof c.cloneNode == "undefined" || typeof c.createDocumentFragment == "undefined" || typeof c.createElement == "undefined" }() })(); var k = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: j }; a.html5 = k, j(b) }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) { return D([a]) }, e.testAllProps = F, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e }(this, this.document);

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);


var queryURL = "https://opentdb.com/api.php?amount=10&category=27&difficulty=hard&type=multiple";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
  console.log(response);
});
