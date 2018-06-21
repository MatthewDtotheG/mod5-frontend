import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/loginActions';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
          <div className='loginDiv'>
            <h1 className='login'>Welcome to Data Voyeur</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Email</label>
                <br></br>
                <br></br>
                <input
                  name="email"
                  value={fields.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <br></br>
                <label>Password</label>
                <br></br>
                <br></br>
                <input
                  name="password"
                  type="password"
                  value={fields.password}
                  onChange={this.handleChange}
                />
                <br></br>
                <br></br>
              </div>
              <button type="submit">
                Login
              </button>
              <Link className='link' to='/create'>
                <button>Sign Up</button>
              </Link>
            </form>
          </div>
        </div>
      );
    }
}


export default withRouter(connect(null, actions)(LoginForm))
