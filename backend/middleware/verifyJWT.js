require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = { id: decoded.id, username: decoded.lastname}; // Include schoolCode in req.user
    next();
  });
};

module.exports = verifyJWT;
