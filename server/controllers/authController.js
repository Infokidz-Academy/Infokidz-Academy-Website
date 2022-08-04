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
const getSuccess = (req, res, next) => {
  // Check for the correct user
  if (req.user.emails[0].value === process.env.AUTHENTICATION_EMAIL) {
    res.redirect(
      `http://localhost:3000/practice-worksheets/admin/${process.env.AUTHENTICATION_KEY}`
    );
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

module.exports = {
  getAuthentication,
  getCallback,
  getSuccess,
  getFailure,
  getLogout,
};
