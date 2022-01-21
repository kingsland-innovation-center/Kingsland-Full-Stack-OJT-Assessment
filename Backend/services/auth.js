const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (request, response, next) => {
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token === null) return response.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return response.sendStatus(403)
    request.user = user
    next()
  })
};

const generateAccessToken = (request, response, result) => {
  const accessToken = jwt.sign(request.body, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7days",
  });
  return response.json({
    accessToken: accessToken,
    id: result.rows[0].id
  });
};


module.exports = {
  authenticateToken,
  generateAccessToken
}