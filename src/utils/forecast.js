 const request = require('postman-request')
const forecast = (latitude, longitude, callback) => {
      const baseUrl = process.env.WEATHERSTACK_BASE_URL;
      const apiKey = process.env.WEATHERSTACK_API_KEY;
     const URL = `${baseUrl}?access_key=${apiKey}&query=${latitude},${longitude}&units=f`;
 
     request({url:URL,json:true}, (error,{body}) => {
     if(error){
      callback("unable to connect the network.....!", undefined)
     }else if(body.error){
      callback("unable to find the location.....!", undefined)
     }else{ 
      callback(undefined, {
        location: body.location.name,
        temparature : body.current.temperature,
        feelslike: body.current.feelslike
        
      })
     }
   })
  }
  module.exports = forecast