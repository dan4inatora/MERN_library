const authorController = require('../controllers/authorcontroller');
const auth = require('../middleware/authenticate');
const authAdmin = require('../middleware/isAdmin');
const express = require('express');
const authorRouter = express.Router();

authorRouter.post('/deleteAuthor' , authAdmin.isAdmin, authorController.deleteAuthor);
authorRouter.post('/addAuthor' ,  authAdmin.isAdmin , authorController.createAuthor);
authorRouter.get('/authors' , auth.isAuthenticated ,authorController.getAuthors);
authorRouter.get('/authors/:id' ,auth.isAuthenticated ,authorController.getAuthorbyId);
authorRouter.get('/authorsbyName/:name' ,auth.isAuthenticated, authorController.getAuthorbyName);
authorRouter.get('/authorsBooks/:id' ,auth.isAuthenticated ,authorController.getAuthorBooks);


module.exports = authorRouter;