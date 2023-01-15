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
  var module = {
    moduleName: req.body.moduleName,
    moduleId: req.body.moduleId,
  };
};
