#Docker comands to install database

docker run --name redisbarber -p 6379:6379 --restart always -d -t redis:alpine
docker run --name mongobarber -p 27017:27017 --restart always -d -t mongo
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 --restart always -d postgres


docker start database
docker start redisbarber
docker start mongobarber

docker exec -it database /bin/bash
su postgres
psql


#Api urls

