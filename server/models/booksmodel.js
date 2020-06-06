const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name:{
    type: String
  },
  description: {
    type : String
  },
  rating: [{
    type: Number,
    default : []
  }],
  authot_id : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Author"
  }
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;