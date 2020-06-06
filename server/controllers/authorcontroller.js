const mongoose = require("mongoose");
const Author = require("../models/authormodel");
const Book = require('../models/booksmodel');

module.exports.getAuthor = (req, res, next) => {
  Author.find({}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getAuthorbyId = (req, res, next) => {
  Author.find({id:req.params.id}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getAuthorbyName = (req, res, next) => {
  Author.find({name:req.params.name}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getAuthorBooks = (req, res, next) => {
  Author.find({id:req.params.id}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      const books = data.populate("books");
      res.send(books);
    }
  })
}

module.exports.createAuthor = (req, res, next) => {
  const author = new Author();
  author.name = req.body.name;
  author.save((err, doc) => {
    if(!err){
      res.send(doc);
    }
    else{
      res.status(500).send(err);
    }
  })
    
}