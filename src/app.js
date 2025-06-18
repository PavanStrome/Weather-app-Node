const express = require('express')
const request = require('postman-request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const path = require('path')
const app = express();
const hbs = require('hbs');
const { title } = require('process');
  const partilasPath = path.join(__dirname, '../template/partials')
 const viwepath = path.join(__dirname,'../template/View')
 const localPublicFolder = path.join(__dirname,'../public')
 app.use(express.static(localPublicFolder))
 hbs.registerPartials(partilasPath)
 
 app.set('view engine', 'hbs');
 app.set('views', viwepath)
 app.get('', (req, res) => {
  res.render('index', {
    title: 'weather',
    name: 'pavan kumar'
  })
})

app.get('/helpPage', (req, res) => {
  res.render('help', {
    title : 'welcome to help page',
    contact: '9989404421',
    mail: 'pavankumar33253@gmail.com',
    name: 'pavan kumar'
  })
})

app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: "missing address!...."
    })
  }
  
  const location = req.query.address
  geoCode(location, (error,{latitude,longitude} = {}) => {
   if(error) return res.send(error)
   forecast(latitude, longitude, (error, forecastdata) => {
   if(error) return res.send(error)
     
   res.send(forecastdata)
})
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title : 'about me',
    name: 'Iam Pavan Kumar'
  })
})

app.get('/*splat', (req, res) => {
    res.render('404', {
        title: '404',
        name:'Pavan Kumar',
        errorMessage: 'Page not found'
    })
})



app.listen(3000, ()=>{
  console.log('server port 3000 is running....!')
})