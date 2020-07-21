const modelTypes = require('../helpers/modelTypes');

function findCommnetById(id){
  return new Promise((resolve, reject) =>{
    modelTypes.Comment.findOne({_id: id}, function(err, comment) {
      if(comment){
         resolve(comment);
      }
      else{
         reject("No Comments");
      }
    })
  })
}

module.exports = findCommnetById;