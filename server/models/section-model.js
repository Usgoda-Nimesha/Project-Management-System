const mongoose = require("mongoose");


  const moduleSectionModel = mongoose.Schema({
    id:{
        type:String
    },
    sectionName:{
        type:String
    },
    sectionDescription:{
        type:String
    },
  })

  module.exports = mongoose.model("ModuleSection", moduleSectionModel);