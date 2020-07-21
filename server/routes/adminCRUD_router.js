const adminCrudController = require('../controllers/adminCRUDController');
const auth = require('../middleware/authenticate')
const express = require('express');
const adminRouter = express.Router();

adminRouter.post('/createUser', adminCrudController.createUser);
adminRouter.post('/deleteUser', adminCrudController.deleteUser);
adminRouter.post('/changeName', adminCrudController.changeName);
adminRouter.post('/changePassword', adminCrudController.changePassword);
adminRouter.post('/changeRole', adminCrudController.changeRole);
adminRouter.post('/addAuthorToBook', adminCrudController.addAuthorToBook);
adminRouter.post('/addBookToAuthor', adminCrudController.addBookToAuthor);
adminRouter.post('/removeComment/:bookId', adminCrudController.removeComment);
adminRouter.get('/getAllComments/:bookId', adminCrudController.getAllComments);

module.exports = adminRouter;