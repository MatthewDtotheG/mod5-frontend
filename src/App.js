import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './services/store';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router><Home/></Router>
        </div>
      </Provider>
    );
  }
}

export default App;
