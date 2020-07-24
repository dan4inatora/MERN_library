import React from 'react'
import { NavLink} from 'react-router-dom'
import './navbar.css';


const SignedOutLinks = () => {
  return (
    
      <div>
        <ul className="right">
          <li><NavLink to='/register' style={{ textDecoration: 'none' }}>Signup</NavLink></li>
          <li><NavLink to='/login' style={{ textDecoration: 'none' }}>Login</NavLink></li>
        </ul>
      </div>
  
  )
}

export default SignedOutLinks