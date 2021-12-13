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

### Visual Mockup

![img](https://kingslanduniversity.com/wp-content/uploads/2021/12/OJT-Assessment-Mockup.png)

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

# Extra Credit

Here are some extra credit tasks that you can do. These tasks are not required. Only proceed if you have met the basic functionalities described before this section.

## Frontend
* Edit student interaction.
* Delete student interaction.
* Sidebar menu item is highlighted if it is the actively selected link.
* Sidebar menu items with subitems are collapsible (eg. `Student` menu item).
* Dynamic sidebar.
  * Sidebar menus items are not hard coded but instead, it should rely on a JSON object to dynamically generate the sidebar menu items.
* Modals for critical actions 
  * Prompts such as `Are you sure you want to delete the student?`
* Route restrictions
  * Unauthenticated users should only be allowed to access `/`, `/register`, and `/login` routes.

## Backend
* Tokenized Sessions
  * You may use your own algorithm to generate tokens.
  * You may opt to use cookies or local storage token.
* Authenticated links
  * Unauthenticated users can only access `/register/` and `/login/` routes.
  * Return `HTTP Error 401`.
* 