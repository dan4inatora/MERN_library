const modelTypes = require('../helpers/modelTypes');

function getAvgRating(array){
  let avg = 0;
  for(let i = 0; i < array.length; i++){
    avg += array[i].rating;
  }
  return avg === 0 ? avg : avg / array.length; 
}

module.exports = getAvgRating;