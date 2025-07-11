
 const request = require('postman-request')
 const geoCode = (address, callback) => {
   const positionstackBaseUrl = process.env.POSITIONSTACK_BASE_URL;
   const positionstackApiKey = process.env.POSITIONSTACK_API_KEY;
       const URL1 = `${positionstackBaseUrl}?access_key=${positionstackApiKey}&query=${encodeURIComponent(address)}&limit=1`;
       request({url:URL1,json:true}, (error,{body} ) =>{
         if(error){
            callback("unable to connect the network.....!", undefined)
         }else if(body.error || !body.data || body.data.length === 0 || !body){
            callback("unable to fnd the location.....! try agin with proper search term", undefined)
         }else{
            data = {
             latitude: body.data[0].latitude,
             longitude: body.data[0].longitude
             }
            callback(undefined,data)
         }
       }
      )

  }
  module.exports = geoCode