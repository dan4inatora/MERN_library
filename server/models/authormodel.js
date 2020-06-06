const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name:{
    type: String
  },
  books : [{
    type: Schema.Types.ObjectId,
    ref : "Book"
  }]
})

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;