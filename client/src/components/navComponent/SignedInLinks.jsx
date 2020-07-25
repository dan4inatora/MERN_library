import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import './navbar.css';
import PropTypes from 'prop-types';

class SignedInLinks extends Component {
    
  render(){
      return (
        <div>
          <ul className="right">
            <li><NavLink to='/books' style={{ textDecoration: 'none' }}>Books</NavLink></li>
            <li><NavLink to='/authors' style={{ textDecoration: 'none' }}>Authors</NavLink></li>
            <li><NavLink to='/' style={{ textDecoration: 'none' }}>Log Out</NavLink></li>
            <li><NavLink to='/wishlist' className="btn btn-floating pink lighten-1" style={{ textDecoration: 'none' }}>Wish</NavLink></li>
            {this.props.crrUser.name !== undefined ? <li>{"Hi, " + this.props.crrUser.name}</li> : <li></li>}
          </ul>
        </div>
      
    )
  }
}

SignedInLinks.propTypes = {
  crrUser: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  crrUser: state.auth.loggedUser
})

export default connect(mapStateToProps,{})(SignedInLinks)