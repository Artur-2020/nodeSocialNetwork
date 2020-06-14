const {check, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const userModel = require('../models/userModel')

var nodemailer = require('nodemailer');



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: 'artsahakyan44@gmail.com',
         pass: 'artsahak19  '
     }
 });



//ays hatvacy login signup gnalu mutq gorcelu ev grancvelu hamar e

class RegController{

     

    login(req,res){
        let activeError = ''
        let error={}
        if(req.session.loginError)
        req.session.loginError.forEach((i)=>{
          if(error[i.param]==undefined){
            error[i.param] = i.msg
          }
        }) 
        if(req.session.activeError){
          activeError = req.session.activeError
        }

        // console.log(req.session.userId)
        userModel.update({online:0},{id:req.session.userId})
        req.session.destroy()
         res.render('login',{errors:error,activeError})
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
          
        req.session.userId=id
        
          const activehash = bcrypt.hashSync( req.body.email + id, saltRounds);
          // console.log(req.session.userId)
          
          const mailOptions = {
              to: req.body.email, // list of receivers
              subject: 'activate Profile', // Subject line
              html: `<a href = 'http://localhost:8000/hastatel/${req.body.email}/${activehash}' >Click here for activating</a>`// plain text body
            };
            transporter.sendMail(mailOptions, function (err, info) {
              if(err)
                console.log(err)
              else
                console.log(info);
           });
           
         });
         res.redirect('/')
         
        }  
    }
   async loginForm(req,res){
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
        
           req.session.loginError = errors.errors
           
          res.redirect('/')
        }
        else{
          // console.log(req.session.userId)
          let activate = await userModel.find({id:req.session.userId})
          if(activate[0].active==0){
            req.session.activeError = 'activate youre email'
            
            res.redirect('/')
          }
          else{
            userModel.update({online:1},{id:req.session.userId})
            res.redirect('profile')

          }
        }
       }
       async hastatel(req,res){
         let user = await userModel.find({email:req.params.email })
        let flag = bcrypt.compareSync(user[0].email+user[0].id,req.params[0]);
        if(flag){
          userModel.update({active:1},{email:req.params.email})
          res.redirect('/')
        }
        else{
          res.redirect('/signup')
        }
        console.log(req.params.email)
        
        
       }
}
module.exports = new RegController