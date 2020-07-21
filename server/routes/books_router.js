const commentscontoller = require('../controllers/commentscontoller');
const booksController = require('../controllers/bookscontroller');
const auth = require('../middleware/authenticate');
const authAdmin = require('../middleware/isAdmin');
const express = require('express');
const booksRouter = express.Router();

booksRouter.post('/comment', auth.isAuthenticated ,commentscontoller.comment);
booksRouter.post('/addBook' , authAdmin.isAdmin ,booksController.createBook);
booksRouter.get('/books' , auth.isAuthenticated, booksController.getBooks);
booksRouter.get('/books/:id' , auth.isAuthenticated, booksController.getBookById);
booksRouter.get('/booksByName/:name' , auth.isAuthenticated, booksController.getBookByName);
booksRouter.get('/bookAuthor/:id' , auth.isAuthenticated, booksController.getBookAuthor);
booksRouter.get('/getAvarage/:bookId' , auth.isAuthenticated, booksController.getAvgRating);
booksRouter.post('/deleteBook' , authAdmin.isAdmin ,booksController.deleteBook);
booksRouter.get('/mostRecent' , auth.isAuthenticated, booksController.mostRecent);
booksRouter.get('/userDeleteComment/:bookId' , auth.isAuthenticated, booksController.userDeleteComment);
booksRouter.post('/easyCommentDelete' , auth.isAuthenticated ,booksController.userDeleteCommentEasy);


module.exports = booksRouter;