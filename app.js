const express = require('express')
const morgan = require('morgan')  //require morgan 

//Setup express app
const app = express()

//Register view engine 
app.set('view engine', 'ejs')

//listen for request
app.listen(3000)

//
app.use(morgan('dev'))
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