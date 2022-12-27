// this file will contain common routes inside the application
const express = require("express");
const router = express.Router();
const studentRegisterCtrl = require("../controllers/student-register.controller");

router.post("/register/student", studentRegisterCtrl.studentRegister);
module.exports = router;
