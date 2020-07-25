import {GET_BOOKS} from './types';
import axios from 'axios';

//axios.defaults.withCredentials = true;

export function getBooks(){
  return function(dispatch){
    console.log("fire");
    axios.get("http://localhost:3000/api/books", {}, { withCredentials: true })
      .then(books => dispatch({
        type : GET_BOOKS,
        payload : books.data
      }))
      .catch(err => console.log(err));
  }
}
