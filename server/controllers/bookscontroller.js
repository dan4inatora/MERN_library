const mongoose = require("mongoose");
const {Book, bookSchema} = require("../models/booksmodel");
const Author = require("../models/authormodel")
const upload = require("../middleware/multerService");
const crudDelete = require('../services/deleteService');
const modelTypes = require('../helpers/modelTypes');
const getAvgRating = require('../services/getAvgRating');
const getComments = require('../services/getCommentsService');
const getCommentId = require('../services/findCommentIdByUsernameService');

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
  Book.findOne({_id:req.params.id}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getBookByName = (req, res, next) => {
  Book.findOne({name:req.params.name}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  })
}

module.exports.getBookAuthor = (req, res, next) => {
  Book.findOne({_id:req.params.id}, async function(err, data) {
    if (err) {
      return res.status(404).send(err);
    } else {
      console.log(data.author_id);
      await Author.findOne({_id : data.author_id}, function(err, author){
        if (err) {
          return res.status(404).send(err);
        }
        else{
          return res.status(200).send(author);
        }
      })
      
    }
  })
}

module.exports.createBook = (req, res, next) => {
  upload(req, res, (err) => {
    if(err){
      return res.send(err);
    } 
    else {
      if(req.file == undefined){
        return res.send( 'Error: No File Selected!');
      } 
      else {
        console.log(req.file);
        //Author id should be a valid ID for mongoose
        //res.send(req.file.path);
        const {name, descriprion,author_id} = req.body;
        const book = new Book();
        book.name = name;
        book.descriprion = descriprion;
        //book.author_id = new mongoose.Types.ObjectId;
        book.author_id = author_id;
        book.imagePath = req.file.path;
        book.save((err, doc) => {
          if(!err){
            return res.send(doc);
          }
          else{
            return res.status(500).send(err);
          }
        })
      }
    }
  });

}

module.exports.deleteBook = (req, res, next) => {
  crudDelete(req, res, next, modelTypes.Book) 
}

module.exports.mostRecent = (req, res, next) => {
  Book.find({}, function(err, data) {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(data);
    }
  }).limit(10);
}

module.exports.getAvgRating = (req, res, next) => {
  const bookId = req.params.bookId;
  Book.findOne({_id : bookId}, function(err, book) {
    if (err) {
      return res.send(err);
    }
    else{
      return res.send('' + getAvgRating(book.rating));
    }
  })
}

module.exports.userDeleteComment = async (req, res, next) => {
  const bookId = req.params.bookId;
  const username = req.user.email;
  const comments = await getComments(bookId);
  const commentId = getCommentId(comments, username);
  if(commentId != ''){
    modelTypes.Book.update(
      { "_id": bookId },
      { "$pull": { "comments_id": commentId } },
      { "multi": true },
      function(err,status) {
        if(!err){
          res.send(status);
        }
      }
    )
  }
  else{
    res.send("No comment linked to that user");
  }

}

module.exports.userDeleteCommentEasy = async (req, res, next) => {
  const bookId = req.body.bookId;
  const commentId = req.body.commentId;
    modelTypes.Book.update(
      { "_id": bookId },
      { "$pull": { "comments_id": commentId } },
      { "multi": true },
      function(err,status) {
        if(!err){
          res.send(status);
        }
      }
    )
}

