const express = require('express')

//Setup express app
const app = express()

//listen for request
app.listen(3000)
app.get('/', (req, res) =>{
  res.send('<p>home page</p>');
}) 