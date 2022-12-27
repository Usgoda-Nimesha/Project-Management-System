const mongoose = require("mongoose");
// connecting to mongoDB
mongoose.connect(process.env.MONGODB_URI, (err) => {
  // if there is no connection error
  if (!err) {
    console.log(
      "Successfully connected to database at: " + process.env.MONGODB_URI
    );
  } else {
    console.log(
      "Error connecting to database at: " +
        process.env.MONGODB_URI +
        "\n" +
        JSON.stringify(err, undefined, 2)
    );
  }
});

require("./student-register.model");
