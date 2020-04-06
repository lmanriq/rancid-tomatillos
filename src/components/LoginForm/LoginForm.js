import React, { Component } from "react";
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <form>
        <h2>Login</h2>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>Login</button>
      </form>
    )
  }
}

export default LoginForm