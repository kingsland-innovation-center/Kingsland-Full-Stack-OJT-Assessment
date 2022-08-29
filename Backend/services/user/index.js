const express = require('express');
const router = express.Router();
const pool = require('../../db');
const queries = require('./queries');
const bcrypt = require('bcrypt');
const e = require('express');
const saltRounds = 10;

function hashPassword(plainTextPassword, callback) {
  bcrypt.hash(plainTextPassword, saltRounds, callback);
}

/**
 * Returns the user list.
 * Observe good security practices such as removing the password field
 * from the response object.
 *
 * If :id is given, the user with the given id will be returned.
 */
router.get('/', (request, response) => {
  pool.query(queries.getUsers, (error, result) => {
    if (error) throw error;
    const users = result.rows.map((user) => {
      delete user.hashed_password;
      return user;
    });
    response.status(200).json(users);
  });
});

/**
 * Returns the user with the given id.
 */
router.get('/:id', (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(queries.getUserById, [id], (error, result) => {
    if (error) throw error;

    if (result.rows.length) {
      delete result.rows[0].hashed_password;
      response.status(200).json(result.rows[0]);
    } else {
      response.send('User does not exist');
    }
  });
});

/**
 * Registers a new user.
 */
router.post('/register', (request, response) => {
  const { firstName, lastName, username, password } = request.body;

  pool.query(queries.checkUserExists, [username], (error, result) => {
    if (error) throw error;

    if (result.rows.length) {
      if (error) throw error;
      response.send('Username already exists');
    } else {
      hashPassword(password, (hashError, hashedPassword) => {
        pool.query(
          queries.addUser,
          [firstName, lastName, username, hashedPassword],
          (error, result) => {
            if (error) throw error;
            response.status(201).send('Registration Complete');
          }
        );
      });
    }
  });
});

/**
 * Authenticates a user.
 */
router.post('/login', (request, response) => {
  const { username, password } = request.body;
  pool.query(queries.authenticateUser, [username], (error, result) => {
    if (error) throw error;
    if (result.rows.length) {
      bcrypt.compare(
        password,
        result.rows[0].hashed_password,
        (compareError, compareResult) => {
          if (compareResult) {
            delete result.rows[0].hashed_password;
            response.json({
              isUserValid: compareResult,
              user: result.rows[0],
            });
          } else {
            response.json({
              isUserValid: compareResult,
            });
          }
        }
      );
    } else {
      response.json({
        isUserValid: false,
      });
    }
  });
});

module.exports = router;
