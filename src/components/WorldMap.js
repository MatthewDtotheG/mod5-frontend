import React, { Component } from "react";
import { connect } from 'react-redux';
import { Popup } from 'semantic-ui-react';
import world from '../maps/world-50m.json';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

const wrapperStyles = {
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
}

const cityScale = scaleLinear()
  .domain([0,30])
  .range([1,25])

class BasicMap extends Component {

    state = {
        cities: [],
        currentCity: [],
        cityNumber: []
      }

  componentWillReceiveProps = () => {
      let locationData = []
      let latitude = []
      let cityValue = []
      let longitude = []
      let mapData = []
      let popArray = []
      this.props.websiteData.map(data => {
          cityValue = Object.values(data.city)
          latitude = Object.keys(data.latitude)
          longitude = Object.keys(data.longitude)
        })[0]

        for(let i = 0; i < latitude.length; i++) {
          locationData.push(longitude[i])
          locationData.push(latitude[i])
          popArray.push(cityValue[i])
        }

        while (locationData.length > 0) {
          let data = locationData.splice(0,2)
          let number = popArray.splice(0,1)
          mapData.push({coordinates: data, population: number})
        }
        this.updateMap(mapData)
    }
//
 updateMap = (mapData) => {
        this.setState({
          cities: mapData
        })
 }

 handleClick = (e) => {
  let test = this.props.websiteData.map(data => {
    return Object.keys(data.city).filter((key,index) => index == e.target.dataset.city)
  })
  let test2 = this.props.websiteData.map(data => {
    return Object.values(data.city).filter((key,index) => index == e.target.dataset.city)
  })

  this.setState({
    currentCity: test[0][0],
    cityNumber: test2[0][0]
  })
     // test.push(test[0][0]);
     // test2.push(test2[0][0])
     // console.log(test2[0][0]);
     // console.log(e.target.dataset.city);
}

   // let checkMission = this.props.websiteData.find((data) => data.city === e.target.dataset.city)


  render() {
    console.log(this.state.currentCity);
    // console.log(this.state.cities);
    return (
      <div style={wrapperStyles}>
        <ComposableMap
          projectionConfig={{ scale: 205 }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
          >
          <ZoomableGroup center={[0,20]} disablePanning>
            <Geographies geography={world}>
              {(geographies, projection) =>
                geographies.map((geography, i) =>
                  geography.id !== "ATA" && (
                    <Geography
                      key={i}
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: "#3f3f3f",
                          stroke: "#3f3f3f",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "#3f3f3f",
                          stroke: "#3f3f3f",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        pressed: {
                          fill: "#3f3f3f",
                          stroke: "#3f3f3f",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                      }}
                    />
              ))}
            </Geographies>
            <Markers>
              {
                this.state.cities.map((city, i) => (
                  <Marker key={i} marker={city}>
                    <Popup data-city={i} onOpen={(e) => this.handleClick(e)} basic trigger={
                     <circle
                       cx={0}
                       cy={0}
                       r={cityScale(city.population)}
                       data-city={i}
                       fill="#1C71FB"
                       stroke="#1C71FB"
                       strokeWidth="2"
                    /> } content={`${this.state.currentCity} - ${this.state.cityNumber}`} />
                  </Marker>
                ))
              }
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
      </div>
    )
  }
}

const mapStateToProps = state => {
  websiteData: state.website_data.website_target_data
}


export default connect(mapStateToProps, null)(BasicMap);
