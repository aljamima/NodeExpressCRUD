# Node Express CRUD Application

A simple CRUD (Create, Read, Update, Delete) web application built with Node.js, Express.js, and MongoDB. This project demonstrates basic employee management functionality.

> **Note:** This is an archived project maintained for reference purposes. It uses older versions of dependencies and may contain security vulnerabilities if used in production.

## Original Tutorial Attribution

This project was initially based on a tutorial by Djamware. You can find the original tutorial here:
https://www.djamware.com/post/58b27ce080aca72c54645983/how-to-create-nodejs-expressjs-and-mongodb-crud-web-application

## Features

- Employee management system
- MongoDB database integration
- Express.js backend
- EJS templating engine
- Basic CRUD operations

## Project Structure

```
├── bin/            # Application startup scripts
├── controllers/    # Route controllers
├── models/         # Database models
├── public/         # Static files (CSS, images)
├── routes/         # Route definitions
├── views/          # EJS templates
├── app.js          # Main application file
└── package.json    # Project dependencies
```

## Setup Instructions

1. Ensure you have Node.js and MongoDB installed
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start MongoDB service
5. Run the application:
   ```bash
   npm start
   ```
6. Access the application at `http://localhost:3000`

## Dependencies

- Express.js ~4.14.1
- Mongoose ^4.8.4
- EJS ~2.5.5
- Body-parser ~1.16.0
- Cookie-parser ~1.4.3

## Security Note

This project uses older versions of dependencies and is maintained for reference purposes only. If you plan to use this code in a production environment, please update all dependencies to their latest versions and implement proper security measures.

