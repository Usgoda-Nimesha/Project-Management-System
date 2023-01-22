const mongoose = require("mongoose");

const StudentProject = mongoose.model("StudentProject");


module.exports.getSubmissions = (req,res,next)=>{
    console.log(req.params.pid);
    StudentProject.find({pid:req.params.pid},(err,studentProject)=>{
        if(!err){
            return res.send(studentProject);
        }else{
            console.log("Error finding student projects "+JSON.stringify(err, undefined, 2))
        }
    })

}