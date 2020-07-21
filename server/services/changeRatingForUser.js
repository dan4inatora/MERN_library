const modelTypes = require('../helpers/modelTypes');

function changeRating(array, username, rating){
  for(let i = 0; i < array.length; i++){
    if(array[i].username === username){
      array[i].rating = rating;
    }
  }
}

module.exports = changeRating;