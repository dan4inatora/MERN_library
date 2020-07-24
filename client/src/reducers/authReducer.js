import {LOGIN_USER, REGISTER_USER, LOGOUT_USER} from '../actions/types';

const initialState = {
  loggedInUser: {}
}

export default function(state = initialState, action){
  switch(action.type){
    case LOGIN_USER:
      return{
        ...state, 
        loggedInUser : action.payload
      }
    case REGISTER_USER:
      return{
        ...state, 
        loggedInUser : [action.payload, ...state.items]
      }
    case LOGOUT_USER:
      return{
        ...state, 
        loggedInUser : [action.payload, ...state.items]
      }
    default:
      return state;
  }
}