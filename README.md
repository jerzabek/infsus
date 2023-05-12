# INFSUS Projekt 2022./2023.

## Getting Started

Database is within a Docker container. It is initialized with data from PGSQL dump generated in previous homework.

Building and running the container:

```bash
$ docker compose build
$ docker compose up
```

Application is built using NEXT.js 13.
Running the application:

```bash
# Firstly install dependencies
$ yarn
# Then run the app
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tasks

### Master detail screen

In folder `src/app/studentSearch` you can find the master detail screen.
