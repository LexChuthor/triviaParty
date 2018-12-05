# triviaParty

## Deployed App

https://intense-brook-89683.herokuapp.com/

## Overview

Trivia Trove is a full-stack game application, using an Express server, Handlebars rendering, Bootstrap styling, and a MySQL database accessed with Sequelize calls. It is deployed through Heroku using JawsDB as its database server.

## Database Structure

The database contains three tables with set columns: 

* Categories (one-to-many relationship with Questions)

    * An automatically generated category id
    * The name of each of the fifteen category topics
        * Art
        * Film
        * Television
        * Food
        * History
        * Animals
        * Plants
        * Weather
        * Technology
        * Music
        * Sports
        * Video Games
        * Books
        * Anime
        * Geography
    * A lower-case name for later calling related images

* Questions (many-to-one relationship with Categories)

    * An automatically generate question id
    * Text of the actual question
    * The first potential answer
    * The second potential answer
    * The third potential answer
    * The fourth potential answer
    * The correct answer
    * The difficulty level ("easy", "medium", or "hard")
    * Boolean for whether the question has been answered yet (set with a default of 0 or false)
    * A foreign id identifying which category the question is in

* Players

    * The player's name
    * The player's chosen difficulty level ("easy", "medium", or "hard")
    * The player's high score (set with a default value of 0)

## Gameplay

When the initial screen loads, a short animation runs to display the title, immediately after which a Bootstrap modal appears requiring input. The player much enter a name and click on one of the three difficulty buttons (Easy, Medium, or Hard) before the log-in button allows them to continue. After that, the current player's name is shown at the top of the page, next to a default score of 0.

The first page (index.handlebars) displays three rows of three categories, which are randomly generated from the Categories table, each one with a related image. The 3D rotation effect for the category circles and difficulty circles was achieved with CSS files found on the Codrops site (https://tympanus.net/codrops/2012/08/08/circle-hover-effects-with-css-transitions/), and a slightly different effect is used on the question circles on the category page.

When one of the category circles' links is clicked, the category.handlebars file is loaded for that particular category, changing the background based on the topic, displaying the category name at the top, and generating five question circles. When one of these circles is clicked, the list of circles is hidden, and the question itself is shown, along with the four answer options and a submit button.

Clicking the submit button triggers a modal with a special spin effect from Effekt.css site for CSS transitions and animations (http://h5bp.github.io/Effeckt.css/modals.html), which was found through CSSDB.co, a collection of CSS libraries (http://cssdb.co/). The submit changes that question's "answered" value in the database to "true," changes the modal's text to display the answer and give a "Congratulations" or "Sorry" message depending on whether it was answered correctly, increases the score (stored in sessionStorage) by 5 if the answer was correct, and reloads the page to again show the question circles and update the score at the top.

A maximum of five question circles are displayed, corresponding to randomly generated unanswered questions from the database, but if there are fewer than five unanswered questions in that category, then the number of question circles dwindles to four, three, two, and one as they are answered. Once the last (eighth) question is answered and its modal is closed, the page diverts back to the index page, and that category's circle replaces its link with a "Completed" message.

When the player's score reaches 100, a congratulatory modal opens with a button allowing them to submit their score to the database as their high score. Closing the modal allows them to keep playing if they wish.

Clicking the "Submit Score" button at the top submits the current player's score to be recorded as their high score in the Players table, and a modal using an animation from Effekt.css thanks the user for submitting their score. When the "Show High Scores" button at the bottom is clicked, a modal displays the ten highest scores in a simple table, along with the player's name and placement in the ranking. Clicking the "Randomize" button at the bottom merely reloads the page to generate newly random categories on the index page.

## Behind the Scenes

The following values are stored in sessionStorage for as long as the user's window is open:

* The chosen difficulty
* The player's name
* The player's id for updating their table values
* The ever-increasing score
* A separate tally for every category, formatted as ArtAnswered, FilmAnswered, etc.
  When this value reaches 8 (the number of questions in each category per difficulty level), that is the condition for indicating that category is "Completed."

  Any time something changes in the database, the page is typically reloaded to reflect those changes.