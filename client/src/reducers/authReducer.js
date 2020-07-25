import {LOGIN_USER, REGISTER_USER, LOGOUT_USER, CLEAR_ERRORS} from '../actions/types';

const initialState = {
  loggedInUser: {},
  registerValidationError : []
}

export default function(state = initialState, action){
  switch(action.type){
    case LOGIN_USER:
      return{
        ...state, 
        loggedInUser : action.payload
      }
    case REGISTER_USER:
      if(typeof action.payload === "string"){
        return{
          ...state,
          registerValidationError: [...action.payload.split(' '), ...state.registerValidationError]
        }
      }
      else if(action.payload[0] !== undefined){
        return{
          ...state,
          registerValidationError: [...state.registerValidationError, ...action.payload]
        }
      }
      
      return{
        ...state, 
        loggedInUser : {...action.payload}
      }
      

    case LOGOUT_USER:
      return{
        ...state, 
        loggedInUser : [action.payload, ...state.items]
      }
    case CLEAR_ERRORS:
      return{
        ...state,
        registerValidationError : []
      }
    default:
      return state;
  }
}