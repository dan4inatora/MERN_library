import React, { Component } from 'react'
import './book.css'
import {connect} from 'react-redux';

const backend = 'http://localhost:3000/';
class bookComponent extends Component {

  constructor(props) {
    super(props);

  }
  
  render() {
    const {book} = this.props;
    return (
    <div className="bookContainer">{this.props.book !== undefined ? 
      <div>
          <div className="picture">
            <img src={`${backend}${this.props.book.imagePath}`} alt={`${book.name}`} width="600" height="400"/>
          </div>
          <div className="bookname">
            <h4>Title</h4>
            <p>{this.props.book.name}</p>
          </div>
          <div className="bookdesc">
            <h4>Description</h4>
            <div>{this.props.book.description}</div>
          </div>
          <div className="bookRating">
            <p>{getAvg(book)}</p>
          </div>
          <div className="Comments">
              <h4>Comments</h4>
              <div>{book.comments_id.map(comment => (
                <p>{comment}</p>
              ))}</div>
          </div>
      </div> 
      
    :<div></div>}</div>

    )
  }
}

function getAvg(book){
  return book => book.rating.reduce((a,b) => a.rating + b.rating, 0) / book.rating.length
}

const mapStateToProps = (state) => ({
  book: state.bookz.book
})

export default connect(mapStateToProps, {})(bookComponent);
