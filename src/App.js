import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './helpers/store';
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router><Home/></Router>
        </div>
      </Provider>
    );
  }
}

export default App;


// <script type="text/javascript">
//   function load() {
//         let mobileDevice = 'Not a mobile device'
//         let desktop = "Not a desktop"
//         let laptop = "Not a laptop"
//         var useragent = navigator.userAgent;
//         if(useragent.match(/Android/i)) {
//           mobileDevice = 'android';
//         } else if(useragent.match(/webOS/i)) {
//           mobileDevice = 'webos';
//         } else if(useragent.match(/iPhone/i)) {
//           mobileDevice = 'iphone';
//         } else if(useragent.match(/iPad/i)) {
//           mobileDevice = 'ipad';
//         } else if(useragent.match(/Windows Phone/i)) {
//           mobileDevice = 'windows phone';
//         } else {
//             navigator.getBattery().then(function(battery) {
//                 if (battery.charging && battery.chargingTime === 0) {
//                   desktop = "I'm a desktop"
//                 } else {
//                   laptop = "I'm a laptop"
//                 }
//               })
//         }
//         var ua= navigator.userAgent, tem,
//         M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
//         if(/trident/i.test(M[1])){
//           tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
//           return 'IE '+(tem[1] || '');
//         }
//         if(M[1]=== 'Chrome'){
//           tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
//           if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
//         }
//         M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
//         if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
//         let BrowserVersion = M.join(' ');
//
//       fetch('https://json.geoiplookup.io/api')
//           .then(resp => resp.json())
//           .then(data => parseData(data))
//
//       function parseData(data) {
//         console.log(mobileDevice)
//          fetch(`http://6ab9db65.ngrok.io/api/v1/users`, {
//                  method: "POST",
//                  headers: {
//                    "Action": "application/json",
//                    "Content-Type": "application/json"
//                  },
//                  body: JSON.stringify({
//                    name: `${mobileDevice}`
//                  })
//              })
//        }
//   }
//     window.onload = load;
// </script>
