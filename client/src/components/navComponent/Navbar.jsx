import React, {Component} from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './navbar.css';

 class Navbar extends Component{
   render(){
    return (
      <Router>
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link style={{ textDecoration: 'none' }} to='/' className="brand-logo">BookLibrary</Link>
            <SignedInLinks />
            <SignedOutLinks />
          </div>
        </nav>
      </Router>
    )
   }
}

export default Navbar