const authorController = require('../controllers/authorcontroller');
const auth = require('../middleware/authenticate')
const express = require('express');
const authorRouter = express.Router();

authorRouter.post('/deleteAuthor' ,authorController.deleteAuthor);
authorRouter.post('/addAuthor' ,authorController.createAuthor);
authorRouter.get('/authors' ,authorController.getAuthors);


module.exports = authorRouter;