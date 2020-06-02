const userModel=require('../models/userModel')
const photosModel = require('../models/photosModel')
const requestModel = require('../models/requestModel')
const friendModel = require('../models/friendModel')
const postsModel = require('../models/postsModel')
const commentsModel = require('../models/commentsModel')
const likeModel =  require('../models/likesModel')

const fs =  require('fs');
const {check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
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
      let image ="image/"+ req.file.filename
      let insid = await photosModel.insert({name:image,user_id:id})
      res.redirect('/photos')

    }
    //tvyal poxelu ej gnalu hamar
       edit(req,res){
         if(req.session.userId){
            
          let passwordError={}
           let infoError={}
           if(req.session.editError){
            req.session.editError.forEach((i)=>{
              if(infoError[i.param]==undefined){
                Infoerror[i.param] = i.msg
              }
            })  
           }
           else if(req.session.changePassError){
            req.session.changePassError.forEach((i)=>{
              if(passwordError[i.param]==undefined){
                passwordError[i.param] = i.msg
              }
            }) 

           }
          
           res.render('editdata',{editerrors:infoError,passerrors:passwordError,user:req.session.userInfo})
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
  async  sendRequest(req,res){
      // console.log(req.body.id)
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
    acceptSearchReq(req,res){
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
      if(req.file ){
        let image ="image/"+ req.file.filename
         await postsModel.insert({text:req.body.postText,user_id:req.session.userId,picture:image})

      }
      else{
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
      let pId = req.body.postId
      let flag =await likeModel.find({user_id:req.session.userId,post_id:pId})
      // delId = insid
      if(flag.length !=0){
        let likeId = flag[0].id
        likeModel.delete({id:likeId})
      }
      else{
      let a = await likeModel.insert({post_id:pId,user_id:req.session.userId})

      }
      res.send('ok')
    }
    async getLikers(req,res){
      let likers = await likeModel.getLikers(req.body.id)
      res.send(likers)
    }

    async friendPage(req,res){
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
            let likedFlag = await likeModel.Liked(posts[i].id,req.params.id)
            if(likedFlag.length==0){
              posts[i].liked = false
            }
            else{
              posts[i].liked = true
            }
          }
        res.render('friendPage',{friend:user[0],posts,user:req.session.userInfo,id:req.params.id})
       
     }
     else{
       res.redirect('/')
     }
    }  
    async friendFriends(req,res){
     if(req.session.userId){
      let friends = await friendModel.findFriend(req.params.id)
      // console.log(friends)
      res.render('friendFriends',{user:req.session.userInfo,friends,id:req.params.id})

     }
     else{
       res.redirect('/')
     }
    }
    async friendPhotos(req,res){
      if(req.session.userId){

        let photos = await photosModel.find({user_id:req.params.id})
         res.render('friendPhotos',{photos,user:req.session.userInfo,id:req.params.id})
    
       }
       else{
         res.redirect('/')
       }
    }
    async fPosts(req,res){
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
      res.render('friendPosts',{posts,user:req.session.userInfo,id:req.params.id,friend:friend[0]})
    }
    else{
      res.redirect('/')
    }
    
  }
}


module.exports = new UserController


