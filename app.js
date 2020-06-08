const express = require('express') 
const app=express()
const bodyParser = require('body-parser') 
const session = require('express-session')
const router = require('./router')
var server = require('http').Server(app);
var io = require('socket.io')(server);



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

io.on('connection', function (socket) {
  // socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function (data) {
  //   console.log(data);
  // });
});

server.listen(8000)