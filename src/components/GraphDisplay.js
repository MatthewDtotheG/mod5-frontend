import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/profileActions';
import withAuth from '../hocs/withAuth';
import {Bar} from 'react-chartjs-2';

class GraphDisplay extends Component {


  // make functions that incriment a state for each peice of information that I want to show
  //


  BarGraph = () => {
    const data = {
    labels: ['mobile', 'laptop', 'desktop'],
    datasets: [
        {
          label: 'Device Type Data',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [80, 59, 40]
        }
      ]
    };

    return (
      <Bar data={data}/>
    )
  }


  // renderTargetData = () => {
  //     this.props.websiteData.map(data => console.log(data.browser))
  // }

  render() {
    console.log(this.props.websiteData)
      return(
        <div className="graphContainer">
          {this.BarGraph()}
        </div>
      )
  }
}


const mapStateToProps = state => {
  return {
    websiteData: state.website_data.website_target_data
  }
};

export default withAuth(connect(mapStateToProps, actions)(GraphDisplay));
