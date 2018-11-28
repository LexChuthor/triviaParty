DROP DATABASE IF EXISTS triviadb;
CREATE DATABASE triviadb;

DROP DATABASE IF EXISTS triviadb;
CREATE DATABASE triviadb;

CREATE TABLE questions(
    id INT AUTO_INCREMENT NOT NULL,
    question VARCHAR(255) NOT NULL,
    answer1 VARCHAR(100),
    answer2 VARCHAR(100),
    answer3 VARCHAR(100),
    answer4 VARCHAR(100),
    correctAnswer VARCHAR(100),
    answered BOOLEAN default false,
    createdAt TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What city did Rome fight in the Punic Wars?", "Troy", "Carthage", "Sparta", "Athens", "Carthage", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What Russian automatic gas-operated assault rifle was developed in the Soviet Union in 1947, and is still popularly used today?", "RPK", "M16", "MG 42", "AK-47", "AK-47", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the oldes US state?", "Massachusetts", "Virginia", "Delaware", "New York", "Delaware", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of the following countries was the first to send an object into space?", "Germany", "Russia", "United States", "China", "Germany", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Who was the first president born in the independent United States?", "Andrew Jackson", "John Quincy Adams", "Martin Van Buren", "Franklin Pierce", "Martin Van Buren", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);

INSERT INTO triviadb.questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which nation did NOT have a colony in the modern-day USA?", "Portugal", "Spain", "The Netherlands", "Sweden", "Portugal", "Medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5);




-- Hostname - gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Username - l4orju6yq2i7eloh
-- Password - i6rcetpaukv357mh 
-- Port - 3306
-- Database - tqps27hovjvizqxp

