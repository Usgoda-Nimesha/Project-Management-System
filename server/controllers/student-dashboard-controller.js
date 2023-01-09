const mongoose = require("mongoose");
const User = mongoose.model("User");
const _ = require("lodash");

module.exports.dashboard = (req, res, next) => {
  User.findOne({ _id: req._id }, (err, user) => {
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User record not found" });
    } else {
      return res.status(200).json({
        status: true,
        user: _.pick(user, ["firstName", "lastName", "email", "role"]),
      });
    }
  });
};
