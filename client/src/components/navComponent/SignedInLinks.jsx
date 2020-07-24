import React from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import './navbar.css';

const SignedInLinks = () => {
  return (
    <Router>
      <div>
        <ul className="right">
          <li><NavLink to='/books' style={{ textDecoration: 'none' }}>Books</NavLink></li>
          <li><NavLink to='/authors' style={{ textDecoration: 'none' }}>Authors</NavLink></li>
          <li><NavLink to='/' style={{ textDecoration: 'none' }}>Log Out</NavLink></li>
          <li><NavLink to='/wishlist' className="btn btn-floating pink lighten-1" style={{ textDecoration: 'none' }}>Wish</NavLink></li>
        </ul>
      </div>
    </Router>
  )
}

export default SignedInLinks