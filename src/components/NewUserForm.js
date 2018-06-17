import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/formActions';
import {Link} from 'react-router-dom'

class NewUserForm extends Component {

    state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

  onClick = (e) => {
    e.stopPropagation()
    const userData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.createUser(userData);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
        <div className="createContainer">
          <h1>Create Account</h1>
          <form>
            <input
              type='text'
              name='first_name'
              placeholder="First name"
              onChange={this.onChange}
              value={this.state.first_name}/>
            <br/>

            <input
              type='text'
              name='last_name'
              placeholder="Last name"
              onChange={this.onChange}
              value={this.state.last_name}/>
            <br/>

            <input
              type='text'
              name='email'
              placeholder="email"
              onChange={this.onChange}
              value={this.state.email}/>
            <br/>

            <input
              type='password'
              name='password'
              placeholder="password"
              onChange={this.onChange}
              value={this.state.password}/>
            <br/>
              <Link type='submit' onClick={this.onClick} to='/login'>
                <button>Create Account</button>
              </Link>
          </form>
        </div>
    );
  }
}

NewUserForm.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(NewUserForm);
