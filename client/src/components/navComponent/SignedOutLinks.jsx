import React from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'
import './navbar.css';


const SignedOutLinks = () => {
  return (
    <Router>
      <div>
        <ul className="right">
          <li><NavLink to='/signup' style={{ textDecoration: 'none' }}>Signup</NavLink></li>
          <li><NavLink to='/signin' style={{ textDecoration: 'none' }}>Login</NavLink></li>
        </ul>
      </div>
    </Router>
  )
}

export default SignedOutLinks