// configuration files
require("./config/config");
require("./models/db-con");
require("./config/passportConfig");

require("./web-socket");

// required packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

// routers file
const idxRouter = require("./routes/index.router");

var app = express();

// configure middleware
// app.use() function is mainly used for configuring middleware
app.use(bodyParser.json());
// node.js application and the client side angular application are running
// in 2 different port numbers, therefore to communicate between these
// 2 applications cors must be enabled
app.use(cors());
app.use(passport.initialize());
app.use("/api", idxRouter);

// start the express server
app.listen(process.env.PORT, () =>
  console.log("server started at port: " + process.env.PORT)
);
