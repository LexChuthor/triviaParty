DROP DATABASE IF EXISTS triviadb;
CREATE DATABASE triviadb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

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

INSERT INTO tqps27hovjvizqxp.questions (question, answer1, answer2, answer3, answer4, correctAnswer)
VALUES ("What city did Rome fight in the Punic Wars?", "Troy", "Carthage", "Sparta", "Athens", "Carthage");

-- Hostname - gtizpe105piw2gfq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Username - l4orju6yq2i7eloh
-- Password - i6rcetpaukv357mh 
-- Port - 3306
-- Database - tqps27hovjvizqxp

