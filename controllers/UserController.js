const userModel=require('../models/userModel')
const photosModel = require('../models/photosModel')
const requestModel = require('../models/requestModel')
const {check, validationResult } = require('express-validator');




class UserController {
  // profile gnalu hamar
     async profile(req,res) {
        if(req.session.userId){
     
           var user = await userModel.find({id:req.session.userId})
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
        res.render('photos',{photos})
   
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
      async edit(req,res){
         if(req.session.userId){
            
           var user = await userModel.find({id:req.session.userId})
           let error={}
           if(req.session.editError)
           req.session.editError.forEach((i)=>{
             if(error[i.param]==undefined){
               error[i.param] = i.msg
             }
           })  
           res.render('editdata',{errors:error,user:user[0]})
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
         res.redirect('/profile/edit')
       }
       else{
         userModel.update({name:req.body.name,surname:req.body.surname,age:req.body.age,email:req.body.email},{id:req.session.userId})
         res.redirect('/profile')
    
        }
    } 
    deletePhoto(req,res){
      // console.log(req.body.id)
      photosModel.delete({id:req.body.id})
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

      console.log(count)
      res.send(count)
    }
       
}

module.exports = new UserController


