const express = require('express') 
const app=express()
const bodyParser = require('body-parser') 
const session = require('express-session')
const router = require('./router')



app.set('view engine','ejs')

app.use(session({
   secret: '123',
   resave: false,
   saveUninitialized: true
 }))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(8000)