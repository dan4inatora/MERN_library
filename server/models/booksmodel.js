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
  author_id : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "Author"
  },
  imagePath: { 
    type: String, 
    required: true 
  },
  comments_id : [{
    type: mongoose.Schema.Types.ObjectId,
    ref : "Comment"
  }]
})

const Book = mongoose.model("Book", bookSchema);
module.exports = {
  Book : Book,
  bookSchema : bookSchema
}
