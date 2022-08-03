const passport = require("passport");

// Send google authentication
const getAuthentication = passport.authenticate("google", ["email"]);

// Google callback after authentication
const getCallback = passport.authenticate("google", {
  // URL to bring to user to upon success
  successRedirect: "/auth/protected",
  // URL to bring to user to upon failure
  failureRedirect: "/auth/failure",
});

module.exports = {
  getAuthentication,
  getCallback,
};
