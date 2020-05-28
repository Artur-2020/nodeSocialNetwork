let delBtns = document.querySelectorAll('.delFriend')

for(let i=0;i<delBtns.length;i++){
   delBtns[i].addEventListener('click',deleteFriend)
}

function deleteFriend(){
   let id = this.getAttribute('data-id')
  
   axios.post('/deleteFriend',{id}).
   then((result)=>{
      console.log(result)
      this.parentElement.remove()
   }).catch((error)=>{
      console.log(error)
   })
}