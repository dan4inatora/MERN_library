import React, { Component } from 'react'
import './dashboard.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/booksActions';
import axios from 'axios'

const backend = 'http://localhost:3000/';

class Dashboard extends Component {

  componentDidMount(){

    this.props.getBooks();
  }


  render() {
    console.log('rendering');
    return (
      <div>
         
        <h3 className="h4">Book Gallery</h3>
        <h6 className="h6" >See what book suits you the best.</h6>
        {this.props.books ? this.props.books.map(book => 
          (<p key={book._id}>{
            <div className="gallery">
            <a target="_blank" href="img_5terre.jpg">
              <img src={`${backend}${book.imagePath}`} alt={`${book.name}`} width="600" height="400"/>
            </a>
          <div className="desc">{`${book.name}`}</div>
          </div>
          }</p>)): <p></p>} 
      </div>
    )
  }
}

Dashboard.propTypes = {
  getBooks: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  books: state.bookz.books
})

export default connect(mapStateToProps, {getBooks})(Dashboard);
