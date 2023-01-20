const mongoose = require("mongoose");

const moduleSectionModel = mongoose.model("ModuleSection");

module.exports.addSection = (req,res)=>{
    
    var section = new moduleSectionModel();
    section.id = req.body._id;
    section.sectionName = req.body.sectionName;
    section.sectionDescription = req.body.sectionDescription
    section.save((err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            console.log(err);
        }
    })
  console.log(req.body._id)
}