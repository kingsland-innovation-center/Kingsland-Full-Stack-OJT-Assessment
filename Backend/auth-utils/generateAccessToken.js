const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const THE_SECRET = process.env.JWT_SECRET;

function generateAccessToken(id, username) {
  return jwt.sign(
    {
      id: id,
      username: username,
    },
    THE_SECRET,
    { algorithm: "HS256" }
  );
}

module.exports = generateAccessToken;