FROM postgres:latest

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=12345
ENV POSTGRES_DB=dom

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432