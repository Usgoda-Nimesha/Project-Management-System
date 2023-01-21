const mongoose = require("mongoose");

const studentProjectModel = mongoose.Schema({
    pid:{
        type:String,
    },
    studentId:{
        type:String,
    },
    projectLink:{
        type:String,
    },
    submissionDate:{
        type:String,
    },

})

module.exports = mongoose.model("StudentProject", studentProjectModel);