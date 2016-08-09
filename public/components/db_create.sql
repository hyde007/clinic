CREATE TABLE Patients
(
patientid int NOT NULL AUTO_INCREMENT,
firstname varchar(255) NOT NULL,
lastname varchar(255),
phone varchar(255),
email varchar(255),
dob date,
gender varchar(255),
address1 varchar(255),
address2 varchar(255),
city varchar(255),
state varchar(255),
zipcode varchar(255),
PRIMARY KEY (patientid)
);

CREATE TABLE doctors
(
docid int NOT NULL AUTO_INCREMENT,
firstname varchar(255),
lastname varchar(255),
phone varchar(255),
emailid varchar(255),
PRIMARY KEY (docid)
);

CREATE TABLE appointments
(
apptid int NOT NULL AUTO_INCREMENT,
patientid int not null,
apptdate date,
apptreason varchar(255),
assigneddocid int not null,
PRIMARY KEY (apptid),
foreign key (assigneddocid)
	references doctors(docid),
foreign key (patientid)
	references patients(patientid)
);


