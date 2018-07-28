import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/loginActions';
import { withRouter } from 'react-router-dom'
import '../App.css';

class LoginForm extends Component {

    state = {
        error: false,
        fields: {
          email: '',
          password: ''
        }
    }

    handleChange = e => {
      const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
      this.setState({ fields: newFields });
    };

    handleSubmit = e => {
      e.preventDefault();
      const { fields: { email, password } } = this.state;
      this.props.loginUser(email, password, this.props.history);
    };

    render() {
      const { fields } = this.state;

      return (
        <div className='loginContainer'>
          {this.state.error ? <h1>Try Again</h1> : null}
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input
                  name="email"
                  placeholder="email"
                  value={fields.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>

                <input
                  name="password"
                  type="password"
                  className='password'
                  placeholder="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit">
                Login
              </button>
            </form>
        </div>
      );
    }
}


export default withRouter(connect(null, actions)(LoginForm))
