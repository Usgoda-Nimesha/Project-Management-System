
  const mongoose = require("mongoose");

  const StudentProjects = mongoose.model("StudentProject");

  module.exports.saveProject = (req,res,next)=>{
    var studentProject = new StudentProjects();
    console.log(req.body)
    studentProject.pid = req.body.pid;
    studentProject.studentId = req.body.studentId;
    studentProject.projectLink = req.body.projectLink;
    studentProject.submissionDate = req.body.submissionDate;
    studentProject.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
    });
  };

