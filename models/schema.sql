DROP DATABASE IF EXISTS triviadb;
CREATE DATABASE triviadb;

DROP DATABASE IF EXISTS triviadb;
CREATE DATABASE triviadb;


INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What city did Rome fight in the Punic Wars?", "Troy", "Carthage", "Sparta", "Athens", "Carthage", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What Russian automatic gas-operated assault rifle was developed in the Soviet Union in 1947, and is still popularly used today?", "RPK", "M16", "MG 42", "AK-47", "AK-47", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the oldest US state?", "Massachusetts", "Virginia", "Delaware", "New York", "Delaware", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of the following countries was the first to send an object into space?", "Germany", "Russia", "United States", "China", "Germany", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Who was the first president born in the independent United States?", "Andrew Jackson", "John Quincy Adams", "Martin Van Buren", "Franklin Pierce", "Martin Van Buren", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which nation did NOT have a colony in the modern-day USA?", "Portugal", "Spain", "The Netherlands", "Sweden", "Portugal", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Fallout Boy's song 'Uma Thurman' samples the theme song of what classic TV show?", "Gilligan's Island", "The Munsters", "The Addams Family", "The Brady Bunch", "The Munsters", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these albums was not released by the Beatles?", "Abbey Road", "Revolver", "Let It Bleed", "Help!", "Let It Bleed", "Easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10);



-- Hostname - gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Username - l4orju6yq2i7eloh
-- Password - i6rcetpaukv357mh 
-- Port - 3306
-- Database - tqps27hovjvizqxp

-- Animals: 6, Plants: 7, Weather: 8

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What flower was serenaded in the 1965 film The Sound of Music?", "Rose", "Lily", "Edelweiss", "Sunflower", "Edelweiss", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("A plant's fruits are its ripened what?", "Ovaries", "Pistils", "Anthers", "Seeds", "Ovaries", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these plants does NOT grow from a bulb?", "Lily", "Daffodil", "Orchid", "Amaryllis", "Orchid", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Where is the biggest concentration of diverse plant species in the world?", "Indonesia", "Amazon Rainforest", "Congo River Basin", "India", "Amazon Rainforest", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Pollen is created in what flower structure?", "Stamen", "Pistil", "Stigma", "Sepal", "Stamen", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these plants creates flowers but no actual leaves?", "Cactus", "Bamboo", "Juniper", "Kelp", "Cactus", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);




INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What element essential for healthy plant growth is returned to the soil by bacteria on certain plants' roots?", "Carbon Dioxide", "Oxygen", "Fluorine", "Nitrogen", "Nitrogen", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What kind of wood was Noah's Ark made from?", "Teak", "Balsa", "Gopher Wood", "Cedar", "Gopher Wood", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these flowers feature leaves called bracts rather than petals?", "Daffodil", "Dogwood", "Pansy", "Magnolia", "Dogwood", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("If an X is carved into a tree trunk and the tree is allowed to grow for 100 years, where will the X be relative to its original position?", "5 feet higher", "1 foot higher", "5 inches higher", "The same place", "The same place", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these vegetables is in the same family as Queen Anne's Lace?", "Corn", "Carrot", "Potato", "Cabbage", "Carrot", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);



INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these trees is considered a hardwood?", "Pine", "Cedar", "Maple", "Hickory", "Maple", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these is not a legume?", "Peanut", "Carob", "Tamarind", "Vanilla", "Vanilla", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
