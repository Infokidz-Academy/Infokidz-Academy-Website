const passport = require("passport");

// Send google authentication
const getAuthentication = passport.authenticate("google", ["email"]);

module.exports = {
  getAuthentication,
};
