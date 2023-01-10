const mongoose = require("mongoose");

const moduleSchema = mongoose.Schema({
  degreeId: {
    type: String,
  },
  moduleName: {
    type: String,
  },
  moduleId: {
    type: String,
  },
  duration: {
    type: String,
  },
});

const degreeSchema = mongoose.Schema({
  degreeName: {
    type: String,
  },
  degreeId: {
    type: String,
  },
  degreeType: {
    type: String,
  },
  pace: {
    type: String,
  },
  duration: {
    type: String,
  },
});

module.exports = mongoose.model("Degree", degreeSchema);
module.exports = mongoose.model("Module", moduleSchema);
