import {GET_BOOKS, GET_BOOK} from './types';
import axios from 'axios';

//axios.defaults.withCredentials = true;

export function getBooks(){
  return function(dispatch){
    axios.get("http://localhost:3000/api/books", {}, { withCredentials: true })
      .then(books => dispatch({
        type : GET_BOOKS,
        payload : books.data
      }))
      .catch(err => console.log(err));
  }
}

export function getBook(id){
  return function(dispatch){
    axios.get(`http://localhost:3000/api/books/${id}`, {}, { withCredentials: true })
      .then(book => dispatch({
        type : GET_BOOK,
        payload : book.data
      }))
      .catch(err => console.log(err));
  }
}
