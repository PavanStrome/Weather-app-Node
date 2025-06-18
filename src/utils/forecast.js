 const request = require('postman-request')
const forecast = (latitude, longitude, callback) => {
     const URL = 'https://api.weatherstack.com/current?access_key=490e0b03524cb62c175345b0a64eb259&query=' + latitude + ','+ longitude + '&units=f'

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