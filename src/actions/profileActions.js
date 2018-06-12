import { NEW_WEBSITE } from './types'
import { FETCH_WEBSITES } from './types'
import { WEBSITE_GRAPH } from '../actions/types';

export const createWebsite = (websiteData) => dispatch => {
  let {name, user_id} = websiteData

  fetch(`http://localhost:5000/api/v1/websites/`, {
       method: "POST",
       headers: {
         "Action": "application/json",
         "Content-Type": "application/json"
       },
       body: JSON.stringify(websiteData)
    })
      .then(resp => resp.json())
      .then(new_website =>
        dispatch({
          type: NEW_WEBSITE,
          payload: new_website
        }))
}

export const fetchWebsites = (id) => dispatch => {
  fetch(`http://localhost:5000/api/v1/users/${id}/websites`)
  .then(resp => resp.json())
  .then(websiteData => dispatch({
    type: FETCH_WEBSITES,
    payload: websiteData
  }));
}

export const websiteGraph = (id) => dispatch => {
     fetch(`http://localhost:5000/api/v1/websites/${id}/targets`)
     .then(resp => resp.json())
     .then(data => dispatch({
       type: WEBSITE_GRAPH,
       payload: data
     }));
}






// return (
//   <figure>
//     <pre>
//       <code>
//           script shit here
//       </code>
//     </pre>
//   </figure>
//   )




// <script>
//   function load() {
//         let mobileDevice = 'false'
//         let desktop = 'false'
//         let laptop = 'false'
//
//         if(window.innerWidth <= 800 && window.innerHeight <= 600) {
//             var useragent = navigator.userAgent;
//             if(useragent.match(/Android/i)) {
//               mobileDevice = 'android';
//             } else if(useragent.match(/webOS/i)) {
//               mobileDevice = 'webos';
//             } else if(useragent.match(/iPhone/i)) {
//               mobileDevice = 'iphone';
//             } else if(useragent.match(/iPad/i)) {
//               mobileDevice = 'ipad';
//             } else if(useragent.match(/Windows Phone/i)) {
//               mobileDevice = 'windows phone';
//             }
//           } else {
//             navigator.getBattery().then(function(battery) {
//               if (battery.charging && battery.chargingTime === 0) {
//                 desktop = 'true'
//               } else {
//                 laptop = 'true'
//               }
//             })
//           }
//
//           var ua= navigator.userAgent, tem,
//           M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
//           if(/trident/i.test(M[1])){
//             tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
//             return 'IE '+(tem[1] || '');
//           }
//           if(M[1]=== 'Chrome'){
//             tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
//             if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
//           }
//           M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
//           if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
//           let BrowserVersion = M.join(' ');
//
//
//           fetch('https://json.geoiplookup.io/api')
//           .then(resp => resp.json())
//           .then(data => parseData(data))
//
//           function parseData(data) {
//             console.log(data.postal_code)
//             fetch('http://localhost:5000/api/v1/targets', {
//                 method: 'POST',
//                 headers: {
//                   'Action': 'application/json',
//                   'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                   browser: BrowserVersion.toString(),
//                   mobile: mobileDevice.toString(),
//                   laptop: laptop.toString(),
//                   desktop: desktop.toString(),
//                   ip: data.ip.toString(),
//                   isp: data.isp.toString(),
//                   city: data.city.toString(),
//                   country_code: data.country_code.toString(),
//                   country_name: data.country_name.toString(),
//                   district: data.district.toString(),
//                   timezone_name: data.timezone_name.toString(),
//                   postal_code: data.postal_code.toString(),
//                   currency_code: data.currency_code.toString(),
//                   website_id: id
//                 })
//               })
//             }
//           }
//           window.onload = load;
// </script>
