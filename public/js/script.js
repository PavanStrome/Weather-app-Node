



const weatherForm = document.querySelector('form')
const address = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const msg3 = document.querySelector('#msg3')
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('getting from..')
  const city = address.value
  console.log(city)
  
  fetch(`http://localhost:3000/weather?address=${city}`).then((response) => {
  
  response.json().then((data) => {
    if(data.error) {
      msg1.textContent = data.error
      msg2.textContent =' '
      msg3.textContent=' '
    } else {
      msg1.textContent = `location : ${data.location}`
      msg2.textContent = `temparatre: ${data.temparature} degree farenheit`
      msg3.textContent = `feelslike: ${data.feelslike} degree farenheit`
    console.log({
      location:data.location,
      feelslike: data.feelslike,
      temperature: data.temparature
    })
    }
  })
})
})