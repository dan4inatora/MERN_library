import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default class Login extends Component {
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
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      
        <div class="content">
        <section>
          <div class="register-wrapper">
            <div class="register-block">
              <h3 class="register-title">Login into account</h3>
                <Link to='/login' style={{color:'#424242'}}>Haven't signed up</Link>
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