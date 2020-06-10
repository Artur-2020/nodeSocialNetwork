const express = require('express') 
const app=express()
const bodyParser = require('body-parser') 
const session = require('express-session')
const router = require('./router')
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messageModel = require('./models/messageModel')



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
  socket.on('/findmessage', async function (data) {
    let messages = await messageModel.findMessage(data.myId,data.friendId)
    console.log(messages)
    //ete serveric tvyal enq uxarkum u ed tvyaly menak mer mot a erevum et depqum tvyaly het enq uxarkum socket emiti mijocov
    socket.emit('/messages',{messages})
  });
  socket.on('/sendMessage', async (data)=>{
    let msgId=await  messageModel.insert({user1_id:data.myId,user2_id:data.friendId,message:data.text})
    let msg = await messageModel.find({id:msgId})
  })
});

server.listen(8000)