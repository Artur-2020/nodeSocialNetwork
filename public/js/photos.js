let delPhoto = document.querySelectorAll('#del')

for(let i = 0; i < delPhoto.length; i++ ){
   delPhoto[i].addEventListener('click',deletePhoto)
}

let setAvatar = document.querySelectorAll('#set')

for(let i = 0;i < setAvatar.length;i++){
   setAvatar[i].addEventListener('click',changeAvatar)
}



function deletePhoto(){
   let id = this.dataset.id
   axios.post('/deletePhoto',{id}).
   then((result)=>{
      
      console.log(result.data)
      this.parentElement.remove()
   }).
   catch((error)=>{
      console.log(error)
   })

}

function changeAvatar(){
   let child=this.parentElement.children
   let name = child[0].getAttribute('src')
   
   axios.post('/changeAvatar',{name}).
   then((result)=>{
      console.log(result.data)

   }).
   catch((error)=>{
      console.log(error)
   })
}
