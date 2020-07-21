const userController = require('../controllers/usercontroller');
const commentscontoller = require('../controllers/commentscontoller');
const auth = require('../middleware/authenticate')
const authAdmin = require('../middleware/isAdmin')
const express = require('express');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/edit', authAdmin.isAdmin , userController.edit);
router.post('/logout' , userController.logout);
router.get('/userProfile' , userController.userProfile);
router.post('/addCommentToBook/:bookId' , userController.addCommentToBook);
router.post('/addRating/:bookId' , userController.addRating);
router.get('/addToWishList/:bookId' , userController.addBookToWishList);
router.get('/removeFromWishList/:bookId' , userController.removeBookToWishList);
router.get('/wishList' , userController.getWishList);


module.exports = router;