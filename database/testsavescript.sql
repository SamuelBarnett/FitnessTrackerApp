CREATE TABLE `Jobs`(
JobID INT(20) NOT NULL AUTO_INCREMENT,
JobDescription text NOT NULL,
DateofPosting DATE  NOT NULL,
DateofClosing DATE,
StartingDate DATE,
Qualifications text NOT NULL,
EmploymentType varchar (32),
Department varchar(64) NOT NULL,
Salary decimal(10,2),
Position text,
Location text,
Company INT (20) NOT NULL,

PRIMARY KEY(JobID)
);

