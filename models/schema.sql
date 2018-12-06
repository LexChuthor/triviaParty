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
VALUES ("What is the largest animal on the planet?", "Whale Shark", "Elephant", "Blue Whale", "Giant Squid", "Blue Whale", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the largest of the great apes?", "Eastern Lowland Gorilla", "Orangutan", "Western Lowland Gorilla", "Mountain Gorilla", "Mountain Gorilla", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the world's most poisonous spider?", "Daddy Longlegs", "Banana Spider", "Black Widow", "Brown Recluse", "Banana Spider", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What animal has the highest blood pressure?", "Flea", "Giraffe", "Blue Whale", "Chihuahua", "Giraffe", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("How many living species of animal are estimated to exist?", "2.5 Million", "1 Billion", "1 Million", "3 Million", "3 Million", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What color is a polar bear's skin?", "White", "Black", "Pink", "Blue", "Black", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the only animal that cannot jump?", "Lobster", "Elephant", "Centipede", "Rhinoceros", "Elephant", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Gentoo, Humboldt, and Jackass are all varieties of what animal?", "Donkey", "Chicken", "Whale", "Penguin", "Penguin", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("A carnivorous animal eats flesh. What does a nucivorous animal eat?", "Nothing", "Seaweed", "Nuts", "Fruits", "Nuts", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these animals has fingerprints nearly indistinguishable from those of humans?", "Chimpanzee", "Koala", "Ring-tailed Lemur", "Baboon", "Koala", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Cashmere is the wool from which kind of animal?", "Sheep", "Llama", "Camel", "Goat", "Goat", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these species is not extinct?", "Komodo Dragon", "Saudi Gazelle", "Japanese Sea Lion", "Tasmanian Tiger", "Komodo Dragon", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What dog breed is one of the oldest breeds of dog and has flourished since before 400 BC?", "Bulldogs", "Pugs", "Chihuahuas", "Boxers", "Pugs", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("The Japanese dish Fugu is made from what kind of fish?", "Salmon", "Tuna", "Swordfish", "Pufferfish", "Pufferfish", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the fastest animal?", "Golden Eagle", "Horsefly", "Cheetah", "Peregrine Falcon", "Peregrine Falcon", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What type of animal is a natterjack?", "Toad", "Bird", "Fish", "Insect", "Toad", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which species of brown bear is not extinct?", "Syrian Brown Bear", "California Grizzly Bear", "Atlas Bear", "Mexican Grizzly Bear", "Syrian Brown Bear", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the only animal to survive exposure to outer space?", "Barnicle", "Tardigrade", "Cockroach", "Snail", "Tardigrade", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What type of creature is a Bonobo?", "Lion", "Ape", "Parrot", "Wildcat", "Ape", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What species is a 'mountain chicken'?", "Chicken", "Frog", "Horse", "Fly", "Frog", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("The order Coleoptera is the most biodiverse group of creatures known. What creatures are in it?", "Coral", "Butterflies", "Beetles", "Shrimp", "Beetles", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the strongest insect on the planet?", "Bull Ant", "Bumblebee", "Dung Beetle", "Hercules Beetle", "Dung Beetle", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What fish has been known to live the longest?", "Lungfish", "Tuna", "Swordfish", "Great White Shark", "Lungfish", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What animal has the largest eyes of any land animal (larger than their brains in fact)?", "Elephant", "Emu", "Hippopotamus", "Ostrich", "Ostrich", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6);


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
VALUES ("Which of these were once used as currency in Holland?", "Acorns", "Tulip Bulbs", "Pine Cones", "Oak Roots", "Tulip Bulbs", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Harvested from a crocus, what is among the world's most expensive spices?", "Saffron", "Vanilla", "Cinnamon", "Cardamom", "Saffron", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);


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
VALUES ("Which of these fruits floats in water because it is 25% air?", "Apple", "Banana", "Peach", "Grape", "Apple", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these plants is NOT carnivorous?", "Venus Flytrap", "Bladderwort", "Sundew", "Corpse Flower", "Corpse Flower", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the oldest known living tree?", "California Redwood", "Bristlecone Pine", "Baobab Tree", "Olive Tree", "Bristlecone Pine", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);


INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these countries is named after a tree?", "Brazil", "Morocco", "Brunei", "Jamaica", "Brazil", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these trees is considered a hardwood?", "Pine", "Cedar", "Maple", "Hickory", "Maple", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these is not a legume?", "Peanut", "Carob", "Tamarind", "Vanilla", "Vanilla", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What percentage of pumpkins sold in the U.S. end up as jack-o-lanterns?", "50%", "65%", "80%", "99%", "99%", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Who is the poinsettia named after?", "A US ambassador to Mexico", "A Pennsylvania farmer", "A US Secretary of Agriculture", "A Christmas campaign manager", "A US ambassador to Mexico", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these flowering plants has the smallest seeds?", "Rose", "Orchid", "Hyacinth", "Strawberry", "Orchid", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the most widely cultivated crop in the world?", "Corn", "Oats", "Wheat", "Lettuce", "Wheat", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of these plants is NOT poisonous when eaten?", "Kudzu", "Buttercups", "Sweet Pea", "Oleander", "Kudzu", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7);



INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the highest rainfall recorded in a day?", "50 inches", "60 inches", "73 inches", "85 inches", "73 inches", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("The highest temperatures in the U.S. have occurred where?", "Key West", "Texas", "Death Valley", "Hawaii", "Death Valley", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which state's record high temperature has not exceeded 100 degrees?", "Maine", "Montana", "Hawaii", "Minnesota", "Hawaii", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What type of cloud produces lightning?", "Stratus", "Cumulonimbus", "Nimbus", "Cirrus", "Cumulonimbus", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which weather event kills more people annually?", "Hurricanes", "Lightning", "Floods", "Tornadoes", "Floods", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("When is hurricane season in the Atlantic Ocean?", "June to November", "May to September", "July to October", "August to December", "June to November", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is a tornado that develops over water called?", "Waterdevil", "Watertube", "Waterspout", "Hydrotube", "Waterspout", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("The Great Storm of 1900 affected what U.S. city?", "Pensacola", "Galveston", "New Orleans", "Mobile", "Galveston", "easy", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);

INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What kind of cloud is highest in the atmosphere?", "Cirrus", "Altostratus", "Cumulus", "Cumulonimbus", "Cirrus", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("The world's highest temperature (136 degrees Fahrenheit) was recorded in what country in 1922?", "Saudi Arabia", "Libya", "Indonesia", "Sudan", "Libya", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What U.S. state has the most tornadoes?", "Texas", "Oklahoma", "Missouri", "Kansas", "Texas", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("At what wind speed does a tropical storm reach hurricane strength?", "53 MPH", "65 MPH", "74 MPH", "80 MPH", "74 MPH", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What U.S. state is not considered part of 'Tornado Alley'?", "Iowa", "Arizona", "Kansas", "Colorado", "Arizona", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What place holds the world record for highest surface wind speed?", "Australia", "New Hampshire", "Russia", "Nepal", "Australia", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Which of the following conditions would cause the National Weather Service to issue a Winter Weather Advisory?", "Snow and blowing snow", "Sleet", "Freezing Rain", "Any of these", "Any of these", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What hurricane was the costliest storm (monetarily) of the last century?", "Andrew", "Katrina", "Rita", "Opal", "Katrina", "medium", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);


INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("The Fujita scale measures the strength of what?", "Hurricanes", "Tornadoes", "Floods", "Meteorite Strikes", "Tornadoes", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What hurricane name has been used most frequently (at least eleven times)?", "Sandy", "Justine", "Arlene", "Rosa", "Arlene", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("Hurricane names were once all female. When were male names added to the mix?", "1950", "1978", "1985", "1963", "1978", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("The deadliest tornado in U.S. history killed how many people in 1925?", "302", "695", "1022", "830", "695", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What rare weather occurrence happened in 2004?", "A tornado went up a cliff", "A hurricane made landfall in Brazil", "Water rained upwards", "A blizzard struck the Middle East", "A hurricane made landfall in Brazil", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What area boasts the highest number of annual lightning strikes?", "Texas, U.S.A.", "The Congo", "Queensland, Australia", "The Andes Mountains", "The Congo", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What is the name of the scale for measuring hurricane severity?", "Saffir-Simpson", "Beaufort", "Johannson", "Billings", "Saffir-Simpson", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);
INSERT INTO tqps27hovjvizqxp.Questions (text, answer1, answer2, answer3, answer4, correctAnswer, difficulty, createdAt, updatedAt, CategoryId)
VALUES ("What year was the first tornado accurately predicted before it struck? ", "1948", "1936", "1955", "1963", "1948", "hard", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8);


