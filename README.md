# Node crash course summary

### - Overview
- A simple blog page in Nodejs, MongoDB and EJS(Server-side rendering)
  
### - Screenshots
#### 1. Homepage(index)
- This page shows the list of all contents.
<img width="400" alt="index" src="https://github.com/martinalee94/node-crash-course/assets/39133877/deea15f0-65cc-48cb-858a-a2db89f96bd7">

#### 2. Blog post detail page
- Users are able to read the detail of a post and delete the current post.
<img width="400" alt="detail" src="https://github.com/martinalee94/node-crash-course/assets/39133877/775e471d-0d10-4558-bb3b-c5f7ab96e0ae">

#### 3. Create a new blog post page
- Users are able to create a new post with title, snippet and body.
<img width="400" alt="write" src="https://github.com/martinalee94/node-crash-course/assets/39133877/27da4515-7878-4d44-aac0-83debf2f7487">


---

### TOC
#### 1-2. Introduction & Setup
#### 3. Clients and Servers
  - How to create a server in Node

#### 4. Requests and Responses
  - How to customize req and res in Node
  - Simple practice of creating response and routing
  
#### 5. NPM
  - We can install third-party packages via NPM.
  - Install Nodemon globally, which is a package for restarting server automatically
  - Package.json file(npm init)
  - lodash package(npm install lodash)

#### 6. Express
  - npm install express

#### 7. View Engines
  - EJS
  - In html, <% %> or <%= value %> <%- include %>works for EJS

#### 8. Middleware
  - The order of middleware is important
  - Logger middleware, Authentication middleware, Parsing JSON.... etc.
  - 3rd party middleware package - ex) morgan - logger
  - static files middleware(express.static)

#### 9. MongoDB
  - Collection -> Table
  - Document -> Record
  - MongoDB Atlas
  - Mongoose: ODM library(object document mapping library)
  - how to read env files **https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/

#### 10. Get, Post, Delete Requests
  - Route parameters(ex. localhost:3000/blogs/:id)
  - EJS Beautify formatter

#### 11. Express router & MVC
  - Express router
  - Model, View, Controller -> keeps code more modular and reusable