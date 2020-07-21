const modelTypes = require('../helpers/modelTypes');

function containsUsername(array, username){
  let flag = false;
  for(let i = 0; i < array.length; i++){
    if(array[i].username === username){
      flag = true;
      break;
    }
  }
  return flag;
}

module.exports = containsUsername;