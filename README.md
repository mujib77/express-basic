# Express Basics

A simple Express.js REST API built while learning backend development.

## What I learned
- Setting up an Express server
- GET, POST, PUT, DELETE routes
- Middleware (express.json)
- Sending JSON responses
- Connecting to a PostgreSQL database
- Full CRUD operations with a real database
- Environment variables with dotenv
- Protecting sensitive data with .gitignore

## Routes
- GET `/` - Hello World
- GET `/about` - About page
- GET `/contact` - Contact info
- GET `/user` - Returns a single user object
- GET `/users` - Fetch all users from database
- POST `/createuser` - Create and save a new user
- PUT `/updateuser/:id` - Update a user's age by ID
- DELETE `/deleteuser/:id` - Delete a user by ID
- GET `/testdb` - Test database connection

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- dotenv

## How to run
npm install
node app.js