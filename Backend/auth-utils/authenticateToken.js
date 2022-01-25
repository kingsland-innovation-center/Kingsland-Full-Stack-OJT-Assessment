const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const THE_SECRET = process.env.JWT_SECRET;

function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) {
    return response.sendStatus(401);
  }

  jwt.verify(token, THE_SECRET, (error, user) => {

    if (error) {
      console.log(error);
      return response.sendStatus(403);
    } else {
      request.user = user;
    }
    // console.log(user);
    next();
  });
}

module.exports = authenticateToken;
