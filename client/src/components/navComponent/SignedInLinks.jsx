import React, {Component} from 'react'
import { NavLink , withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import './navbar.css';
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/authAction';

class SignedInLinks extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    //e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
  }

  render(){
      return (
        <div>
          <ul className="right">
            <li><NavLink to='/books' style={{ textDecoration: 'none' }}>Books</NavLink></li>
            <li><NavLink to='/authors' style={{ textDecoration: 'none' }}>Authors</NavLink></li>
            <li onClick={this.handleClick}><NavLink to='/' style={{ textDecoration: 'none' }}>Log Out</NavLink></li>
            <li ><NavLink to='/wishlist' className="btn btn-floating pink lighten-1" style={{ textDecoration: 'none' }}>Wish</NavLink></li>
            {this.props.crrUser !== undefined ? <li>{"Hi, " + this.props.crrUser.name}</li> : <li></li>}
          </ul>
        </div>
      
    )
  }
}

SignedInLinks.propTypes = {
  logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  crrUser: state.auth.loggedUser
})

export default withRouter(connect(mapStateToProps,{logoutUser})(SignedInLinks))