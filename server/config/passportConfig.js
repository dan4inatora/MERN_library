const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

let User = require("../models/usersmodel");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function(err, user) {
    done(null, user);
  });
});

passport.use(
  "local",
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    (username, password, done) => {
      User.findOne({ email: username }, async (err, user) => {
        if (err) return done(err);
        else if (!user)
          return done(null, false, { message: "Email not registered" });
        else if (!(await user.verifyPass(password)))
          return done(null, false, { message: "Wrong password" });
        else return done(null, user);
      });
    }
  )
);
