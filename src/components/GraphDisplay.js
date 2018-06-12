import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGraphs } from '../actions/graphActions';
import withAuth from '../hocs/withAuth'

class GraphDisplay extends Component {

  componentWillMount() {
    this.props.fetchGraphs();
  }

  render() {
      const graphItems = this.props.data.map(targetData => (
        <div>
          <h1>{targetData.city}</h1>
        </div>
      ))
      return(
        <div>
          <h1>DATA</h1>
          {graphItems}
        </div>
      )
  }

}

const mapStateToProps = state => {
  return {
    data: state.target_data.target_data
  }
};

export default withAuth(connect(mapStateToProps, { fetchGraphs })(GraphDisplay));
