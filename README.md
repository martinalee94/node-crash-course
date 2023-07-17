# Node crash course summary


## 1-2. Introduction & Setup
## 3. Clients and Servers
  - How to create a server in Node

## 4. Requests and Responses
  - How to customize req and res in Node
  - Simple practice of creating response and routing
  
## 5. NPM
  - We can install third-party packages via NPM.
  - Install Nodemon globally, which is a package for restarting server automatically
  - Package.json file(npm init)
  - lodash package(npm install lodash)

## 6. Express
  - npm install express

## 7. View Engines
  - EJS
  - In html, <% %> or <%= value %> <%- include %>works for EJS

## 8. Middleware
  - The order of middleware is important
  - Logger middleware, Authentication middleware, Parsing JSON.... etc.
  - 3rd party middleware package - ex) morgan - logger
  - static files middleware(express.static)

## 9. MongoDB
  - Collection -> Table
  - Document -> Record
  - MongoDB Atlas
  - Mongoose: ODM library(object document mapping library)
  - how to read env files **https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/