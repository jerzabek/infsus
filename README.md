# INFSUS Projekt 2022./2023.

[GitHub repository](https://github.com/jerzabek/infsus)

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
$ yarn
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tests

Tests written using Jest and React testing library.

```bash
$ yarn test
```

## Component diagram

![Component diagram](./dijagram%20komponenti.png)
