import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './navbar.css';

 class Navbar extends Component{
   render(){
    return (
      
        <nav className="nav-wrapper grey darken-3">
          <div className="container">
            <Link style={{ textDecoration: 'none' }} to='/' className="brand-logo">BookLibrary</Link>
            <SignedInLinks />
            <SignedOutLinks history={this.props.history}/>
          </div>
        </nav>

    )
   }
}

export default Navbar