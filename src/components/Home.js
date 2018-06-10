import React, { Component } from 'react';
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';
import UserProfile from './UserProfile';
import logo from '../logo.svg';
import '../App.css';
import { Route, Link } from 'react-router-dom'

class Home extends Component {

  state = {
    clicked: false
  }


  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if(!this.state.clicked) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <h1>COOL SHIT I WILL ADD</h1>

          <div>
            <Link onClick={this.handleClick} to='/create'>Create Account</Link>
            <br></br>
            <br></br>
            <Link onClick={this.handleClick} to='/login'>Login</Link>
          </div>
          <br/>
          <Route path='/create' component={ NewUserForm }/>
          <Route path='/login' component={ LoginForm }/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Route path='/create' component={ NewUserForm }/>
          <Route path='/login' component={ LoginForm }/>
          <Route path='/profile' component={ UserProfile }/>
        </div>
      );
    }

  }
}

export default Home;
