if(document.getElementById('vochYnker')){
   document.getElementById('vochYnker').addEventListener('click',sendRequest)
}

if(document.getElementById('cancelReq')){
   document.getElementById('cancelReq').addEventListener('click',cancelRequest)
}

if(document.getElementById('ynkerner')){
   document.getElementById('ynkerner').addEventListener('click',deleteFriend)
}
if(document.getElementById('acceptReq')){
   document.getElementById('acceptReq').addEventListener('click',acceptSearchReq)
}
if(document.getElementById('ignoreReq')){
   document.getElementById('ignoreReq').addEventListener('click',delReq)
}

function sendRequest(){
   let parent = this.parentElement
   let id = this.dataset.id
   axios.post('/sendRequest',{id}).
   then((result)=>{
       console.log(result.data)
       this.remove()
       let btn = document.createElement('button')
       btn.dataset.id=id
       btn.setAttribute('id','cancelReq')
       btn.innerHTML ='Cancel Request'
       parent.append(btn)
      document.getElementById('cancelReq').addEventListener('click',cancelRequest)
       
   }).
   catch((error)=>{
       console.log(error)
   })
}

function cancelRequest(){
   let id = this.dataset.id
   let parent = this.parentElement
   axios.post('/cancelRequest',{id}).
   then((result)=>{
       console.log(result.data)
       this.remove()
       let btn = document.createElement('button')
       btn.dataset.id=id
       btn.setAttribute('id','vochYnker')
       btn.innerHTML ='Add'
       parent.append(btn)
       
       document.getElementById('vochYnker').addEventListener('click',sendRequest)
      
       
   }).
   catch((error)=>{
       console.log(error)
   })
}

function deleteFriend(){
   let id=this.dataset.id
   let parent = this.parentElement
   
    
   axios.post('/deletFriend',{id}).
   then((result)=>{
       console.log(result.data)
       this.remove()
       let btn = document.createElement('button')
       btn.dataset.id=id
       btn.setAttribute('id','vochYnker')
       btn.innerHTML ='Add'
       parent.append(btn)
       document.getElementById('vochYnker').addEventListener('click',sendRequest)
      
       
   }).
   catch((error)=>{
       console.log(error)
   })
}

function acceptSearchReq(){
   let parent = this.parentElement.parentElement
   let id = this.dataset.id
   axios.post('/acceptUser',{id}).
   then((result)=>{
       console.log(result.data)
       this.parentElement.remove()
       let btn = document.createElement('button')
       btn.dataset.id=id
       btn.setAttribute('id','ynkerner')
       btn.innerHTML ='Delete'
       parent.append(btn)
       document.getElementById('requestCount').innerHTML--
       document.getElementById('ynkerner').addEventListener('click',deleteFriend)
       
   }).
   catch((error)=>{
       console.log(error)
   })
}
function delReq(){
   let parent = this.parentElement.parentElement
   let id = this.dataset.id
   axios.post('/delSearchReq',{id}).
   then((result)=>{
       console.log(result.data)
       this.parentElement.remove()
       let btn = document.createElement('button')
       btn.dataset.id=id
       btn.setAttribute('id','vochYnker')
       btn.innerHTML ='Add'
       parent.append(btn)
       document.getElementById('vochYnker').addEventListener('click',sendRequest)
       document.getElementById('requestCount').innerHTML--
       
       
       
       
   }).
   catch((error)=>{
       console.log(error)
   })
}

let showbtns = document.querySelectorAll('.showComments')

for(let i=0;i<showbtns.length;i++){
   showbtns[i].addEventListener('click',showComments)
}
let disLikeBtns =  document.querySelectorAll('.disLike')

for(let i = 0;i<disLikeBtns.length;i++){
   disLikeBtns[i].addEventListener('click',disLike)
}

let likers = document.querySelectorAll('.likeCount')

      for(let i = 0;i<likers.length;i++){
         likers[i].addEventListener('click',getLikers)
      }   

function showComments(){
   this.parentElement.parentElement.querySelector('.commentNow').style = `display:none;`

   let parent = this.parentElement
   let id = this.getAttribute('data-id')
   let comments = this.parentElement.parentElement.querySelector('.commentMain')
   comments.style = `display:block;`
   this.remove()
   let btn = document.createElement('button')
   btn.innerHTML='Close'
   btn.setAttribute('class','closeComments')
   parent.append(btn)

   axios.post('/showPostComments',{id}).
      then((result)=>{
        
         for(let i = 0;i<result.data.length;i++){
            let commentAuthor = document.createElement('div')
               commentAuthor.setAttribute('class','commentAuthor')
            let image = document.createElement('img')
               image.setAttribute('src',`../${result.data[i].image}`) 
               image.setAttribute('class','commentAuthorImage')  
            let commentText = document.createElement('p')
               commentText.innerHTML= result.data[i].comment
            let name = document.createElement('p')
               name.setAttribute('class','commentAuthorName')
               name.innerHTML = result.data[i].name   
            let surname = document.createElement('p')
               surname.setAttribute('class','commentAuthorSurname')
               surname.innerHTML = result.data[i].surname 

            commentAuthor.append(image,name,surname)
            comments.append(commentAuthor,commentText)   

         }
         let closebtns=document.querySelectorAll('.closeComments')
            for(let i=0;i<closebtns.length;i++){
               closebtns[i].addEventListener('click',closComments)
            }
      }).
      catch((error)=>{
         console.log(error)
         
      })      
}

