DROP DATABASE IF EXISTS `fitnesstracker`;
Create DATABASE `fitnesstracker`;
USE `fitnesstracker`;

-- CREATE TABLE `Goals`(

--  userID Int(20) NOT NULL,
--  weight decimal (5,2),
-- );

CREATE TABLE `users`(
    userID INT(20) AUTO_INCREMENT UNIQUE,
    username varchar(64),
    password text,
    email text,
    PRIMARY KEY(userID)
);

CREATE TABLE `weight`(
    weightID INT(20) AUTO_INCREMENT UNIQUE,
    CurrentWeight decimal(5,2),
    FutureWeight decimal(5,2),
    PRIMARY KEY(weightID)
);

CREATE TABLE `weightlifting`(
    weightliftingID INT(20) AUTO_INCREMENT UNIQUE,
    bench decimal(5,2),
    deadlift decimal(5,2),
    squat decimal(5,2),
    PRIMARY KEY(weightliftingID)
);

CREATE TABLE `cardio`(
    cardioID INT(20) AUTO_INCREMENT UNIQUE,
    MinutesRunning INT(20),
    MinutesWalking INT(20),
    MinutesSwimming INT(20),
    PRIMARY KEY(cardioID)
);

CREATE TABLE `nutrition`(
    nutritionID INT(20) AUTO_INCREMENT UNIQUE,
    calories INT(32),
    protein INT(32),
    fat INT(32),
    carb INT(32),
    PRIMARY KEY(nutritionID)
);

CREATE TABLE `BMI`(
    BMIID INT(20) AUTO_INCREMENT UNIQUE,
    currentBMI double(5,2),
    futureBMI double(5,2),
    PRIMARY KEY(BMIID)
);

CREATE TABLE `pages`(
    pagesID INT(20) AUTO_INCREMENT UNIQUE,

);

CREATE TABLE ``(
    
);













