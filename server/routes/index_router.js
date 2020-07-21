const userController = require('../controllers/usercontroller');
const auth = require('../middleware/authenticate')
const express = require('express');
const router = express.Router();

router.post('/register', auth.isAuthenticated, userController.register);
router.post('/login', auth.isAuthenticated ,userController.login);
router.post('/edit', auth.isAuthenticated , userController.edit);
router.post('/logout' , auth.isAuthenticated, userController.logout);
router.get('/userProfile' , auth.isAuthenticated, userController.userProfile);
router.post('/addCommentToBook/:bookId' , auth.isAuthenticated, userController.addCommentToBook);
router.post('/addRating/:bookId' , auth.isAuthenticated,  userController.addRating);
router.get('/addToWishList/:bookId' , auth.isAuthenticated, userController.addBookToWishList);
router.get('/removeFromWishList/:bookId' , auth.isAuthenticated, userController.removeBookToWishList);
router.get('/wishList' , auth.isAuthenticated, userController.getWishList);


module.exports = router;