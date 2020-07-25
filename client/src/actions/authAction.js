import {LOGIN_USER, LOGOUT_USER, REGISTER_USER, CLEAR_ERRORS} from './types';
import axios from 'axios';


// export function fetchPosts(){
//   return function(dispatch){
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then(posts => dispatch({
//       type: FETCH_POSTS,
//       payload : posts.data
//     }))
//   }
// }

export function registerUser(userData){
  return function(dispatch){
    console.log("Reducer");
    axios.post("http://localhost:3000/api/register", userData)
      .then(user => dispatch({
        type : REGISTER_USER,
        payload : user.data
      }))
      .catch(err => console.log("error"));
  }
}

export function clearErrors(){
  return function(dispatch){
    dispatch({
      type: CLEAR_ERRORS
    })
  }
}