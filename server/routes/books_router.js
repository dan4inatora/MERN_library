const commentscontoller = require('../controllers/commentscontoller');
const booksController = require('../controllers/bookscontroller');
const auth = require('../middleware/authenticate')
const express = require('express');
const booksRouter = express.Router();

booksRouter.post('/comment', auth.isAuthenticated ,commentscontoller.comment);
booksRouter.post('/addBook' ,booksController.createBook);
booksRouter.get('/books' ,booksController.getBooks);
booksRouter.post('/deleteBook' ,booksController.deleteBook);


module.exports = booksRouter;