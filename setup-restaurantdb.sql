--Create table restaurants
Create table restaurants (
CAMIS varchar primary key,
	restaurant varchar,
	Boro varchar,
	Building varchar,
	street varchar,Zipcode varchar,Phone varchar,
	cuisine varchar,InspectionDate varchar,action varchar,
	violationcode varchar, violationdesc varchar,critical varchar,
	inspectiontype varchar,latitude varchar, longitude varchar);

select * from restaurants;
--delete from restaurants where camis = 'CAMIS' and restaurant = 'DBA';

--Create table violations
create table violations (restaurant varchar NOT NULL,
						 violation_code varchar(4) NOT NULL,
						 violation_desc varchar,Critical varchar);
select * from violations;

--this can be merged with create violations table statement 
--I had to add this later for sqlalchemy
alter table violations add id serial primary key;


