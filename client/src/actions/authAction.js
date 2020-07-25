import {LOGIN_USER, LOGOUT_USER, REGISTER_USER, CLEAR_ERRORS} from './types';
import axios from 'axios';



export function registerUser(userData){
  return function(dispatch){
    axios.post("http://localhost:3000/api/register", userData)
      .then(user => dispatch({
        type : REGISTER_USER,
        payload : user.data
      }))
      .catch(err => console.log("error"));
  }
}

export function loginUser(userData){
  return function(dispatch){
    axios.post("http://localhost:3000/api/login", userData)
      .then(user => dispatch({
        type : LOGIN_USER,
        payload : user.data
      }))
      .catch(err => console.log(err));
  }
}

export function clearErrors(){
  return function(dispatch){
    dispatch({
      type: CLEAR_ERRORS
    })
  }
}