const authorController = require('../controllers/authorcontroller');
const auth = require('../middleware/authenticate')
const express = require('express');
const authorRouter = express.Router();

authorRouter.post('/deleteAuthor' ,authorController.deleteAuthor);
authorRouter.post('/addAuthor' ,authorController.createAuthor);
authorRouter.get('/authors' ,authorController.getAuthors);
authorRouter.get('/authors/:id' ,authorController.getAuthorbyId);
authorRouter.get('/authorsbyName/:name' ,authorController.getAuthorbyName);
authorRouter.get('/authorsBooks/:id' ,authorController.getAuthorBooks);


module.exports = authorRouter;