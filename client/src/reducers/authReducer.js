import {LOGIN_USER, REGISTER_USER, LOGOUT_USER, CLEAR_ERRORS} from '../actions/types';

const initialState = {
  loggedUser: {},
  registerValidationError : []
}

export default function(state = initialState, action){
  switch(action.type){
    case LOGIN_USER:
      if(typeof action.payload === "string"){
        return{
          ...state,
          registerValidationError: [...action.payload.split(' '), ...state.registerValidationError]
        }
      }
      else{
        return{
          ...state,
          loggedUser:{...action.payload}
        }
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
        state
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