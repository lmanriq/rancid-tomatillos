import React, { Component } from "react";
import './App.css';
import LoginPage from '../LoginPage/LoginPage'

class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <main>
        <LoginPage />
      </main>
    )
  }
}

export default App;
