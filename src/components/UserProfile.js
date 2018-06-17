import React, { Component } from 'react';
import { connect } from 'react-redux';
import profpic from '../profpic.svg';
import * as actions from '../actions/profileActions';
import Fade from 'react-reveal/Fade';
import withAuth from '../hocs/withAuth';
import { Link } from 'react-router-dom'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

class UserProfile extends Component {

  state = {
    name: '',
    user_id: 0
  }

  componentDidMount = () => {
    this.props.fetchWebsites(this.props.auth.currentUser.id)
  }

  componentWillReceiveProps = (nextProps) => {
    if(nextProps.newWebsite){
      this.props.allWebsites.unshift(nextProps.newWebsite);
    }
  }

handleClick = (e) => {
    e.preventDefault();
    const websiteData = {
      name: this.state.name,
      user_id: parseInt(e.target.id)
    }
    this.props.createWebsite(websiteData)
  }

  passID = (id) => {
    if(id != 1){
      alert('No data available. Rerouting to CURSR CO data')
    } else {
      this.props.websiteGraph(id)
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  allWebsites = () => {
      return this.props.allWebsites.map(data => (
      <Fade bottom>
        <div className="websiteContainer">
          <h2 className="websiteName">{data.name}</h2>
          <Link className="graphButton" onClick={() => this.passID(data.id)} to='/graph'>
            <button>Graph Page</button>
          </Link>

          <figure>
            <pre>
            {`
  <script>function load(){let mobileDevice='false'let desktop='false'let laptop='false'if(window.innerWidth<=800&&window.innerHeight<=600)
  {var useragent=navigator.userAgent;if(useragent.match(/Android/i)){mobileDevice='android'}else if(useragent.match(/webOS/i))
  {mobileDevice='webos'}else if(useragent.match(/iPhone/i)){mobileDevice='iphone'}else if(useragent.match(/iPad/i)){mobileDevice='ipad'}else if(useragent.match(/Windows Phone/i))
  {mobileDevice='windowphone'}}else{navigator.getBattery().then(function(battery){if(battery.charging&&battery.chargingTime===0){desktop='true'}else{laptop='true'}})}
  var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=))?*(+)/i)||[];if(/trident/i.test(M[1]))
  {tem=/rv[ :]+(+)/g.exec(ua)||[];return'IE '+(tem[1]||'')}if(M[1]==='Chrome'){tem=ua.match(/(OPR|Edge)(+)/);if(tem!=null)return tem.slice(1).join(' ')
  .replace('OPR','Opera')}M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,'-?'];if((tem=ua.match(/version(+)/i))!=null)M.splice(1,1,tem[1]);
  let BrowserVersion=M.join(' ');fetch('https://json.geoiplookup.io/api').then(resp=>resp.json()).then(data=>parseData(data))function
  parseData(data){console.log(data.postal_code)fetch('http://localhost:5000/api/v1/targets',{method:'POST',headers:{'Action':'application/json','Content-Type':'application/json'},
  body:JSON.stringify({browser:BrowserVersion.toString(),mobile:mobileDevice.toString(),laptop:laptop.toString(),desktop:desktop.toString(),ip:data.ip.toString()
  ,isp:data.isp.toString(),city:data.city.toString(),country_code:data.country_code.toString(),country_name:data.country_name.toString(),district:data.district.toString()
  ,timezone_name:datezone_name.toStr  ing(),postal_code:data.postal_code.toString(),currency_code:data.currency_code.toString(),website_id:id})})}}window.onload=load;</script>
              `}
            </pre>
          </figure>
        </div>
      </Fade>
      ))
  }

  render() {
    let {email, id} = this.props.auth.currentUser
    return (
      <div className='mainContainer'>
        <div className='profileContainer'>
            <div className='infoContainer'>
              <img src={profpic} className='profpic'/>
              <h2>{email}</h2>
              <Link className='logout' onClick={this.props.logoutUser} to='/'>
                <button>Logout</button>
              </Link>
            </div>
              <div className='BREAK'></div>
              <br/>
              <br/>
          <Fade bottom>
            <form>
              <input className='newSite' placeholder='Add Website' type='text' name='name' onChange={this.onChange} value={this.state.name}/>
              <button className='newScript' type='submit' id={id} onClick={this.handleClick}>Generate Script</button>
            </form>
          </Fade>
            <br/>
            <br/>
              {this.allWebsites()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allWebsites: state.website_data.user_website_data,
    newWebsite: state.website_data.new_website_data
  }
};


export default withAuth(connect(mapStateToProps, actions)(UserProfile));
