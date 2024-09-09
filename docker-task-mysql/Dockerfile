FROM mysql:8

ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mydatabase

COPY ./initdb /docker-entrypoint-initdb.d/

EXPOSE 3306
