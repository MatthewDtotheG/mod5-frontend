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
          <h1 className='login'>Sign Up</h1>
          <form>
            <label>First name</label>
            <br/>
            <br/>
            <input
              type='text'
              name='first_name'
              className='newInput'
              onChange={this.onChange}
              value={this.state.first_name}/>
              <br/>
              <br></br>
                <label>Last name</label>
              <br/>
              <br/>
            <input
              type='text'
              name='last_name'
              className='newInput'
              onChange={this.onChange}
              value={this.state.last_name}/>
              <br/>
              <br></br>
                <label>Email</label>
              <br/>
              <br/>
            <input
              type='text'
              name='email'
              className='newInput'
              onChange={this.onChange}
              value={this.state.email}/>
            <br/>
            <br></br>
              <label>Password</label>
            <br/>
            <br></br>
            <input
              type='password'
              name='password'
              className='newInput'
              onChange={this.onChange}
              value={this.state.password}/>
            <br/>
              <br></br>
              
              <Link type='submit' onClick={this.onClick} to='/login'>
                <button>Continue</button>
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
