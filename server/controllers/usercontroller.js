const mongoose = require("mongoose");
const User = require("../models/usersmodel");
const Comment = require("../models/commentmodel");
const passport = require("passport");
const register = require('../services/registerService');
const modelTypes = require('../helpers/modelTypes');
const containsUsername = require('../services/containsUsernameService');
const changeRating = require('../services/changeRatingForUser');

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
          //console.log(req.session);
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

module.exports.userProfile = (req, res, next) =>{
  if(req.user === undefined){
    return res.status(404).send("User not found");
  }
  User.findOne({ _id: req.user._id },
      (err, user) => {
          if (!user)
              return res.status(404).send("User not found");
          else
              return res.status(200).send(user);
      }
  );
}


module.exports.logout = (req, res, next) => {
  req.logout();
  req.session.destroy(function (err) {
    res.send(err); //Inside a callback… bulletproof!
  });
  res.clearCookie("_redisDemo");
};

module.exports.addCommentToBook = async (req, res, next) => {
  const bookId = req.params.bookId;
  const {title, text} = req.body;
  const comment = new Comment();
  comment.sender = req.user.email;
  comment.title = title;
  comment.text = text;
  await comment.save((err, doc) => {
      if(err){
          res.send(err);
      }
  })
  await modelTypes.Book.findOne({_id : bookId}, async function(err, book) {
    if (err) {
      return res.status(404).send(err);
    } 
    else {
      if(book){
        book.comments_id.push(comment._id);
        await book.save();
        return res.send(book.comments_id);
      }
    }
  })
};


module.exports.addRating = async (req, res, next) => {
  const bookId = req.params.bookId;
  const {rating} = req.body;
  const user = req.user;
  await modelTypes.Book.findOne({_id : bookId}, async function(err, book) {
    if (err) {
      return res.status(404).send(err);
    } 
    else {
      if(book && !containsUsername(book.rating, user.email)){
        const ratingObj = {rating:rating, username: user.email};
        book.rating.push(ratingObj);
        await book.save();
        return res.send(book);
      }
      else{
        changeRating(book.rating, user.email, rating);
        await book.save();
        return res.send(book);
      }
    }
  })
};
