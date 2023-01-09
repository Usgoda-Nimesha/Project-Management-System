const mongoose = require("mongoose");
var ObjectId = require("mongoose").Types.ObjectId;
const _ = require("lodash");
const Degree = mongoose.model("Degree");

// save data
module.exports.saveDegree = (req, res, next) => {
  var dm = new Degree();
  (dm.degreeName = req.body.degreeName),
    (dm.degreeId = req.body.degreeId),
    (dm.degreeType = req.body.degreeType),
    (dm.pace = req.body.pace),
    (dm.duration = req.body.duration);
  // newly saved record details will be passed through doc parameter
  dm.save((err, doc) => {
    if (!err) {
      res.send(doc);
    }
  });
};

// get details regarding all degrees
module.exports.getDegree = (req, res) => {
  Degree.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error finding degrees" + JSON.stringify(err, undefined, 2));
    }
  });
};

// update a degree
module.exports.updateDegree = (req, res) => {
  var degree = {
    degreeName: req.body.degreeName,
    degreeId: req.body.degreeId,
    degreeType: req.body.degreeType,
    pace: req.body.pace,
    duration: req.body.duration,
  };
  Degree.findByIdAndUpdate(
    req.params.id,
    { $set: degree },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log("Error Updating Degree");
      }
    }
  );
};

// delete a degree
module.exports.deleteDegree = (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send("Record Not Found");
  }
  Degree.findByIdAndDelete(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error deleting degree");
    }
  });
};
