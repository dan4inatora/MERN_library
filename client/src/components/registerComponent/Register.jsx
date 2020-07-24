import React, { Component } from "react";
import axios from "axios";
import './register.css'


export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      username: "",
      registrationErrors: ""
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
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    return (

    <div class="content">
      <section>
        <div class="register-wrapper">
          <div class="register-block">
            <h3 class="register-title">Create an account</h3>
              <p>Create an account using the form below.</p>
              <form action="" onSubmit={this.handleSubmit}>
              <input                 
                    type="username"
                    name="username"
                    value={this.state.username}
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