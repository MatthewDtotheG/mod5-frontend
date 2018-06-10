import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import { createWebsite } from '../actions/profileActions';

class UserProfile extends Component {

  state = {
    name: '',
    user_id: 0
  }

  onClick = (e) => {
      e.preventDefault();
      const websiteData = {
        name: this.state.name,
        user_id: parseInt(e.target.id)
      }
      this.props.createWebsite(websiteData);
    }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

  render() {
    let {email, id} = this.props.auth.currentUser
    return (
        <div className="App">
            <h1>hi {email}</h1>
            <form>
              <input type='text' name='name' onChange={this.onChange} value={this.state.name}/>
              <input type='submit' id={id} onClick={this.onClick} value='Generate Script'/>
            </form>
        </div>
    );
  }
}

UserProfile.propTypes = {
    createWebsite: PropTypes.func.isRequired
};

export default withAuth(connect(null, { createWebsite })(UserProfile));
