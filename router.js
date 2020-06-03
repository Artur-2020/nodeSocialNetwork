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

router.get('/photos',UserController.photos)

router.get('/edit',UserController.edit)

router.get('/friends',UserController.friend)

router.get('/myPosts',UserController.showPosts)

router.get('/user/:id',UserController.userPage)
// ynkeroj ynkernerin tesneli hamar
router.get('/userFriends/:id',UserController.userFriends)

router.get('/userPhotos/:id',UserController.userPhotos)

router.get('/userPosts/:id',UserController.userPosts)



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

 router.post('/changePassword',[
  check('oldPassword').notEmpty().withMessage(' dashty datark e lracreq'),
  check('newPassword').notEmpty().withMessage(' dashty datark e lracreq'),
  check('oldPassword').custom( async (value,{req})   => {
    var user=await userModel.find({id:req.session.userId})
   let flag =  (bcrypt.compareSync(value, user[0].password ))
   if(!flag){
    return Promise.reject()
  }
   
     
 }).withMessage('Gaxtnabary naxkini het chi hamapatasxanum'),
 
check('confirm_password').notEmpty().withMessage('fill in the confirm password field blank').custom((value, {req}) => (value === req.body.newPassword)).withMessage('The password does not match'),
 
     
 ],UserController.changePassword)




 router.post('/addPhoto',upload.single('photo'),UserController.addPhoto)

 router.post('/deletePhoto',UserController.deletePhoto)
 
 router.post('/changeAvatar',UserController.changeAvatar)

 router.post('/requestCount',UserController.requestCount)

 router.post('/showRequests',UserController.showRequests)

 router.post('/acceptRequest',UserController.acceptRequest)

 router.post('/deleteRequest',UserController.deleteRequest)

 router.post('/deleteFriend',UserController.deleteFriend)

 router.post('/search',UserController.search)

 router.post('/sendRequest',UserController.sendRequest)

 router.post('/cancelRequest',UserController.cancelRequest)

 router.post('/deletFriend',UserController.deletFriend)

router.post('/acceptSearchReq',UserController.acceptSearchReq)

router.post('/delSearchReq',UserController.delSearchReq)

router.post('/publicPosts',upload.single('image'),UserController.publicPost)

router.post('/addComment',UserController.addComment)

router.post('/showPostComments',UserController.showPostComments)

router.post('/like',UserController.like)

router.post('/disLike',UserController.like)

router.post('/getLikers',UserController.getLikers)

module.exports = router