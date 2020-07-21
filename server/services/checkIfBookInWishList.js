const modelTypes = require("../helpers/modelTypes");

function checkIfBookExistst (wishlist, bookId){
  let flag = false;
  for(let i = 0; i < wishlist.length; i++){
    if(wishlist[i]._id === bookId){
      flag = true;
      break;
    }
  }
  return flag;
}

module.exports = checkIfBookExistst;