Redux CRUD Starterkit
=====================

__Frontend:__
[![Dependency Status](https://david-dm.org/hedleysmith/redux-crud-example.svg?path=frontend)](https://david-dm.org/hedleysmith/redux-crud-example?path=frontend) __Backend:__
[![Dependency Status](https://david-dm.org/hedleysmith/redux-crud-example.svg?path=backend)](https://david-dm.org/hedleysmith/redux-crud-example?path=backend)

__Redux starterkit with full CRUD & microservice capabilities!__

A fully featured designed as a complete real-life system which focuses on 1) a consistent and easy to follow structure 2) solid and well tested packages 3) good documentation and examples and 4) extensibility.

__Highlights:__

* An Express.js based backend service that exposes a RESTful API with full __C(Create) R(Read) U(Update) D(Delete)__ capabilities.
* A non-trival frontend built using React.js, Redux, Sagas and much more!

Remember, this is just a starting point! All parts of the app are designed to be switched out fairly easily if you prefer other technologies.

## Usage

To run just the frontend in mock mode:

    $ npm run start-dev

To run the full stack:

    $ docker-compose up

## Full Features

__Technologies (Frontend)__

* React.js - view
* Redux - state management
* React-router - routing
* Redux Sagas - side effects & async
* Webpack - __all__ processing and bundling
* PostCSS & CSS Modules - styling
* Component Driven Design structure - structure

__Technologies (Backend)__

* Node.js
* Express.js
* MongoDB & Mongoose

__Code Style__

* AirBnB ESLint config

__Automated Testing__

* Unit > Integration > Service > End-to-end Internal > End-to-end External (see [test pyramid](http://martinfowler.com/articles/microservice-testing/#conclusion-test-pyramid))
* Mocha, Chai & Sinon
* Supertest (for backend)
* Enzyme & JSDom (for frontend)

## TODO

* Document environment configurations (production, development, testing & mock modes)
