const passport = require("passport");

// User's email
var email;

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
const getSuccess = (req, res, next) => {
  // Set email
  email = req.user.emails[0].value;

  // Check for the correct user
  if (req.user.emails[0].value === process.env.AUTHENTICATION_EMAIL) {
    res.redirect("http://localhost:3000/practice-worksheets/admin/");
  } else {
    getLogout(req, res, next);
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

// Logout
const getLogout = (req, res, next) => {
  // Reset email variable
  email = null;

  // Logout
  req.logout(function (err) {
    if (err) {
      console.log("Error logging out: " + err);
      return next(err);
    }
  });

  // Delete session and cookie
  req.session.destroy((err) => {
    res.clearCookie("connect.sid");

    res.redirect("http://localhost:3000/practice-worksheets/admin");
  });
};

// Obtain email
const getEmail = (req, res) => {
  if (email == null) {
    res.send(null);
  } else {
    res.send(email);
  }
};

// Obtain correct email
const getCorrectEmail = (req, res) => {
  res.send(process.env.AUTHENTICATION_EMAIL);
};

module.exports = {
  getAuthentication,
  getCallback,
  getSuccess,
  getFailure,
  getLogout,
  getEmail,
  getCorrectEmail,
};
