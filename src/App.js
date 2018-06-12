import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import NewUserForm from './components/NewUserForm';
import UserProfile from './components/UserProfile';
import GraphDisplay from './components/GraphDisplay';
import { Route, Switch } from 'react-router-dom'
import store from './services/store';


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

          <Switch>
            < Route path="/" exact component={ Home }/>
            < Route path='/login' component={ LoginForm } />
            < Route path='/create' component={ NewUserForm } />
            < Route path='/profile' component={ UserProfile } />
            < Route path='/graph' component={ GraphDisplay } />
          </Switch>

        </div>
      </Provider>
    );
  }
}

export default App;
