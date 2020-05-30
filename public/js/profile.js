let showbtns = document.querySelectorAll('.showComments')

for(let i=0;i<showbtns.length;i++){
   showbtns[i].addEventListener('click',showComments)
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
         console.log(result.data)
         // comments.innerHTML=''
         for(let i = 0;i<result.data.length;i++){
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

            commentAuthor.append(image,name,surname)
            comments.append(commentAuthor,commentText)   


         }

      }).
      catch((error)=>{
         console.log(error)
      })

      let closebtns=document.querySelectorAll('.closeComments')
         for(let i=0;i<closebtns.length;i++){
            closebtns[i].addEventListener('click',closComments)
         }
         
   

      
}

function closComments(){

   let parent = this.parentElement
   let comments = this.parentElement.parentElement.querySelector('.commentMain')
   comments.style = `display:none;`
   this.remove()
   let btn = document.createElement('button')
   btn.innerHTML='Comments'
   btn.setAttribute('class','showComments')
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

      this.parentElement.querySelector('.comText').value=''

      let commentNow = this.parentElement.parentElement.querySelector('.commentNow')
          commentNow.innerHTML=''
          commentNow.style = `display:block;`
      let div = document.createElement('div')
         div.setAttribute('class','comAuthor')     
      let img = document.createElement('img')
          img.setAttribute('src',src)
      let name = document.createElement('p')
         name.innerHTML=document.getElementById('userName').innerHTML   
      let surname = document.createElement('p')
         surname.innerHTML=document.getElementById('userSurname').innerHTML
      div.append(img,name,surname)   
      commentNow.append(div,text)      
              

   }).
   catch((error)=>{
      console.log(error)
   })
}
