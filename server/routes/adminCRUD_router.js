const adminCrudController = require('../controllers/adminCRUDController');
const auth = require('../middleware/authenticate')
const express = require('express');
const adminRouter = express.Router();

adminRouter.post('/createUser', adminCrudController.createUser);

module.exports = adminRouter;