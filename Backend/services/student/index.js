const express = require('express');
const router = express.Router();
const pool = require('../../db');
const queries = require('./queries');

/**
 * Returns all students in the database.
 */
router.get('/', (request, response) => {
  pool.query(queries.getStudents, (error, result) => {
    if (error) throw error;
    // console.log(JSON.stringify(result.rows));
    response.status(200).json(result.rows);
  });
});

/**
 * Returns a single student in the database.
 */
router.get('/:id', (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (error) throw error;

    if (result.rows.length) {
      response.status(200).json(result.rows[0]);
    } else {
      response.send('Student does not exist');
    }
  });
});

/**
 * Creates a student in the database and returns the created student object.
 */
router.post('/', (request, response) => {
  const { firstName, lastName, email, program } = request.body;
  pool.query(
    queries.addStudent,
    [firstName, lastName, email, program],
    (error, result) => {
      if (error) throw error;
      pool.query(queries.getLastAddedStudent, (error, result) => {
        response.send(result.rows[0]);
      });
    }
  );
});

/**
 * Deletes a student from the database and returns the deleted student object.
 */
router.delete('/:id', (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(queries.getStudentById, [id], (error, result) => {
    if (result.rows.length) {
      if (error) throw error;
      pool.query(queries.deleteStudentById, [id], (error, result) => {
        if (error) throw error;
      });
      response.json(result.rows[0]);
    } else {
      response.send('User does not exist');
    }
  });
});

/**
 * Modifies a student in the database and returns the modified student object.
 */
router.patch('/:id', (request, response) => {
  const { firstName, lastName, email, program } = request.body;
  const id = parseInt(request.params.id);
  pool.query(
    queries.updateStudent,
    [firstName, lastName, email, program, id],
    (error, result) => {
      if (error) throw error;
      pool.query(queries.getStudentById, [id], (error, result) => {
        response.send(result.rows[0]);
      });
    }
  );
});

module.exports = router;
