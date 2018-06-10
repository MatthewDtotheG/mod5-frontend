import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/formActions';

class NewUserForm extends Component {

    state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };

  onClick = (e) => {
    e.preventDefault();
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
        <div className="App">
          <h1>Create Account</h1>
          <form>
            <label>First Name</label>
            <input
              type='text'
              name='first_name'
              onChange={this.onChange}
              value={this.state.first_name}/>
            <br/>
            <label>Last Name</label>
            <input
              type='text'
              name='last_name'
              onChange={this.onChange}
              value={this.state.last_name}/>
            <br/>
            <label>Email</label>
            <input
              type='text'
              name='email'
              onChange={this.onChange}
              value={this.state.email}/>
            <br/>
            <label>Password</label>
            <input
              type='text'
              name='password'
              onChange={this.onChange}
              value={this.state.password}/>
            <br/>
            <input type='submit' onClick={this.onClick} />
          </form>
        </div>
    );
  }
}

NewUserForm.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(NewUserForm);
