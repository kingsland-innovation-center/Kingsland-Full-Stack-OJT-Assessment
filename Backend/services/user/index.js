const express = require('express')
const router = express.Router()
const db = require('../../db/client');
const bcrypt = require("bcryptjs");
const generateAccessToken = require("../../auth-utils/generateAccessToken");
const authenticateToken = require("../../auth-utils/authenticateToken");
const hashPassword = require("../../auth-utils/hashPassword");
const db_functions = require('../../db/db_functions');


/**
 * Returns the user list.
 * Observe good security practices such as removing the password field 
 * from the response object.
 * 
 * If :id is given, the user with the given id will be returned.
 */

router.get('/', async (request, response) => { 
  try {
    await db_functions.getAll(db, 
      `SELECT 
        userId, 
        firstname, 
        lastname, 
        username
      FROM 
        users`, 
      [], response);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    })
  }
})

router.get('/isAuth', authenticateToken, async (request, response) => {
  try {
    response.json({ auth: true, user: request.user });
  } catch (error) {
    console.log(error.message)
  }
});


/**
 * Returns the user with the given id.
 */

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    await db_functions.get(db, 
      `SELECT 
        firstname, 
        lastname, 
        username 
      FROM 
        users 
      WHERE 
        userId = ?`, 
      [id], response);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    })
  }
})

/**
 * Registers a new user.
 */

router.post('/register', async (request, response) => { 
  try {
    const {firstName, lastName, username, password} = request.body;
    await hashPassword(password, async (hashError, hashedPassword) => {
      await db_functions.run(db, 
        `INSERT INTO 
          users(
            firstname, 
            lastname, 
            username, 
            password
          ) 
          VALUES (?, ?, ?, ?)`, 
        [firstName, lastName, username, hashedPassword], response);
    })
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    });
  }
})

/**
 * Authenticates a user.
 */

router.post('/login', async (request, response) => {
  try {
    const { username, password } = request.body;
    await db.get(
      `SELECT 
        userId, 
        firstname, 
        lastname, 
        username, 
        password 
      FROM 
        users 
      WHERE 
        username = ?`,
      [username],
      (error, result) => {
        if (!result) {
          response.json({
            success: false,
            token: null,
            message: "User does not exist",
          });
        } else {
          bcrypt.compare(
            password,
            result.password,
            (compareError, correctPassword) => {
              if (correctPassword) {
                const token = generateAccessToken(
                  result.userId,
                  result.username,
                );
                response.json({
                  success: true,
                  token: token,
                });
              } else {
                response.json({
                  success: false,
                  token: null,
                  message: "Incorrect email or password",
                });
              }
            }
          );
        }
      }
    );
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    })
  }
})

module.exports = router 