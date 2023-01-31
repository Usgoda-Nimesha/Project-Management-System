const passport = require("passport");
const localStratergy = require("passport-local").Strategy;
const mongoose = require("mongoose");

var User = mongoose.model("User");

passport.use(
  new localStratergy({ usernameField: "email" }, (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      // if there is an error
      if (err) {
        return done(err);
      }
      // if there is no error, check for null
      else if (!user) {
        return done(null, false, { message: "User is not registered" });
      }
      // if password is wrong
      else if (!user.verifyPassword(password)) {
        return done(null, false, { message: "Email or Password is incorrect" });
      }

      // if both email and password is valid
      else {
        return done(null, user);
      }
    });
  })
);
