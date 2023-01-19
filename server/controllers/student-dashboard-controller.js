const mongoose = require("mongoose");
const StudentDegree = mongoose.model("StudentDegree");
const Module = mongoose.model("Module");

const _ = require("lodash");

module.exports.dashboard = (req, res, next) => {
  
  StudentDegree.findOne({ _id: req._id }, (err, studentDegree) => {
    Module.find({degreeId:studentDegree.degreeId},(errm,module)=>{
      if(!errm){
        console.log
        return res.send(module)
      }
    })
    
    
  });
};

// module.exports.dashboard = (req, res, next) => {
  
//   StudentDegree.findOne({ _id: req._id }, (err, studentDegree) => {
    
//     if (!studentDegree) {
//       return res
//         .status(404)
//         .json({ status: false, message: "User record not found" });
//     } else {
//       return res.status(200).json({
//         status: true,
//         studentDegree: _.pick(studentDegree, ["degreeId"]),
//       });
//     }
//   });
// };
