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

// Authentication success
const getSuccess = (req, res) => {
  // Check for the correct user
  if (req.user.emails[0].value === process.env.AUTHENTICATION_EMAIL) {
    res.redirect(
      `http://localhost:3000/practice-worksheets/admin/${process.env.AUTHENTICATION_KEY}`
    );
  } else {
    res.redirect("http://localhost:3000/practice-worksheets/admin");
  }
};

// Authentication failure
const getFailure = (req, res, next) => {
  // Delete session and cookie
  req.session.destroy((err) => {
    res.clearCookie("connect.sid");

    res.redirect("http://localhost:3000/practice-worksheets/admin");
  });
};

module.exports = {
  getAuthentication,
  getCallback,
  getSuccess,
  getFailure,
};
