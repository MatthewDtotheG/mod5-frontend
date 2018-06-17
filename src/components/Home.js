import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class Home extends Component {

  render() {
      return (
          <div className='homepage'>
            <h1 className='title'>DATA VOYEUR</h1>
              <br/>
              <br/>
              <br/>
              <Link className='link' to='/create'>
                <button >Create Account</button>
              </Link>
              <br></br>
              <br></br>
              <Link className='link' to='/login'>
                <button>Login</button>
              </Link>
        </div>
      );
  }
}

export default Home;
