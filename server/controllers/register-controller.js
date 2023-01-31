const mongoose = require("mongoose");

const User = mongoose.model("User");

// function to handle a request from client side
module.exports.userRegister = (req, res, next) => {
  console.log(req.body)
  var user = new User();
  (user.firstName = req.body.firstName),
    (user.lastName = req.body.lastName),
    (user.email = req.body.email),
    (user.role = req.body.role),
    (user.password = req.body.password),
    // newly saved record details will be passed through doc parameter
    user.save((err, doc) => {
      if (!err) {
        res.send(doc);
      }
    });
};
