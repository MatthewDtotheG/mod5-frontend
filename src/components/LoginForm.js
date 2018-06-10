import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <div>
          {this.state.error ? <h1>Try Again</h1> : null}
          <div >
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Username</label>
                <input
                  name="email"
                  placeholder="email"
                  value={fields.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  name="password"
                  type="password"
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
        </div>
      );
    }
}

LoginForm.propTypes = {
    actions: PropTypes.func.isRequired
};

export default withRouter(connect(null, actions)(LoginForm))
