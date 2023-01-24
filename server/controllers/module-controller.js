const mongoose = require("mongoose");

const Module = mongoose.model("Module");

module.exports.saveModule = (req, res, next) => {
  var module = new Module();

  module.degreeId = req.body.degreeId;
  module.moduleId = req.body.moduleId;
  module.moduleName = req.body.moduleName;
  module.duration = req.body.duration;
  module.save((err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
};

module.exports.getModules = (req, res, next) => {
  Module.find({ degreeId: req.params.id }, (err, module) => {
    if (!err) {
      return res.send(module);
    } else {
      console.log("Error finding modules" + JSON.stringify(err, undefined, 2));
    }
  });
};



module.exports.updateModule = (req, res) => {
  console.log("hello")
  console.log(req.params.m_id)
  var module = {
    degreeId:req.body.degreeId,
    moduleName: req.body.moduleName,
    moduleId: req.body.moduleId,
    duration:req.body.duration
  };
  Module.findByIdAndUpdate(
    req.params.m_id,
    {$set:module},
    {new:true},
    (err,doc)=>{
      if(!err){
        res.send(doc)
      }else{
        console.log("Error updating module")
      }
    }
  )
};

// delete modules
module.exports.deleteModule = (req,res)=>{
Module.findByIdAndDelete(req.params.mid,(err,doc)=>{
  if(!err){
    res.send(doc);
  }else{
    console.log("Error deleting module")
  }
});
};
