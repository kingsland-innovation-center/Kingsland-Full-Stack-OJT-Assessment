const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  // const token = authHeader && authHeader.split(" ")[1];

  if (typeof authHeader !== "undefined") {
    const bearer = authHeader.split(" ");

    const bearerToken = bearer[1];
    request.token = bearerToken;
    next();
  } else {
    response.sendStatus(403);
  }

  // if (request.token === null) return response.sendStatus(401);

  // jwt.verify(request.token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
  //   if (error) return response.sendStatus(403);
  //   request.username = user;
  //   next();
  // });
};

module.exports = authenticateToken;
