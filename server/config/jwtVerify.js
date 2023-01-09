const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  var token;
  if ("authorization" in req.headers) {
    token = req.headers["authorization"].split(" ")[1];
  }
  if (!token) {
    return res.status(403).send({ auth: false });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      // check for errors
      console.log(decoded._id);
      if (err) {
        return res
          .status(500)
          .send({ auth: false, message: "Authentication failed" });
      } else {
        req._id = decoded._id;
        next();
      }
    });
  }
};
