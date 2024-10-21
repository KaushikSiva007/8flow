# Cupcake Store API

Welcome to the Cupcake Store API! This project provides a RESTful API for managing a cupcake store, allowing users to add, retrieve, update, and delete cupcakes.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Add new cupcakes with details like name, price, description, and ingredients.
- Retrieve a list of all cupcakes
- Retrieve a specific cupcake by ID.
- Update cupcake details.
- Delete cupcakes from the store.

## Technologies Used

- Node.js
- Express.js
- Joi
- In-memory data storage

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/KaushikSiva007/8flow.git

2. ```cd 8flow```
2. ```npm install```
5. ```npm test``` to run test cases
3. ```node node src/index.js```server starts
4. Test via postman/curl the endpoints defined in open api spec
```
API Endpoints
Method	Endpoint	   Description
POST	/api/cupcakes	Add a new cupcake
GET	/api/cupcakes	Get a list of all cupcakes
GET	/api/cupcakes/:id	Get a cupcake by ID
PUT	/api/cupcakes/:id	Update a cupcake by ID
DELETE	/api/cupcakes/:id	Delete a cupcake by ID
```
Example:
```
POST /api/cupcakes
{
    "name": "Vanilla",
    "price": 6.74,
    "description": "A Vanilla special cupcake",
    "ingredients": ["flour", "sugar", "Vanilla"]
}
```
