import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../actions/loginActions';

const withAuth = WrappedComponent => {
  class AuthedComponent extends Component {
    state = {
      authCompleted: this.props.loggedIn
    };

    componentDidMount() {
      if (localStorage.getItem('token')) {
        this.props.fetchUser();
      } else {
        this.setState({ authCompleted: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true });
      }
    }

    render() {
      if (this.state.authCompleted) {
        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to="/login" />
        );
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = state => ({
    loggedIn: !!state.auth.currentUser.id,
    auth: state.auth
  });

  return connect(mapStateToProps, actions)(AuthedComponent);
};

export default withAuth;
