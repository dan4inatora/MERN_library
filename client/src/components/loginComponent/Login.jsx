import React, { Component } from "react";
import {connect} from 'react-redux';
import {loginUser} from '../../actions/authAction';
import {clearErrors} from '../../actions/authAction';
import {Link,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.clearErrors();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();
    const user = {
      email,
      password
    }

    this.props.loginUser(user)

    this.setState({
      email: "",
      password: ""
    });
    
    console.log(this.props.crrUser)
    if(this.props.crrUser !== undefined){
      console.log(1);
      this.props.history.push('/dashboard');
    }
    
  }

  render() {
    return (

        <div className="content">
        <section>
          <div className="register-wrapper">
            <div className="register-block">
              <h3 className="register-title">Login into account</h3>
              <div>{this.props.errors !== undefined ? this.props.errors.map(error => (
                  <p key={Math.random(2)} className="pis">{error}</p>
                   )) : <li></li>}
              </div>
                <Link to='/register' style={{color:'#424242'}}>Haven't signed up</Link>
                <form action="" onSubmit={this.handleSubmit}>
                <input             
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      placeholder="Enter your email"/>
                <input             
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      required 
                      placeholder="Enter your password" />
                <input type="submit" value="Log in"/>
                </form>
            </div>
          </div>
        </section>
      </div>
    
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  errors: state.auth.registerValidationError,
  crrUser: state.auth.loggedUser
})

//There are no mapStatetoProps because we dont need state here

export default withRouter(connect(mapStateToProps, {loginUser, clearErrors})(Login));