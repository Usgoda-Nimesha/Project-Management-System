// configuration file
var config = require("./config.json");
// setting up development enviornment
// passing value into command line variable NODE_ENV
var env = process.env.NODE_ENV || "development";
// get configuration data based on the enviornment
var getConfig = config[env];
// get keys from the data and assign values for the
// key values dictionary(process.env)
Object.keys(getConfig).forEach((key) => (process.env[key] = getConfig[key]));
