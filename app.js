const express = require('express')
const morgan = require('morgan')  
const mongoose = require('mongoose') //mongoose 

//Setup express app
const app = express()

//connect to mongoDB
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.ut5kx.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts'
mongoose.connect(dbURI)

//Register view engine 
app.set('view engine', 'ejs')

//listen for request
app.listen(3000)

//Using morgan
app.use(morgan('dev'))

//middleware & static file
app.use(express.static('public'))

//Routing 
//Homepage
app.get('/', (req, res) =>{
  //Blogs
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ]
  res.render('index', {title: 'Home', blogs}) //passing blogs
}) 

//About Page
app.get('/about', (req, res) =>{
  res.render('about', {title: 'About'})
}) 

//Create Blog Page
app.get('/blogs/create', (req, res) =>{
  res.render('create', {title: 'Create a new Blog'})
}) 

//404 page
app.use((req, res) => {
  res.status(404).render('404', {title: '404'})
})

//for reset 