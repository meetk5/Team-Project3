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


--Create table violations
create table violations (restaurant varchar,
						 boro varchar,
						 violation_code varchar,
						 violation_desc varchar,
						 critical varchar);
select * from violations;

--this can be merged with create violations table statement 
--I had to add this later for sqlalchemy
alter table violations add id serial primary key;
