const express = require('express');
const router = express.Router();
const db = require('../../db/client');
const db_functions = require('../../db/db_functions');

/**
 * Returns all students in the database.
 */
router.get('/', async (request, response) => {
  try {
    await db_functions.getAll(db, `SELECT * FROM students`, [], response)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    })
  }
})

/**
 * Returns a single student in the database.
 */
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    await db_functions.get(db, 
      `SELECT * FROM students WHERE studentId = ?`, [id], response)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    })
  }
})

/**
 * Creates a student in the database and returns the created student object.
 */
router.post('/', async (request, response) => {
  try {
    const {userId, firstName, lastName, program, email} = request.body;
    await db_functions.run(db, 
      `INSERT INTO 
        students(
          userId, 
          firstname, 
          lastname, 
          program, 
          email
        ) VALUES 
        (?, ?, ?, ?, ?)`, 
        [userId, firstName, lastName, program, email], response)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    });
  }
})

/**
 * Deletes a student from the database and returns the deleted student object.
 */
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    await db_functions.run(db, 
      `DELETE FROM students WHERE studentId = ?`, 
        [id], response)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    })
  }
})

/**
 * Modifies a student in the database and returns the modified student object.
 */
router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const {firstName, lastName, program, email} = request.body;
    await db_functions.run(db, 
      `UPDATE 
        students 
      SET 
        firstname = ?, 
        lastname = ?, 
        program = ?, 
        email = ? 
      WHERE 
        studentId = ?`, 
      [firstName, lastName, program, email, id], response)
  } catch (error) {
    console.log(error.message);
    response.status(500).send({
      error: 'Pending Implementations'
    })
  }
})

module.exports = router