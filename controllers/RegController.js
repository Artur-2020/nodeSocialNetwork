const {check, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userModel = require('../models/userModel')
//ays hatvacy login signup gnalu mutq gorcelu ev grancvelu hamar e

class RegController{

    login(req,res){

        let error={}
        if(req.session.loginError)
        req.session.loginError.forEach((i)=>{
          if(error[i.param]==undefined){
            error[i.param] = i.msg
          }
        
        })  
      
        req.session.destroy()
         res.render('login',{errors:error})
      }
      signup(req,res){
        let error={}
        let value={}
        if(req.session.validationError && req.session.inputValue){
         
      
          req.session.validationError.forEach((i)=>{
            if(error[i.param]==undefined){
              error[i.param] = i.msg
            }
             value=req.session.inputValue
          })  
        }
        
        req.session.destroy()
         res.render('signup',{errors:error,value:value})
         
      }
      signupForm (req, res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
           const inputValue = req.body
           req.session.inputValue = inputValue
           req.session.validationError = errors.errors
          res.redirect('/signup')
        }
        else{
            const password=req.body.password
           bcrypt.hash(password, saltRounds,  async function(err, hash) {
          let id  = await userModel.insert({name:req.body.name,surname:req.body.surname,age:req.body.age,email:req.body.email,password:hash})
           
         });
         
        
         res.redirect('/')
         
        }  
    }
    loginForm(req,res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
        
           req.session.loginError = errors.errors
           
          res.redirect('/')
        }
        else{
          
          res.redirect('profile')
        }
       }
}
module.exports = new RegController