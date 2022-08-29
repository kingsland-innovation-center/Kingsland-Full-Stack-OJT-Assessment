const getUsers = 'SELECT * FROM users;';
const getUserById = 'SELECT * FROM users WHERE id = $1;';
const checkUserExists = 'SELECT * FROM users WHERE username = $1;';
const addUser =
  'INSERT INTO users (firstName, lastName, username, hashed_password) VALUES ($1, $2, $3, $4)';
const authenticateUser = 'SELECT * FROM users WHERE username = $1;';

module.exports = {
  getUsers,
  getUserById,
  checkUserExists,
  addUser,
  authenticateUser,
};
