import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { connect } from 'react-redux';
import * as actions from '../actions/profileActions';
import withAuth from '../hocs/withAuth';
import { Grid, Container } from 'semantic-ui-react'
import {Doughnut} from 'react-chartjs-2';
import { ComposableMap, ZoomableGroup, Geographies, Geography} from "react-simple-maps"

class GraphDisplay extends Component {


componentDidMount = () => {
  this.props.websiteGraph(1)
  this.props.singleWebsite(1)
}

browserGraph = () => {
  let browsers = this.props.websiteData.map(data => {
      return Object.keys(data.browser)
    })[0]
  let browserCount = this.props.websiteData.map(data => {
    return Object.values(data.browser)
  })[0]

const data = {
	labels: browsers,
	datasets: [{
		data: browserCount,
		backgroundColor: [ '#FF6384', '#36A2EB','#FFCE56' ],
		hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
	}]
};
    return (
      <div>
        <h2>Browsers</h2>
        <Doughnut data={data} />
      </div>
    )
}


mobileGraph = () => {
  let mobileTypes = this.props.websiteData.map(data => {
    delete data.mobile['null'];
    delete data.mobile['false'];
    return Object.keys(data.mobile)
  })[0]
  let mobileCount = this.props.websiteData.map(data => {
    return Object.values(data.mobile)
  })[0]

const data = {
	labels: mobileTypes,
	datasets: [{
		data: mobileCount,
		backgroundColor: ['#FF6384','#36A2EB', '#FFCE56'],
		hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
	}]
};

    return (
      <div>
        <h2>Mobile Devices</h2>
        <Doughnut data={data} />
      </div>
    )
}

ispGraph = () => {
  let ispTypes = this.props.websiteData.map(data => {
    delete data.isp['null']
    return Object.keys(data.isp)
  })[0]
  let ispCount = this.props.websiteData.map(data => {
    return Object.values(data.isp)
  })[0]

const data = {
	labels: ispTypes,
	datasets: [{
		data: ispCount,
		backgroundColor: ['#FF6384','#36A2EB', '#FFCE56'],
		hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
	}]
};

    return (
      <div>
        <h2>ISPs</h2>
        <Doughnut data={data} />
      </div>
    )
}


deviceGraph = () => {
  let laptop = this.props.websiteData.map(data => {
    delete data.laptop['false']
    return Object.values(data.laptop)
  })[0]

  let desktop = this.props.websiteData.map(data => {
    delete data.desktop['false']
    return Object.values(data.desktop)
  })[0]

  let mobileCountSum = this.props.websiteData.map(data => {
    const add = (a, b) => a + b
    return Object.values(data.mobile).reduce(add)
  })[0]

const data = {
	labels:['laptop','mobile','desktop'],
	datasets: [{
		data: [ laptop, mobileCountSum, desktop],
		backgroundColor: ['#FF6384','#36A2EB','#FFCE56'],
		hoverBackgroundColor: ['#FF6384','#36A2EB','#FFCE56']
	}]
};

    return (
       <div>
         <h2>Devices</h2>
         <Doughnut data={data} />
       </div>
    )
}

render() {
    console.log(this.props.websiteData);
      return(
    <div className='mainContainer'>
      <h1>{this.props.currentSite.name}</h1>
      <Container textAlign='center' >
        <Grid container='true' stackable='true'>
          <Grid.Row columns={2}>
            <Grid.Column>
              {this.browserGraph()}
            </Grid.Column>
            <Grid.Column>
              {this.mobileGraph()}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              {this.deviceGraph()}
            </Grid.Column>
            <Grid.Column>
              {this.ispGraph()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>


        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={ "../topojson-maps/world-50m.json" }>
              {(geographies, projection) => geographies.map(geography => (
                <Geography
                  key={ geography.id }
                  geography={ geography }
                  projection={ projection }
                  />
              ))}
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

      </div>

      )
  }
}


const mapStateToProps = state => {
  return {
    websiteData: state.website_data.website_target_data,
    currentSite: state.website_data.single_website_data,
    newWebsite: state.website_data.new_website_data
  }
};

export default withAuth(connect(mapStateToProps, actions)(GraphDisplay));
