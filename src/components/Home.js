import React, { Component } from 'react';
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';
import { Button } from 'semantic-ui-react'
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
      return (
          <div className='homepage'>
            <h1>Analytics Shit</h1>

              <Link className='link' to='/create'>
                <button >Create Account</button>
              </Link>
              <br></br>
              <br></br>
              <Link className='link' to='/login'>
                <button >Login</button>
              </Link>
        </div>
      );
  }
}

export default Home;
