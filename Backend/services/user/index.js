require("dotenv").config();

const express = require("express");
const router = express.Router();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.PORT,
});

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const authenticateToken = require("../auth");
/**
 * Returns the user list.
 * Observe good security practices such as removing the password field
 * from the response object.
 *
 * If :id is given, the user with the given id will be returned.
 */

router.get("/", authenticateToken, (request, response) => {
  pool.query(
    "SELECT ID, users.first_name, users.last_name, users.username FROM users",
    (error, results) => {
      if (error) {
        response.status(500).send({
          error: error,
        });
      }
      response.status(200).json(results.rows);
    }
  );
});

/**
 * Returns the user with the given id.
 */
router.get("/:id", authenticateToken, (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(
    "SELECT ID, users.first_name, users.last_name, users.username FROM users WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        response.status(500).send({
          error: error,
        });
      }
      response.status(200).json(results.rows);
    }
  );
});

/**
 * Registers a new user.
 */
router.post("/register", async (request, response) => {
  const { firstName, lastName, username, password } = request.body;

  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    if (username) {
      pool.query(
        `SELECT users.username FROM users WHERE users.username = $1`,
        [username],
        function (error, results) {
          if (results.rows.length < 1) {
            pool.query(
              "INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)",
              [firstName, lastName, username, hashedPassword],
              (error, result) => {
                if (error) {
                  response.status(500).send({
                    error: error,
                  });
                }
                response.status(201).send("User is added");
              }
            );
          } else {
            response.send("Username already taken");
          }
        }
      );
    }
  } catch (error) {
    response.status(500).send({
      error: error,
    });
  }
});

/**
 * Authenticates a user.
 */
router.post("/login", async (request, response) => {
  const { username, password } = request.body;

  if (username) {
    pool.query(
      `SELECT users.username, users.password FROM users WHERE users.username = $1`,
      [username],
      async function (error, results) {
        if (error) {
          response.status(500).send({
            error: error,
          });
        }
        if (results.rowCount === 0) {
          return response.status(400).send("Cannot find user");
        }
        try {
          const compare = await bcrypt.compare(
            password,
            results.rows[0].password
          );
          if (compare) {
            const accessToken = jwt.sign(
              request.body,
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: "7days" }
            );
            response.json({
              accessToken: accessToken,
            });
          } else {
            response.status(200).send("failed login");
          }
        } catch (error) {
          response.status(500).send({
            error: error,
          });
        }
      }
    );
  }
  //   response.status(500).send({
  //     error: "Pending Implementations",
  //   });
});

module.exports = router;
