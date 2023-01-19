const mongoose = require("mongoose");

const StudentDegree = mongoose.model("StudentDegree");

module.exports.assignDegree= (req,res,next)=>{
var studentDegree = new StudentDegree();
studentDegree._id = req.body._id;
studentDegree.degreeId = req.body.degreeId;
studentDegree.save((err,doc)=>{
    if(!err){
        res.send(doc);
    }
});
};


