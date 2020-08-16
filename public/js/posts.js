let delPosts = document.querySelectorAll('.delPost')

for(let i = 0;i<delPosts.length;i++){
   delPosts[i].addEventListener('click',delPost)
}

function delPost(){
   let id = this.getAttribute('data-id')
   axios.post('/delPost',{id}).
   then((result)=>{
      console.log(result.data)
      this.parentElement.remove()
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
      
         let userID = document.querySelector('#userId').innerHTML 
         
         let parent = this.parentElement
         let id = this.getAttribute('data-id')
         let comments = this.parentElement.parentElement.querySelector('.commentMain')
         comments.style = `display:block;`
         comments.innerHTML=''
         this.remove()
         let btn = document.createElement('button')
         btn.innerHTML='Close'
         btn.setAttribute('class','closeComments')
         parent.append(btn)
      
         axios.post('/showPostComments',{id}).
            then((result)=>{
               console.log('comments',result.data)
              
               for(let i = 0;i<result.data.length;i++){
               let comment = document.createElement('div')
               comment.setAttribute('class','comment')
      
                  let commentAuthor = document.createElement('div')
                     commentAuthor.setAttribute('class','commentAuthor')
                  let image = document.createElement('img')
                     image.setAttribute('src',result.data[i].image) 
                     image.setAttribute('class','commentAuthorImage')  
                  let commentText = document.createElement('p')
                     
                     commentText.innerHTML= result.data[i].comment
                  let name = document.createElement('p')
                     name.setAttribute('class','commentAuthorName')
                     name.innerHTML = result.data[i].name   
                  let surname = document.createElement('p')
                     surname.setAttribute('class','commentAuthorSurname')
                     surname.innerHTML = result.data[i].surname 
                     
                 
      
                     if(result.data[i]['user_id']==userID){
                         
                        let delBtn = document.createElement('button')
                        delBtn.innerHTML= `<i class="lni lni-close"></i>`
                        delBtn.setAttribute('class','deleteCom')
                        delBtn.dataset.id = result.data[i]['id']
      
                         let delComBtns = document.querySelectorAll('.deleteCom')
      
                         for(let i = 0 ;i<delComBtns.length;i++){
                            delComBtns[i].addEventListener('click',deleteComment)
                         }
      
                        commentAuthor.append(image,name,surname,delBtn)
                        comment.append(commentAuthor,commentText)  
                        comments.append(comment)
      
      
                     }
                     else{
                        
                        
                        commentAuthor.append(image,name,surname)
                        comment.append(commentAuthor,commentText)
                        comments.append(comment)  
                     }
                    
      
       
      
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
      
      function deleteComment(){
         let parent  = this.parentElement.parentElement
         let id = this.getAttribute('data-id')
         console.log(parent,id)
         parent.remove()
         axios.post('/deleteComment',{id}).
         then((result)=>{
            console.log(result.data)
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