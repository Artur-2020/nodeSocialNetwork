const userModel=require('../models/userModel')
const photosModel = require('../models/photosModel')
const requestModel = require('../models/requestModel')
const friendModel = require('../models/friendModel')
const fs =  require('fs');
const {check, validationResult } = require('express-validator');




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
           res.render('profile',{user:user[0]})
           
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
            
          
           let error={}
           if(req.session.editError)
           req.session.editError.forEach((i)=>{
             if(error[i.param]==undefined){
               error[i.param] = i.msg
             }
           })  
           res.render('editdata',{errors:error,user:req.session.userInfo})
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
        // console.log(friends)
          res.render('friend',{user:req.session.userInfo,friends})
       }
      else{
        res.redirect('/')
      }
    }
    deleteFriend(req,res){
      friendModel.delFriend(req.session.userId,req.body.id)
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
    delSearchFriend(req,res){
      console.log(req.body.id)
      friendModel.delFriend(req.body.id,req.session.userId)
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
       
}

module.exports = new UserController


