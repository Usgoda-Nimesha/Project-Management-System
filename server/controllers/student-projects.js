
  const mongoose = require("mongoose");

  const Projects = mongoose.model("ModuleSection");

  module.exports.getProjects = (req,res,next)=>{
     Projects.find({id:req.params.id},(err,project)=>{
        if(!err){
            return res.send(project)
        }
        else{
            console.log("Error")
        }
     })
  }