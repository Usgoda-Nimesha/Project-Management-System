////////// This file will contain common routes inside the application ////////
const express = require("express");
const router = express.Router();

// login related
const registerCtrl = require("../controllers/register-controller");
const loginCtrl = require("../controllers/login-controller");
const jwtVerify = require("../config/jwtVerify");

// Admin related
const adminDashboard = require("../controllers/admin-dashboard-controller");
const degreeCtrl = require("../controllers/degree-controller");
const moduleCtrl = require("../controllers/module-controller");
const studentDegree = require("../controllers/student-degree-controller")
// Lecturer related
const lecturerDashboard = require("../controllers/lecturer-dashboard-controller");
const getSubmissions = require("../controllers/get-submissions-controller")
// Student related
const studentDashboard = require("../controllers/student-dashboard-controller");
const lecturerSection = require("../controllers/lecturer-section");
const studentProjects = require("../controllers/student-projects")
const submitProject = require("../controllers/submit-project")

// login routing
router.post("/register", registerCtrl.userRegister);
router.post("/login", loginCtrl.userLogin);

// student routing
router.get(
  "/studentDashboard",
  jwtVerify.verifyToken,
  studentDashboard.dashboard
);
router.get("/getProject/:id",studentProjects.getProjects)
router.post("/saveProject",submitProject.saveProject)

// lecturer routing
router.get(
  "/lecturerDashboard",
  jwtVerify.verifyToken,
  lecturerDashboard.getAllModules
);

router.post("/addSection",lecturerSection.addSection)
router.get("/getSubmissions/:pid",getSubmissions.getSubmissions)
// admin routing
router.get("/adminDashboard", jwtVerify.verifyToken, adminDashboard.dashboard);
// Degree
router.post("/degree", degreeCtrl.saveDegree);
router.get("/degree", degreeCtrl.getDegree);
router.put("/degree/:id", degreeCtrl.updateDegree);
router.delete("/degree/:id", degreeCtrl.deleteDegree);
router.post("/studentDegree",studentDegree.assignDegree)
// Module
router.post("/saveModule", moduleCtrl.saveModule);
router.get("/module/:id", moduleCtrl.getModules);
router.put("/module/:m_id", moduleCtrl.updateModule);


module.exports = router;
