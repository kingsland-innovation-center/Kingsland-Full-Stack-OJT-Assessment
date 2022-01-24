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

const auth = require("../auth");

/**
 * Returns all students in the database.
 */
router.get("/", auth.authenticateToken, (request, response) => {
  pool.query(
    "SELECT ID, students.first_name, students.last_name, students.program, students.email FROM students",
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
 * Returns a single student in the database.
 */
router.get("/:id", auth.authenticateToken, (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT ID, students.first_name, students.last_name, students.program, students.email FROM students  WHERE id = $1",
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
 * Creates a student in the database and returns the created student object.
 */
router.post("/", auth.authenticateToken, (request, response) => {
  const { firstName, lastName, program, email } = request.body;

  pool.query(
    "INSERT INTO students (first_name, last_name, program, email) VALUES ($1, $2, $3, $4)",
    [firstName, lastName, program, email],
    (error, result) => {
      if (error) {
        response.status(500).send({
          error: error,
        });
      }
      response.status(201).send(result.rows[0]);
    }
  );
});

/**
 * Deletes a student from the database and returns the deleted student object.
 */
router.delete("/:id", auth.authenticateToken, (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM students WHERE id = $1 ", [id], (error, result) => {
    if (error) {
      response.status(500).send({
        error: error,
      });
    }
    response.status(201).send("Student deleted");
  });
});

/**
 * Modifies a student in the database and returns the modified student object.
 */
router.patch("/:id", auth.authenticateToken, (request, response) => {
  const id = parseInt(request.params.id);
  const { firstName, lastName, program, email } = request.body;

  pool.query(
    "UPDATE students SET first_name = $1, last_name = $2, program = $3, email = $4 WHERE id = $5",
    [firstName, lastName, program, email, id],
    (error, result) => {
      if (error) {
        response.status(500).send({
          error: error,
        });
      }
      response.status(201).send("Student details changed");
    }
  );
});

module.exports = router;
