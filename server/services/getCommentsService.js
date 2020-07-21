
const modelTypes = require('../helpers/modelTypes');
const findCommnetById = require('./findCommentByIdService');

function getComments(bookId){
  return new Promise((resolve, reject) => {
    let commentsArray = [];
    modelTypes.Book.findOne({_id : bookId}, async function(err, book) {
      if (err) {
        resolve(err);
      }
      else {
        for(let i = 0; i < book.comments_id.length; i++){
          commentsArray.push(await findCommnetById(book.comments_id[i]));
      }
        resolve(commentsArray);
      }
    })
  })

}

module.exports = getComments;