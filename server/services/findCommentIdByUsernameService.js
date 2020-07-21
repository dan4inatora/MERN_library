function getCommentId(array, username){
  for(let i = 0; i < array.length; i++){
    if(array[i].sender === username){
      return array[i]._id;
      break;
    }
  }
  return ''
}

module.exports = getCommentId;