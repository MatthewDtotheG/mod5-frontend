import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class LoginForm extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <h1>Register</h1>
          <form>
            <input type='text' value="first name"/>
            <br/>
            <input type='text' value="last name"/>
            <br/>
            <input type='text' value="email"/>
            <br/>
            <input type='text' value='password'/>
            <br/>
            <button>Register</button>
          </form>
        </div>
    );
  }
}

export default LoginForm;
