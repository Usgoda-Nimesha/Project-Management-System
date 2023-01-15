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
// Lecturer related
const lecturerDashboard = require("../controllers/lecturer-dashboard-controller");

// Student related
const studentDashboard = require("../controllers/student-dashboard-controller");

// login routing
router.post("/register", registerCtrl.userRegister);
router.post("/login", loginCtrl.userLogin);

// student routing
router.get(
  "/studentDashboard",
  jwtVerify.verifyToken,
  studentDashboard.dashboard
);

// lecturer routing
router.get(
  "/lecturerDashboard",
  jwtVerify.verifyToken,
  lecturerDashboard.dashboard
);

// admin routing
router.get("/adminDashboard", jwtVerify.verifyToken, adminDashboard.dashboard);
// Degree
router.post("/degree", degreeCtrl.saveDegree);
router.get("/degree", degreeCtrl.getDegree);
router.put("/degree/:id", degreeCtrl.updateDegree);
router.delete("/degree/:id", degreeCtrl.deleteDegree);
// Module
router.post("/saveModule", moduleCtrl.saveModule);
router.get("/module/:id", moduleCtrl.getModules);
//router.put("/module/:m_id", moduleCtrl.updateModule);
module.exports = router;
