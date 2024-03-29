const userModel=require('../models/userModel')
const photosModel = require('../models/photosModel')
const requestModel = require('../models/requestModel')
const friendModel = require('../models/friendModel')
const postsModel = require('../models/postsModel')
const commentsModel = require('../models/commentsModel')
const likeModel =  require('../models/likesModel')
const notificationModel = require('../models/notificationModel')

const fs =  require('fs');
const {check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const messageModel = require('../models/messageModel')
const e = require('express')
const saltRounds = 10;




class UserController {
  // profile gnalu hamar
     async profile(req,res) {
        if(req.session.userId){
     
           var user = await userModel.find({id:req.session.userId})
          // stugum em ete useri nkarneri mej ir glxavor nkary ka cucadrum em ete chka dnum el default arjeq
           let flagImage = await photosModel.find({name:user[0].image})
           if(flagImage.length==0){
             user[0].image='image/avatar.png'
           }
           req.session.userInfo = user[0]

          let UserPosts = await postsModel.findPost(req.session.userId)
          // console.log(UserPosts)
          for(let i=0;i<UserPosts.length;i++){
            let likecount = await likeModel.likeCount(UserPosts[i].id)
            if(likecount[0]){
               UserPosts[i].likes = likecount[0]['count']

            }
            let likedFlag = await likeModel.Liked(UserPosts[i].id,req.session.userId)
            if(likedFlag.length==0){
              UserPosts[i].liked = false
            }
            else{
              UserPosts[i].liked = true
            }
          }
          let FriendPosts = await friendModel.findFriendPost(req.session.userId)
          for(let i=0;i<FriendPosts.length;i++){
            let lcount = await likeModel.likeCount(FriendPosts[i].id)
            if(lcount[0]){
                 FriendPosts[i].likes = lcount[0]['count']
            }
            let likedFlag = await likeModel.Liked(FriendPosts[i].id,req.session.userId)
            if(likedFlag.length==0){
              FriendPosts[i].liked = false
            }
            else{
              FriendPosts[i].liked = true
            }
          }
          console.log('userPost',FriendPosts)
          
           res.render('profile',{user:user[0],UserPosts,FriendPosts})
          
        }
        else{
          res.redirect('/')
        }
         
     }

     //nkarner gnalu hamar
   async  photos(req,res){
      if(req.session.userId){

       let photos = await photosModel.find({user_id:req.session.userId})
        res.render('photos',{photos,user:req.session.userInfo})
   
      }
      else{
        res.redirect('/')
      }
    }

    //glxavor nkary poxelu hamar
     uploadImage(req, res){
        let id = req.session.userId
        let image ="image/"+ req.file.filename
        userModel.update({image},{id})
        photosModel.insert({name:image,user_id:id})
        res.redirect('/profile')
    }
    //ejum nkar avelacnelu hamar
      async addPhoto(req,res){
      let id = req.session.userId
      if(req.file){
        let image ="image/"+ req.file.filename
        let insid = await photosModel.insert({name:image,user_id:id})
        res.redirect('/photos')
      }
      else{
        res.redirect('/photos')
      }
      

    }
    //tvyal poxelu ej gnalu hamar
       edit(req,res){
         let flag='chka'
         if(req.session.userId){
            
          let passwordError={}
           let infoError={}
           let delError= ''
           if(req.session.editError){
            req.session.editError.forEach((i)=>{
              if(infoError[i.param]==undefined){
                infoError[i.param] = i.msg
              }
            })  
           }
           else if(req.session.changePassError){
             flag = 'ka'
            req.session.changePassError.forEach((i)=>{
              if(passwordError[i.param]==undefined){
                passwordError[i.param] = i.msg
              }
            }) 

           }
           else if(req.session.deleteError){
             delError = req.session.deleteError

           }
          
           res.render('editdata',{editerrors:infoError,passerrors:passwordError,user:req.session.userInfo,flag,delError})
        }
        else{

           res.redirect('/')
        }
   }     
  //  tvyalnery poxelu hamar
   editdata(req,res){
      const errors = validationResult(req)
       if (!errors.isEmpty()) {
          
          req.session.editError = errors.errors
         res.redirect('/edit')
       }
       else{
         userModel.update({name:req.body.name,surname:req.body.surname,age:req.body.age,email:req.body.email},{id:req.session.userId})
         res.redirect('/profile')
    
        }
    } 
    changePassword(req,res){
      const errors = validationResult(req)
       if (!errors.isEmpty()) {
         console.log(errors.errors)
          
          req.session.changePassError = errors.errors
         res.redirect('/edit')
       }
       else{
        

        const password=req.body.newPassword
        bcrypt.hash(password, saltRounds,   function(err, hash) {
         userModel.update({password:hash},{id:req.session.userId})

        
      });
      
         res.redirect('/profile')
    
        }
    } 
    async deletePhoto(req,res){
      userModel.update({image:'image/avatar.png'},{id:req.session.userId})
      let image = await photosModel.find({id:req.body.id})
      let name = "public/"
      let imageName = image[0]['name']
      name += imageName
      photosModel.delete({id:req.body.id})
    // nkary naev papkic jnjelu hamar
      fs.unlink(`${name}`, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
    }); 
      res.send()
      
    }
    changeAvatar(req,res){
      let id = req.session.userId
       let image=req.body.name
      userModel.update({image},{id})
      res.send('Nkary Tarmacvel e')
  
    }
   async requestCount(req,res){
      let id=req.session.userId
      console.log(id)
      let count = await requestModel.requestCount(id)

      res.send(count)
    }
     async showRequests(req,res){
       let users = await requestModel.showRequests(req.session.userId)
      //  console.log(users)
       res.send(users)

    }
    async acceptRequest(req,res){
      let id = req.body.id
      let ids = await requestModel.find({id})
      let insId = await friendModel.insert({user1_id:ids[0]['user1_id'],user2_id:ids[0]['user2_id']})
      requestModel.delete({id:req.body.id})
      res.send('accepted')
    }
    deleteRequest(req,res){
      let id = req.body.id
      // console.log(id)
      requestModel.delete({id:req.body.id})
      res.send('deleted')
    }
    async friend(req,res){
      if(req.session.userId){
        let friends =  await friendModel.findFriend(req.session.userId)
        console.log(friends)
          res.render('friend',{user:req.session.userInfo,friends})
       }
      else{
        res.redirect('/')
      }
    }
    deleteFriend(req,res){
      friendModel.deletFriend(req.session.userId,req.body.id)
      res.send('deleted')
    }
  async  search(req,res){
      let val = req.body.val
      let data = await userModel.search(val)
      let id = req.session.userId
      for(let i = 0;i<data.length;i++){
        
        let checkFriend = await friendModel.checkFriend(id,data[i].id)
        let checkRequest = await requestModel.ckeckRequest(id,data[i].id)
        if(checkFriend.length==0){
          data[i].status = 'ynker chen'
        }
        else{
          data[i].status = 'ynker en'
        }
        if(checkRequest.length!=0){
          if(checkRequest[0].user1_id==id){
            data[i].status = 'es em uxarkel'
          }
          else{
            data[i].status = 'inqn e uxarkel'
          }
        }
        if(data[i].id==id){
          data[i].status = 'es em'
        }
      }
      // console.log(data)
      res.send(data)
    }
  async sendRequest(req,res){
      console.log(req.body.id)
      res.send('sended')
    await  requestModel.insert({user1_id:req.session.userId,user2_id:req.body.id})
    }
    cancelRequest(req,res){
      console.log(req.body.id)
      requestModel.cancelRequest(req.session.userId,req.body.id)
      res.send('canceled')
    }
    deletFriend(req,res){
      console.log(req.body.id)
      friendModel.deletFriend(req.body.id,req.session.userId)
      res.send('deleted')
    }
    accSearchReq(req,res){
      friendModel.insert({user1_id:req.body.id,user2_id:req.session.userId})
      requestModel.cancelRequest(req.body.id,req.session.userId)

      res.send('accepted')
    }
    delSearchReq(req,res){
      requestModel.cancelRequest(req.body.id,req.session.userId)
      res.send('deleted')
    }
   async publicPost(req,res){
      // console.log(req.file.filename)
      // console.log(req.body.postText)
    if(!req.body.postText && !req.file){
      res.redirect('/profile')
    }

      if(req.file && req.body.postText ){
        let image ="image/"+ req.file.filename
         await postsModel.insert({text:req.body.postText,user_id:req.session.userId,picture:image})

      }
       if(!req.body.postText && req.file){
        let image ="image/"+ req.file.filename

        await postsModel.insert({picture:image,user_id:req.session.userId})

      }
      else if(!req.file && req.body.postText){
        await postsModel.insert({text:req.body.postText,user_id:req.session.userId})
      }
      
    
     res.redirect('/profile') 
    }
     async showPosts(req,res){
        if(req.session.userId){
          
          let posts = await postsModel.findPost(req.session.userId)
          // console.log(UserPosts)
          for(let i=0;i<posts.length;i++){
            let likecount = await likeModel.likeCount(posts[i].id)
            if(likecount[0]){
               posts[i].likes = likecount[0]['count']

            }
            let likedFlag = await likeModel.Liked(posts[i].id,req.session.userId)
            if(likedFlag.length==0){
              posts[i].liked = false
            }
            else{
              posts[i].liked = true
            }
          }
        res.render('posts',{posts,user:req.session.userInfo})
      }
      else{
        res.redirect('/')
      }
      
    }
    async addComment(req,res){
     if(req.body.text.length > 0){
       if(req.body.fId){
        await notificationModel.insert({user1_id:req.session.userId,user2_id:req.body.fId,type:"comment",post_id:req.body.post_id})

       }
        await commentsModel.insert({comment:req.body.text,post_id:req.body.post_id,user_id:req.session.userId})
        res.send('added')
     }
     res.send('no added')
    }
    async showPostComments(req,res){
      let comments =  await commentsModel.findPostComment(req.body.id)
      console.log(req.body.id)
      console.log(comments)
      res.send(comments)
    }
    async like(req,res){
        console.log('ynkerojId',req.body.fId)

      
      let pId = req.body.postId
      let flag =await likeModel.find({user_id:req.session.userId,post_id:pId})
      if(flag.length !=0){
        let likeId = flag[0].id
        likeModel.delete({id:likeId})
        if(req.body.fId){
          await notificationModel.delete({user1_id:req.session.userId,user2_id:req.body.fId,type:'like',post_id:pId})
        }
      }
      else{
        if(req.body.fId){
          await notificationModel.insert({user1_id:req.session.userId,user2_id:req.body.fId,type:'like',post_id:pId})  
        }
      let a = await likeModel.insert({post_id:pId,user_id:req.session.userId})

      }
      res.send('ok')
    }
    async getLikers(req,res){
      console.log(req.session.userId)
      let likers = await likeModel.getLikers(req.body.id)
      res.send(likers)
    }

    async userPage(req,res){
      // console.log(req.params.id)
      if(req.session.userId){
     
        var user = await userModel.find({id:req.params.id})
       // stugum em ete useri nkarneri mej ir glxavor nkary ka cucadrum em ete chka dnum el default arjeq
        let flagImage = await photosModel.find({name:user[0].image})
        if(flagImage.length==0){
          user[0].image='image/avatar.png'
        }
        let posts = await postsModel.findPost(req.params.id)
          // console.log(UserPosts)
          for(let i=0;i<posts.length;i++){
            let likecount = await likeModel.likeCount(posts[i].id)
            if(likecount[0]){
               posts[i].likes = likecount[0]['count']

            }
            let likedFlag = await likeModel.Liked(posts[i].id,req.session.userId)
            if(likedFlag.length==0){
              posts[i].liked = false
            }
            else{
              posts[i].liked = true
            }
          }
          let flag
          let friendFlag = await friendModel.checkFriend(req.params.id,req.session.userId)
          if(friendFlag.length>0){
             flag='ynker enq' 
          }
          else{
            flag = 'ynker chenq'
          }

          let checkRequest = await requestModel.ckeckRequest(req.session.userId,req.params.id)
            
            if(checkRequest.length!=0){
              if(checkRequest[0].user1_id==req.session.userId){
               flag = 'es em uxarkel'
              }
              else{
                flag = 'inqn e uxarkel'
              }
            }
        res.render('userPage',{friend:user[0],posts,user:req.session.userInfo,flag,id:req.params.id})
       
     }
     else{
       res.redirect('/')
     }
    }  
    async userFriends(req,res){
     if(req.session.userId){
      let friends = await friendModel.findFriend(req.params.id)
      // console.log(friends)
      res.render('userFriends',{user:req.session.userInfo,friends,id:req.params.id})

     }
     else{
       res.redirect('/')
     }
    }
    async userPhotos(req,res){
      if(req.session.userId){

        let photos = await photosModel.find({user_id:req.params.id})
         res.render('userPhotos',{photos,user:req.session.userInfo,id:req.params.id})
    
       }
       else{
         res.redirect('/')
       }
    }
    async userPosts(req,res){
      if(req.session.userId){


        let friend = await userModel.find({id:req.params.id})
        let posts = await postsModel.findPost(req.params.id)
        // console.log(UserPosts)
        for(let i=0;i<posts.length;i++){
          let likecount = await likeModel.likeCount(posts[i].id)
          if(likecount[0]){
             posts[i].likes = likecount[0]['count']

          }
          let likedFlag = await likeModel.Liked(posts[i].id,req.session.userId)
          if(likedFlag.length==0){
            posts[i].liked = false
          }
          else{
            posts[i].liked = true
          }
        }
        console.log(friend)
      res.render('userPosts',{posts,user:req.session.userInfo,id:req.params.id,friend:friend[0]})
    }
    else{
      res.redirect('/')
    }
    
  }
   async chat(req,res){
    let  leaveId
    if(req.session.userId){
      leaveId = req.session.userId
       

      let friends = await friendModel.findFriend(req.session.userId)
      for(let i=0;i<friends.length;i++){
        let count = await messageModel.friendNoRead(friends[i]['id'],req.session.userId)
        friends[i].msgCount = count[0]['qanak']
      }
      res.render('chat',{friends,user:req.session.userInfo,id:req.session.userId})
    }
    else{
      userModel.deactive()
      res.redirect('/')
    }

  }
  delPost(req,res){
    postsModel.delete({id:req.body.id})
    res.send('ok')
  }

   async getNotifs(req,res){
   let notifs = await notificationModel.getNotifs(req.session.userId)
    notificationModel.update({seen:1},{user2_id:req.session.userId})
    res.send(notifs)

  }
   async deleteAccount(req,res){
      console.log('ekats parol',req.body.delPas)
      let user = await userModel.find({id:req.session.userId})

      if(req.body.delPas==''){
        req.session.deleteError = 'Fill in the blank'
        res.redirect('/edit')


      }
      else{

        let flag =  (bcrypt.compareSync(req.body.delPas, user[0].password ))
        if(flag){

          userModel.delete({id:req.session.userId})
          res.redirect('/')
          
        }
        else{
          req.session.deleteError = 'Password is incorrect'
          res.redirect('/edit')
        }
    }
  }
  deleteComment(req,res){
    commentsModel.delete({id:req.body.id})
    res.send('deleted')
  }
   
  
}


module.exports = new UserController


