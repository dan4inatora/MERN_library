import {LOGIN_USER, LOGOUT_USER, REGISTER_USER, CLEAR_ERRORS} from './types';
import axios from 'axios';

//axios.defaults.withCredentials = true;

export function registerUser(userData){
  return function(dispatch){
    axios.post("http://localhost:3000/api/register", userData, { withCredentials: true })
      .then(user => dispatch({
        type : REGISTER_USER,
        payload : user.data
      }))
      .catch(err => console.log("error"));
  }
}

export function loginUser(userData){
  return function(dispatch){
    axios.post("http://localhost:3000/api/login", userData, { withCredentials: true })
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

export function logoutUser(){
  return function(dispatch){
    axios.post("http://localhost:3000/api/logout", {}, { withCredentials: true })
      .then(res => dispatch({
        type : LOGOUT_USER,
      }))
      .catch(err => console.log(err));
   }
}