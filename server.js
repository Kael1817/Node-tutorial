const http = require('http')
const fs = require('fs') 
const _ = require('lodash')   //lodash package

const server = http.createServer((req, res) =>{
  
  //lodash
  const num = _.random(0, 20)
  console.log(num)

  const greet = _.once(() => {
    console.log('hello')
  })

  greet()

  //sets header content type
  res.setHeader('Content-Type', 'text/html')

  // Routing
  let path ="./views/"
  switch(req.url) {
    case '/':
      path += 'index.html'
      res.statusCode = 200;   
      break
    case '/about':
      path += 'about.html'
      res.statusCode = 200;  
      break
    case '/about-me':    //Redirecting 
      res.statusCode = 301;  
      res.setHeader('Location', '/about')
      res.end()
      return
    default:
      path += '404.html'
      res.statusCode = 404;  
      break 
  }

  //send an html file
  fs.readFile(path, (err, data) =>{ 
    if(err){
      console.log(err)
      res.end()
    }else {
      res.write(data)
      res.end()
    }
  })
})

// Listen to request
server.listen(3000, 'localhost', () =>{
  console.log('listening request for port 3000')
})