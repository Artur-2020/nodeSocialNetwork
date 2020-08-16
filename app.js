const express = require('express') 
  const app=express()
  const bodyParser = require('body-parser') 
  const session = require('express-session')
  const router = require('./router')
  var server = require('http').Server(app);
  var io = require('socket.io')(server);
  var messageModel = require('./models/messageModel')
  var notificationModel  = require('./models/notificationModel')
const { assert } = require('console')



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

  io.on('connection',  function (socket) {
   

    socket.on('/number',async (data)=>{
      socket.join(data.id)
      let count = await messageModel.noReadedMessages(data.id)
      socket.emit('/count',{count:count[0]})

      let notifCount = await  notificationModel.notifCount(data.id)
      socket.emit('/notifCount',{count:notifCount[0]['count']})

    })
    socket.on('/findmessage', async function (data) {


      socket.join(data.myId) // esi vor im id pahem te indznic um em uzum uxarkel pahum em serverum

      let messages = await messageModel.findMessage(data.myId,data.friendId)

      messageModel.update({read:1},{user1_id:data.friendId})

      
      
      

      //ete serveric tvyal enq uxarkum u ed tvyaly menak mer mot a erevum et depqum tvyaly het enq uxarkum socket emiti mijocov
      
      socket.emit('/messages',{messages})
    });
    socket.on('/sendMessage', async (data)=>{
      let msgId=await  messageModel.insert({user1_id:data.myId,user2_id:data.friendId,message:data.text})
      let msg = await messageModel.find({id:msgId})


      
      if(msg[0].message.length>0){
        socket.broadcast.to(data.friendId).emit('new message',{msg:msg[0]})
        socket.emit('new message',{msg:msg[0]})
      }
        let count =  await messageModel.noReadedMessages(data.friendId)
        socket.broadcast.to(data.friendId).emit('/count',{count:count[0]})

      
      
       

        // socket.broadcast.emit('new message',{msg:msg[0]}) // esi saxi mot a cuyc talis im mot che
        
    })
       

    
  });

  server.listen(8000)