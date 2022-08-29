const getStudents = 'SELECT * FROM students;';
const getStudentById = 'SELECT * FROM students WHERE id = $1;';
const addStudent =
  'INSERT INTO students (firstName, lastName, email, program) VALUES ($1, $2, $3, $4);';
const deleteStudentById = 'DELETE FROM students WHERE id = $1;';
const updateStudent =
  'UPDATE students SET firstName = $1, lastName = $2, email = $3, program = $4 WHERE id = $5;';
const getLastAddedStudent = 'SELECT * FROM students ORDER BY ID DESC LIMIT 1;';

module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudentById,
  updateStudent,
  getLastAddedStudent,
};
