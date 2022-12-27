const mongoose = require("mongoose");

const Student = mongoose.model("Student");

// function to handle a request from client side
module.exports.studentRegister = (req, res, next) => {
  var student = new Student();
  (student.fullName = req.body.fullName),
    (student.studentId = req.body.studentId),
    (student.studentEmail = req.body.studentEmail),
    (student.currentBatch = req.body.currentBatch),
    (student.password = req.body.password),
    // newly saved record details will be passed through doc parameter
    student.save((err, doc) => {
      if (!err) {
        res.send(doc);
      }
    });
};
