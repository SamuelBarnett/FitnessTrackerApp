DROP DATABASE IF EXISTS `fitnesstracker`;
Create DATABASE `fitnesstracker`;
USE `fitnesstracker`;

CREATE TABLE `users`(
    `user_id` INT AUTO_INCREMENT UNIQUE NOT NULL,
    `username` varchar(64) NOT NULL,
    `password` text NOT NULL,
    `email` text NOT NULL,
    PRIMARY KEY(`user_id`)
);
-- Handling goals
CREATE TABLE goal (
    `goal_id` INT AUTO_INCREMENT NOT NULL,
    `goal_name` text NOT NULL UNIQUE,
    `date_added` DATE DEFAULT getdate() ON UPDATE getdate(),
    `start_goal_date` DATE NOT NULL DEFAULT getdate(),
    `end_goal_date` DATE NOT NULL,
    `description` text DEFAULT NULL,
    PRIMARY KEY(`goal_id`)
);

CREATE TABLE goal_attribute (
    `attribute_id` INT AUTO_INCREMENT NOT NULL,
    `goal_name` INT NOT NULL,
    `date_added` DATE DEFAULT getdate() ON UPDATE getdate(),
    `attribute_name` text NOT NULL,
    `attribute_measurement` text NOT NULL,
    PRIMARY KEY(`attribute_id`),
    FOREIGN KEY(`goal_id`) REFERENCES goal(`goal_id`)
);

CREATE TABLE goal_progress_tracking (
    `progress_id` INT AUTO_INCREMENT NOT NULL,
    `attribute_id` INT NOT NULL,
    `date_updated` DATETIME DEFAULT getdate(),
    `new_value` text NOT NULL,
    PRIMARY KEY(`progress_id`),
    FOREIGN KEY(`attribute_id`) REFERENCES goal_attribute(`attribute_id`)
);

CREATE TABLE diary_entry(
    `entry_id` INT AUTO_INCREMENT NOT NULL,
    `entry_content` text DEFAULT NULL,
    `date_added` DATE DEFAULT getdate(),
    PRIMARY KEY(`entry_id`)
);

INSERT INTO `goal` (`goal_name`,`start_goal_date`,`end_goal_date`, `description`)
VALUES (`weight`,`2023-01-14`,`2023-02-20`,`a goal of losing 10 pounds`),

INSERT INTO `goal_attribute` (`goal_name`,`attribute_name`,`attribute_measurement`) VALUES (`weight`,`Current Weight`,`pounds`),
INSERT INTO `goal_attribute` (`goal_name`,`attribute_name`,`attribute_measurement`) VALUES (`weight`,`Future Weight`,`pounds`)

-- -------------------------------------------------------------------------------------





-- CREATE TABLE goals (
--     `goal_id` INT(32) AUTO_INCREMENT UNIQUE,
--     `title` VARCHAR(255) NOT NULL,
--     `start_date` DATE NOT NULL,
--     `end_date` DATE NOT NULL,
--     `date_created` DATE NOT NULL,
--     PRIMARY KEY(`goal_id`)
-- );
-- CREATE TABLE goal_properties (
--     `property_id` INT(32) AUTO_INCREMENT UNIQUE,
--     `property_name` text NOT NULL,
--     `measurement_style` text NOT NULL,
--     `date_created` DATE NOT NULL,
--     `goal_id` INT(32) NOT NULL,
--     PRIMARY KEY (`property_id`),
--     FOREIGN KEY (`goal_id`) REFERENCES goal(`goal_id`)
-- );
-- CREATE TABLE goal_progression (
--     `progress_id` INT(32) AUTO_INCREMENT UNIQUE,
--     `goal_id` INT(32) NOT NULL,
--     `progress_date` DATE NOT NULL,
--     `new_value` decimal(10,2) NOT NULL,
--     `date_updated` DATE NOT NULL,
--     PRIMARY KEY(`goal_id`),
--     FOREIGN KEY (`goal_id`) REFERENCES goal(`goal_id`)
-- );

-- CREATE TABLE property_progression (
--     `progress_id` INT(32) NOT NULL AUTO_INCREMENT UNIQUE,
--     `date_updated` DATE NOT NULL,
--     `new_value` decimal(10,2) NOT NULL,
--     `property_id` INT(32) NOT NULL,
--     PRIMARY KEY(`progress_id`),
--     FOREIGN KEY (`property_id`) REFERENCES goal_properties(`property_id`)
-- );





















-- CREATE TABLE `weight`(
--     goalid INT(2000) AUTO_INCREMENT UNIQUE,
--     CurrentWeight decimal(5,2),
--     FutureWeight decimal(5,2),
--     PRIMARY KEY(goalid)
-- );

-- CREATE TABLE `weightlifting`(
--     goalid INT(2000) AUTO_INCREMENT UNIQUE,
--     bench decimal(5,2),
--     deadlift decimal(5,2),
--     squat decimal(5,2),
--     PRIMARY KEY(goalid)
-- );

-- CREATE TABLE `cardio`(
--     goalid INT(2000) AUTO_INCREMENT UNIQUE,
--     MinutesRunning INT(20),
--     MinutesWalking INT(20),
--     MinutesSwimming INT(20),
--     PRIMARY KEY(goalid)
-- );