function closComments(){
   let id = this.parentElement.getAttribute('data-id')
   let parent = this.parentElement
   let comments = this.parentElement.parentElement.querySelector('.commentMain')
   comments.style = `display:none;`
   this.remove()
   let btn = document.createElement('button')
   btn.innerHTML=`<i class="lni lni-bubble"></i> Comment`
   btn.setAttribute('class','showComments')
   btn.setAttribute('data-id',id)
   parent.append(btn)
   let showbtns = document.querySelectorAll('.showComments')

   for(let i=0;i<showbtns.length;i++){
      showbtns[i].addEventListener('click',showComments)
   }
}

let addBtns = document.querySelectorAll('.addComment')

for(let i=0;i<addBtns.length;i++){
   addBtns[i].addEventListener('click',addComment)
}

function addComment(){
   let src = document.getElementById('userImage').getAttribute('src')
   let postId=this.getAttribute('data-id')
   let text = this.parentElement.querySelector('.comText').value
   // console.log(text)
   axios.post('/addComment',{text,post_id:postId}).
   then((result)=>{
      console.log(result.data)

     if(text.length>0){
      this.parentElement.querySelector('.comText').value=''

      let commentNow = this.parentElement.parentElement.querySelector('.commentNow')
          commentNow.innerHTML=''
          commentNow.style = `display:block;`
      let div = document.createElement('div')
         div.setAttribute('class','comAuthor')     
      let img = document.createElement('img')
          img.setAttribute('src',`../${src}`)
      let name = document.createElement('p')
         name.innerHTML=document.getElementById('userName').innerHTML   
      let surname = document.createElement('p')
         surname.innerHTML=document.getElementById('userSurname').innerHTML
      div.append(img,name,surname)   
      commentNow.append(div,text)      
              
     }
     let showbtns = document.querySelectorAll('.showComments')

for(let i=0;i<showbtns.length;i++){
   showbtns[i].addEventListener('click',showComments)
}
   
      
   }).
   catch((error)=>{
      console.log(error)
   })
}

      let likeBtns =  document.querySelectorAll('.like')

      for(let i = 0;i<likeBtns.length;i++){
         likeBtns[i].addEventListener('click',like)
      }



function like(){
   let likeCount=this.parentElement.querySelector('.likeCount').innerHTML
   let parent = this.parentElement
   let id = this.parentElement.getAttribute('data-id')

   axios.post('/like',{postId:id}).
   then((result)=>{
      this.parentElement.querySelector('.likeCount').remove()
      likeCount++
      this.remove()
      console.log(result.data)
      let btn = document.createElement('button')
      btn.innerHTML=`<i class="lni lni-heart"></i> Like`
      btn.setAttribute('class','disLike')
      let span = document.createElement('span')
      span.setAttribute('class','likeCount')
      span.setAttribute('data-toggle','modal')
      span.setAttribute('data-target','#getLikersModal')
      span.innerHTML=likeCount
      // btn.dataset.id=
      parent.prepend(btn,span)
      let disLikeBtns =  document.querySelectorAll('.disLike')

      for(let i = 0;i<disLikeBtns.length;i++){
         disLikeBtns[i].addEventListener('click',disLike)
      }
      let likers = document.querySelectorAll('.likeCount')

      for(let i = 0;i<likers.length;i++){
         likers[i].addEventListener('click',getLikers)
      }   
   }).
   catch((error)=>{
      console.log(error)
   })
   

}
function disLike(){
  let likeCount = this.parentElement.querySelector('.likeCount').innerHTML
   let parent = this.parentElement
   let id = this.parentElement.getAttribute('data-id')
   axios.post('/disLike',{postId:id}).
   then((result)=>{
   this.parentElement.querySelector('.likeCount').remove()
   likeCount--
   this.remove()
   
   console.log(result.data)
   let btn = document.createElement('button')
   btn.innerHTML=` <i class="lni lni-heart"></i>Like`
   btn.setAttribute('class','like')
   let span = document.createElement('span')
   span.setAttribute('class','likeCount')
   span.setAttribute('data-toggle','modal')
   span.setAttribute('data-target','#getLikersModal')
   span.innerHTML=likeCount
   parent.prepend(btn,span)
   // console.log(id)
   let likeBtns =  document.querySelectorAll('.like')
      for(let i = 0;i<likeBtns.length;i++){
         likeBtns[i].addEventListener('click',like)
      }
   let likers = document.querySelectorAll('.likeCount')

      for(let i = 0;i<likers.length;i++){
         likers[i].addEventListener('click',getLikers)
      }   
   }).
   catch((error)=>{
      console.log(error)
   })

}


 function getLikers(){
    let id = this.parentElement.getAttribute('data-id')
    let body = document.getElementById('likersBody')
    axios.post('/getLikers',{id}).
    then((result)=>{
      let likers = result.data
       body.innerHTML=''
       for(let i=0;i<likers.length;i++){
         let div = document.createElement('div')
         let img =  document.createElement('img')
            img.setAttribute('class','likerImg')
            img.setAttribute('src',`../${likers[i].image}`)
         let name = document.createElement('p')
             name.innerHTML= likers[i].name
         let surname = document.createElement('p')
            surname.innerHTML = likers[i].surname
         div.append(img,name,surname)
         body.append(div)   
       }
    }).
    catch((error)=>{
       console.log(error)
    })
 }  