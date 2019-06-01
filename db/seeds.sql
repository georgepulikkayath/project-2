drop database if exists riders;
create database riders;
use riders;

select * from trip_registers;
select * from users;
select * from trip_details;
use riders;
insert into trip_details(destination,startDate,endDate,distance,origin)values("Seattle","5/23/2019","5/27/2019",2821,"Philadelphia, PA");
insert into trip_details(destination,startDate,endDate,distance,origin)values("San Diego","4/24/2019","4/29/2019",2697,"Philadelphia, PA");
insert into trip_details(destination,startDate,endDate,distance,origin)values("Chicago","2/23/2019","2/27/2019",760,"Philadelphia, PA");
insert into trip_details(destination,startDate,endDate,distance,origin)values("Dallas","6/23/2019","6/27/2019",1743,"Philadelphia, PA");
insert into trip_details(destination,startDate,endDate,distance,origin)values("Milwaukee","9/3/2019","9/17/2019",852,"Philadelphia, PA");
insert into trip_details(destination,startDate,endDate,distance,origin)values("Phoenix","10/7/2019","10/17/2019",2344,"Philadelphia, PA");