const User = require('../models/usersmodel');
const {Book, bookSchema} = require('../models/booksmodel');
const Author = require('../models/authormodel');
const Comment = require('../models/commentmodel');

const modelTypes = {
   Author,
   User,
   Book,
   Comment
  
}

module.exports = modelTypes;