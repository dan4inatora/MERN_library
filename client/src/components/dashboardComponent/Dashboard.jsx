import React, { Component } from 'react'
import './dashboard.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/booksActions';
import {getBook} from '../../actions/booksActions';


const backend = 'http://localhost:3000/';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.getBooks();
  }

  handleClick(id){
    this.props.getBook(id);
  }

  render() {
    
    return (
      <div>
         
        <h3 className="h4">Book Gallery</h3>
        <h6 className="h6" >See what book suits you the best.</h6>
        {this.props.books ? this.props.books.map(book => 
          (<div key={book._id}>{
            <div className="gallery" onClick={() => this.handleClick(book._id)}>
            <Link to='/bookView'>
              <img src={`${backend}${book.imagePath}`} alt={`${book.name}`} width="600" height="400"/>
            </Link>
          <div className="desc">{`${book.name}`}</div>
          </div>
          }</div>)): <p></p>} 
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

export default connect(mapStateToProps, {getBooks, getBook})(Dashboard);
