const mongoose = require("mongoose");
const Author = require("../models/authormodel");
const Book = require('../models/booksmodel');
const crudDelete = require('../services/deleteService');
const modelTypes = require('../helpers/modelTypes');
const findBookbyId = require('../services/findBookbyIdService');

module.exports.getAuthors = (req, res, next) => {
  Author.find({}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getAuthorbyId = (req, res, next) => {
  Author.findOne({_id:req.params.id}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getAuthorbyName = (req, res, next) => {
  Author.findOne({name:req.params.name}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getAuthorBooks = (req, res, next) => {
  Author.findOne({_id:req.params.id}, async function(err, data) {
    if (err) {
      return res.status(404).send(err);
    } 
    else {
      let bookArray = [];
      for(let i = 0; i < data.books_id.length; i++){
         bookArray.push(await findBookbyId(data.books_id[i]))
      }
      return res.send(bookArray);
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

module.exports.deleteAuthor = (req, res, next) => {
  crudDelete(req, res, next, modelTypes.Author)    
}

