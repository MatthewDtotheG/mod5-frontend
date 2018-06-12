import React, { Component } from 'react';
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
      return (
          <div>
            <h1>COOL SHIT I WILL ADD</h1>

            <div>
              <Link to='/create'>Create Account</Link>
              <br></br>
              <br></br>
              <Link to='/login'>Login</Link>
            </div>
        </div>
      );
  }
}

export default Home;
