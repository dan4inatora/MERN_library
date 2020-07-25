import React, { Component } from "react";
import {connect} from 'react-redux';
import {registerUser} from '../../actions/authAction';
import {clearErrors} from '../../actions/authAction';
import './register.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';



class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
      registrationErrors: ""
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
    const { email, password, name } = this.state;
    event.preventDefault();
    const user = {
      name,
      email,
      password,
      isAdmin : 0    
    }

    this.props.registerUser(user);
    
    this.setState({
      email: "",
      password: "",
      name: "",
      registrationErrors: ""
    });
    
  }

  render() {
    return (
      
      <div className="content">
        <section>
          <div className="register-wrapper">
            <div className="register-block">

              <h3 className="register-title">Create an account</h3>
              <div>{this.props.errors.map(error => (
                  <p key={Math.random(2)} className="pis">{error}</p>
            ))}
            </div>
              <Link to='/login' style={{color:'#424242'}}>Want to log in</Link>
                <form action="" onSubmit={this.handleSubmit}>
                <input                 
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                      placeholder="Enter your username" />
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
                <input type="submit" value="Create my account"/>
                </form>
            </div>
          </div>
        </section>
      </div>
    

    );
  }
}

Registration.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.array.isRequired,
  clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.auth.registerValidationError
})

//There are no mapStatetoProps because we dont need state here

export default connect(mapStateToProps, {registerUser, clearErrors})(Registration);