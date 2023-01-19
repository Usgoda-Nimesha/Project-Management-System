const mongoose = require("mongoose");


  const studentDegreeModel = mongoose.Schema({
    _id:{
        type:String,
    },
    degreeId:{
        type:String,
    },
  });

  module.exports = mongoose.model("StudentDegree", studentDegreeModel);