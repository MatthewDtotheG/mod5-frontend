import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/profileActions';
import withAuth from '../hocs/withAuth';
import {Bar} from 'react-chartjs-2';

class GraphDisplay extends Component {


  state = {

  }


  // make functions that incriment a state for each peice of information that I want to show
  // 


  // BarGraph = () => {
  //   const data = {
  //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //   datasets: [
  //       {
  //         label: 'My First dataset',
  //         backgroundColor: 'rgba(255,99,132,0.2)',
  //         borderColor: 'rgba(255,99,132,1)',
  //         borderWidth: 1,
  //         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
  //         hoverBorderColor: 'rgba(255,99,132,1)',
  //         data: [65, 59, 80, 81, 56, 55, 40]
  //       }
  //     ]
  //   };
  //
  //   return (
  //     <Bar data={data}/>
  //   )
  // }

  renderTargetData = () => {
      this.props.websiteData.map(data => {
        data.browser == 'chrome 66' ? console.log('it be chrome') : console.log('it be dont')
    })
  }

  render() {
      return(
        <div>
          <h1>DATA</h1>
          {this.renderTargetData()}

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
