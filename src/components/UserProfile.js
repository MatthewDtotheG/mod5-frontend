import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import * as actions from '../actions/profileActions';

class UserProfile extends Component {

  state = {
    name: '',
    user_id: 0
  }


  componentWillMount = () => {
    this.props.fetchWebsites(this.props.auth.currentUser.id)
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


  renderWebsite = () => {
      return this.props.allWebsites.map(data => (
        <div>
          <h1>{data.name}</h1>
          <figure>
            <pre>
            {`
              <script>function load(){let mobileDevice='false'let desktop='false'let laptop='false'
              if(window.innerWidth<=800&&window.innerHeight<=600){var useragent=navigator.userAgent;if(useragent.match(/Android/i)){mobileDevice='android'}else if(useragent.match(/webOS/i)){mobileDevice='webos'}else if(useragent.match(/iPhone/i)){mobileDevice='iphone'}else if(useragent.match(/iPad/i)){mobileDevice='ipad'}else if(useragent.match(/Windows Phone/i)){mobileDevice='windows  phone'}}else{navigator.getBattery().then(function(battery){if(battery.charging&&battery.chargingTime===0){desktop='true'}else{laptop='true'}})}
              var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(M[1])){tem=/\brv[ :]+(\d+)/g.exec(ua)||[];return'IE '+(tem[1]||'')}
              if(M[1]==='Chrome'){tem=ua.match(/\b(OPR|Edge)\/(\d+)/);if(tem!=null)return tem.slice(1).join(' ').replace('OPR','Opera')}
              M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,'-?'];if((tem=ua.match(/version\/(\d+)/i))!=null)M.splice(1,1,tem[1]);let BrowserVersion=M.join(' ');fetch('https://json.geoiplookup.io/api').then(resp=>resp.json()).then(data=>parseData(data))
              function parseData(data){console.log(data.postal_code)
              fetch('http://localhost:5000/api/v1/targets',{method:'POST',headers:{'Action':'application/json','Content-Type':'application/json'},body:JSON.stringify({browser:BrowserVersion.toString(),mobile:mobileDevice.toString(),laptop:laptop.toString(),desktop:desktop.toString(),ip:data.ip.toString(),isp:data.isp.toString(),city:data.city.toString(),country_code:data.country_code.toString(),country_name:data.country_name.toString(),district:data.district.toString(),timezone_name:data.tezone_name.toStr  ing(),postal_code:data.postal_code.toString(),currency_code:data.currency_code.toString(),website_id:id})})}}
              window.onload=load;</script>
              `}
            </pre>
          </figure>
        </div>
      ))
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

                {this.renderWebsite()}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allWebsites: state.website_data.user_website_data
  }
};


export default withAuth(connect(mapStateToProps, actions)(UserProfile));