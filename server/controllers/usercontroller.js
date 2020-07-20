const mongoose = require("mongoose");
const User = require("../models/usersmodel");
const passport = require("passport");
const register = require('../services/registerService');

module.exports.register = (req, res, next) => {
  register(req, res, next);
};

module.exports.login = async (req, res, next) => {
  await passport.authenticate(
    "local",
    { session: true },
    async (err, user, info) => {
      if (err) {
        return res.status(400).json(err);
      } else if (user) {
        try {
          await req.logIn(user, err => {
            if (err) {
              return next(err);
            }
          });
          console.log(req.session);
          return res.status(200).send({ user });
        } catch (err) {
          return next(err);
        }
      } else {
        return res.status(404).json(info);
      }
    }
  )(req, res, next);
};

module.exports.edit = (req, res, next) => {
  const email = req.user.email;
  const { newname, newpassword } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) res.send("Email not registered");
    else {
      if (password != undefined) {
        user.password = newpassword;
      }
      if (newname != undefined) {
        user.name = newname;
      }
      user.save();
      res.send(user);
    }
  });
};

