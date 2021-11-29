fetch('url', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Irrigar'
  })
})
  .then(res => {
    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log('ERROR'))
  
const url = 'url'

