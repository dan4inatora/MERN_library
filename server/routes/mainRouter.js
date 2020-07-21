const adminRouter = require('../routes/adminCRUD_router');
const authorRouter = require('../routes/author_router');
const bookRouter = require('../routes/books_router');
const userRouter = require('../routes/index_router');
const express = require('express');


const mainRouter = express.Router();

mainRouter.use('/api', adminRouter);
mainRouter.use('/api', authorRouter);
mainRouter.use('/api', bookRouter);
mainRouter.use('/api', userRouter);

module.exports = mainRouter;