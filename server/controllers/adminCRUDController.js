const mongoose = require("mongoose");
const register = require('../services/registerService');
const crudDelete = require('../services/deleteService');
const modelTypes = require('../helpers/modelTypes');
const { use } = require("passport");
const findCommnetById = require('../services/findCommentByIdService');

module.exports.createUser = (req, res, next) => {
  register(req, res, next);
};

module.exports.deleteUser = (req, res, next) => {
  crudDelete(req, res, next, modelTypes.User)    
}

module.exports.changeName = async (req, res, next) => {
  const {newname, id} = req.body;
  const user = await modelTypes.User.updateOne({_id : id}, { name: newname });
  res.send(user);
}

module.exports.changePassword = async (req, res, next) => {
  const {newpass, id} = req.body;
  const user = await modelTypes.User.updateOne({_id : id}, { password: newpass });
  res.send(user);
}

module.exports.changeRole = async(req, res, next) => {
  const {role, id} = req.body;
  const user = await modelTypes.User.updateOne({_id : id}, { isAdmin: role });
  res.send(user);
}

module.exports.addAuthorToBook = async(req, res, next) => {
  const {authorId, bookId} = req.body;
  const book = await modelTypes.Book.updateOne({_id : bookId}, { author_id: authorId });
  res.send(book);
}

module.exports.addBookToAuthor = async(req, res, next) => {
  const {authorId, bookId} = req.body;
  modelTypes.Author.findOne({_id: authorId}, async function(err, doc) {
      if(doc){
        if(!doc.books_id.includes(bookId)){
          doc.books_id.push(bookId);
          await doc.save()
          return res.send("Book added");
        }
        else{
          return res.send("Duplicate book");
        }
      }
      else{
        return res.send(err);
      }
  })
}

module.exports.getAllComments = async(req, res, next) => {
  const bookId = req.params.bookId;
  let commentsArray = [];
  modelTypes.Book.findOne({_id : bookId}, async function(err, book) {
    if (err) {
      res.status(404).send(err);
    } else {
      for(let i = 0; i < book.comments_id.length; i++){
        commentsArray.push(await findCommnetById(book.comments_id[i]));
      }
      res.send(commentsArray);
    }
  })
}

module.exports.removeComment = (req, res, next) => {
  const bookId = req.params.bookId;
  const {commentId} = req.body;
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


