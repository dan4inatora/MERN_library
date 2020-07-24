import React from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import './navbar.css';

const SignedInLinks = () => {
  return (
    <Router>
      <div>
        <ul className="right">
          <li><NavLink to='/create' style={{ textDecoration: 'none' }}>New Project</NavLink></li>
          <li><NavLink to='/' style={{ textDecoration: 'none' }}>Log Out</NavLink></li>
          <li><NavLink to='/' className="btn btn-floating pink lighten-1" style={{ textDecoration: 'none' }}>NN</NavLink></li>
        </ul>
      </div>
    </Router>
  )
}

export default SignedInLinks