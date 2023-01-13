DROP DATABASE IF EXISTS `fitnesstracker`;
Create DATABASE `fitnesstracker`;
USE `fitnesstracker`;



-- CREATE TABLE `Goals`(

--  userID Int(20) NOT NULL,
--  weight decimal (5,2),
-- );

CREATE TABLE `users`(
    userID INT(2000) AUTO_INCREMENT UNIQUE,
    username varchar(64),
    password text,
    email text,
    PRIMARY KEY(userID)
);


CREATE TABLE `weight`(
    goalID INT(2000) AUTO_INCREMENT UNIQUE,
    CurrentWeight decimal(5,2),
    FutureWeight decimal(5,2),
    PRIMARY KEY(goalID)
);

CREATE TABLE `weightlifting`(
    goalID INT(2000) AUTO_INCREMENT UNIQUE,
    bench decimal(5,2),
    deadlift decimal(5,2),
    squat decimal(5,2),
    PRIMARY KEY(goalID)
);

CREATE TABLE `cardio`(
    goalID INT(2000) AUTO_INCREMENT UNIQUE,
    MinutesRunning INT(20),
    MinutesWalking INT(20),
    MinutesSwimming INT(20),
    PRIMARY KEY(goalID)
);






