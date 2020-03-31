const userController = require('../controllers/usercontroller');
const commentscontoller = require('../controllers/commentscontoller');
const userEditController = require('../controllers/userEditController');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/comment', checkAuth,commentscontoller.comment);
router.post('/edit', checkAuth, userEditController.edit);

/*function authenticate(req, res, next){
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader && bearerHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}
*/

function checkAuth(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.sendStatus(403);
}

module.exports = router;