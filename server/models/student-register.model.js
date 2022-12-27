const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var studentRegisterSchema = new mongoose.Schema({
  fullName: {
    type: String,
  },
  studentId: {
    type: String,
  },
  studentEmail: {
    type: String,
  },
  currentBatch: {
    type: String,
  },
  password: {
    type: String,
  },
  secret: {
    type: String,
  },
});

// pre event for schema
studentRegisterSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(this.password, salt, (err, hash) => {
      this.password = hash;
      this.secret = salt;
      next();
    });
  });
});
// register schema inside mongoose
mongoose.model("Student", studentRegisterSchema);
