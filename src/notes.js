// THE PLAN


// MVP
// 1. Create embedable element that tracks IP and Useragent data
// 2. Client site where all data will be displayed

// MVP STRETCH GOALS
// 1. Crossdomain tracking cookie with either CORS or JSONP
// 2. Incorporate crypto payment system
// 3. Build the client site out on react native

// Users will have to make an account before being able to embed the script
// Try to find data usage/session time/ try to figure out crossdomain tracking


// Data to gather: location data, device type: (mobile, laptop, desktop), browser type

// Backend model: User has many targets through websites




// Schema:

// USER:

// email
// password


// TARGET:

// mobileDevice text
// laptop boolean
// desktop boolean
// browser text

// ip
// isp
// postal_code
// city
// country_code
// country_name
// region
// district
// timezone_name
// currency_name





// newWebsite = (websiteData) => {
//   return (
//     <div>
//       <h1>{websiteData.name}</h1>
//       <Link onClick={() => this.passID(websiteData.id)} to='/graph'>
//         <button>Graph Page</button>
//       </Link>
//       <figure>
//         <pre>
//         {`
//           <script>function load(){let mobileDevice='false'let desktop='false'let laptop='false'
//           if(window.innerWidth<=800&&window.innerHeight<=600){var useragent=navigator.userAgent;if(useragent.match(/Android/i)){mobileDevice='android'}else if(useragent.match(/webOS/i)){mobileDevice='webos'}else if(useragent.match(/iPhone/i)){mobileDevice='iphone'}else if(useragent.match(/iPad/i)){mobileDevice='ipad'}else if(useragent.match(/Windows Phone/i)){mobileDevice='windows  phone'}}else{navigator.getBattery().then(function(battery){if(battery.charging&&battery.chargingTime===0){desktop='true'}else{laptop='true'}})}
//           var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=))?*(+)/i)||[];if(/trident/i.test(M[1])){tem=/\brv[ :]+(+)/g.exec(ua)||[];return'IE '+(tem[1]||'')}
//           if(M[1]==='Chrome'){tem=ua.match(/\b(OPR|Edge)(+)/);if(tem!=null)return tem.slice(1).join(' ').replace('OPR','Opera')}
//           M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,'-?'];if((tem=ua.match(/version(+)/i))!=null)M.splice(1,1,tem[1]);let BrowserVersion=M.join(' ');fetch('https://json.geoiplookup.io/api').then(resp=>resp.json()).then(data=>parseData(data))
//           function parseData(data){console.log(data.postal_code)
//           fetch('http://localhost:5000/api/v1/targets',{method:'POST',headers:{'Action':'application/json','Content-Type':'application/json'},body:JSON.stringify({browser:BrowserVersion.toString(),mobile:mobileDevice.toString(),laptop:laptop.toString(),desktop:desktop.toString(),ip:data.ip.toString(),isp:data.isp.toString(),city:data.city.toString(),country_code:data.country_code.toString(),country_name:data.country_name.toString(),district:data.district.toString(),timezone_name:data.tezone_name.toStr  ing(),postal_code:data.postal_code.toString(),currency_code:data.currency_code.toString(),website_id:id})})}}
//           window.onload=load;</script>
//           `}
//         </pre>
//       </figure>
//     </div>
//   )
// {() => this.newWebsite()}
// }

// <figure>
//   <pre>
//   {`
//     <script>function load(){let mobileDevice='false'let desktop='false'let laptop='false'
//     if(window.innerWidth<=800&&window.innerHeight<=600){var useragent=navigator.userAgent;if(useragent.match(/Android/i)){mobileDevice='android'}else if(useragent.match(/webOS/i)){mobileDevice='webos'}else if(useragent.match(/iPhone/i)){mobileDevice='iphone'}else if(useragent.match(/iPad/i)){mobileDevice='ipad'}else if(useragent.match(/Windows Phone/i)){mobileDevice='windows  phone'}}else{navigator.getBattery().then(function(battery){if(battery.charging&&battery.chargingTime===0){desktop='true'}else{laptop='true'}})}
//     var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=))?*(+)/i)||[];if(/trident/i.test(M[1])){tem=/\brv[ :]+(+)/g.exec(ua)||[];return'IE '+(tem[1]||'')}
//     if(M[1]==='Chrome'){tem=ua.match(/\b(OPR|Edge)(+)/);if(tem!=null)return tem.slice(1).join(' ').replace('OPR','Opera')}
//     M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,'-?'];if((tem=ua.match(/version(+)/i))!=null)M.splice(1,1,tem[1]);let BrowserVersion=M.join(' ');fetch('https://json.geoiplookup.io/api').then(resp=>resp.json()).then(data=>parseData(data))
//     function parseData(data){console.log(data.postal_code)
//     fetch('http://localhost:5000/api/v1/targets',{method:'POST',headers:{'Action':'application/json','Content-Type':'application/json'},body:JSON.stringify({browser:BrowserVersion.toString(),mobile:mobileDevice.toString(),laptop:laptop.toString(),desktop:desktop.toString(),ip:data.ip.toString(),isp:data.isp.toString(),city:data.city.toString(),country_code:data.country_code.toString(),country_name:data.country_name.toString(),district:data.district.toString(),timezone_name:data.tezone_name.toStr  ing(),postal_code:data.postal_code.toString(),currency_code:data.currency_code.toString(),website_id:id})})}}
//     window.onload=load;</script>
//     `}
//   </pre>
// </figure>
