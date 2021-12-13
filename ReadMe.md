<img src="https://kingslanduniversity.com/wp-content/uploads/2021/12/Kingsland-Technology-Philippines.png" width="45%"></img> <img src="https://kingslanduniversity.com/wp-content/uploads/2021/12/Kingsland-Innovation-Center.png" width="45%"></img> 

# Welcome, Prospect Intern!

This repository contains the preset codebase for the Full Stack OJT assessment.

# The Assessment

You have the technical freedom to install any libraries that you deem fit for the tasks.

## Frontend

The view components and routing have been made for you.

Your task is to create a collapsible sidebar that links these pages together.

For the unauthenticated user, the sidebar menus should only be:
* Home
* Register
* Login

For the authenticated user, the sidebar menus are:
* A placeholder photo and the full name of the logged in user
* Dashboard
* Students
  * List
  * Add Student
* Logout

## Backend

The routes have been premade for you. You have the freedom to use whatever database and ORM technology that you want. You may also opt to eliminate the database entirely and use in-memory storage.

Your task is to implement the actions behind the routes that fulfill the necessary requests.

Student
* GET (all) /student/
* GET (single) /student:/id
* DELETE /student/:id
* PATCH /student/:id

User
* GET (all) /user/
* GET (single) /user/:id
* POST /register/
* POST /login/