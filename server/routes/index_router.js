const userController = require('../controllers/usercontroller');
const commentscontoller = require('../controllers/commentscontoller');
const userEditController = require('../controllers/userEditController');
const auth = require('../middleware/authenticate')
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/comment', auth.isAuthenticated ,commentscontoller.comment);
router.post('/edit', auth.isAuthenticated , userEditController.edit);


module.exports = router;