const modelTypes = require('../helpers/modelTypes');

function findBookbyId(id){
  return new Promise((resolve, reject) =>{
    modelTypes.Book.findOne({_id: id}, function(err, book) {
      if(book){
         resolve(book);
      }
      else{
         reject("No book");
      }
    })
  })
}

module.exports = findBookbyId;