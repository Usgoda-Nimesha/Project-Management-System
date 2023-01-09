const passport = require("passport");
const mongoose = require("mongoose");
const _ = require("lodash");

const User = mongoose.model("User");

module.exports.userLogin = (req, res, next) => {
  // passport authentication funcction
  // execute local stratergy in passportConfig file

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(400).json(err);
    }
    // if user is valid return JWT token
    else if (user) {
      return res.status(200).json({ token: user.generateJwt() });
    }
    // if user is not validated and password is wrong
    else {
      return res.status(404).json(info);
    }
  })(req, res);
};
