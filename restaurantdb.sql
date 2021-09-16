Create table restaurants (
CAMIS varchar primary key,
	restaurant varchar,
	Boro varchar,
	Building varchar,
	street varchar,Zipcode varchar,Phone varchar,
	cuisine varchar,InspectionDate varchar,action varchar,
	violationcode varchar, violationdesc varchar,critical varchar,
	inspectiontype varchar,latitude varchar, longitude varchar)
	
select * from restaurants;

select * from USER

select  from pg_authid

select rolpassword from pg_authid where rolname = 'postgres'
