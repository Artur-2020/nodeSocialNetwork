const express = require('express')
const  router = express.Router()

//sa nkar upload anelu hamar e
const multer = require('multer')

const {check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const RegController = require('./controllers/RegController.js')
const UserController = require('./controllers/UserController')

const userModel = require('./models/userModel')

// SET STORAGE
//sa apahovum e jamanakavor hasceic himnakan hasce qcelu gortsntacy
var storage = multer.diskStorage({   destination: function (req, file, cb) { 
    cb(null, 'public/image')   },   filename: function (req, file, cb) {   
    cb(null, Date.now()+file.originalname)    } })
    var upload = multer({ storage: storage })
 

router.get('/',RegController.login)

router.get('/profile',UserController.profile)
router.get('/profile/edit',UserController.edit)




// grancvelu validacia
router.post('/signupForm',[
   check('name').notEmpty().withMessage('fill in the name field blank').isAlpha().withMessage('The name field should only contain a letter'),
   check('surname').notEmpty().withMessage('fill in the surname field blank').isAlpha().withMessage('The name field should only contain a letter'),
   check('email').notEmpty().withMessage(' fill in the email field blank').isEmail().withMessage('The form is incorrect '),
   check('age').notEmpty().withMessage('fill in the age field blank').isNumeric().withMessage(' The age field should only contain a number'),
   check('password').notEmpty().withMessage('fill in the password field blank').isLength({ min: 6,max:12 }).withMessage('The password field  must contain at least 6 symbols and a maximum of 12'),
   check('confirm_password').notEmpty().withMessage('fill in the confirm password field blank').custom((value, {req}) => (value === req.body.password)).withMessage('The password does not match'),
  
  //nuyn emaili validacia

   check('email').custom( async value   => {
     var user=await userModel.find({email:value})
     if(user.length!=0){
       return Promise.reject()

     }
      
  }).withMessage('Emaily allredy exist')
  ],RegController.signupForm)


  // mutq gortselu validacia
  router.post('/loginForm',[
  check('email').notEmpty().withMessage('  fill in the email field blank'),
  check('password').notEmpty().withMessage(' fill in the password field blank'),

  check('email').custom( async (value,{req})  => {
    var user=await userModel.find({email:value})
    if(user.length==0){
      return Promise.reject()

    }

    //sa stugum e passwordi hamynknely
    else{
      let flag =  (bcrypt.compareSync(req.body.password, user[0].password ))

      if(!flag){
        return Promise.reject()
      }
      req.session.userId=user[0].id
    }
     
 }).withMessage('The data is incorrectly filled in')

 ],RegController.loginForm)


 router.get('/signup',RegController.signup)


 //nkar avelacnel glxavor
 router.post('/uploadImage',upload.single('image'),UserController.uploadImage)


//tvyalneri popoxutyun
router.post('/editData',[
  check('name').notEmpty().withMessage('name dashty datark e lracreq').isAlpha().withMessage(' name-y petq e menak  tar lini krkin pordzeq'),
  check('surname').notEmpty().withMessage(' surname dashty datark e lracreq').isAlpha().withMessage(' surname-y petq e menak  tar lini krkin pordzeq'),
  check('email').notEmpty().withMessage(' email dashty lracreq datark e').isEmail().withMessage(' emaili forman sxal eiq lracrel krkin pordzeq'),
  check('age').notEmpty().withMessage('age dashty datark e lracreq').isNumeric().withMessage(' age-y petq e menak tiv lini krkin pordzeq'),
  check('email').custom( async (value,{req})  => {
    var user=await userModel.findEmail({email:value,id:req.session.userId})
    if(user.length!=0){
      return Promise.reject()

    }
     
 }).withMessage('Emaily zbaxvats e')

 ],UserController.editdata)

 router.get('/photos',UserController.photos)

 router.post('/addPhoto',upload.single('photo'),UserController.addPhoto)

 router.post('/deletePhoto',UserController.deletePhoto)
 
 router.post('/changeAvatar',UserController.changeAvatar)

 router.post('/requestCount',UserController.requestCount)

module.exports = router