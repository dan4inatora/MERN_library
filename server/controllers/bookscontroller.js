const mongoose = require("mongoose");
const Book = require("../models/booksmodel");
const upload = require("../middleware/multerService");


module.exports.getBooks = (req, res, next) => {
  Book.find({}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getBookById = (req, res, next) => {
  Book.find({id:req.params.id}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getBookByName = (req, res, next) => {
  Book.find({name:req.params.name}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.createBook = (req, res, next) => {
  upload(req, res, (err) => {
    if(err){
      res.send(err);
    } 
    else {
      if(req.file == undefined){
        res.send( 'Error: No File Selected!');
      } 
      else {
        console.log(req.file);
        res.send(req.file.path);
      }
    }
  });
  // const {name, descriprion,author_id} = req.body;
  // const book = new Book();
  // book.name = name;
  // book.descriprion = descriprion;
  // book.author_id = author_id;
  // book.save((err, doc) => {
  //   if(!err){
  //     res.send(doc);
  //   }
  //   else{
  //     res.status(500).send(err);
  //   }
  // })
}