var sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/university_db.db', (error) => {
  if (error) {
    return console.error(error.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.run('CREATE TABLE IF NOT EXISTS users (userId integer PRIMARY KEY, firstname text, lastname text, username text, password text)', (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log('Users table created successfully.')
});

db.run('CREATE TABLE IF NOT EXISTS students (studentId integer PRIMARY KEY, userId integer, firstname text, lastname text, program text, email text)', (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log('Students table created successfully.')
})

module.exports = db;