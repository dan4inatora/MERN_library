const adminCrudController = require('../controllers/adminCRUDController');
const auth = require('../middleware/authenticate')
const authAdmin = require('../middleware/isAdmin')
const express = require('express');
const adminRouter = express.Router();

adminRouter.post('/createUser', authAdmin.isAdmin, adminCrudController.createUser);
adminRouter.post('/deleteUser', authAdmin.isAdmin, adminCrudController.deleteUser);
adminRouter.post('/changeName', authAdmin.isAdmin, adminCrudController.changeName);
adminRouter.post('/changePassword', authAdmin.isAdmin, adminCrudController.changePassword);
adminRouter.post('/changeRole', authAdmin.isAdmin, adminCrudController.changeRole);
adminRouter.post('/addAuthorToBook', authAdmin.isAdmin, adminCrudController.addAuthorToBook);
adminRouter.post('/addBookToAuthor', authAdmin.isAdmin, adminCrudController.addBookToAuthor);
adminRouter.post('/removeComment/:bookId', authAdmin.isAdmin, adminCrudController.removeComment);
adminRouter.get('/getAllComments/:bookId', auth.isAuthenticated, adminCrudController.getAllComments);
adminRouter.post('/editBook/:bookId', authAdmin.isAdmin, adminCrudController.editBook);

module.exports = adminRouter;